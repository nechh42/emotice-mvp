// EMOTICE MIRROR - Professional Mood Service
import { supabase } from './supabase.js';

/**
 * Mood girişi oluştur
 */
export const createMoodEntry = async (userId, moodLevel, note = '', intensity = null) => {
  try {
    if (!userId) throw new Error('Kullanıcı ID gereklidir');
    if (moodLevel < 1 || moodLevel > 5) throw new Error('Mood seviyesi 1-5 arasında olmalıdır');
    
    const moodData = {
      user_id: userId,
      mood_level: moodLevel,
      intensity: intensity || moodLevel,
      note: note.trim() || null,
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('ruh_duygu_girdileri')
      .insert(moodData)
      .select()
      .single();

    if (error) throw error;
    
    console.log('Mood entry created:', data.id);
    return data;
  } catch (error) {
    console.error('Create mood entry error:', error);
    throw new Error('Mood kaydı oluşturulamadı: ' + error.message);
  }
};

/**
 * Kullanıcının mood geçmişini getir
 */
export const getMoodHistory = async (userId, limit = 30, days = null) => {
  try {
    if (!userId) throw new Error('Kullanıcı ID gereklidir');

    let query = supabase
      .from('ruh_duygu_girdileri')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (days) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - days);
      query = query.gte('created_at', startDate.toISOString());
    }

    if (limit) {
      query = query.limit(limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Get mood history error:', error);
    throw new Error('Mood geçmişi alınamadı: ' + error.message);
  }
};

/**
 * Mood istatistiklerini hesapla
 */
export const getMoodStats = async (userId, days = 30) => {
  try {
    const moodHistory = await getMoodHistory(userId, 100, days);
    
    if (moodHistory.length === 0) {
      return {
        avgMood: 0,
        totalEntries: 0,
        currentStreak: 0,
        weeklyChange: 0,
        moodDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
        bestDay: null,
        worstDay: null
      };
    }

    const avgMood = moodHistory.reduce((sum, entry) => sum + entry.mood_level, 0) / moodHistory.length;
    const currentStreak = calculateStreak(moodHistory);
    const weeklyChange = calculateWeeklyChange(moodHistory);
    const moodDistribution = calculateMoodDistribution(moodHistory);
    const { bestDay, worstDay } = findBestWorstDays(moodHistory);

    return {
      avgMood: Math.round(avgMood * 10) / 10,
      totalEntries: moodHistory.length,
      currentStreak,
      weeklyChange: Math.round(weeklyChange * 10) / 10,
      moodDistribution,
      bestDay,
      worstDay
    };
  } catch (error) {
    console.error('Get mood stats error:', error);
    throw new Error('İstatistikler hesaplanamadı: ' + error.message);
  }
};

/**
 * Partner mood karşılaştırması
 */
export const getPartnerMoodComparison = async (userId, partnerId, days = 7) => {
  try {
    const [userMoods, partnerMoods] = await Promise.all([
      getMoodHistory(userId, 50, days),
      getMoodHistory(partnerId, 50, days)
    ]);

    const comparison = compareMoodPatterns(userMoods, partnerMoods);

    return {
      userMoods,
      partnerMoods,
      comparison,
      summary: generateComparisonSummary(comparison)
    };
  } catch (error) {
    console.error('Get partner mood comparison error:', error);
    throw new Error('Partner karşılaştırması alınamadı: ' + error.message);
  }
};

// Yardımcı fonksiyonlar
const calculateStreak = (moodHistory) => {
  if (moodHistory.length === 0) return 0;

  let streak = 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < moodHistory.length; i++) {
    const entryDate = new Date(moodHistory[i].created_at);
    entryDate.setHours(0, 0, 0, 0);
    
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() - i);
    expectedDate.setHours(0, 0, 0, 0);
    
    if (entryDate.getTime() === expectedDate.getTime()) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
};

const calculateWeeklyChange = (moodHistory) => {
  if (moodHistory.length < 14) return 0;

  const lastWeek = moodHistory.slice(0, 7);
  const prevWeek = moodHistory.slice(7, 14);
  
  const lastWeekAvg = lastWeek.reduce((sum, e) => sum + e.mood_level, 0) / lastWeek.length;
  const prevWeekAvg = prevWeek.reduce((sum, e) => sum + e.mood_level, 0) / prevWeek.length;

  return prevWeekAvg > 0 ? ((lastWeekAvg - prevWeekAvg) / prevWeekAvg) * 100 : 0;
};

const calculateMoodDistribution = (moodHistory) => {
  const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  
  moodHistory.forEach(entry => {
    distribution[entry.mood_level]++;
  });

  Object.keys(distribution).forEach(key => {
    distribution[key] = Math.round((distribution[key] / moodHistory.length) * 100);
  });

  return distribution;
};

const findBestWorstDays = (moodHistory) => {
  if (moodHistory.length === 0) return { bestDay: null, worstDay: null };

  const dayAverages = {};
  
  moodHistory.forEach(entry => {
    const date = new Date(entry.created_at).toLocaleDateString('tr-TR');
    if (!dayAverages[date]) {
      dayAverages[date] = { sum: 0, count: 0 };
    }
    dayAverages[date].sum += entry.mood_level;
    dayAverages[date].count++;
  });

  let bestDay = null;
  let worstDay = null;
  let bestAvg = -1;
  let worstAvg = 6;

  Object.entries(dayAverages).forEach(([date, data]) => {
    const avg = data.sum / data.count;
    
    if (avg > bestAvg) {
      bestAvg = avg;
      bestDay = { date, avg: Math.round(avg * 10) / 10 };
    }
    
    if (avg < worstAvg) {
      worstAvg = avg;
      worstDay = { date, avg: Math.round(avg * 10) / 10 };
    }
  });

  return { bestDay, worstDay };
};

const compareMoodPatterns = (userMoods, partnerMoods) => {
  const comparison = {
    sameMoodDays: 0,
    oppositeMoodDays: 0,
    userLeading: 0,
    partnerLeading: 0,
    correlation: 0
  };

  const userAvg = userMoods.reduce((sum, e) => sum + e.mood_level, 0) / userMoods.length || 0;
  const partnerAvg = partnerMoods.reduce((sum, e) => sum + e.mood_level, 0) / partnerMoods.length || 0;

  comparison.correlation = Math.round((1 - Math.abs(userAvg - partnerAvg) / 4) * 100);

  return comparison;
};

const generateComparisonSummary = (comparison) => {
  if (comparison.correlation > 80) {
    return 'Moodlarınız çok uyumlu! ';
  } else if (comparison.correlation > 60) {
    return 'Moodlarınız oldukça benziyor ';
  } else if (comparison.correlation > 40) {
    return 'Moodlarınız orta seviyede uyumlu ';
  } else {
    return 'Moodlarınız farklı desenler gösteriyor ';
  }
};

/**
 * Belirli bir tarihteki mood'u getir
 */
export const getMoodByDate = async (userId, date) => {
  try {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    const { data, error } = await supabase
      .from('ruh_duygu_girdileri')
      .select('*')
      .eq('user_id', userId)
      .gte('created_at', startDate.toISOString())
      .lte('created_at', endDate.toISOString())
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return data || null;
  } catch (error) {
    console.error('Get mood by date error:', error);
    throw new Error('Tarihe göre mood alınamadı: ' + error.message);
  }
};
