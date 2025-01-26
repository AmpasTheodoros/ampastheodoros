'use client';

import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background px-4">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-secondary" />

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Welcome Badge */}
          <span className="px-4 py-2 bg-primary/10 rounded-full text-background text-sm font-medium mb-6 inline-block">
            Welcome
          </span>

          {/* Hero Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-background mb-6">
            Theodor Ampas
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-background/80 max-w-2xl mx-auto mb-8">
            Mentor | Developer | Business Innovator
          </p>

          {/* Call-to-Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
