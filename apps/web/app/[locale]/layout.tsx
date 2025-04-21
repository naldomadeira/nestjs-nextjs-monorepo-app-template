import Providers from '@/components/providers';
import { cn } from '@repo/shadcn/lib/utils';
import '@repo/shadcn/shadcn.css';
import { routing } from '@/lib/i18nNavigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'auto',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  metadataBase: new URL('https://turbo-npn.onrender.com'),
  // title: {
  //   default: 'Turbo NPN',
  //   template: '%s | Turbo NPN',
  // },
  openGraph: {
    type: 'website',
    title: 'Turbo NPN',
    description: 'Turbo NPN is the name of the website',
    url: 'https://turbo-npn.onrender.com',
    images: [
      {
        url: '/og-bg.png',
        width: 1200,
        height: 628,
        alt: 'Turbo NPN Logo',
      },
    ],
  },
} satisfies Metadata;

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

const RootLayout = async ({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) => {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

   // Using internationalization in Client Components
   const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn('antialiased', inter.variable)}
        suppressHydrationWarning
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
        <Providers>{children}</Providers>
        </NextIntlClientProvider>

      </body>
    </html>
  );
};

export default RootLayout;
