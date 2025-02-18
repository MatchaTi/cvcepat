import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { emptyData } from '../constant/emptyData';
import { CVState } from '../type/CV';
import { getDummyData } from '../util/dummy';

export const useCVStore = create<CVState>()(
  persist(
    (set) => ({
      data: emptyData,
      isDummyData: false,
      toggleDummy: () => set((state) => ({ isDummyData: !state.isDummyData })),
      setData: (newData) =>
        set((state) => ({
          data: { ...state.data, ...newData },
        })),
      setDummyData: () => {
        set(() => ({
          data: getDummyData(),
        }));
      },
      clearData: () => {
        set(() => ({ data: emptyData }));
      },
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
      addExperience: () => {
        set((state) => ({
          data: {
            ...state.data,
            experience: [...state.data.experience, { company: '', position: '', year: '', description: '' }],
          },
        }));
      },
      updateExperience: (index, field, value) => {
        set((state) => {
          const newExperience = [...state.data.experience];
          newExperience[index] = { ...newExperience[index], [field]: value };

          return { data: { ...state.data, experience: newExperience } };
        });
      },
      removeExperience: (index) => {
        set((state) => {
          const newExperience = state.data.experience.filter((_, i) => i !== index);
          return { data: { ...state.data, experience: newExperience } };
        });
      },
      addSkill: () => {
        set((state) => ({
          data: {
            ...state.data,
            skills: [...state.data.skills, ''],
          },
        }));
      },
      updateSkill: (index, value) => {
        set((state) => {
          const newSkills = [...state.data.skills];
          newSkills[index] = value;

          return { data: { ...state.data, skills: newSkills } };
        });
      },
      removeSkill: (index) => {
        set((state) => {
          const newSkills = state.data.skills.filter((_, i) => i !== index);
          return { data: { ...state.data, skills: newSkills } };
        });
      },
      addProject: () => {
        set((state) => ({
          data: {
            ...state.data,
            projects: [...state.data.projects, { projectName: '', description: '' }],
          },
        }));
      },
      updateProject: (index, field, value) => {
        set((state) => {
          const newProjects = [...state.data.projects];
          newProjects[index] = { ...newProjects[index], [field]: value };

          return { data: { ...state.data, projects: newProjects } };
        });
      },
      removeProject: (index) => {
        set((state) => {
          const newProjects = state.data.projects.filter((_, i) => i !== index);
          return { data: { ...state.data, projects: newProjects } };
        });
      },
    }),
    {
      name: 'cv-data',
    },
  ),
);
