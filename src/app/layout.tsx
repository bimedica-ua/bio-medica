import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '@/components/layout/Layout';
config.autoAddCss = false;

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Bio Medica',
  description: 'Центр лабораторної медицини',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Suspense fallback={<div>Завантаження...</div>}>{children} </Suspense>
        </Layout>
      </body>
    </html>
  );
}
