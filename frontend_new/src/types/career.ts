export interface CareerPath {
  id: string;
  title: string;
  category: string;
  description: string;
  color: string;
  skills: string[];
  estimatedTime: string;
  requirements?: string[];
}

export interface UserProgress {
  completedModules: number;
  totalModules: number;
  currentLevel: number;
  skills: {
    [key: string]: number;
  };
  certificates: string[];
  lastActive: string;
}
