// src/components/Chat/CrisisAlert.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { getHotlinesByCountry } from '../../../data/emergencyHotlines';

const CrisisAlert = ({ crisisType, onClose }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const countryCode = currentLanguage === 'tr' ? 'TR' : 
                     currentLanguage === 'en' ? 'US' :
                     currentLanguage.toUpperCase();
  
  const hotlines = getHotlinesByCountry(countryCode);

  const getCrisisMessage = () => {
    switch (crisisType) {
      case 'suicide':
        return {
          title: t('crisis.suicide.title', '🚨 ACİL DURUM - Hemen Yardım Alın'),
          message: t('crisis.suicide.message', `EMOTICE tıbbi bir cihaz DEĞİLDİR ve acil durumlarda kullanılmamalıdır.\n\n📞 Hemen yerel acil hattınızı arayın: ${hotlines.emergency}\n\n🤝 Psikolojik Destek Hatları:\n• Psikolojik Danışma: ${hotlines.psychological}\n• Krize Müdahale: ${hotlines.suicidePrevention}\n\n💙 Lütfen güvendiğiniz biriyle iletişime geçin. Yalnız değilsiniz.`)
        };
      case 'selfHarm':
        return {
          title: t('crisis.selfHarm.title', '🆘 Acil Destek Gerekli'),
          message: t('crisis.selfHarm.message', `Lütfen profesyonel yardım alın. EMOTICE acil durumlar için uygun değildir.\n\n📞 Acil Hatlar:\n• ${hotlines.emergency}\n• Psikolojik Destek: ${hotlines.psychological}\n\n👥 Size yakın biriyle konuşabilir misiniz?`)
        };
      default:
        return {
          title: t('crisis.general.title', '🤝 Hemen Destek Almalısınız'),
          message: t('crisis.general.message', `Bu durumda profesyonel destek almanız önemli.\n\n📞 İletişim:\n• Acil Hat: ${hotlines.emergency}\n• Destek Hattı: ${hotlines.psychological}\n\n🌙 Unutmayın, zor zamanlar geçici olabilir.`)
        };
    }
  };

  const { title, message } = getCrisisMessage();

  return (
    <div className="crisis-alert">
      <div className="crisis-header">
        <h3>{title}</h3>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
      <div className="crisis-message">
        {message.split('\n').map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <div className="crisis-actions">
        <button className="btn-primary">Acil Numaraları Göster</button>
        <button className="btn-secondary">Güvenlik Kontaktı Ekle</button>
      </div>
    </div>
  );
};

export default CrisisAlert;