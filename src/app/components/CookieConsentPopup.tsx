import { Cookie, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface CookieConsentPopupProps {
  onClose: () => void;
}

export function CookieConsentPopup({ onClose }: CookieConsentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    handleClose();
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Popup */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Cookie Policy</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              <div className="space-y-4 text-gray-300">
                <p className="text-base leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                  and personalize content. Cookies help us understand how you interact with our website and improve our services.
                </p>

                <div className="bg-black/50 border border-gray-800 p-4 rounded">
                  <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wider">Types of Cookies We Use:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors use our site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      <span><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400">
                  By clicking "Accept All Cookies", you consent to the use of all cookies. 
                  You can choose to reject non-essential cookies by clicking "Reject Non-Essential".
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-800">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-bold py-4"
              >
                Accept All Cookies
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="flex-1 border-2 border-gray-700 hover:border-red-600 text-white hover:text-red-600 uppercase tracking-wide font-bold py-4"
              >
                Reject Non-Essential
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
