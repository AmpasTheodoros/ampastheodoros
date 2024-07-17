// app/seo-metadata.ts
import { Metadata } from 'next';

const baseMetadata: Metadata = {
  title: 'Theodor Ampas - Full Stack Developer',
  description: 'Portfolio of Theodor Ampas, a passionate Full Stack Developer specializing in React, Next.js, and TypeScript.',
  keywords: 'Theodor Ampas, Full Stack Developer, React, Next.js, TypeScript',
  authors: [{ name: 'Theodor Ampas' }],
  creator: 'Theodor Ampas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.theodorampas.com',
    siteName: 'Theodor Ampas Portfolio',
    images: [
      {
        url: 'https://www.theodorampas.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Theodor Ampas - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@theodor_ampas',
    creator: '@theodor_ampas',
  },
};

export default baseMetadata;