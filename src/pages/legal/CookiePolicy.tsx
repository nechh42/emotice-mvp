// src/components/legal/CookiePolicy.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie } from 'lucide-react'
import Navbar from '@/components/Navbar'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <Navbar />
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Cookie className="w-8 h-8 text-purple-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Çerez Politikası</h1>
              <p className="text-gray-600 mt-1">
                Son güncelleme: 20 Ocak 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="prose max-w-none">
            <h2>Çerezler Nedir?</h2>
            <p>
              Çerezler, web sitelerinin kullanıcı deneyimini iyileştirmek için tarayıcınızda sakladığı küçük veri dosyalarıdır.
            </p>

            <h2>Kullandığımız Çerez Türleri</h2>
            
            <h3>Zorunlu Çerezler</h3>
            <p>Bu çerezler uygulamanın temel işlevleri için gereklidir ve devre dışı bırakılamaz.</p>

            <h3>Analitik Çerezler</h3>
            <p>Uygulamanın nasıl kullanıldığını anlamamıza yardımcı olan anonim istatistikler toplar.</p>

            <h3>Tercih Çerezleri</h3>
            <p>Dil tercihiniz, tema ayarlarınız gibi kişisel tercihlerinizi hatırlar.</p>

            <h2>Çerez Kontrolü</h2>
            <p>
              Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz. Ancak bazı çerezleri devre dışı bırakmanız 
              uygulamanın düzgün çalışmasını etkileyebilir.
            </p>

            <h2>İletişim</h2>
            <p>
              Çerez politikamız hakkında sorularınız için: 
              <a href="mailto:privacy@emotice.com" className="text-purple-600 hover:underline">
                privacy@emotice.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
