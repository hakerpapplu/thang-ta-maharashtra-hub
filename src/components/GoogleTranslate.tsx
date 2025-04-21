
import { useEffect } from "react";

// Declare types for Google Translate API
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (options: any, element: string): any;
          InlineLayout: {
            HORIZONTAL: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
  }
}

/**
 * Dynamically loads the Google Translate script and widget.
 * Adds translator bar (English, Hindi, Marathi).
 */
const GoogleTranslate = () => {
  useEffect(() => {
    if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
      return;
    }

    // Define callback for Google Translate
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,hi,mr",
          layout: window.google.translate.TranslateElement.InlineLayout.HORIZONTAL,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    // Load script only once
    const scriptId = "google-translate-script";
    if (!document.getElementById(scriptId)) {
      const gtScript = document.createElement("script");
      gtScript.id = scriptId;
      gtScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(gtScript);
    }
  }, []);

  // The container is very important!
  return (
    <div id="google_translate_element" className="google-translate-widget" />
  );
};

export default GoogleTranslate;
