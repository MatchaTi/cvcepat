import { useCVStore } from '../../store/useCVStore';

export default function Formal() {
  const { data } = useCVStore();

  return (
    <main className='bg-formal-base shadow-formal-content/10 mx-auto h-[297mm] min-h-fit w-[210mm] space-y-[18px] p-10 text-sm shadow'>
      <section className='border-b'>
        <h2 className='mx-auto max-w-96 text-center text-3xl font-bold text-balance uppercase'>
          {data.personalInfo.fullName}
        </h2>
        <div className='flex items-center justify-center gap-3'>
          <div>{data.personalInfo.address}</div>
          <div className='h-1 w-1 rounded-full bg-black'></div>
          <div>{data.personalInfo.email}</div>
          <div className='h-1 w-1 rounded-full bg-black'></div>
          <div>{data.personalInfo.phone}</div>
        </div>
      </section>

      <section>
        <h3 className='mb-3 border-b font-bold uppercase'>Bio</h3>
        <p className='text-justify'>{data.bio}</p>
      </section>

      <section>
        <h3 className='mb-3 border-b font-bold uppercase'>Education</h3>
        {data.education.map(({ institute, degree, year }, index) => (
          <div key={index} className='mb-1 flex items-center justify-between gap-3'>
            <div className='flex items-center gap-1'>
              <div className='ml-2 h-1 w-1 rounded-full bg-black'></div>
              <div className='font-bold'>{institute},</div>
              <div className='italic'>{degree}</div>
            </div>
            <div className='self-end'>{year}</div>
          </div>
        ))}
      </section>

      <section>
        <h3 className='mb-3 border-b font-bold uppercase'>Experience</h3>
        {data.experience.map(({ company, position, description, year }, index) => (
          <div key={index} className='mb-3'>
            <div className='mb-[6px] flex items-center justify-between'>
              <div className='flex items-center gap-1'>
                <div className='font-bold'>{company},</div>
                <div className='italic'>{position}</div>
              </div>
              <div>{year}</div>
            </div>
            <div className='flex gap-1'>
              <div className='mt-2 ml-2 h-1 min-w-1 rounded-full bg-black'></div>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </section>

      <section>
        <h3 className='mb-3 border-b font-bold uppercase'>Projects & Awards</h3>
        {data.projects.map(({ projectName, description }, index) => (
          <div key={index} className='mb-3 space-y-[6px]'>
            <div className='flex flex-wrap items-center gap-1'>
              <div className='ml-2 h-1 w-1 rounded-full bg-black'></div>
              <p className='font-bold'>{projectName}</p>
            </div>
            <p className='ml-4 italic'>{description}</p>
          </div>
        ))}
      </section>

      <section>
        <h3 className='mb-3 border-b font-bold uppercase'>Skills</h3>
        <div className='grid grid-cols-4'>
          {data.skills.map((skill, index) => (
            <div key={index} className='flex items-center gap-1'>
              <div className='ml-2 h-1 w-1 rounded-full bg-black'></div>
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
