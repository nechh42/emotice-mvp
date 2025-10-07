import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Heart, TrendingUp, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-calm">
      <Navbar />

      <div className="container mx-auto px-4 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-6" />
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('home.hero.title')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-glow">
              <Link to="/auth">{t('home.cta.trial')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/dashboard">{t('home.cta.demo')}</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>{t('home.hero.privacy')}</span>
          </div>
        </div>
      </div>

      <div id="features" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-shadow animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Heart className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.features.mood.title')}</h3>
            <p className="text-muted-foreground">{t('home.features.mood.desc')}</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-shadow animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.features.ai.title')}</h3>
            <p className="text-muted-foreground">{t('home.features.ai.desc')}</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-shadow animate-fade-in">
            <div className="w-14 h-14 rounded-full bg-mood-good/10 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-mood-good" />
            </div>
            <h3 className="text-xl font-semibold mb-3">{t('home.features.insights.title')}</h3>
            <p className="text-muted-foreground">{t('home.features.insights.desc')}</p>
          </div>
        </div>
      </div>

 <div id="pricing" className="container mx-auto px-4 py-16">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
    <p className="text-muted-foreground mb-8">Start free, upgrade when you are ready</p>
    
    <div className="grid md:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl bg-card border-2 border-border shadow-soft">
        <h3 className="text-2xl font-bold mb-2">Free</h3>
        <p className="text-4xl font-bold mb-4">$0</p>
        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-start gap-2">
            <span className="text-mood-good">✓</span>
            <span>Daily mood tracking</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-mood-good">✓</span>
            <span>15 AI messages per day</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-mood-good">✓</span>
            <span>Basic insights</span>
          </li>
        </ul>
        <Button asChild variant="outline" className="w-full">
          <Link to="/auth">Get Started</Link>
        </Button>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-primary text-white border-2 border-primary shadow-glow relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">
          POPULAR
        </div>
        <h3 className="text-2xl font-bold mb-2">Premium</h3>
        <p className="text-4xl font-bold mb-4">$7.99<span className="text-lg">/mo</span></p>
        <ul className="space-y-3 text-left mb-6">
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Unlimited mood tracking</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>100 AI messages per day</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Advanced analytics</span>
          </li>
          <li className="flex items-start gap-2">
            <span>✓</span>
            <span>Export data</span>
          </li>
        </ul>
        <Button asChild className="w-full bg-white text-primary hover:bg-white/90">
          <Link to="/auth">Start Free Trial</Link>
        </Button>
      </div>
    </div>

    {/* Premium Options */}
    <div className="mt-8 p-6 bg-secondary rounded-2xl">
      <h4 className="font-semibold mb-4 text-center">Premium Plan Options</h4>
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="text-center p-3 bg-white rounded-lg">
          <p className="font-bold">1 Month</p>
          <p className="text-lg font-bold text-primary">$7.99</p>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border-2 border-green-200">
          <p className="font-bold">3 Months</p>
          <p className="text-lg font-bold text-primary">$20.99</p>
          <p className="text-xs text-green-600">12% savings</p>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border-2 border-green-300">
          <p className="font-bold">6 Months</p>
          <p className="text-lg font-bold text-primary">$38.99</p>
          <p className="text-xs text-green-600">18% savings</p>
        </div>
      </div>
    </div>
  </div>
</div>
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>{t('home.footer')}</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;