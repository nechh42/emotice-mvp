import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Heart, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap, 
  Check,
  ArrowRight,
  Star,
  Brain,
  MessageCircle,
  BarChart3,
  Lock,
  Globe,
  Smartphone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* 🎯 HERO SECTION - Modern & Impactful */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-900">{t('home.hero.badge')}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                {t('home.hero.title.line1')}{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  {t('home.hero.title.emotions')}
                </span>
                <br />
                {t('home.hero.title.line2')}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                {t('home.hero.subtitle.part1')}{" "}
                <span className="font-semibold text-purple-600">{t('home.hero.subtitle.emotice')}</span>
                {t('home.hero.subtitle.part2')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 shadow-lg text-white px-8">
                  <Link to="/auth">
                    {t('home.hero.cta.trial')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link to="/dashboard">{t('home.hero.cta.demo')}</Link>
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{t('home.hero.benefits.nocard')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{t('home.hero.benefits.freeplan')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span>{t('home.hero.benefits.cancel')}</span>
                </div>
              </div>
            </div>

            {/* Right: Hero Image/Video Placeholder */}
            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                {/* Placeholder for demo video/screenshot */}
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Smartphone className="w-20 h-20 mx-auto mb-4 opacity-80" />
                    <p className="text-2xl font-bold mb-2">{t('home.hero.demo.title')}</p>
                    <p className="text-white/80">{t('home.hero.demo.subtitle')}</p>
                  </div>
                </div>
                {/* Floating badges */}
                <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-sm">{t('home.hero.rating')}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white rounded-full px-4 py-2 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span className="font-bold text-sm">{t('home.hero.users')}</span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 📊 STATS SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center text-white">
              <p className="text-4xl md:text-5xl font-bold mb-2">{t('home.stats.users')}</p>
              <p className="text-white/80 text-sm">{t('home.stats.usersLabel')}</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl md:text-5xl font-bold mb-2">{t('home.stats.entries')}</p>
              <p className="text-white/80 text-sm">{t('home.stats.entriesLabel')}</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl md:text-5xl font-bold mb-2">{t('home.stats.rating')}</p>
              <p className="text-white/80 text-sm">{t('home.stats.ratingLabel')}</p>
            </div>
            <div className="text-center text-white">
              <p className="text-4xl md:text-5xl font-bold mb-2">{t('home.stats.support')}</p>
              <p className="text-white/80 text-sm">{t('home.stats.supportLabel')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ UNIQUE FEATURE HIGHLIGHT - EMOTICE MIRROR */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4">
              <Zap className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">{t('home.mirror.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('home.mirror.title')}{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{t('home.mirror.emotice')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.mirror.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home.mirror.features.partner.title')}</h3>
                    <p className="text-gray-600">{t('home.mirror.features.partner.desc')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-pink-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home.mirror.features.pattern.title')}</h3>
                    <p className="text-gray-600">{t('home.mirror.features.pattern.desc')}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{t('home.mirror.features.insights.title')}</h3>
                    <p className="text-gray-600">{t('home.mirror.features.insights.desc')}</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <Users className="w-32 h-32 mx-auto mb-4 text-purple-600" />
                  <p className="text-2xl font-bold text-gray-900">{t('home.mirror.visual.title')}</p>
                  <p className="text-gray-600 mt-2">{t('home.mirror.visual.subtitle')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎨 FEATURES GRID */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('home.features.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-purple-600">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.mood.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.mood.desc')}</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-pink-600">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.ai.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.ai.desc')}</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-blue-600">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.analytics.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.analytics.desc')}</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.privacy.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.privacy.desc')}</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.language.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.language.desc')}</p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('home.features.grid.gdpr.title')}</h3>
              <p className="text-gray-600">{t('home.features.grid.gdpr.desc')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 💰 PRICING SECTION - Improved */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('home.pricing.title')}</h2>
            <p className="text-xl text-gray-600">{t('home.pricing.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 hover:shadow-2xl transition-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{t('home.pricing.free.title')}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{t('home.pricing.free.price')}</span>
                  <span className="text-gray-600">{t('home.pricing.free.period')}</span>
                </div>
                <p className="text-gray-600">{t('home.pricing.free.description')}</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.free.features.mood')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.free.features.ai')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.free.features.insights')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.free.features.partner')}</span>
                </li>
              </ul>

              <Button asChild variant="outline" size="lg" className="w-full">
                <Link to="/auth">{t('home.pricing.free.cta')}</Link>
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 border-2 border-purple-600 relative overflow-hidden hover:shadow-2xl transition-shadow bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                {t('home.pricing.premium.badge')}
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{t('home.pricing.premium.title')}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{t('home.pricing.premium.price')}</span>
                  <span className="text-gray-600">{t('home.pricing.premium.period')}</span>
                </div>
                <p className="text-gray-600">{t('home.pricing.premium.description')}</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{t('home.pricing.premium.features.included')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.premium.features.mood')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.premium.features.ai')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.premium.features.pattern')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.premium.features.export')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span>{t('home.pricing.premium.features.support')}</span>
                </li>
              </ul>

              <Button asChild size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white">
                <Link to="/auth">{t('home.pricing.premium.cta')}</Link>
              </Button>

              <p className="text-center text-sm text-gray-600 mt-4">
                {t('home.pricing.premium.note')}
              </p>
            </Card>
          </div>

          {/* Premium Options */}
          <div className="mt-12 p-8 bg-gray-50 rounded-3xl max-w-3xl mx-auto">
            <h4 className="font-bold text-xl mb-6 text-center">{t('home.pricing.options.title')}</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-6 bg-white rounded-2xl border-2">
                <p className="font-bold mb-2">{t('home.pricing.options.1month.title')}</p>
                <p className="text-3xl font-bold text-purple-600 mb-1">{t('home.pricing.options.1month.price')}</p>
                <p className="text-sm text-gray-600">{t('home.pricing.options.1month.note')}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border-2 border-green-400 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {t('home.pricing.options.3months.save')}
                </div>
                <p className="font-bold mb-2">{t('home.pricing.options.3months.title')}</p>
                <p className="text-3xl font-bold text-purple-600 mb-1">{t('home.pricing.options.3months.price')}</p>
                <p className="text-sm text-gray-600">{t('home.pricing.options.3months.note')}</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl border-2 border-green-500 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {t('home.pricing.options.6months.save')}
                </div>
                <p className="font-bold mb-2">{t('home.pricing.options.6months.title')}</p>
                <p className="text-3xl font-bold text-purple-600 mb-1">{t('home.pricing.options.6months.price')}</p>
                <p className="text-sm text-gray-600">{t('home.pricing.options.6months.note')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎉 CTA SECTION */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
              <Link to="/auth">
                {t('home.cta.buttons.trial')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8">
              <Link to="/dashboard">{t('home.cta.buttons.demo')}</Link>
            </Button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            {t('home.cta.benefits')}
          </p>
        </div>
      </section>

      {/* 📝 FOOTER - Improved */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600" />
                <span className="text-xl font-bold">EMOTICE</span>
              </div>
              <p className="text-gray-400 text-sm">
                {t('home.footer.description')}
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t('home.footer.product.title')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">{t('home.footer.product.features')}</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">{t('home.footer.product.pricing')}</a></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">{t('home.footer.product.demo')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t('home.footer.legal.title')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/legal/terms" className="hover:text-white transition-colors">{t('home.footer.legal.terms')}</Link></li>
                <li><Link to="/legal/privacy" className="hover:text-white transition-colors">{t('home.footer.legal.privacy')}</Link></li>
                <li><Link to="/legal/medical" className="hover:text-white transition-colors">{t('home.footer.legal.medical')}</Link></li>
                <li><Link to="/legal/cookie" className="hover:text-white transition-colors">{t('home.footer.legal.cookie')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">{t('home.footer.support.title')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="mailto:support@emotice.com" className="hover:text-white transition-colors">{t('home.footer.support.contact')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('home.footer.support.help')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('home.footer.support.faq')}</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              {t('home.footer.copyright')}
            </p>
            <div className="flex gap-4">
              <Shield className="w-5 h-5 text-gray-400" />
              <span className="text-gray-400 text-sm">{t('home.footer.gdpr')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;