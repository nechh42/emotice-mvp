// src/components/LanguageSwitcher.tsx
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  // 7 DİL DESTEĞİ
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' }
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('language', lng)
  }

  // Mevcut dili bul
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0]

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">
          {currentLang.flag}
        </span>
        <span className="text-xs hidden sm:inline text-muted-foreground">
          {currentLang.code.toUpperCase()}
        </span>
      </button>

      {/* Dropdown - SCROLLABLE */}
      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 max-h-80 overflow-y-auto">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              i18n.language === lang.code ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300' : ''
            }`}
          >
            <span className="text-xl">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
            {i18n.language === lang.code && (
              <span className="ml-auto text-purple-600 dark:text-purple-400">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSwitcher