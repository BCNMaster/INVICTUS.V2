'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAREER_OPTIONS } from '../constants/careerOptions';
import type { CareerPath } from '../types/career';

interface CareerSearchProps {
  showAll: boolean;
  onToggleShowAll: () => void;
  onSelectCareer: (career: CareerPath) => void;
}

export default function CareerSearch({ 
  showAll, 
  onToggleShowAll, 
  onSelectCareer 
}: CareerSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCareers, setFilteredCareers] = useState<CareerPath[]>([]);

  useEffect(() => {
    if (showAll) {
      setFilteredCareers(CAREER_OPTIONS);
    } else if (searchQuery) {
      const filtered = CAREER_OPTIONS.filter(career => 
        career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        career.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCareers(filtered);
    } else {
      setFilteredCareers([]);
    }
  }, [searchQuery, showAll]);

  return (
    <div className="space-y-8">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search for a career path..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={onToggleShowAll}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
        >
          {showAll ? 'Hide All' : 'Show All'}
        </button>
      </div>

      <AnimatePresence>
        <motion.div
          layout
          className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredCareers.map((career) => (
            <motion.div
              key={career.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="group cursor-pointer"
              onClick={() => onSelectCareer(career)}
            >
              <div 
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-purple-500/50 transition-colors"
                style={{ 
                  background: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.1)), ${career.color}20` 
                }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{career.title}</h3>
                <p className="text-white/60 mb-4">{career.description}</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                  {career.skills.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white/80">
                      +{career.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
