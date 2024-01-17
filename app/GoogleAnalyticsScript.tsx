import Script from "next/script";
import React from "react";

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-882PHV5S6K"
      />
      <Script id="google-analytics-script">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-882PHV5S6K')`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
