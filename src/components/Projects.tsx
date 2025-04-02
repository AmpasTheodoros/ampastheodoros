
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, SquareCode, SquareCheck } from 'lucide-react';

const Projects = () => {
  const categories = ['All', 'AI', 'Business', 'SaaS', 'Education'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      title: 'Ampassador: Compliance-as-a-Service',
      description: 'Simplify Compliance with One-Click Solutions A powerful SaaS tool that automates compliance tracking, alerts, and reporting for startups and SMBs',
      tags: ['AI', 'SaaS', 'Compliance'],
      image: '/lovable-uploads/ampassador.jpg',
      category: 'AI',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'Heatmap.Click: Optimize UX with Real Insights',
      description: 'See Where Users Click — and Why They Don’t',
      tags: ['UX', 'Analytics'],
      image: '/lovable-uploads/heatmap.jpg',
      category: 'Business',
      icon: <SquareCheck className="text-gold" size={32} />
    },
    {
      title: 'ContentHive: AI-Powered Content Bot for Hackathons',
      description: 'Create, Schedule, and Share with Ease Your all-in-one Discord bot for generating and managing hackathon content. Perfect for teams, judges',
      tags: ['AI Implementation', 'Automation'],
      image: '/lovable-uploads/content-hive.jpg',
      category: 'AI',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'Creating WordPress Plugins and Integrating AI: My Story',
      description: 'This project reflects my passion for merging creativity with technology. I set out to simplify the process of building WordPress plugins while integrating AI inspired by my own journey of tackling challenges and finding innovative solutions. It’s more than just code it’s about empowering others to turn their ideas into realityThis',
      tags: ['Education', 'AI'],
      image: 'https://media.licdn.com/dms/image/sync/v2/D4E27AQFoBOU2QZLp8Q/articleshare-shrink_800/articleshare-shrink_800/0/1715714074312?e=1744160400&v=beta&t=XnfA-sIPXU7FmS0T_EF__2lgdyJuFULMfYN1Gf0bZis',
      category: 'Education',
      icon: <SquareCheck className="text-gold" size={32} />
    },
    {
      title: 'Cillers Hackathon Podcast - Theodoros Ampas',
      description: 'I had the incredible opportunity to share my story on the Cillers Podcast: World Class Hackathons hosted by Per Lange to discuss my journey as a technical mentor at lablab.ai 🚀 ',
      tags: ['SaaS', 'Analytics'],
      image: 'https://i.scdn.co/image/ab67656300005f1fd5dea1c5014a608a2445a5d1',
      category: 'SaaS',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'SimplySites: Websites + AI Integration Made Simple',
      description: 'From landing pages to full AI-powered platforms SimplySites helps businesses launch professional websites with built-in intelligence',
      tags: ['Business', 'Education'],
      image: '/lovable-uploads/Screenshot_1.png',
      category: 'Business',
      icon: <SquareCheck className="text-gold" size={32} />
    },
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-navy text-center">Featured Projects</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
        
        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={`rounded-full px-6 ${
                activeCategory === category 
                  ? "bg-navy text-white" 
                  : "text-navy hover:bg-navy-light hover:text-white"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-xl border-none"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                    View Project
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                  {project.icon}
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      className="bg-gold/20 text-gold hover:bg-gold/30 border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            variant="default" 
            className="bg-gold hover:bg-gold-light text-white transition-colors duration-300"
          >
            View All Projects <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
