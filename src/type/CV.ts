import { PersonalInfoType } from './personalInfo';

export interface CVState {
  data: PersonalInfoType;
  setData: (newData: Partial<PersonalInfoType>) => void;
  addEducation: () => void;
  updateEducation: (index: number, field: string, value: string) => void;
  removeEducation: (index: number) => void;
  addExperience: () => void;
  updateExperience: (index: number, field: string, value: string) => void;
  removeExperience: (index: number) => void;
  addSkill: () => void;
  updateSkill: (index: number, value: string) => void;
  removeSkill: (index: number) => void;
  addProject: () => void;
  updateProject: (index: number, field: string, value: string) => void;
  removeProject: (index: number) => void;
}
