import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Experience() {
  const { theme } = useThemeStore();
  const { data, addExperience, updateExperience, removeExperience } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3', { 'text-xl font-bold uppercase': theme === 'retro' || theme === 'luxury' })}>
        Pengalaman
      </h2>
      {data.experience.map(({ company, position, year, description }, index) => (
        <div key={index} className='mb-3 flex items-center gap-3'>
          <div className='grid w-full grid-cols-3 gap-3'>
            <input
              type='text'
              value={company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
              className={clsx('w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              placeholder='Company'
            />
            <input
              type='text'
              value={position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
              className={clsx('w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              placeholder='Position'
            />
            <input
              type='text'
              value={year}
              onChange={(e) => updateExperience(index, 'year', e.target.value)}
              className={clsx('w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              placeholder='Year'
            />
            <textarea
              className={clsx('col-span-3 field-sizing-content max-h-40 w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              value={description}
              onChange={(e) => updateExperience(index, 'description', e.target.value)}
              placeholder='Deskripsi Pengalaman'
            ></textarea>
          </div>
          <button
            className={clsx('flex w-fit cursor-pointer p-3 active:scale-95', {
              'bg-red-custom rounded-xl': theme === 'retro' || theme === 'luxury',
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
        })}
      >
        <Icon icon='ic:baseline-plus' />
        <span>Tambah</span>
      </button>
    </section>
  );
}
