import { useCVStore } from '../../store/useCVStore';
import { filterSocialMedia } from '../../util/filterSocialLinks';

export default function LayoutFour() {
  const { data } = useCVStore();

  return (
    <main className='grid grid-cols-3 gap-5 p-10 pt-14 mx-auto text-sm shadow-lg bg-base-100 h-[297mm] min-h-fit w-[210mm] space-y-[18px]'>
      <div className='space-y-5'>
        <section className='space-y-4'>
          <div className='flex justify-between items-center pb-1 border-b'>
            <h3>Bio</h3>
            <span>01</span>
          </div>
          <p className='leading-relaxed'>{data.bio}</p>
        </section>
        <Social />
      </div>

      <div className='col-span-2 space-y-5'>
        <div className='col-span-2'>
          <h1 className='text-3xl font-bold'>
            {data.personalInfo.fullName}, {data.personalInfo.designation}
          </h1>
        </div>

        <div className='grid grid-cols-2 gap-5'>
          <Experience />
          <div className='space-y-5'>
            <Skills />
            <Education />
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}

function Social() {
  const { data } = useCVStore();
  const socials = filterSocialMedia(data.socialLinks);

  return (
    <section className='space-y-4'>
      <div className='flex justify-between items-center pb-1 border-b'>
        <h3>Socials</h3>
        <span>02</span>
      </div>
      <ul className='space-y-2'>
        {socials.map(({ name, link }, index) => (
          <li key={index}>
            <span className='capitalize'>{name}</span>
            <span>/</span>
            <span>{link}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Experience() {
  const { data } = useCVStore();

  return (
    <section className='space-y-4'>
      <div className='flex justify-between items-center pb-1 border-b'>
        <h3>Experience</h3>
        <span>03</span>
      </div>
      {data.experience.map(({ year, company, position, description }, index) => (
        <div key={index} className='space-y-1'>
          <div className='text-xs'>{year}</div>
          <div className='text-lg font-bold'>
            {company} - {position}
          </div>
          <div className='leading-relaxed'>{description}</div>
        </div>
      ))}
    </section>
  );
}

function Skills() {
  const { data } = useCVStore();

  return (
    <section className='space-y-4'>
      <div className='flex justify-between items-center pb-1 border-b'>
        <h3>Skills</h3>
        <span>04</span>
      </div>
      <ul className='grid grid-cols-2 gap-2'>
        {data.skills.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Education() {
  const { data } = useCVStore();

  return (
    <section className='space-y-4'>
      <div className='flex justify-between items-center pb-1 border-b'>
        <h3>Education</h3>
        <span>05</span>
      </div>
      {data.education.map(({ year, institute, degree }, index) => (
        <div key={index} className='space-y-1'>
          <div className='text-xs'>{year}</div>
          <div className='text-lg font-bold'>{institute}</div>
          <div>{degree}</div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  const { data } = useCVStore();

  return (
    <section className='space-y-4'>
      <div className='flex justify-between items-center pb-1 border-b'>
        <h3>Projects & Awards</h3>
        <span>06</span>
      </div>
      {data.projects.map(({ projectName, description }, index) => (
        <div key={index} className='space-y-1'>
          <div className='text-lg font-bold'>{projectName}</div>
          <div>{description}</div>
        </div>
      ))}
    </section>
  );
}
