import { useCVStore } from '../../store/useCVStore';
import { Icon } from '@iconify/react/dist/iconify.js';
import { filterSocialMedia } from '../../util/filterSocialLinks';

export default function LayoutTwo() {
  const { data } = useCVStore();

  const socials = filterSocialMedia(data.socialLinks);

  return (
    <main className='p-10 mx-auto text-sm shadow-lg bg-base-100 h-[297mm] min-h-fit w-[210mm] space-y-[18px]'>
      <h1 className='text-3xl font-bold'>{data.personalInfo.fullName}</h1>
      <h2 className='font-semibold text-primary'>{data.personalInfo.designation}</h2>

      <section className='flex flex-wrap gap-4 items-center text-xs'>
        <div className='flex gap-1 items-center'>
          <Icon icon='mynaui:location' />
          <span>{data.personalInfo.address}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <Icon icon='solar:phone-linear' />
          <span>{data.personalInfo.phone}</span>
        </div>
        <div className='flex gap-1 items-center'>
          <Icon icon='mdi:email-outline' />
          <span>{data.personalInfo.email}</span>
        </div>
        {socials.map((item, index) => (
          <div key={index} className='flex gap-1 items-center'>
            <Icon icon={item!.icon} />
            <span>{item?.link}</span>
          </div>
        ))}
      </section>

      <section className='alert alert-soft'>{data.bio}</section>

      <section className='space-y-4'>
        <h2 className='font-semibold text-primary'>Experience</h2>
        {data.experience.map(({ position, company, year, description }, index) => (
          <div key={index} className='pb-3 space-y-3 border-b border-base-200'>
            <div className='grid grid-cols-4'>
              <h3 className='col-span-2 text-xl italic font-bold'>{position}</h3>
              <p className='flex gap-1 items-center'>
                <Icon icon='lucide:briefcase' />
                <span>{company}</span>
              </p>
              <p className='flex gap-1 items-center'>
                <Icon icon='solar:calendar-outline' />
                <span>{year}</span>
              </p>
            </div>
            <div className='text-justify'>{description}</div>
          </div>
        ))}
      </section>

      <div className='grid grid-cols-2'>
        <section className='space-y-4'>
          <h2 className='font-semibold text-primary'>Skilss</h2>
          <div className='grid grid-cols-2 gap-3'>
            {data.skills.map((skill, index) => (
              <div key={index} className='italic'>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='font-semibold text-primary'>Education</h2>
          {data.education.map(({ institute, degree, year }, index) => (
            <div key={index} className='pb-3 space-y-3 border-b border-base-200'>
              <h3 className='col-span-2 text-xl italic font-bold'>{degree}</h3>
              <div className='flex justify-between items-center'>
                <p className='flex gap-1 items-center'>
                  <Icon icon='lucide:book-open' />
                  <span>{institute}</span>
                </p>
                <p className='flex gap-1 items-center'>
                  <Icon icon='solar:calendar-outline' />
                  <span>{year}</span>
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
