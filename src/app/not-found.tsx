import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        {/* Google Search Console Verification */}
        <meta 
          name="google-site-verification" 
          content="YOUR_VERIFICATION_CODE_HERE" 
        />
        
        {/* Google Analytics (GA4) */}
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        
        {/* Yandex Metrika */}
        <meta name="yandex-verification" content="YOUR_YANDEX_CODE" />
      </head>
      <body>{children}</body>
    </html>
  );
}
