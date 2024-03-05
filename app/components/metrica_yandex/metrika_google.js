import { useEffect } from 'react';
import Script from 'next/script';

const GoogleAnalytics = () => {

  useEffect(() => {
    // Добавление отслеживания Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-SCSRQ2BJFJ');
  }, []);

  return (
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-SCSRQ2BJFJ" strategy="afterInteractive" />
  );
};

export default GoogleAnalytics;