import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const careerService = {
  search: async (query: string) => {
    const response = await api.get(`/careers/search?query=${query}`);
    return response.data;
  },
  
  getAll: async () => {
    const response = await api.get('/careers/all');
    return response.data;
  },
  
  getRecommendations: async (skills: string[], interests: string[]) => {
    const response = await api.post('/careers/recommendations', { skills, interests });
    return response.data;
  },
};

export const aiService = {
  generateContent: async (topic: string, difficulty: string) => {
    const response = await api.post('/ai/generate-content', { topic, difficulty });
    return response.data;
  },
  
  getPersonalizedPlan: async (careerId: string) => {
    const response = await api.post('/ai/learning-plan', { careerId });
    return response.data;
  },
};
