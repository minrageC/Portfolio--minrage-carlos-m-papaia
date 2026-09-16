export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'brush' | 'bar_chart' | 'terminal' | 'layers' | 'zap';
  features: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
}

