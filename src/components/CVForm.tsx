import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import Bio from './Bio';
import Education from './Education';
import Experience from './Experience';
import PersonalInformation from './PersonalInformation';
import Photo from './Photo';
import Project from './Project';
import Skill from './Skill';
import SocialMedia from './SocialMedia';

export default function CVForm() {
  return (
    <div id='cvForm' className={clsx('mx-auto h-[297mm] min-h-fit w-full max-w-[210mm] space-y-8 py-6', {})}>
      <section className='flex flex-col gap-1 items-start p-3 alert'>
        <div className='flex gap-1 items-center mb-2'>
          <Icon icon='ci:note-edit' />
          <span>Catatan</span>
        </div>
        <div>Tidak semua data yang ada pada form ditampilkan pada beberapa template!</div>
      </section>

      <PersonalInformation />
      <Photo />
      <Bio />
      <Education />
      <Experience />
      <Skill />
      <Project />
      <SocialMedia />
    </div>
  );
}
