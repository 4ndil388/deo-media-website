import { RouterProvider } from 'react-router';
import { router } from './routes';
import { useState, useEffect } from 'react';
import { DisclaimerPopup } from './components/DisclaimerPopup';
import { CookieConsentPopup } from './components/CookieConsentPopup';

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const disclaimerAccepted = localStorage.getItem("disclaimerAccepted");
    if (!disclaimerAccepted) {
      setShowDisclaimer(true);
    }

    // Check if user has already responded to cookie consent
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show cookie consent after a short delay (or after disclaimer is closed)
      setTimeout(() => {
        if (!disclaimerAccepted) {
          // If disclaimer is showing, wait for it to close
          const checkInterval = setInterval(() => {
            const accepted = localStorage.getItem("disclaimerAccepted");
            if (accepted) {
              clearInterval(checkInterval);
              setShowCookieConsent(true);
            }
          }, 500);
        } else {
          setShowCookieConsent(true);
        }
      }, 1000);
    }
  }, []);

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    // Show cookie consent after disclaimer is closed
    setTimeout(() => {
      const cookieConsent = localStorage.getItem("cookieConsent");
      if (!cookieConsent) {
        setShowCookieConsent(true);
      }
    }, 500);
  };

  const handleCookieConsentClose = () => {
    setShowCookieConsent(false);
  };

  return (
    <>
      <RouterProvider router={router} />
      {showDisclaimer && <DisclaimerPopup onClose={handleDisclaimerClose} />}
      {showCookieConsent && <CookieConsentPopup onClose={handleCookieConsentClose} />}
    </>
  );
}

export default App;