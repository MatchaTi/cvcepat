import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Education() {
  const { theme } = useThemeStore();
  const { data, addEducation, updateEducation, removeEducation } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3', { 'text-xl font-bold uppercase': theme === 'retro' })}>Pendidikan</h2>
      {data.education.map(({ degree, institute, year }, index) => (
        <div key={index} className='mb-3 flex items-center gap-3'>
          <input
            type='text'
            value={institute}
            className={clsx('w-full p-3', { 'border-retro-content/20 rounded-xl border': theme === 'retro' })}
            onChange={(e) => updateEducation(index, 'institute', e.target.value)}
            placeholder='School'
          />
          <input
            type='text'
            value={degree}
            className={clsx('w-full p-3', { 'border-retro-content/20 rounded-xl border': theme === 'retro' })}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            placeholder='Degree'
          />
          <input
            type='text'
            value={year}
            onChange={(e) => updateEducation(index, 'year', e.target.value)}
            className={clsx('w-full p-3', { 'border-retro-content/20 rounded-xl border': theme === 'retro' })}
            placeholder='Year'
          />
          <button
            className={clsx('flex w-fit cursor-pointer p-3 active:scale-95', {
              'bg-red-custom rounded-xl': theme === 'retro',
            })}
            onClick={() => removeEducation(index)}
          >
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <button
        onClick={addEducation}
        className={clsx('mx-auto flex cursor-pointer items-center gap-1 active:scale-95', {
          'bg-retro-content text-retro-base rounded-xl p-3': theme === 'retro',
        })}
      >
        <Icon icon='ic:baseline-plus' />
        <span>Tambah</span>
      </button>
    </section>
  );
}
