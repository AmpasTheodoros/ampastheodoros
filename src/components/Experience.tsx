
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      position: 'Mentor (Hackathons)',
      company: 'lablab.ai',
      period: 'Jan 2023 - 2025',
      description: 'Mentored participants in over 100 AI hackathons with 10,000+ total attendees guiding teams through project ideation and presentation skills'
    },
    {
      position: 'Mentor (Startups)',
      company: 'lablab.ai NEXT Program',
      period: 'Oct 2023 - 2025',
      description: 'Supported 10+ AI startup teams including AUTODERM and Orbit8 with product development business model refinement'
    },
    {
      position: 'Web Developer/Designer (Volunteer)',
      company: 'InfinityGreece',
      period: 'Feb 2022 - Present',
      description: 'Managed 24 WordPress websites and ensured consistent UX for 250+ volunteers across various community events.'
    },
    {
      position: 'IT Member (Volunteer)',
      company: 'EESTEC',
      period: 'Nov 2021 - Present',
      description: 'Resolved over 50 technical issues, optimized WordPress infrastructure, and organized 5 tech workshops for 200+ students.'
    }
  ];

  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Aristotle University of Thessaloniki',
      period: '2020 - 2025'
    },
    {
      degree: 'AI Innovation Certification',
      institution: 'lablab.ai',
      period: '2023'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-navy text-center">Experience & Education</h2>
        <div className="w-20 h-1 bg-gold mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-navy">Professional Experience</h3>
            <div className="space-y-5">
              {experiences.map((exp, index) => (
                <ExperienceCard
                  key={index}
                  position={exp.position}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description}
                />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-navy">Education</h3>
            <div className="space-y-5 mb-10">
              {education.map((edu, index) => (
                <EducationCard 
                  key={index}
                  degree={edu.degree}
                  institution={edu.institution}
                  period={edu.period}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ 
  position, 
  company, 
  period, 
  description 
}: { 
  position: string; 
  company: string; 
  period: string; 
  description: string 
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h4 className="text-lg font-bold text-navy">{position}</h4>
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-700">{company}</p>
          <p className="text-gray-500 text-sm">{period}</p>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

const EducationCard = ({ 
  degree, 
  institution, 
  period 
}: { 
  degree: string; 
  institution: string; 
  period: string 
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <h4 className="text-lg font-bold text-navy">{degree}</h4>
        <div className="flex justify-between items-center">
          <p className="text-gray-700">{institution}</p>
          <p className="text-gray-500 text-sm">{period}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
