
import { useEffect } from "react";

// Instead of attaching types to window, use runtime safe type checking:
const GoogleTranslate = () => {
  useEffect(() => {
    // Don't re-run if already present
    if (window.document.getElementById("google-translate-script")) return;

    // Dynamically create script and global init cb
    (window as any).googleTranslateElementInit = function () {
      if (
        (window as any).google &&
        (window as any).google.translate &&
        (window as any).google.translate.TranslateElement
      ) {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr",
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL,
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    };

    // Load Google Translate script once
    const gtScript = document.createElement("script");
    gtScript.id = "google-translate-script";
    gtScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    gtScript.async = true;
    document.body.appendChild(gtScript);

    // Cleanup: Remove script on unmount for best mobile handling
    return () => {
      gtScript.remove();
      delete (window as any).googleTranslateElementInit;
    };
  }, []);

  // Ensure widget is always present and sized correctly
  return (
    <div id="google_translate_element" className="google-translate-widget" />
  );
};

export default GoogleTranslate;
