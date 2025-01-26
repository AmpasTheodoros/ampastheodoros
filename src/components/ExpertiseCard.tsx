'use client';

import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-secondary backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="text-primary mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold text-background mb-2">{title}</h3>
      <p className="text-background/70">{description}</p>
    </motion.div>
  );
};

export default ExpertiseCard;
