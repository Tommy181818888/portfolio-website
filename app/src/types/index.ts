export interface Project {
  id: string;
  title: string;
  year: string;
  image: string;
  link: string;
  status?: 'wip' | 'new' | 'v2';
  description?: string;
  category: 'work' | 'project';
}

export interface Story {
  id: string;
  title: string;
  date: string;
  category: 'Devlog' | 'Blog' | 'Insight' | 'Traine' | 'Lead' | 'Startup' | 'GoldMedlist' | 'Professional';
  link: string;
}

export interface App {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  link: string;
  color: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Device {
  id: string;
  name: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
