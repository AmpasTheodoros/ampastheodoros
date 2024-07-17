// app/projects/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Next.js, TypeScript, and Stripe for payments.',
    image: '/ecommerce-project.jpg',
    liveDemo: 'https://ecommerce-demo.theodorampas.com',
    github: 'https://github.com/theodorampas/ecommerce-platform',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
  },
  {
    title: 'Task Management App',
    description: 'A React-based task management application with drag-and-drop functionality and real-time updates.',
    image: '/task-management-project.jpg',
    liveDemo: 'https://tasks.theodorampas.com',
    github: 'https://github.com/theodorampas/task-manager',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold">Technologies used:</h3>
                <ul className="list-disc list-inside">
                  {project.technologies.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Live Demo
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}