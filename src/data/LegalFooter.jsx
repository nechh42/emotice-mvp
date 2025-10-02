// src/components/legal/LegalFooter.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, FileText, Heart, Globe, Mail, MapPin } from 'lucide-react'

const LegalFooter = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">EMOTICE</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Duygusal sağlığınız için güvenilir dijital yoldaşınız. 
              Ruh halinizi takip edin, kendinizi daha iyi tanıyın.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Globe className="w-4 h-4" />
              <span>Global Mental Health Support</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Yasal Belgeler
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm"
                >
                  <Shield className="w-4 h-4" />
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link 
                  to="/medical-disclaimer" 
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm"
                >
                  <Heart className="w-4 h-4" />
                  Tıbbi Disclaimer
                </Link>
              </li>
              <li>
                <Link 
                  to="/cookies" 
                  className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm"
                >
                  <Globe className="w-4 h-4" />
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Destek & Kaynaklar
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/support" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  Müşteri Desteği
                </Link>
              </li>
              <li>
                <Link 
                  to="/help" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link 
                  to="/crisis-resources" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  Kriz Kaynakları
                </Link>
              </li>
              <li>
                <Link 
                  to="/mental-health-resources" 
                  className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                >
                  Ruh Sağlığı Kaynakları
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Emergency */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              İletişim
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <a 
                  href="mailto:support@emotice.com" 
                  className="hover:text-purple-400 transition-colors"
                >
                  support@emotice.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Shield className="w-4 h-4" />
                <a 
                  href="mailto:privacy@emotice.com" 
                  className="hover:text-purple-400 transition-colors"
                >
                  privacy@emotice.com
                </a>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-3 mt-4">
              <h5 className="text-red-300 font-semibold text-sm mb-1">
                Acil Durum
              </h5>
              <p className="text-red-200 text-xs leading-relaxed">
                Kriz anında: 911 (ABD), 112 (AB)<br />
                İntihar önleme: 988 (ABD)<br />
                Türkiye: 182 (Alo)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} EMOTICE Inc. Tüm hakları saklıdır.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Mental health tracking platform - v1.0.0
              </p>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Shield className="w-4 h-4" />
                <span>GDPR Uyumlu</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <FileText className="w-4 h-4" />
                <span>CCPA Uyumlu</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Heart className="w-4 h-4" />
                <span>HIPAA Güvenceli</span>
              </div>
            </div>
          </div>

          {/* Additional Legal Notice */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              <strong>Önemli Uyarı:</strong> EMOTICE bir tıbbi cihaz değildir ve tıbbi tavsiye sağlamaz. 
              Mental sağlık endişeleriniz için her zaman nitelikli sağlık profesyonellerine başvurun. 
              Bu uygulama yalnızca eğitim ve kişisel wellness amaçlıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LegalFooter
