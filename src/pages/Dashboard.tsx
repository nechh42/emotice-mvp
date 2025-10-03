import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Smile, Frown, Meh, Calendar, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar"; // ← YENİ EKLENEN

const MOODS = [
  { id: 1, emoji: "😭", label: "Terrible", icon: Frown, color: "mood-terrible" },
  { id: 2, emoji: "😢", label: "Bad", icon: Frown, color: "mood-bad" },
  { id: 3, emoji: "😐", label: "Okay", icon: Meh, color: "mood-okay" },
  { id: 4, emoji: "😊", label: "Good", icon: Smile, color: "mood-good" },
  { id: 5, emoji: "😄", label: "Great", icon: Smile, color: "mood-great" },
];

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const { toast } = useToast();

  const handleSaveMood = () => {
    if (!selectedMood) {
      toast({
        title: "Please select a mood",
        description: "Choose how you're feeling today",
        variant: "destructive",
      });
      return;
    }

    // TODO: Save to Supabase
    toast({
      title: "Mood saved!",
      description: "Your mood has been recorded for today.",
    });

    setSelectedMood(null);
    setNote("");
  };

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* YENİ: Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pt-20 max-w-4xl">
        {/* Today's Mood Card */}
        <Card className="p-6 mb-6 shadow-soft animate-fade-in">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            How are you feeling today?
          </h2>

          {/* Mood Selector */}
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
                  {mood.label}
                </span>
              </button>
            ))}
          </div>

          {/* Note Input */}
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">
              Add a note (optional)
            </label>
            <Textarea
              placeholder="What's on your mind?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="resize-none min-h-[100px]"
            />
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSaveMood}
            className="w-full bg-gradient-primary hover:opacity-90"
            size="lg"
          >
            Save Today's Mood
          </Button>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <Card className="p-4 shadow-soft animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-muted-foreground">Day Streak</p>
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
                <p className="text-xs text-muted-foreground">Avg. Mood</p>
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
                <p className="text-xs text-muted-foreground">This Week</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Entries Preview */}
        <Card className="p-6 shadow-soft animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Recent Entries</h3>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </div>
          <div className="space-y-3">
            {[
              { date: "Today", mood: "😊", note: "Had a great morning walk!" },
              { date: "Yesterday", mood: "😐", note: "Busy day at work" },
              { date: "2 days ago", mood: "😄", note: "Celebrated with friends" },
            ].map((entry, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <span className="text-3xl">{entry.mood}</span>
                <div className="flex-1">
                  <p className="text-sm font-medium">{entry.date}</p>
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