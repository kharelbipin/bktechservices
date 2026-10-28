export type ServiceCategory = 
  | 'custom-business-apps'
  | 'ecommerce-stores'
  | 'pos-inventory'
  | 'cloud-infrastructure'
  | 'websites-portals'
  | 'automation-api';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  businessBenefits: string[];
  engagementModel: string;
  timeline: string;
  iconName: 'Code' | 'ShoppingCart' | 'Cloud' | 'Store' | 'Workflow' | 'Globe';
  conceptualPreviewType: 'dashboard' | 'ecommerce' | 'pos' | 'cloud' | 'portal' | 'pipeline';
}

export type CaseStudyCategory = 'E-Commerce' | 'Retail POS' | 'Cloud Solutions' | 'Enterprise Applications';

export interface CaseStudyMetric {
  metric: string;
  label: string;
  context: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  category: CaseStudyCategory;
  summary: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  outcomes: CaseStudyMetric[];
  techStack: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
  duration: string;
  platform: string;
}

export interface TechStackItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Database' | 'DevOps';
  description: string;
  popularityTag: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  quote: string;
  rating: number;
  verified: boolean;
}

export interface HowWeWorkStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface BlogPostSection {
  sectionTitle: string;
  paragraphs: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  keyTakeaways?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Software Development' | 'Cloud Computing' | 'Business Automation' | 'Technology Trends';
  publishedDate: string;
  readTime: string;
  excerpt: string;
  sections: BlogPostSection[];
  author: {
    name: string;
    role: string;
    avatarInitials: string;
  };
  tags: string[];
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  budgetRange: string;
  timeline: string;
  projectBrief: string;
  preferredConsultationDate?: string;
  submittedAt: string;
}
