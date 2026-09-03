export type ProjectCategory = 
  | 'ALL'
  | 'PHOTOGRAPHY'
  | 'FILM'
  | 'COMMERCIAL'
  | 'ART'
  | 'EDITORIAL';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  year: string;
  client?: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  creativeDirection: string;
  credits: { role: string; name: string }[];
  videoUrl?: string;
  behindTheScenes?: string[];
  featured?: boolean;
}

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  medium: string;
  year: string;
  dimensions?: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  image: string;
}

export interface AcademyCourse {
  id: string;
  title: string;
  category: string;
  level: string;
  duration: string;
  description: string;
  image: string;
  topics: string[];
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string;
  url: string;
}
