'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import CareerSearch from '../components/CareerSearch';
import Dashboard from '../components/Dashboard';
import { CAREER_OPTIONS } from '../constants/careerOptions';
import type { CareerPath, UserProgress } from '../types/career';

export default function Home() {
  const [showAllPaths, setShowAllPaths] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerPath | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1a1d23]">
      {/* Content */}
      <div className="relative z-10">
        <header className="px-8 py-6">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500" />
              <span className="text-xl font-medium text-white">Invictus</span>
            </motion.div>
          </nav>
        </header>

        <main className="px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Choose Your Path
              </h1>
              <p className="text-white/60 text-lg">
                Select a career path you'd like to explore
              </p>
            </motion.div>

            <CareerSearch 
              showAll={showAllPaths}
              onToggleShowAll={() => setShowAllPaths(!showAllPaths)}
              onSelectCareer={(career) => {
                setSelectedCareer(career);
                setShowDashboard(true);
              }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
