'use client';

import ExpertiseCard from './ExpertiseCard';
import { Brain, Code, Lightbulb, TrendingUp } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-primary relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-secondary/10 rounded-full text-background text-sm font-medium mb-6 inline-block">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Areas of Excellence
          </h2>
          <p className="text-secondary/70 max-w-2xl mx-auto">
            Combining technical expertise with business acumen to drive innovation
            and create impactful solutions.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ExpertiseCard
            icon={<Brain />}
            title="Artificial Intelligence"
            description="Developing cutting-edge AI solutions for real-world challenges"
            delay={0.1}
          />
          <ExpertiseCard
            icon={<Code />}
            title="Technology"
            description="Building scalable and innovative technical solutions"
            delay={0.2}
          />
          <ExpertiseCard
            icon={<TrendingUp />}
            title="Business Strategy"
            description="Creating sustainable growth through strategic planning"
            delay={0.3}
          />
          <ExpertiseCard
            icon={<Lightbulb />}
            title="Innovation"
            description="Transforming ideas into successful ventures"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Expertise;
