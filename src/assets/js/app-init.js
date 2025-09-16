// Language detection and content management
const LANGUAGE_CONFIG = {
  en: {
    title: "Rémy SABLIET - Senior Full-Stack engineer | Freelancer",
    description: "Rémy SABLIET is a Senior Full-Stack engineer | Next.js, React, Node.js, & AWS | Building Scalable, Modern Applications for Seamless User Experiences.",
    loading: "Loading...",
    noscript: "You need to enable JavaScript to run this app."
  },
  ja: {
    title: "Rémy SABLIET - シニアフルスタックエンジニア | フリーランサー",
    description: "Rémy SABLIETは、Next.js、React、Node.js、AWSを使用したスケーラブルでモダンなアプリケーションを構築するシニアフルスタックエンジニアです。",
    loading: "読み込み中...",
    noscript: "このアプリを実行するにはJavaScriptを有効にする必要があります。"
  },
  fr: {
    title: "Rémy SABLIET - Ingénieur Full-Stack Senior | Freelance",
    description: "Rémy SABLIET est un ingénieur Full-Stack Senior | Next.js, React, Node.js, & AWS | Construire des Applications Scalables et Modernes pour des Expériences Utilisateur Fluides.",
    loading: "Chargement...",
    noscript: "Vous devez activer JavaScript pour exécuter cette application."
  }
};

function detectLanguage() {
  // Check localStorage first
  const storedLang = localStorage.getItem('preferred-language');
  if (storedLang && ['en', 'ja', 'fr'].includes(storedLang)) return storedLang;

  // Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (['en', 'ja', 'fr'].includes(browserLang)) return browserLang;

  // Default to English
  return 'en';
}

function setLanguageContent(lang) {
  const content = LANGUAGE_CONFIG[lang] || LANGUAGE_CONFIG.en;

  document.title = content.title;
  document.querySelector('meta[name="description"]').setAttribute('content', content.description);
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-language', lang);

  const loadingElement = document.querySelector('.rs-loading-text');
  if (loadingElement) loadingElement.textContent = content.loading;

  const noscriptElement = document.querySelector('noscript');
  if (noscriptElement) noscriptElement.textContent = content.noscript;
}

function afterAssetLoaded() {
  // Import and load the React app
  import('/src/index.jsx').then(() => {
    document.querySelector('.rs-splash-screen-container').style.display = "none";
  }).catch((error) => {
    console.error('Failed to load React app:', error);
    // Fallback: try loading as script
    const script = document.createElement('script');
    script.src = "/src/index.jsx";
    script.type = "module";
    document.body.appendChild(script);
    document.querySelector('.rs-splash-screen-container').style.display = "none";
  });
}

// Wait for DOM to be ready
function initializeApp() {
  console.log('External JS loaded successfully!');
  
  // Initialize language
  const detectedLang = detectLanguage();
  setLanguageContent(detectedLang);
  
  // Set a timeout fallback (3 seconds)
  const timeoutId = setTimeout(() => {
    console.log('Timeout reached, loading app anyway');
    afterAssetLoaded();
  }, 3000);
  
  // Video loading
  const video = document.getElementById('preload-video');
  if (video) {
    video.addEventListener('canplaythrough', () => {
      clearTimeout(timeoutId);
      afterAssetLoaded();
    });
    video.addEventListener('error', () => {
      clearTimeout(timeoutId);
      afterAssetLoaded();
    });
  } else {
    console.error('Video element not found!');
    clearTimeout(timeoutId);
    afterAssetLoaded();
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}