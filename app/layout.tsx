import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Dispatch Guide — Complete Hero Stats, Builds & Walkthrough',
    template: '%s | Dispatch Guide',
  },
  description:
    'The ultimate Dispatch game guide: all 6 Z-Team hero stats, best builds, pairings, episode walkthroughs, endings, and tips. Covering PS5, PC, Switch, and Xbox releases.',
  metadataBase: new URL('https://dispatch-guide.com'),
  openGraph: {
    title: 'Dispatch Guide',
    description:
      'The ultimate Dispatch game guide: all 6 Z-Team hero stats, best builds, pairings, episode walkthroughs, endings, and tips.',
    type: 'website',
    siteName: 'Dispatch Guide',
  },
  verification: {
    google: '4cd6cdf221ea7b0b',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="4cd6cdf221ea7b0b" />

        {/* Google Analytics 4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
