// src/data/emergencyHotlines.js
export const emergencyHotlines = {
  TR: {
    country: "Türkiye",
    emergency: "112",
    police: "155",
    medical: "112",
    psychological: "182",
    suicidePrevention: "182",
    womenSupport: "183"
  },
  US: {
    country: "United States",
    emergency: "911",
    suicidePrevention: "988",
    crisisTextLine: "Text HOME to 741741",
    mentalHealth: "1-800-662-4357"
  },
  DE: {
    country: "Germany",
    emergency: "112",
    psychological: "0800 111 0111",
    suicidePrevention: "0800 111 0111"
  },
  FR: {
    country: "France",
    emergency: "112",
    suicidePrevention: "3114",
    psychological: "0 800 235 236"
  },
  UK: {
    country: "United Kingdom",
    emergency: "999",
    suicidePrevention: "116 123",
    mentalHealth: "111"
  },
  ES: {
    country: "Spain",
    emergency: "112",
    psychological: "024",
    suicidePrevention: "024"
  }
};

export const getHotlinesByCountry = (countryCode = 'TR') => {
  return emergencyHotlines[countryCode] || emergencyHotlines.TR;
};