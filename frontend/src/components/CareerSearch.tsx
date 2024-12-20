'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareerSearch() {
  const [query, setQuery] = useState('');
  const [careers, setCareers] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    try {
      const response = await fetch(`/api/careers/search?query=${searchQuery}`);
      const data = await response.json();
      setCareers(data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for a career path..."
          className="w-full p-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 text-white"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            handleSearch(e.target.value);
          }}
        />
        
        <button
          className="absolute right-4 top-4 text-white/60 hover:text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Hide All' : 'Show All'}
        </button>
      </div>

      <AnimatePresence>
        {(query || showAll) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2"
          >
            {careers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
