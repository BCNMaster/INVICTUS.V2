import { CareerPath } from '../types/career';

export const CAREER_OPTIONS: CareerPath[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Programming',
    description: 'Build modern web applications with cutting-edge technologies',
    color: '#6366f1',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'SQL', 'Git'],
    estimatedTime: '6 months',
    requirements: ['Basic computer knowledge', 'Problem-solving skills']
  },
  {
    id: 'data-science',
    title: 'Data Science',
    category: 'Information',
    description: 'Extract insights from data to solve complex problems',
    color: '#8b5cf6',
    skills: ['Python', 'Statistics', 'Machine Learning', 'SQL', 'Data Visualization', 'Mathematics'],
    estimatedTime: '8 months',
    requirements: ['Basic mathematics', 'Analytical thinking']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Create beautiful, intuitive interfaces that users love',
    color: '#ec4899',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Figma', 'User Testing'],
    estimatedTime: '6 months',
    requirements: ['Visual creativity', 'Empathy for users']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Master modern marketing strategies and tools',
    color: '#14b8a6',
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics', 'Email Marketing', 'PPC'],
    estimatedTime: '4 months',
    requirements: ['Communication skills', 'Basic marketing concepts']
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineering',
    category: 'Programming',
    description: 'Design and manage scalable cloud infrastructure',
    color: '#0ea5e9',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Linux', 'DevOps', 'Security'],
    estimatedTime: '8 months',
    requirements: ['Basic networking', 'Programming fundamentals']
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    category: 'Programming',
    description: 'Build native and cross-platform mobile applications',
    color: '#f59e0b',
    skills: ['React Native', 'Swift', 'Kotlin', 'Mobile UI/UX', 'API Integration', 'App Store Deployment'],
    estimatedTime: '7 months',
    requirements: ['Programming basics', 'Mobile design principles']
  }
];
