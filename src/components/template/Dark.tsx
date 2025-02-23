import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { socialMediaIcons } from '../../constant/SocialMediaIcons';
import { useCVStore } from '../../store/useCVStore';

export default function Dark() {
  const { data } = useCVStore();

  return (
    <main className='bg-dark-base shadow-dark-content/10 mx-auto h-[297mm] min-h-fit w-[210mm] bg-[url(/dark-bg.png)] bg-contain bg-no-repeat px-16 shadow'>
      <section className='w-full pt-12 text-center'>
        <h2 className='text-dark-content-darker mb-1 text-5xl font-bold text-balance'>{data.personalInfo.fullName}</h2>
        <h3 className='mb-5 text-xs'>{data.personalInfo.designation}</h3>
        <div className='text-dark-content-darker flex items-center justify-center gap-2 text-xs'>
          <div className='flex items-center gap-[2px]'>
            <Icon icon='mdi:location' />
            <span>{data.personalInfo.address}</span>
          </div>
          <div className='flex items-center gap-[2px]'>
            <Icon icon='ic:baseline-email' />
            <span>{data.personalInfo.email}</span>
          </div>
        </div>
        <div className='mt-4 flex items-center justify-center gap-1 text-xs'>
          {Object.entries(data.socialLinks).map((key, index) => (
            <div
              key={index}
              className={clsx('flex items-center gap-[2px] rounded-full border bg-white px-2 py-1', {
                'border-blue-500 text-blue-500': key[0] === 'facebook',
                'border-black text-black': key[0] === 'github',
                'border-pink-500 text-pink-500': key[0] === 'instagram',
                'border-sky-500 text-sky-500': key[0] === 'linkedin',
                'border-cyan-500 text-cyan-500': key[0] === 'twitter',
              })}
            >
              <Icon icon={socialMediaIcons[index]} />
              <span>{key[1]}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='border-dark-content/10 mt-20 grid grid-cols-4 gap-5 border-b'>
        <div className='font-bold'>Education</div>
        <div className='col-span-3'>
          {data.education.map(({ institute, degree, year }, index) => (
            <div key={index} className='mb-3 space-y-2'>
              <div>
                <span className='font-bold'>{institute}</span> — <span>{degree}</span>
              </div>
              <div className='font-inconsolata flex items-center gap-1 text-xs'>
                <Icon icon='famicons:calendar-outline' />
                <span>{year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='border-dark-content/10 mt-4 grid grid-cols-4 gap-5 border-b'>
        <div className='font-bold'>Experience</div>
        <div className='col-span-3'>
          {data.experience.map(({ company, position, year, description }, index) => (
            <div key={index} className='mb-5 space-y-2'>
              <div>
                <span className='font-bold'>{company}</span> — <span>{position}</span>
              </div>
              <div className='font-inconsolata flex items-center gap-1 text-sm'>
                <Icon icon='famicons:calendar-outline' />
                <span>{year}</span>
              </div>
              <div className='text-sm'>{description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className='border-dark-content/10 mt-4 grid grid-cols-4 gap-5 border-b'>
        <div className='font-bold'>Projects & Awards</div>
        <div className='col-span-3'>
          {data.projects.map(({ projectName, description }, index) => (
            <div key={index} className='mb-5'>
              <div className='mb-2'>
                <span className='font-bold'>{projectName}</span>
              </div>
              <div className='text-sm'>{description}</div>
            </div>
          ))}
        </div>
      </section>

      <section className='border-dark-content/10 mt-4 grid grid-cols-4 gap-5 border-b'>
        <div className='font-bold'>Skills & Tools</div>
        <div className='col-span-3 flex items-center gap-3'>
          {data.skills.map((skill, index) => (
            <div key={index} className='bg-dark-accent mb-5 rounded-[3px] px-[3px] py-0.5 font-bold'>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
