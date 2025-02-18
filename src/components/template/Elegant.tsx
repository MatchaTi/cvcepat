import { Icon } from '@iconify/react/dist/iconify.js';
import { socialMediaIcons } from '../../constant/SocialMediaIcons';
import { useCVStore } from '../../store/useCVStore';

export default function Elegant() {
  const { data } = useCVStore();

  return (
    <main className='bg-elegant-base shadow-elegant-content/10 mx-auto h-[297mm] min-h-fit w-[210mm] p-10 shadow'>
      <h2 className='font-spectral text-elegant-content-darker mb-2 text-3xl font-medium'>
        {data.personalInfo.fullName}
      </h2>
      <h3 className='text-salmon-custom mb-4 text-xs font-bold tracking-widest uppercase'>
        {data.personalInfo.designation}
      </h3>

      <section className='mb-10 flex flex-wrap items-center gap-4 text-[10px]'>
        <div className='flex items-center gap-1'>
          <Icon icon='mynaui:location' />
          <span>{data.personalInfo.address}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Icon icon='solar:phone-linear' />
          <span>{data.personalInfo.phone}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Icon icon='mdi:email-outline' />
          <span>{data.personalInfo.email}</span>
        </div>
        {Object.entries(data.socialLinks).map((key, index) => (
          <div key={index} className='flex items-center gap-1'>
            <Icon icon={socialMediaIcons[index]} />
            <span>{key[1]}</span>
          </div>
        ))}
      </section>

      <section className='bg-elegant-accent font-spectral mb-10 rounded-xl p-4 font-light -tracking-wider'>
        {data.bio}
      </section>

      <section className='mb-10 space-y-4'>
        <h3 className='text-salmon-custom mb-4 text-xs font-bold tracking-widest uppercase'>Experience</h3>
        {data.experience.map(({ company, position, year, description }, index) => (
          <div key={index} className='border-elegant-accent border-b pb-3'>
            <div className='mb-3 grid grid-cols-5 gap-3'>
              <div className='font-spectral text-elegant-content-darker col-span-3 text-xl font-bold italic'>
                {position}
              </div>
              <div className='flex items-center gap-1 text-xs font-light'>
                <Icon icon='streamline:baggage' />
                <span className='mt-1'>{company}</span>
              </div>
              <div className='flex items-center justify-end gap-1 text-xs font-light'>
                <Icon icon='clarity:calendar-line' />
                <span>{year}</span>
              </div>
            </div>
            <div className='leading-tight'>{description}</div>
          </div>
        ))}
      </section>

      <div className='grid grid-cols-2 gap-10'>
        <section>
          <h3 className='text-salmon-custom mb-4 text-xs font-bold tracking-widest uppercase'>Skills</h3>
          <div className='grid grid-cols-2 gap-3'>
            {data.skills.map((skill, index) => (
              <div key={index} className='font-spectral text-elegant-content-darker text-xl font-bold italic'>
                {skill}
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className='text-salmon-custom mb-4 text-xs font-bold tracking-widest uppercase'>Education</h3>
          <div>
            {data.education.map(({ degree, institute, year }, index) => (
              <div key={index} className='border-elegant-accent border-b pb-3'>
                <div className='font-spectral text-elegant-content-darker mb-3 text-xl font-bold italic'>
                  {institute}
                </div>
                <div className='space-y-2 leading-tight font-light'>
                  <div className='flex items-center gap-1'>
                    <Icon icon='ion:book-outline' />
                    <span>{degree}</span>
                  </div>
                  <div className='flex items-center gap-1 text-xs'>
                    <Icon icon='clarity:calendar-line' />
                    <span>{year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
