import { Icon } from '@iconify/react/dist/iconify.js';
import { socialMediaIcons } from '../../constant/SocialMediaIcons';
import { useCVStore } from '../../store/useCVStore';

export default function Retro() {
  const { data } = useCVStore();

  return (
    <section className='bg-retro-base shadow-retro-content/10 mx-auto grid h-[297mm] min-h-fit w-[210mm] grid-cols-6 gap-5 px-6 py-16 shadow'>
      <section className='col-span-2 space-y-5'>
        <div className='border-retro-content flex items-center justify-between border-b uppercase'>
          <span>Contacts</span>
          <span>01</span>
        </div>
        <div className='space-y-2'>
          {Object.entries(data.socialLinks).map((key, index) => (
            <div key={index} className='flex items-center gap-1'>
              <Icon icon={socialMediaIcons[index]} />
              {key[1]}
            </div>
          ))}
        </div>
      </section>

      <div className='col-span-4'>
        <h2 className='text-[40px]'>{data.personalInfo.fullName}</h2>
        <h2 className='-mt-4 mb-6 text-[40px]'>{data.personalInfo.designation}</h2>

        <div className='grid grid-cols-4 gap-5'>
          <div className='col-span-2'>
            <section className='space-y-5'>
              <div className='border-retro-content flex items-center justify-between border-b uppercase'>
                <span>Experience</span>
                <span>02</span>
              </div>
              <div className='font-inter space-y-5'>
                {data.experience.map(({ company, position, description, year }, index) => (
                  <div key={index} className='space-y-1'>
                    <div className='text-[8px]'>{year}</div>
                    <div className='font-medium'>
                      {company} - {position}
                    </div>
                    <div className='text-[9px]'>{description}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className='col-span-2'>
            <div className='space-y-8'>
              <section className='space-y-5'>
                <div className='border-retro-content flex items-center justify-between border-b uppercase'>
                  <span>Skills</span>
                  <span>03</span>
                </div>
                <div className='font-inter grid grid-cols-2 gap-2 text-[9px]'>
                  {data.skills.map((skill, index) => (
                    <div key={index}>{skill}</div>
                  ))}
                </div>
              </section>

              <section className='space-y-5'>
                <div className='border-retro-content flex items-center justify-between border-b uppercase'>
                  <span>Education</span>
                  <span>04</span>
                </div>
                <div className='font-inter space-y-5'>
                  {data.education.map(({ degree, year, institute }, index) => (
                    <div key={index} className='space-y-1'>
                      <div className='text-[8px]'>{year}</div>
                      <div className='font-medium'>{institute}</div>
                      <div className='text-[9px]'>{degree}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className='space-y-5'>
                <div className='border-retro-content flex items-center justify-between border-b uppercase'>
                  <span>Projects & Awards</span>
                  <span>05</span>
                </div>
                <div className='font-inter space-y-5'>
                  {data.projects.map(({ projectName, description }, index) => (
                    <div key={index} className='space-y-1'>
                      <div className='font-medium'>{projectName}</div>
                      <div className='text-[9px]'>{description}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
