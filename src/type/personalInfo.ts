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
    linkedin?: { name: string; url: string };
    github?: { name: string; url: string };
    twitter?: { name: string; url: string };
    facebook?: { name: string; url: string };
    instagram?: { name: string; url: string };
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
