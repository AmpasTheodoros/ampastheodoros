
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-navy">About Me</h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Based in Thessaloniki, Central Macedonia, Greece, I'm passionate about empowering businesses through innovative AI solutions. With a background from Aristotle University of Thessaloniki, I combine technical expertise with a deep understanding of business needs.
            </p>
            
            <p className="text-lg leading-relaxed">
              As a mentor and SaaS creator, I help companies navigate the complex world of artificial intelligence, implementing solutions that drive real growth and efficiency. My approach focuses on practical applications of cutting-edge technology to solve business challenges.
            </p>
            
            <p className="text-lg leading-relaxed">
              I'm committed to bridging the gap between advanced technology and business strategy, making AI accessible and valuable for organizations of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <StatCard number="5+" label="Years Experience" />
            <StatCard number="25+" label="Projects Completed" />
            <StatCard number="15+" label="Happy Clients" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <p className="text-3xl font-bold text-gold mb-2">{number}</p>
        <p className="text-navy font-medium">{label}</p>
      </CardContent>
    </Card>
  );
};

export default About;
