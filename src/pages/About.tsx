// src/pages/About.tsx
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Lock,
  Brain,
  Zap,
  Mail,
  CheckCircle2
} from 'lucide-react';

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Privacy First",
      description: "Your emotional data is encrypted, GDPR/KVKK compliant, and never sold.",
      color: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Accessible to All",
      description: "Free tier forever + affordable premium. Mental health for everyone.",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-600" />,
      title: "AI with Empathy",
      description: "GPT-4o-mini powered conversations that understand your emotions.",
      color: "bg-pink-50 dark:bg-pink-900/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Data-Driven Insights",
      description: "Visualize patterns, track trends, understand your emotional journey.",
      color: "bg-green-50 dark:bg-green-900/20"
    }
  ];

  const features = [
    "End-to-end encryption",
    "GDPR & KVKK compliant",
    "7 languages supported",
    "No data mining",
    "AI-powered insights",
    "Partner sync (EMOTICE MIRROR)",
    "Export your data anytime",
    "Professional support"
  ];

  const team = [
    {
      role: "Engineers",
      icon: "🧑‍💻",
      description: "Building secure, scalable technology"
    },
    {
      role: "Designers",
      icon: "🎨",
      description: "Creating beautiful experiences"
    },
    {
      role: "AI Specialists",
      icon: "🧠",
      description: "Fine-tuning empathetic AI"
    },
    {
      role: "Mental Health Advocates",
      icon: "💙",
      description: "Ensuring ethical design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            🧠 About EMOTICE
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Your AI-Powered
            <br />
            Emotional Wellness Companion
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're building a platform that helps people understand their emotions, 
            track their mental well-being, and develop emotional intelligence through 
            AI-powered insights.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              Founded in 2024
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              10K+ Active Users
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              7 Languages
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              4.9/5 Rating
            </span>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Making Emotional Wellness Accessible to Everyone
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In 2024, mental health awareness is at an all-time high, yet many people 
                struggle to understand their emotional patterns, find affordable support, 
                and track their mood consistently.
              </p>
              <p className="text-lg text-muted-foreground">
                EMOTICE was born to solve these problems. We're not trying to replace 
                therapists – we're creating a complementary tool that empowers people 
                to take control of their emotional wellness journey.
              </p>
            </div>

            <Card className="p-8 shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <h3 className="text-2xl font-bold mb-6">What Makes Us Different?</h3>
              <div className="space-y-4">
                {[
                  { label: "AI Support", value: "GPT-4o-mini powered" },
                  { label: "Privacy", value: "Encrypted & GDPR compliant" },
                  { label: "Pricing", value: "Free tier + $9.99 premium" },
                  { label: "Languages", value: "7 languages supported" },
                  { label: "Medical", value: "Clear transparency" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="font-medium">{item.label}</span>
                    <Badge variant="secondary">{item.value}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Our Values
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What We Believe In</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card 
                key={idx} 
                className={`p-6 ${value.color} border-none hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive features for your emotional wellness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
              Our Team
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Built by Passionate Experts</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nechh Lab Robotics – A remote-first company based in Istanbul, Turkey, 
              serving users globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card 
                key={idx}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="text-lg font-bold mb-2">{member.role}</h3>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Commitment to You</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Never sell your data – Your emotions are not a product",
              "Be transparent – No hidden fees or misleading claims",
              "Respect your rights – Full GDPR/KVKK compliance",
              "Improve constantly – Your feedback shapes our roadmap",
              "Stay affordable – Mental health tools should be accessible",
              "Provide support – We're here to help you succeed"
            ].map((commitment, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <p className="text-lg">{commitment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
            Get in Touch
          </Badge>
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have questions or want to partner with us? We'd love to hear from you!
          </p>

          <Card className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-600" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email us</p>
                  <a 
                    href="mailto:emotice2025@gmail.com" 
                    className="text-lg font-semibold text-purple-600 hover:underline"
                  >
                    emotice2025@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a 
                    href="https://emotice.com" 
                    className="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    emotice.com
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* MEDICAL DISCLAIMER */}
          <Card className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <h3 className="font-bold text-lg mb-2 flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              Important Notice
            </h3>
            <p className="text-sm text-muted-foreground">
              EMOTICE is NOT a medical device. If you're experiencing a mental health crisis, 
              please contact: 🇺🇸 USA: 988 | 🇹🇷 Turkey: 182 | 🇪🇺 EU: 112
            </p>
          </Card>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="py-8 px-4 text-center text-muted-foreground">
        <p className="text-sm">
          Thank you for trusting EMOTICE with your emotional wellness journey. 
          <br />
          Together, we're building a healthier, more emotionally intelligent world. 💙
        </p>
        <p className="text-xs mt-4">
          – The EMOTICE Team
        </p>
      </section>
    </div>
  );
};

export default About;
