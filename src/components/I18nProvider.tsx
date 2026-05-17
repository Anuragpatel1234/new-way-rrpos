"use client";

import React, { useEffect, useState, useRef } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        solutions: "Solution",
        product: "Product",
        service: "Service",
        company: "Company",
        contact: "Contact Us",
        retail: "Retail POS",
        inventory: "Inventory Tech",
        analytics: "Analytics Hub",
        multistore: "Multi-Store"
      },
      hero: {
        title_line1: "Fast billing that keeps",
        title_line2: "your business running smoothly.",
        subtitle: "All-in-one POS for retail stores. Billing, inventory, GST reports — all in one place.",
        get_started: "Get started",
        contact_sales: "Contact sales"
      },
      cta: {
        title: "Ready to Grow Your Business?",
        subtitle: "Join thousands of retailers who trust RR POS for fast billing, smart inventory, and real growth.",
        book: "Book a Free Demo",
        whatsapp: "Chat on WhatsApp"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        solutions: "समाधान",
        product: "उत्पाद",
        service: "सेवाएं",
        company: "कंपनी",
        contact: "संपर्क करें",
        retail: "रिटेल पीओएस",
        inventory: "इन्वेंट्री टेक",
        analytics: "एनालिटिक्स हब",
        multistore: "मल्टी-स्टोर"
      },
      hero: {
        title_line1: "तेज़ बिलिंग जो आपके व्यवसाय को",
        title_line2: "सुचारू रूप से चलाए रखती है।",
        subtitle: "रिटेल स्टोर के लिए ऑल-इन-वन पीओएस। बिलिंग, इन्वेंट्री, जीएसटी रिपोर्ट — सब कुछ एक ही जगह।",
        get_started: "शुरू करें",
        contact_sales: "सेल्स से संपर्क करें"
      },
      cta: {
        title: "क्या आप अपना व्यवसाय बढ़ाने के लिए तैयार हैं?",
        subtitle: "तेज़ बिलिंग, स्मार्ट इन्वेंट्री और वास्तविक विकास के लिए आरआर पीओएस पर भरोसा करने वाले हज़ारों खुदरा विक्रेताओं से जुड़ें।",
        book: "मुफ़्त डेमो बुक करें",
        whatsapp: "व्हाट्सएप पर चैट करें"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  gu: {
    translation: {
      nav: {
        home: "હોમ",
        solutions: "સોલ્યુશન્સ",
        product: "પ્રોડક્ટ",
        service: "સેવાઓ",
        company: "કંપની",
        contact: "સંપર્ક કરો",
        retail: "રિટેલ POS",
        inventory: "ઇન્વેન્ટરી ટેક",
        analytics: "એનાલિટિક્સ હબ",
        multistore: "મલ્ટી-સ્ટોર"
      },
      hero: {
        title_line1: "ઝડપી બિલિંગ જે તમારા વ્યવસાયને",
        title_line2: "સરળતાથી ચલાવતું રાખે છે.",
        subtitle: "રિટેલ સ્ટોર્સ માટે ઓલ-ઇન-વન POS. બિલિંગ, ઇન્વેન્ટરી, GST રિપોર્ટ્સ — બધું એક જ જગ્યાએ.",
        get_started: "શરૂ કરો",
        contact_sales: "સેલ્સનો સંપર્ક કરો"
      },
      cta: {
        title: "તમારા વ્યવસાયને વધારવા માટે તૈયાર છો?",
        subtitle: "ઝડપી બિલિંગ, સ્માર્ટ ઇન્વેન્ટરી અને વાસ્તવિક વૃદ્ધિ માટે RR POS પર વિશ્વાસ કરતા હજારો રિટેલર્સ સાથે જોડાઓ.",
        book: "મફત ડેમો બુક કરો",
        whatsapp: "WhatsApp પર ચેટ કરો"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  mr: {
    translation: {
      nav: {
        home: "होम",
        solutions: "सोल्यूशन्स",
        product: "उत्पादन",
        service: "सेवा",
        company: "कंपनी",
        contact: "संपर्क साधा",
        retail: "रिटेल POS",
        inventory: "इन्व्हेंटरी टेक",
        analytics: "अॅनालिटिक्स हब",
        multistore: "मल्टी-स्टोअर"
      },
      hero: {
        title_line1: "वेगवान बिलिंग जे तुमच्या",
        title_line2: "व्यवसायाला सुरळीत चालू ठेवते.",
        subtitle: "रिटेल स्टोअरसाठी ऑल-इन-वन POS. बिलिंग, इन्व्हेंटरी, जीएसटी रिपोर्ट्स — सर्व एकाच ठिकाणी.",
        get_started: "सुरू करा",
        contact_sales: "सेल्सशी संपर्क साधा"
      },
      cta: {
        title: "तुमचा व्यवसाय वाढवण्यासाठी तयार आहात का?",
        subtitle: "वेगवान बिलिंग, स्मार्ट इन्व्हेंटरी आणि वास्तविक वाढीसाठी RR POS वर विश्वास ठेवणाऱ्या हजारो रिटेलर्समध्ये सामील व्हा.",
        book: "मोफत डेमो बुक करा",
        whatsapp: "व्हॉट्सॲपवर चॅट करा"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  ta: {
    translation: {
      nav: {
        home: "முகப்பு",
        solutions: "தீர்வுகள்",
        product: "தயாரிப்பு",
        service: "சேவை",
        company: "நிறுவனம்",
        contact: "தொடர்பு கொள்ள",
        retail: "சில்லறை POS",
        inventory: "இன்வெண்டரி டெக்",
        analytics: "அனலிட்டிக்ஸ் மையம்",
        multistore: "மல்டி-ஸ்டோர்"
      },
      hero: {
        title_line1: "உங்கள் வணிகத்தை சீராக நடத்த",
        title_line2: "உதவும் அதிவேக பில்லிங்.",
        subtitle: "சில்லறை கடைகளுக்கான ஆல்-இன்-ஒн POS. பில்லிங், இன்வெண்டரி, ஜிஎஸ்டி அறிக்கைகள் — அனைத்தும் ஒரே இடத்தில்.",
        get_started: "தொடங்குங்கள்",
        contact_sales: "விற்பனை பிரிவை தொடர்பு கொள்ள"
      },
      cta: {
        title: "உங்கள் வணிகத்தை வளர்க்க தயாரா?",
        subtitle: "அதிவேக பில்லிங், ஸ்மார்ட் இன்வெண்டரி மற்றும் உண்மையான வளர்ச்சிக்கு RR POS-ஐ நம்பும் ஆயிரக்கணக்கான சில்லறை விற்பனையாளர்களுடன் இணையுங்கள்.",
        book: "இலவச டெமோவை பதிவு செய்க",
        whatsapp: "வாட்ஸ்அப்பில் அரட்டையடிக்கவும்"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  te: {
    translation: {
      nav: {
        home: "హోమ్",
        solutions: "పరిష్కారాలు",
        product: "ఉత్పత్తి",
        service: "సేవలు",
        company: "కంపెనీ",
        contact: "సంప్రదించండి",
        retail: "రిటైల్ POS",
        inventory: "ఇన్వెంటరీ టెక్",
        analytics: "అనలిటిక్స్ హబ్",
        multistore: "మల్టీ-స్టోర్"
      },
      hero: {
        title_line1: "మీ వ్యాపారాన్ని సజావుగా",
        title_line2: "నడిపించే వేగవంతమైన బిల్లింగ్.",
        subtitle: "రిటైల్ స్టోర్స్ కోసం ఆల్-ఇన్-వన్ POS. బిల్లింగ్, ఇన్వెంటరీ, GST నివేదికలు — అన్నీ ఒకే చోట.",
        get_started: "ప్రారంభించండి",
        contact_sales: "సేల్స్ టీంను సంప్రదించండి"
      },
      cta: {
        title: "మీ వ్యాపారాన్ని వృద్ధి చేయడానికి సిద్ధంగా ఉన్నారా?",
        subtitle: "వేగవంతమైన బిల్లింగ్, స్మార్ట్ ఇన్వెండరీ మరియు నిజమైన వృద్ధి కోసం RR POSని విశ్వసించే వేలాది మంది రిటైలర్లతో చేరండి.",
        book: "ఉచిత డెమో బుక్ చేయండి",
        whatsapp: "వాట్సాప్‌లో చాట్ చేయండి"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        solutions: "Solución",
        product: "Producto",
        service: "Servicio",
        company: "Compañía",
        contact: "Contacto",
        retail: "POS Minorista",
        inventory: "Tecnología Stock",
        analytics: "Centro Analítico",
        multistore: "Multi-Tienda"
      },
      hero: {
        title_line1: "Facturación rápida que mantiene",
        title_line2: "su negocio funcionando sin problemas.",
        subtitle: "POS todo en uno para tiendas minoristas. Facturación, inventario, informes de GST — todo en un solo lugar.",
        get_started: "Comenzar",
        contact_sales: "Contactar ventas"
      },
      cta: {
        title: "¿Listo para hacer crecer su negocio?",
        subtitle: "Únase a miles de minoristas que confían en RR POS para una facturación rápida, inventario inteligente y crecimiento real.",
        book: "Reservar demo gratis",
        whatsapp: "Chatear por WhatsApp"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: "الرئيسية",
        solutions: "الحلول",
        product: "المنتجات",
        service: "الخدمات",
        company: "الشركة",
        contact: "اتصل بنا",
        retail: "نقاط بيع التجزئة",
        inventory: "إدارة المخزون",
        analytics: "مركز التحليلات",
        multistore: "المتاجر المتعددة"
      },
      hero: {
        title_line1: "فواتير سريعة تحافظ على",
        title_line2: "سير عمل عملك بسلاسة وسهولة.",
        subtitle: "نظام نقاط بيع متكامل لمحلات التجزئة. فواتير، مخزون، تقارير الضريبة — كل ذلك في مكان واحد.",
        get_started: "ابدأ الآن",
        contact_sales: "اتصل بالمبيعات"
      },
      cta: {
        title: "هل أنت جاهز لتنمية عملك؟",
        subtitle: "انضم إلى آلاف تجار التجزئة الذين يثقون في RR POS للحصول على فواتير سريعة ومخزون ذكي ونمو حقيقي.",
        book: "احجز عرضاً تجريبياً مجانياً",
        whatsapp: "تحدث معنا عبر الواتساب"
      },
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        ta: "தமிழ்",
        te: "తెలుగు",
        es: "Español",
        ar: "العربية"
      }
    }
  }
};

// Initialize i18next
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      }
    });
}

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false);
  const { i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language;

  // 1. Inject Google Translate Script & Styles
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    setInitialized(true);

    if (document.getElementById("google-translate-script")) return;

    // Create google translate widget container
    const widgetDiv = document.createElement("div");
    widgetDiv.id = "google_translate_element";
    widgetDiv.style.display = "none";
    document.body.appendChild(widgetDiv);

    // Setup global callback
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi,gu,ta,te,mr,bn,es,ar',
        autoDisplay: false
      }, 'google_translate_element');
    };

    // Inject Google Translate script
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.head.appendChild(script);

    // Add CSS stylesheet to hide the google translate bar, branding, feedback badges, left widgets, and loaders completely
    const style = document.createElement("style");
    style.id = "google-translate-custom-css";
    style.innerHTML = `
      /* Aggressively eliminate Google Translate banner, loaders, feedback badges, dropdown frames, left-hover buttons, and icons */
      .goog-te-banner-frame.skiptranslate,
      .goog-te-banner-frame,
      #goog-gt-tt,
      #goog-gt-tt *,
      .goog-te-balloon-frame,
      .translation-icons,
      .goog-logo-link,
      .goog-logo-link img,
      .goog-te-gadget-icon,
      .goog-te-banner,
      #google_translate_element,
      .goog-te-spinner-pos,
      .goog-te-spinner-pos *,
      .goog-te-spinner,
      .goog-te-spinner-animation,
      .goog-te-spinner-path,
      .goog-te-spinner-pos + div,
      div[class*='goog-te-spinner'],
      div[id*='goog-te-spinner'],
      .skiptranslate,
      .skiptranslate *,
      iframe.skiptranslate,
      iframe[id*='translate'],
      iframe[class*='skiptranslate'],
      div[style*='z-index: 2000000000'],
      div[style*='z-index: 22222222'],
      div[id*='goog-gt'],
      .goog-tooltip,
      .goog-tooltip-back {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
        width: 0px !important;
        height: 0px !important;
        margin: 0px !important;
        padding: 0px !important;
        left: -9999px !important;
        top: -9999px !important;
        position: absolute !important;
        z-index: -99999 !important;
      }
      body {
        top: 0px !important;
        position: static !important;
      }
      .goog-text-highlight {
        background-color: transparent !important;
        box-shadow: none !important;
        box-sizing: border-box !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const prevLangRef = useRef<string | null>(null);

  // 2. Handle Language Changes (User Selection) - RELOAD WITH PRELOADER
  useEffect(() => {
    if (!initialized || !currentLang || typeof window === "undefined") return;

    // Track the initial language on mount to prevent double-triggering
    if (prevLangRef.current === null) {
      prevLangRef.current = currentLang;
      return;
    }

    if (prevLangRef.current !== currentLang) {
      prevLangRef.current = currentLang;

      // A. Show the beautiful brand preloader immediately for a premium feel
      window.dispatchEvent(new Event("trigger-preloader"));

      // B. Update HTML layout attributes immediately
      const dir = currentLang === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      document.documentElement.lang = currentLang;

      // C. Update Google Translate cookie values
      const transValue = currentLang === "en" ? "" : `/en/${currentLang}`;
      document.cookie = `googtrans=${transValue}; path=/;`;
      document.cookie = `googtrans=${transValue}; path=/; domain=${window.location.hostname};`;
      document.cookie = `googtrans=${transValue}; path=/; domain=.${window.location.hostname};`;

      // D. Sync Google Translate combo box directly and instantly!
      // In Google Translate, English (original language) maps to "" (empty string)
      const targetValue = currentLang === "en" ? "" : currentLang;
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl) {
        if (selectEl.value !== targetValue) {
          selectEl.value = targetValue;
          selectEl.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
      }

      // E. Reload page after a brief 150ms delay to cleanly translate the fresh DOM with the preloader
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }
  }, [currentLang, initialized]);

  // 3. Keep hidden Google Translate combo box in sync on mount
  useEffect(() => {
    if (!initialized || !currentLang || typeof window === "undefined") return;

    // Apply document layout attributes on load
    const dir = currentLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;

    // Poll to sync the hidden Google Translate combo select box
    let attempts = 0;
    const pollInterval = setInterval(() => {
      const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectEl) {
        const targetValue = currentLang === "en" ? "" : currentLang;
        if (selectEl.value !== targetValue) {
          selectEl.value = targetValue;
          selectEl.dispatchEvent(new Event('change', { bubbles: true, cancelable: true }));
        }
        clearInterval(pollInterval);
      } else {
        attempts++;
        if (attempts > 50) {
          clearInterval(pollInterval);
        }
      }
    }, 100);

    return () => clearInterval(pollInterval);
  }, [initialized]);

  if (!initialized) {
    return <div className="opacity-0 bg-[#04152B] min-h-screen" />;
  }

  return <>{children}</>;
}
