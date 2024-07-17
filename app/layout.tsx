// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import baseMetadata from './seo-metadata';

export const metadata: Metadata = {
  ...baseMetadata,
  // You can override or add page-specific metadata here
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-800 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © {new Date().getFullYear()} Theodor Ampas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}