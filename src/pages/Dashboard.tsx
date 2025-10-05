import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Smile, Frown, Meh, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const MOODS = [
  { id: 1, emoji: "😭", labelKey: "terrible", icon: Frown, color: "mood-terrible" },
  { id: 2, emoji: "😢", labelKey: "bad", icon: Frown, color: "mood-bad" },
  { id: 3, emoji: "😐", labelKey: "okay", icon: Meh, color: "mood-okay" },
  { id: 4, emoji: "😊", labelKey: "good", icon: Smile, color: "mood-good" },
  { id: 5, emoji: "😄", labelKey: "great", icon: Smile, color: "mood-great" },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSaveMood = () => {
    if (!selectedMood) {
      toast({
        title: t('dashboard.toast.selectMood'),
        description: t('dashboard.toast.selectMoodDesc'),
        variant: "destructive",
      });
      return;
    }

    toast({
      title: t('dashboard.toast.saved'),
      description: t('dashboard.toast.savedDesc'),
    });

    setSelectedMood(null);
    setNote("");
  };

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
          >
            {t('dashboard.mood.saveButton')}
          </Button>
        </Card>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 shadow-soft animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
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
            {[
              { dateKey: "today", mood: "😊", note: "Had a great morning walk!" },
              { dateKey: "yesterday", mood: "😐", note: "Busy day at work" },
              { dateKey: "daysAgo", mood: "😄", note: "Celebrated with friends", days: 2 },
            ].map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="text-3xl">{entry.mood}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    {entry.days ? `${entry.days} ${t('dashboard.entries.daysAgo')}` : t(`dashboard.entries.${entry.dateKey}`)}
                  </p>
                  <p className="text-sm text-muted-foreground">{entry.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;
