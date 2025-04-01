
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
      title: 'AI Customer Analysis Platform',
      description: 'A comprehensive SaaS platform that uses AI to analyze customer behavior patterns.',
      tags: ['AI', 'SaaS', 'Data Analysis'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      category: 'AI',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'Business Growth Mentor Program',
      description: 'Structured mentorship program for tech startups looking to scale.',
      tags: ['Mentorship', 'Business Strategy'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      category: 'Business',
      icon: <SquareCheck className="text-gold" size={32} />
    },
    {
      title: 'Efficiency AI Implementation',
      description: 'Custom AI solution for manufacturing that optimized production processes.',
      tags: ['AI Implementation', 'Optimization'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      category: 'AI',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'Lablab.ai Contribution',
      description: 'Development of AI tutorials and resources for the lablab.ai platform.',
      tags: ['Education', 'AI'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      category: 'Education',
      icon: <SquareCheck className="text-gold" size={32} />
    },
    {
      title: 'SaaS Marketing Dashboard',
      description: 'Real-time analytics dashboard for SaaS marketing campaigns.',
      tags: ['SaaS', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      category: 'SaaS',
      icon: <SquareCode className="text-gold" size={32} />
    },
    {
      title: 'Business Strategy Workshop',
      description: 'Conducted workshops helping businesses adopt AI technologies.',
      tags: ['Business', 'Education'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
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
