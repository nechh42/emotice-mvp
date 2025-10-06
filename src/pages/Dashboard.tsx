import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Smile, Frown, Meh, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const MOODS = [
  { id: 1, emoji: "😭", labelKey: "terrible", icon: Frown, color: "mood-terrible", value: "terrible" },
  { id: 2, emoji: "😢", labelKey: "bad", icon: Frown, color: "mood-bad", value: "bad" },
  { id: 3, emoji: "😐", labelKey: "okay", icon: Meh, color: "mood-okay", value: "okay" },
  { id: 4, emoji: "😊", labelKey: "good", icon: Smile, color: "mood-good", value: "good" },
  { id: 5, emoji: "😄", labelKey: "great", icon: Smile, color: "mood-great", value: "great" },
];

interface MoodEntry {
  id: string;
  mood_level: number;
  intensity: number;
  note: string | null;
  created_at: string;
}

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const { toast } = useToast();
  const { t } = useTranslation();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    } else if (user) {
      fetchMoodEntries();
    }
  }, [user, loading, navigate]);

  const fetchMoodEntries = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('mood_entries')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (error) throw error;
      if (data) setMoodEntries(data);
    } catch (error) {
      console.error('Error fetching mood entries:', error);
    }
  };

  const handleSaveMood = async () => {
    if (!selectedMood) {
      toast({
        title: t('dashboard.toast.selectMood'),
        description: t('dashboard.toast.selectMoodDesc'),
        variant: "destructive",
      });
      return;
    }

    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to save mood",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('mood_entries')
        .insert({
          user_id: user.id,
          mood_level: selectedMood,
          intensity: selectedMood,
          note: note || null,
        });

      if (error) throw error;

      toast({
        title: t('dashboard.toast.saved'),
        description: t('dashboard.toast.savedDesc'),
      });

      setSelectedMood(null);
      setNote("");
      
      fetchMoodEntries();
    } catch (error: any) {
      console.error('Error saving mood:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to save mood",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getMoodEmoji = (moodLevel: number) => {
    const moodData = MOODS.find(m => m.id === moodLevel);
    return moodData?.emoji || "😐";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) return t('dashboard.entries.today');
    if (diffInHours < 48) return t('dashboard.entries.yesterday');
    const days = Math.floor(diffInHours / 24);
    return `${days} ${t('dashboard.entries.daysAgo')}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-calm flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />

      <main className="container mx-auto px-4 py-8 pt-20 max-w-4xl">
        <Card className="p-6 mb-6 shadow-soft animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {t('dashboard.mood.question')}
          </h2>

          <div className="grid grid-cols-5 gap-3 mb-6">
            {MOODS.map((mood) => (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className={`
                  flex flex-col items-center gap-2 p-4 rounded-xl 
                  transition-all duration-200 hover:scale-105
                  ${
                    selectedMood === mood.id
                      ? `bg-${mood.color}/10 ring-2 ring-${mood.color} shadow-glow`
                      : "bg-secondary hover:bg-secondary/80"
                  }
                `}
              >
                <span className="text-4xl">{mood.emoji}</span>
                <span className="text-xs font-medium text-muted-foreground">
                  {t(`dashboard.mood.labels.${mood.labelKey}`)}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">
              {t('dashboard.mood.noteLabel')}
            </label>
            <Textarea
              placeholder={t('dashboard.mood.notePlaceholder')}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="resize-none min-h-[100px]"
            />
          </div>

          <Button
            onClick={handleSaveMood}
            className="w-full bg-gradient-primary hover:opacity-90"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : t('dashboard.mood.saveButton')}
          </Button>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 shadow-soft animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{moodEntries.length}</p>
                <p className="text-xs text-muted-foreground">{t('dashboard.stats.dayStreak')}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 shadow-soft animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-mood-good/10 flex items-center justify-center">
                <Smile className="w-5 h-5 text-mood-good" />
              </div>
              <div>
                <p className="text-2xl font-bold">😊</p>
                <p className="text-xs text-muted-foreground">{t('dashboard.stats.avgMood')}</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 shadow-soft animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold">+12%</p>
                <p className="text-xs text-muted-foreground">{t('dashboard.stats.thisWeek')}</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 shadow-soft animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">{t('dashboard.entries.title')}</h3>
            <Button variant="ghost" size="sm">
              {t('dashboard.entries.viewAll')}
            </Button>
          </div>
          <div className="space-y-3">
            {moodEntries.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No mood entries yet. Start tracking your mood above!
              </p>
            ) : (
              moodEntries.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="text-3xl">{getMoodEmoji(entry.mood_level)}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      {formatDate(entry.created_at)}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {entry.note || "No note"}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;