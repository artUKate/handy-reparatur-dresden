export interface ServiceDefect {
  id: string;
  title: string;
  category: 'smartphone' | 'laptop' | 'all';
  description: string;
  duration: string;
  priceFrom: number;
  highlight?: string;
  popular?: boolean;
  image?: string;
}

export interface DeviceBrand {
  name: string;
  category: string;
  modelsCount: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  device: string;
  text: string;
  verified: boolean;
  tag: 'iPhone' | 'Samsung' | 'Laptop' | 'Wasserschaden' | 'Express';
}

export interface CaseStudyError {
  id: number;
  title: string;
  before: string;
  problem: string;
  solution: string;
  after: string;
  impact: string;
}

export interface PriceEstimate {
  deviceType: string;
  brand: string;
  defect: string;
  priceRange: string;
  duration: string;
  warranty: string;
}
