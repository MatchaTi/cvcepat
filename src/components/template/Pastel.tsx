import { Icon } from '@iconify/react/dist/iconify.js';
import { socialMediaIconsColor } from '../../constant/SocialMediaIcons';
import { useCVStore } from '../../store/useCVStore';

export default function Pastel() {
  const { data } = useCVStore();

  return (
    <main className='shadow-light-content/10 bg-pastel-base relative mx-auto h-[297mm] min-h-fit w-[210mm] overflow-hidden px-16 pt-16 shadow'>
      <div className='absolute -top-12 right-0 -translate-y-1/2'>
        <img src='/circle-1.png' alt='circle' />
      </div>
      <div className='absolute -bottom-8 left-0 -translate-x-16 translate-y-1/2'>
        <img src='/circle-2.png' alt='circle' />
      </div>

      <div className='relative z-10 space-y-5'>
        <section>
          <h2 className='max mb-1 max-w-96 text-4xl font-bold text-balance'>{data.personalInfo.fullName}</h2>
          <p className='text-sm'>{data.personalInfo.designation}</p>
        </section>

        <section className='border-pastel-content/20 space-y-4 border-b pb-4'>
          <h3 className='text-dark-cyan flex items-center gap-1 font-bold'>
            <Icon icon='mdi:about-variant' />
            <span>About</span>
          </h3>
          <p className='text-justify text-sm leading-loose'>{data.bio}</p>
        </section>

        <section className='border-pastel-content/20 space-y-4 border-b pb-4'>
          <h3 className='text-dark-blue flex items-center gap-1 font-bold'>
            <Icon icon='tdesign:education-filled' />
            <span>Education</span>
          </h3>
          <div className='space-y-3 text-sm'>
            {data.education.map(({ institute, degree, year }, index) => (
              <div key={index}>
                <div className='mb-1 font-bold'>{institute}</div>
                <div className='flex items-center justify-between'>
                  <p>{degree}</p>
                  <p>{year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className='border-pastel-content/20 space-y-4 border-b pb-4'>
          <h3 className='text-dark-purple flex items-center gap-1 font-bold'>
            <Icon icon='mingcute:briefcase-fill' />
            <span>Experience</span>
          </h3>
          <div className='space-y-3 text-sm'>
            {data.experience.map(({ company, position, year }, index) => (
              <div key={index}>
                <div className='mb-1 font-bold'>{company}</div>
                <div className='flex items-center justify-between'>
                  <p>{position}</p>
                  <p>{year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className='grid grid-cols-2 gap-12'>
          <section className='space-y-4 pb-4'>
            <h3 className='text-dark-aqua flex items-center gap-1 font-bold'>
              <Icon icon='gravity-ui:target-dart' />
              <span>Skills</span>
            </h3>
            <div className='grid grid-cols-2 gap-4 text-sm'>
              {data.skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
          </section>

          <div className='space-y-5'>
            <section className='border-pastel-content/20 space-y-4 border-b pb-4'>
              <h3 className='text-dark-red flex items-center gap-1 font-bold'>
                <Icon icon='mdi:pencil-box' />
                <span>Projects & Awards</span>
              </h3>
              <div className='space-y-3 text-sm'>
                {data.projects.map(({ projectName, description }, index) => (
                  <div key={index}>
                    <div className='mb-1 font-bold'>{projectName}</div>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className='space-y-4 pb-4'>
              <h3 className='text-dark-green flex items-center gap-1 font-bold'>
                <Icon icon='ri:share-line' />
                <span>Socials</span>
              </h3>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                {Object.entries(data.socialLinks).map((key, index) => (
                  <div key={index} className='flex items-center gap-1'>
                    <Icon icon={socialMediaIconsColor[index]} />
                    <span>{key[1]}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
