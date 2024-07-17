// app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/theodor-ampas-profile.jpg"
        alt="Theodor Ampas"
        width={200}
        height={200}
        className="rounded-full mb-8"
      />
      <h1 className="text-4xl font-bold mb-4">Theodor Ampas</h1>
      <p className="text-xl mb-8">Full Stack Developer & UI/UX Enthusiast</p>
      <p className="text-center max-w-xl mb-8">
        Hi there! I'm a passionate developer with expertise in React, Next.js, and TypeScript.
        I love creating intuitive and performant web applications that solve real-world problems.
        When I'm not coding, you can find me exploring new technologies or contributing to open-source projects.
      </p>
      <div className="flex space-x-4">
        <Link href="/projects" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View My Work
        </Link>
        <Link href="/contact" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}