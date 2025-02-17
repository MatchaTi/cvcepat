import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { emptyData } from '../constant/emptyData';
import { CVState } from '../type/CV';

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
          data: {
            personalInfo: {
              fullName: 'John Doe',
              designation: 'Software Engineer',
              phone: '1234567890',
              email: 'johndo@gmail.com',
              address: 'Indonesia, Samarinda',
            },
            bio: 'I am a software engineer with 5 years of experience in web development. I am proficient in JavaScript, React, and Node.js.',
            photo: '',
            education: [
              { degree: 'Bachelor of Computer Science', institute: 'University of Indonesia', year: '2015' },
              { degree: 'High School', institute: 'SMA Negeri 1 Samarinda', year: '2011' },
              { degree: 'Elementary School', institute: 'SDN 001 Samarinda', year: '2005' },
              { degree: 'Kindergarten', institute: 'TK Bunda Mulia', year: '2002' },
            ],
            experience: [
              {
                company: 'Google',
                position: 'Software Engineer',
                year: '2019-2021',
                description: 'Worked on the Google Search team.',
              },
              {
                company: 'Facebook',
                position: 'Software Engineer',
                year: '2017-2019',
                description: 'Worked on the Facebook Ads team.',
              },
              {
                company: 'Amazon',
                position: 'Software Engineer',
                year: '2015-2017',
                description: 'Worked on the Amazon Web Services team.',
              },
            ],
            skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML', 'CSS'],
            projects: [
              { projectName: 'Project 1', description: 'Description of project 1' },
              { projectName: 'Project 2', description: 'Description of project 2' },
              { projectName: 'Project 3', description: 'Description of project 3' },
            ],
            socialLinks: {
              facebook: 'John Doe FB',
              github: 'John Doe GH',
              instagram: 'John Doe IG',
              linkedin: 'John Doe LI',
              twitter: 'John Doe X',
            },
          },
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
