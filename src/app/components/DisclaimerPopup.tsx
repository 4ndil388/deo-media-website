import { AlertTriangle, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface DisclaimerPopupProps {
  onClose: () => void;
}

export function DisclaimerPopup({ onClose }: DisclaimerPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("disclaimerAccepted", "true");
    handleClose();
  };

  const handleReject = () => {
    localStorage.setItem("disclaimerAccepted", "false");
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Disclaimer</h3>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-60 overflow-y-auto">
              <div className="space-y-2 text-gray-300">
                <div className="bg-red-600/10 border border-red-600/30 p-2 rounded">
                  <p className="text-xs leading-relaxed text-white">
                    <strong>IMPORTANT:</strong> Please read this disclaimer carefully before using our website and services.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-wider">General Information</h4>
                    <p className="text-xs leading-relaxed">
                      The information provided on this website is for general informational purposes only. 
                      While we strive to keep the information accurate and up-to-date, we make no representations 
                      or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
                      suitability, or availability of the website or the information, products, services, or related 
                      graphics contained on the website.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-wider">No Professional Advice</h4>
                    <p className="text-xs leading-relaxed">
                      The content on this website should not be considered as professional advice. You should 
                      consult with appropriate professionals before making any decisions based on the information 
                      provided on this website.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-wider">Limitation of Liability</h4>
                    <p className="text-xs leading-relaxed">
                      In no event will Deo Media be liable for any loss or damage including without limitation, 
                      indirect or consequential loss or damage, or any loss or damage whatsoever arising from 
                      loss of data or profits arising out of, or in connection with, the use of this website.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 uppercase text-xs tracking-wider">External Links</h4>
                    <p className="text-xs leading-relaxed">
                      Through this website, you may be able to link to other websites which are not under the 
                      control of Deo Media. We have no control over the nature, content, and availability of 
                      those sites. The inclusion of any links does not necessarily imply a recommendation or 
                      endorse the views expressed within them.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 pt-1">
                  By clicking "I Understand & Accept", you acknowledge that you have read and understood this disclaimer.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 p-4 border-t border-gray-800">
              <Button
                onClick={handleAccept}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-bold py-3 text-sm"
              >
                I Understand & Accept
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="flex-1 border-2 border-gray-700 hover:border-red-600 text-white hover:text-red-600 uppercase tracking-wide font-bold py-3 text-sm"
              >
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}