import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PersonalInfoType } from '../type/personalInfo';

interface CVState {
  data: PersonalInfoType;
  setData: (newData: Partial<PersonalInfoType>) => void;
  addEducation: () => void;
  updateEducation: (index: number, field: string, value: string) => void;
  removeEducation: (index: number) => void;
}

export const useCVStore = create<CVState>()(
  persist(
    (set) => ({
      data: {
        personalInfo: {
          fullName: 'Adi',
          designation: '',
          phone: '',
          email: '',
          address: '',
        },
        bio: '',
        photo: '',
        socialLinks: {
          facebook: { name: '', url: '' },
          github: { name: '', url: '' },
          instagram: { name: '', url: '' },
          linkedin: { name: '', url: '' },
          twitter: { name: '', url: '' },
        },
        education: [],
        experience: [],
        skills: [],
        projects: [],
      },
      setData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),
      addEducation: () => {
        set((state) => ({
          data: {
            ...state.data,
            education: [...state.data.education, { institute: '', degree: '', year: '' }],
          },
        }));
      },
      updateEducation: (index, field, value) => {
        set((state) => {
          const newEducation = [...state.data.education];
          newEducation[index] = { ...newEducation[index], [field]: value };

          return { data: { ...state.data, education: newEducation } };
        });
      },
      removeEducation: (index) => {
        set((state) => {
          const newEducation = state.data.education.filter((_, i) => i !== index);
          return { data: { ...state.data, education: newEducation } };
        });
      },
    }),
    {
      name: 'cv-data',
    },
  ),
);
