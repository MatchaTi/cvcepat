import { SocialLinks } from './social';

export interface PersonalInfoType {
  personalInfo: {
    fullName: string;
    designation: string;
    phone: string;
    email: string;
    address: string;
  };
  bio: string;
  photo?: string;
  socialLinks: SocialLinks;
  education: Array<{
    degree: string;
    institute: string;
    year: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    year: string;
    description: string;
  }>;
  skills: Array<string>;
  projects: Array<{ projectName: string; description: string }>;
}
