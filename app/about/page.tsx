// app/about/page.tsx
import React from 'react';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        Hi, I'm Theodor Ampas, a passionate web developer and designer with a keen eye for detail and a love for creating
        intuitive, user-friendly websites and applications.
      </p>
      <p className="mb-4">
        With expertise in technologies like React, Next.js, and TypeScript, I strive to build performant and scalable
        web solutions that make a difference.
      </p>
      <h2 className="text-2xl font-bold mt-8 mb-4">Skills</h2>
      <ul className="list-disc list-inside">
        <li>React & Next.js</li>
        <li>TypeScript</li>
        <li>HTML5 & CSS3</li>
        <li>UI/UX Design</li>
        <li>Responsive Web Design</li>
        <li>Version Control (Git)</li>
      </ul>
    </div>
  );
}