import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Experience() {
  const { theme } = useThemeStore();
  const { data, addExperience, updateExperience, removeExperience } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>
        Pengalaman
      </h2>
      {data.experience.map(({ company, position, year, description }, index) => (
        <div key={index} className='mb-3 flex items-center gap-3'>
          <div className='grid w-full grid-cols-3 gap-3'>
            <input
              type='text'
              value={company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              className={clsx('w-full border p-3', {
                'border-retro-content/20 font-inter rounded-xl': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury',
                'border-light-content/10 font-inter rounded-xl': theme === 'light',
                'border-dark-content/10 font-inter rounded-xl': theme === 'dark',
                'border-elegant-content/10 font-lato rounded-xl': theme === 'elegant',
                'border-pastel-content/10 font-raleway rounded-xl': theme === 'pastel',
                'border-formal-content/10 font-source-serif rounded-xl': theme === 'formal',
              })}
              placeholder='Company'
            />
            <input
              type='text'
              value={position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              className={clsx('w-full border p-3', {
                'border-retro-content/20 font-inter rounded-xl': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury',
                'border-light-content/10 font-inter rounded-xl': theme === 'light',
                'border-dark-content/10 font-inter rounded-xl': theme === 'dark',
                'border-elegant-content/10 font-lato rounded-xl': theme === 'elegant',
                'border-pastel-content/10 font-raleway rounded-xl': theme === 'pastel',
                'border-formal-content/10 font-source-serif rounded-xl': theme === 'formal',
              })}
              placeholder='Position'
            />
            <input
              type='text'
              value={year}
              onChange={(e) => updateExperience(index, 'year', e.target.value)}
              className={clsx('w-full border p-3', {
                'border-retro-content/20 font-inter rounded-xl': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury',
                'border-light-content/10 font-inter rounded-xl': theme === 'light',
                'border-dark-content/10 font-inter rounded-xl': theme === 'dark',
                'border-elegant-content/10 font-lato rounded-xl': theme === 'elegant',
                'border-pastel-content/10 font-raleway rounded-xl': theme === 'pastel',
                'border-formal-content/10 font-source-serif rounded-xl': theme === 'formal',
              })}
              placeholder='Year'
            />
            <textarea
              className={clsx('col-span-3 field-sizing-content max-h-40 w-full border p-3', {
                'border-retro-content/20 font-inter rounded-xl': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury',
                'border-light-content/10 font-inter rounded-xl': theme === 'light',
                'border-dark-content/10 font-inter rounded-xl': theme === 'dark',
                'border-elegant-content/10 font-lato rounded-xl': theme === 'elegant',
                'border-pastel-content/10 font-raleway rounded-xl': theme === 'pastel',
                'border-formal-content/10 font-source-serif rounded-xl': theme === 'formal',
              })}
              value={description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              placeholder='Deskripsi Pengalaman'
            ></textarea>
          </div>
          <button
            className={clsx('bg-red-custom flex w-fit cursor-pointer p-3 active:scale-95', {
              'rounded-xl': theme === 'retro' || theme === 'luxury',
              'text-light-base rounded-xl': theme === 'light',
              'text-dark-base rounded-xl': theme === 'dark',
              'text-elegant-base rounded-xl': theme === 'elegant',
              'text-pastel-base rounded-xl': theme === 'pastel',
              'text-formal-base rounded-xl': theme === 'formal',
            })}
            onClick={() => removeExperience(index)}
          >
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <button
        onClick={addExperience}
        className={clsx('mx-auto flex cursor-pointer items-center gap-1 active:scale-95', {
          'bg-retro-content text-retro-base rounded-xl p-3': theme === 'retro',
          'bg-luxury-content text-luxury-base rounded-xl p-3': theme === 'luxury',
          'bg-light-content text-light-base rounded-xl p-3': theme === 'light',
          'bg-dark-content text-dark-base rounded-xl p-3': theme === 'dark',
          'bg-elegant-content text-elegant-base rounded-xl p-3': theme === 'elegant',
          'bg-pastel-content text-pastel-base rounded-xl p-3': theme === 'pastel',
          'bg-formal-content text-formal-base rounded-xl p-3': theme === 'formal',
        })}
      >
        <Icon icon='ic:baseline-plus' />
        <span>Tambah</span>
      </button>
    </section>
  );
}
