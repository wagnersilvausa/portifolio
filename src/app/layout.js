import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wagner Paulo",
  description: "Full-Stack Builder • Automation • AI Workflows.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NRS9PX9R2K"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            gtag('config', 'G-NRS9PX9R2K');
          `}
        </Script>
      </head>

      <body className={inter.className}>
        <div className="min-h-screen w-full overflow-x-hidden">
          <Toaster position="top-center" />
          {children}
        </div>
      </body>
    </html>
  );
}
