import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../../store/useCVStore';
import { filterSocialMedia } from '../../util/filterSocialLinks';

export default function LayoutThree() {
  const { data } = useCVStore();

  const socials = filterSocialMedia(data.socialLinks);

  return (
    <main className='overflow-hidden relative p-10 pt-14 mx-auto text-sm shadow-lg bg-base-100 h-[297mm] min-h-fit w-[210mm] space-y-[18px]'>
      <img src='/circle-1.png' alt='circle-1' className='absolute top-0 right-0 -translate-y-3/5' />
      <img src='/circle-2.png' alt='circle-2' className='absolute bottom-0 left-0 translate-y-3/5' />
      <div className='space-y-1'>
        <h1 className='text-3xl font-bold'>{data.personalInfo.fullName}</h1>
        <h2>{data.personalInfo.designation}</h2>
      </div>

      <section className='pb-4 space-y-4 border-b border-base-200'>
        <h3 className='flex gap-2 items-center text-lg font-bold text-success'>
          <Icon icon='mdi:about-variant' />
          <span>About</span>
        </h3>
        <p className='leading-relaxed text-justify'>{data.bio}</p>
      </section>

      <section className='pb-4 space-y-4 border-b border-base-200'>
        <h3 className='flex gap-2 items-center text-lg font-bold text-info'>
          <Icon icon='tdesign:education-filled' />
          <span>Education</span>
        </h3>
        {data.education.map(({ degree, institute, year }, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='space-y-1'>
              <div className='font-bold'>{institute}</div>
              <div>{degree}</div>
            </div>
            <div>{year}</div>
          </div>
        ))}
      </section>

      <section className='pb-4 space-y-4 border-b border-base-200'>
        <h3 className='flex gap-2 items-center text-lg font-bold text-secondary'>
          <Icon icon='mingcute:briefcase-fill' />
          <span>Experience</span>
        </h3>
        {data.experience.map(({ position, company, year }, index) => (
          <div key={index} className='flex justify-between items-center'>
            <div className='space-y-1'>
              <div className='font-bold'>{company}</div>
              <div>{position}</div>
            </div>
            <div>{year}</div>
          </div>
        ))}
      </section>

      <div className='grid grid-cols-2 gap-6'>
        <section className='pb-4 space-y-4'>
          <h3 className='flex gap-2 items-center text-lg font-bold text-accent'>
            <Icon icon='gravity-ui:target-dart' />
            <span>Skill</span>
          </h3>
          <ul className='grid grid-cols-2 gap-2'>
            {data.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className='pb-4 space-y-4 border-b border-base-200'>
          <h3 className='flex gap-2 items-center text-lg font-bold text-warning'>
            <Icon icon='mdi:pencil-box' />
            <span>Projects & Awards</span>
          </h3>
          {data.projects.map(({ projectName, description }, index) => (
            <div key={index} className='space-y-1'>
              <div className='font-bold'>{projectName}</div>
              <div>{description}</div>
            </div>
          ))}
        </section>
      </div>

      <div className='grid grid-cols-2 gap-6'>
        <div></div>
        <section className='pb-4 space-y-4'>
          <h3 className='flex gap-2 items-center text-lg font-bold text-error'>
            <Icon icon='ri:share-line' />
            <span>Social</span>
          </h3>
          {socials.map((item, index) => (
            <div key={index} className='flex gap-1 items-center'>
              <Icon icon={item!.icon} />
              <span>{item?.link}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
