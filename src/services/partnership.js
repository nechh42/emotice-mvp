// EMOTICE MIRROR - Partnership Service
import { supabase } from './supabase.js';

// Partner daveti oluştur
export const createPartnershipInvite = async (fromUserId, toEmail) => {
  try {
    const { data, error } = await supabase
      .from('partnerships')
      .insert({
        user1_id: fromUserId,
        user2_email: toEmail,
        status: 'pending'
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Partnership invite error:', error);
    throw error;
  }
};

// Partner davetlerini getir
export const getPartnershipInvites = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('partnerships')
      .select('*')
      .or(`user1_id.eq.${userId},user2_id.eq.${userId}`)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Get partnerships error:', error);
    throw error;
  }
};

// Daveti kabul et
export const acceptPartnership = async (partnershipId, acceptingUserId) => {
  try {
    const { data, error } = await supabase
      .from('partnerships')
      .update({ 
        status: 'active',
        user2_id: acceptingUserId
      })
      .eq('id', partnershipId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Accept partnership error:', error);
    throw error;
  }
};

// Partner mood verilerini getir (AI analiz için)
export const getPartnerMoodData = async (userId, partnerId) => {
  try {
    // Her iki kullanıcının da son 7 günlük mood verileri
    const { data, error } = await supabase
      .from('mood_entries')
      .select('*')
      .in('user_id', [userId, partnerId])
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Get partner mood data error:', error);
    throw error;
  }
};

// AI pattern detection (basit versiyon)
export const analyzeMoodPatterns = (userMoods, partnerMoods) => {
  // Basit pattern analizi - sonra GPT-4o-mini ile geliştireceğiz
  const patterns = {
    sameMoodDays: 0,
    oppositeMoodDays: 0,
    userAvg: 0,
    partnerAvg: 0
  };

  // Burada basit pattern analizi yapılacak
  // Şimdilik placeholder - HAFTA 5'te GPT entegrasyonu ile dolduracağız
  
  return patterns;
};