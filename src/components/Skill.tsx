import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Skill() {
  const { theme } = useThemeStore();
  const { data, addSkill, updateSkill, removeSkill } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>
        Kemampuan
      </h2>
      <div className='flex flex-wrap gap-3'>
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className={clsx('flex w-auto items-center gap-3 pr-3', {
              'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
              'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              'border-light-content/10 font-inter rounded-xl border': theme === 'light',
              'border-dark-content/10 font-inter rounded-xl border': theme === 'dark',
              'border-elegant-content/10 font-lato rounded-xl border': theme === 'elegant',
              'border-pastel-content/10 font-lato rounded-xl border': theme === 'pastel',
              'border-formal-content/10 font-source-serif rounded-xl border': theme === 'formal',
            })}
          >
            <input
              type='text'
              value={skill}
              className='field-sizing-content p-3'
              onChange={(e) => updateSkill(index, e.target.value)}
              placeholder='Skill'
            />
            <button
              className={clsx('bg-red-custom w-fit cursor-pointer p-2 active:scale-95', {
                'rounded-xl': theme === 'retro' || theme === 'luxury',
                'text-light-base rounded-xl': theme === 'light',
                'text-dark-base rounded-xl': theme === 'dark',
                'text-elegant-base rounded-xl': theme === 'elegant',
                'text-pastel-base rounded-xl': theme === 'pastel',
                'text-formal-base rounded-xl': theme === 'formal',
              })}
              onClick={() => removeSkill(index)}
            >
              <Icon icon='material-symbols:close' />
            </button>
          </div>
        ))}
        <button
          onClick={addSkill}
          className={clsx('flex cursor-pointer items-center gap-1 active:scale-95', {
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
      </div>
    </section>
  );
}
