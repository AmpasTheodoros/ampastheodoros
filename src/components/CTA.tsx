'use client';

import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-secondary/95" />

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <span className="px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 inline-block">
            Let&apos;s Connect
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>

          {/* Subtext */}
          <p className="text-white/80 mb-8 text-lg">
            Schedule a call to discuss how we can work together to achieve your goals.
          </p>

          {/* Call-to-Action Button */}
          <motion.a
            href="#schedule"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
