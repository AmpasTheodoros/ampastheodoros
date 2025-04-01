
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    'AI & Machine Learning',
    'Data Analysis',
    'SaaS Development',
    'Full Stack Development',
    'Cloud Architecture',
  ];
  
  const businessSkills = [
    'Business Strategy',
    'Project Management',
    'Mentoring',
    'Innovation',
    'Client Relations',
  ];
  
  const services = [
    {
      title: 'AI Consulting',
      description: 'Strategic guidance on leveraging AI to enhance business operations and decision-making processes.',
      icon: '🤖',
    },
    {
      title: 'SaaS Development',
      description: 'End-to-end development of scalable, cloud-based software solutions tailored to your business needs.',
      icon: '☁️',
    },
    {
      title: 'Business Mentoring',
      description: 'Personalized mentorship for businesses looking to innovate and scale with technology.',
      icon: '🚀',
    },
    {
      title: 'AI Implementation',
      description: 'Hands-on implementation of AI solutions, from concept to deployment, with ongoing support.',
      icon: '⚙️',
    },
  ];
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-navy text-center">Skills & Services</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-navy">Technical Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="bg-navy text-white hover:bg-navy-light text-sm py-1.5 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-navy">Business Acumen</h3>
            <div className="flex flex-wrap gap-2">
              {businessSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  className="bg-gold text-white hover:bg-gold-light text-sm py-1.5 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold mb-8 text-navy text-center">Services I Offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string;
}) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-navy">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Skills;
