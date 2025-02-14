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
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  education: Array<{
    degree: string;
    institute: string;
    year: string;
  }>;
  experience?: Array<{
    company: string;
    position: string;
    year: string;
  }>;
  skills: Array<string>;
  projects: Array<{ projectName: string; description: string; link?: string }>;
}
