// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <img 
              src="/logom.png" 
              alt="Emotice Logo" 
              className="w-16 h-16 object-contain transform group-hover:scale-110 transition-transform"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Emotice
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {t('nav.home')}
            </Link>
            
            <a 
              href="#features" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {t('nav.features')}
            </a>
            
            <a 
              href="#pricing" 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {t('nav.pricing')}
            </a>

            {/* Legal Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-gray-700 hover:text-purple-600 font-medium transition-colors"
                onMouseEnter={() => setIsLegalOpen(true)}
                onMouseLeave={() => setIsLegalOpen(false)}
              >
                {t('nav.legal')}
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                  isLegalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsLegalOpen(true)}
                onMouseLeave={() => setIsLegalOpen(false)}
              >
                <Link 
                  to="/legal/terms" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link 
                  to="/legal/privacy" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/legal/medical" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Medical Disclaimer
                </Link>
                <Link 
                  to="/legal/cookie" 
                  className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Language + Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            
            <Button 
              asChild 
              variant="ghost" 
              className="text-gray-700 hover:text-purple-600"
            >
              <Link to="/auth">{t('auth.signIn')}</Link>
            </Button>
            
            <Button 
              asChild 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white shadow-md"
            >
              <Link to="/auth">Start Free</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block py-2 text-gray-700 hover:text-purple-600 font-medium"
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            
            <a 
              href="#features" 
              className="block py-2 text-gray-700 hover:text-purple-600 font-medium"
              onClick={closeMenu}
            >
              {t('nav.features')}
            </a>
            
            <a 
              href="#pricing" 
              className="block py-2 text-gray-700 hover:text-purple-600 font-medium"
              onClick={closeMenu}
            >
              {t('nav.pricing')}
            </a>

            {/* Mobile Legal Menu */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <p className="text-sm font-semibold text-gray-500 mb-2">{t('nav.legal')}</p>
              <Link 
                to="/legal/terms" 
                className="block py-2 text-gray-700 hover:text-purple-600"
                onClick={closeMenu}
              >
                Terms of Service
              </Link>
              <Link 
                to="/legal/privacy" 
                className="block py-2 text-gray-700 hover:text-purple-600"
                onClick={closeMenu}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/legal/medical" 
                className="block py-2 text-gray-700 hover:text-purple-600"
                onClick={closeMenu}
              >
                Medical Disclaimer
              </Link>
              <Link 
                to="/legal/cookie" 
                className="block py-2 text-gray-700 hover:text-purple-600"
                onClick={closeMenu}
              >
                Cookie Policy
              </Link>
            </div>

            {/* Mobile Language + Buttons */}
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-3">
              <div className="flex justify-center">
                <LanguageSwitcher />
              </div>
              
              <Button 
                asChild 
                variant="outline" 
                className="w-full"
                onClick={closeMenu}
              >
                <Link to="/auth">{t('auth.signIn')}</Link>
              </Button>
              
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white"
                onClick={closeMenu}
              >
                <Link to="/auth">Start Free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;