import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useThemeStore } from '../store/useThemeStore';
import Bio from './Bio';
import Education from './Education';
import Experience from './Experience';
import PersonalInformation from './PersonalInformation';
import Project from './Project';
import Skill from './Skill';
import SocialMedia from './SocialMedia';

export default function CVForm() {
  const { theme } = useThemeStore();

  return (
    <div
      className={clsx('mx-auto h-[297mm] min-h-fit w-full max-w-[210mm] space-y-8 p-6', {
        'bg-retro-base text-retro-content shadow-retro-content/10 shadow': theme === 'retro',
      })}
    >
      <section className='border-retro-content/20 rounded-xl border p-3'>
        <div className='mb-2 flex items-center gap-1'>
          <Icon icon='ci:note-edit' />
          <span>Catatan</span>
        </div>
        <div className={clsx({ 'font-inter text-sm': theme === 'retro' })}>
          Tidak semua data yang ada pada form ditampilkan pada beberapa template!
        </div>
      </section>

      <PersonalInformation />
      <Bio />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <SocialMedia />
    </div>
  );
}
