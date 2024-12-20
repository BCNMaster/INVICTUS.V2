'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { CareerPath, UserProgress } from '../types/career';

interface DashboardProps {
  careerPath: CareerPath;
  userProgress?: UserProgress;
}

export default function Dashboard({ careerPath, userProgress }: DashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">{careerPath.title}</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Your Progress</h2>
            {/* Progress content will go here */}
          </div>

          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Next Steps</h2>
            {/* Next steps content will go here */}
          </div>

          <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Resources</h2>
            {/* Resources content will go here */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
