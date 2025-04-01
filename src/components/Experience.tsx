
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      position: 'AI Solutions Specialist',
      company: 'TechInnovate Solutions',
      period: '2021 - Present',
      description: 'Leading AI implementation projects for enterprise clients, focusing on business process optimization and growth strategies.'
    },
    {
      position: 'SaaS Product Developer',
      company: 'DataFlow Systems',
      period: '2019 - 2021',
      description: 'Developed and launched multiple SaaS products focusing on data analysis and business intelligence for SMEs.'
    },
    {
      position: 'Business Technology Mentor',
      company: 'Startup Accelerator Program',
      period: '2018 - Present',
      description: 'Providing mentorship to technology startups on product development, market strategy, and scalable architecture.'
    },
    {
      position: 'Research Associate',
      company: 'Aristotle University of Thessaloniki',
      period: '2017 - 2019',
      description: 'Conducted research on practical applications of machine learning in business environments.'
    }
  ];

  const education = [
    {
      degree: 'MSc in Artificial Intelligence',
      institution: 'Aristotle University of Thessaloniki',
      period: '2015 - 2017'
    },
    {
      degree: 'BSc in Computer Science',
      institution: 'Aristotle University of Thessaloniki',
      period: '2011 - 2015'
    },
    {
      degree: 'AI Innovation Certification',
      institution: 'lablab.ai',
      period: '2020'
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
            
            <h3 className="text-2xl font-semibold mb-6 text-navy">Affiliations</h3>
            <div className="grid grid-cols-2 gap-4">
              <AffiliationCard
                name="lablab.ai"
                logo="https://placeholder.svg"
                role="AI Innovation Contributor"
              />
              <AffiliationCard
                name="Aristotle University of Thessaloniki"
                logo="https://placeholder.svg"
                role="Research Affiliate"
              />
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

const AffiliationCard = ({ 
  name, 
  logo, 
  role 
}: { 
  name: string; 
  logo: string; 
  role: string 
}) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
      <CardContent className="p-4 text-center">
        <p className="text-lg font-semibold text-navy mb-1">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </CardContent>
    </Card>
  );
};

export default Experience;
