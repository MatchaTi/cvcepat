import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../../store/useCVStore';
import { filterSocialMedia } from '../../util/filterSocialLinks';

export default function LayoutFive() {
  return (
    <main className='relative p-10 pt-14 mx-auto text-sm bg-no-repeat bg-contain shadow-lg bg-base-100 h-[297mm] min-h-fit w-[210mm] space-y-[18px] bg-[url(/header.png)]'>
      <div className='absolute right-0 left-0 top-14 w-full h-40 bg-gradient-to-t from-base-100'></div>
      <div className='relative z-10 mb-10'>
        <Header />
        <Social />
      </div>
      <Education />
      <Experience />
      <Projects />
      <Skills />
    </main>
  );
}

function Header() {
  const { data } = useCVStore();

  return (
    <section className='grid justify-center mb-4 text-center'>
      <section className='space-y-2'>
        {data.photo ? (
          <div className='avatar'>
            <div className='w-16 rounded'>
              <img src={data.photo} alt='avatar' className='object-cover w-full h-full' />
            </div>
          </div>
        ) : null}
        <div>
          <h1 className='text-3xl font-bold'>{data.personalInfo.fullName}</h1>
          <h2 className='mb-4 font-semibold'>{data.personalInfo.designation}</h2>
        </div>
      </section>

      <div className='flex gap-4 items-center font-bold text-base-content'>
        <div className='flex gap-1 items-center'>
          <Icon icon='tdesign:location' />
          <span>{data.personalInfo.address}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <Icon icon='ic:outline-email' />
          <span>{data.personalInfo.email}</span>
        </div>
      </div>
    </section>
  );
}

function Social() {
  const { data } = useCVStore();
  const socials = filterSocialMedia(data.socialLinks);

  return (
    <section className='flex flex-wrap gap-4 justify-center items-center'>
      {socials.map((social, index) => (
        <div key={index} className='badge'>
          <Icon icon={social.icon} />
          <span>{social.link}</span>
        </div>
      ))}
    </section>
  );
}

function Education() {
  const { data } = useCVStore();

  return (
    <section className='grid grid-cols-3 px-6 pb-4 border-b border-base-200'>
      <h3 className='font-bold'>Education</h3>
      <div className='col-span-2 space-y-6'>
        {data.education.map(({ institute, degree, year }, index) => (
          <div key={index} className='space-y-2'>
            <h4 className='font-bold'>
              {institute} {degree && '- ' + degree}
            </h4>
            {year && (
              <p className='flex gap-2 items-center text-xs'>
                <Icon icon='solar:calendar-linear' />
                <span>{year}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { data } = useCVStore();

  return (
    <section className='grid grid-cols-3 px-6 pb-4 border-b border-base-200'>
      <h3 className='font-bold'>Experience</h3>
      <div className='col-span-2 space-y-6'>
        {data.experience.map(({ company, position, year, description }, index) => (
          <div key={index} className='space-y-2'>
            <h4 className='font-bold'>
              {company} {position && '- ' + position}
            </h4>
            {year && (
              <p className='flex gap-2 items-center text-xs'>
                <Icon icon='solar:calendar-linear' />
                <span>{year}</span>
              </p>
            )}
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const { data } = useCVStore();

  return (
    <section className='grid grid-cols-3 px-6 pb-4 border-b border-base-200'>
      <h3 className='font-bold'>Projects & Awards</h3>
      <div className='col-span-2 space-y-6'>
        {data.projects.map(({ projectName, description }, index) => (
          <div key={index} className='space-y-2'>
            <h4 className='font-bold'>{projectName}</h4>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const { data } = useCVStore();

  return (
    <section className='grid grid-cols-3 px-6 pb-4 border-b border-base-200'>
      <h3 className='font-bold'>Skills</h3>
      <div className='flex flex-wrap col-span-2 gap-2 items-center'>
        {data.skills.map((skill, index) => (
          <div key={index} className='badge'>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
