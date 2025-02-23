import clsx from 'clsx';
import { personalPlaceholders } from '../constant/placeholders';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function PersonalInformation() {
  const { theme } = useThemeStore();
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>
        Informasi Personal
      </h2>
      <div className='grid grid-cols-2 gap-3'>
        {Object.keys(data.personalInfo).map((key, index) => (
          <input
            key={key}
            type='text'
            className={clsx(
              'border p-3',
              {
                'font-inter border-retro-content/20 rounded-xl': theme === 'retro',
                'font-inter border-luxury-content/10 rounded-xl': theme === 'luxury',
                'font-inter border-light-content/10 rounded-xl': theme === 'light',
                'font-inter border-dark-content/10 rounded-xl': theme === 'dark',
                'font-lato border-elegant-content/10 rounded-xl': theme === 'elegant',
                'font-lato border-pastel-content/10 rounded-xl': theme === 'pastel',
              },
              key === 'address' && 'col-span-2',
            )}
            value={data.personalInfo[key as keyof typeof data.personalInfo]}
            onChange={(e) =>
              setData({
                personalInfo: { ...data.personalInfo, [key]: e.target.value },
              })
            }
            placeholder={personalPlaceholders[index]}
          />
        ))}
      </div>
    </section>
  );
}
