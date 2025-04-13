import clsx from 'clsx';
import { useCVStore } from '../../store/useCVStore';

export default function LayoutOne() {
  const { data } = useCVStore();

  return (
    <main className='p-10 mx-auto text-sm shadow-lg bg-base-100 h-[297mm] min-h-fit w-[210mm] space-y-[18px]'>
      <section className='flex gap-4 items-center pb-4 border-b'>
        {data.photo ? (
          <div className='overflow-hidden w-16 h-16'>
            <img src={data.photo} alt='avatar' className='object-cover w-full h-full' />
          </div>
        ) : null}

        <div className={clsx({ 'text center flex w-full flex-col items-center': !data.photo })}>
          <h2 className='mb-2 text-3xl font-bold uppercase textcenter text-balance'>{data.personalInfo.fullName}</h2>

          <div className='flex gap-3 justify-center items-center'>
            <div>{data.personalInfo.address}</div>
            <div className='w-1 h-1 rounded-full bg-base-200'></div>
            <div>{data.personalInfo.email}</div>
            <div className='w-1 h-1 rounded-full bg-base-200'></div>
            <div>{data.personalInfo.phone}</div>
          </div>
        </div>
      </section>

      <section>
        <h3 className='pb-2 mb-3 font-bold uppercase border-b'>Bio</h3>
        <p className='text-justify'>{data.bio}</p>
      </section>

      <section>
        <h3 className='pb-2 mb-3 font-bold uppercase border-b'>Education</h3>
        {data.education.map(({ institute, degree, year }, index) => (
          <div key={index} className='flex gap-3 justify-between items-center mb-1'>
            <div className='flex gap-1 items-center'>
              <div className='ml-2 w-1 h-1 rounded-full bg-base-200'></div>
              <div className='font-bold'>{institute},</div>
              <div className='italic'>{degree}</div>
            </div>
            <div className='self-end'>{year}</div>
          </div>
        ))}
      </section>

      <section>
        <h3 className='pb-2 mb-3 font-bold uppercase border-b'>Experience</h3>
        {data.experience.map(({ company, position, description, year }, index) => (
          <div key={index} className='mb-3'>
            <div className='flex justify-between items-center mb-[6px]'>
              <div className='flex gap-1 items-center'>
                <div className='font-bold'>{company},</div>
                <div className='italic'>{position}</div>
              </div>
              <div>{year}</div>
            </div>
            <div className='flex gap-1'>
              <div className='mt-2 ml-2 h-1 rounded-full bg-base-200 min-w-1'></div>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className='pb-2 mb-3 font-bold uppercase border-b'>Projects & Awards</h3>
        {data.projects.map(({ projectName, description }, index) => (
          <div key={index} className='mb-3 space-y-[6px]'>
            <div className='flex flex-wrap gap-1 items-center'>
              <div className='ml-2 w-1 h-1 rounded-full bg-base-200'></div>
              <p className='font-bold'>{projectName}</p>
            </div>
            <p className='ml-4 italic'>{description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className='pb-2 mb-3 font-bold uppercase border-b'>Skills</h3>
        <div className='grid grid-cols-4'>
          {data.skills.map((skill, index) => (
            <div key={index} className='flex gap-1 items-center'>
              <div className='ml-2 w-1 h-1 rounded-full bg-base-200'></div>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
