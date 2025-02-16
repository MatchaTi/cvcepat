import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Skill() {
  const { theme } = useThemeStore();
  const { data, addSkill, updateSkill, removeSkill } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3', { 'text-xl font-bold uppercase': theme === 'retro' })}>Kemampuan</h2>
      <div className='flex flex-wrap gap-3'>
        {data.skills.map((skill, index) => (
          <div
            key={index}
            className={clsx('flex w-auto items-center gap-3 pr-3', {
              'border-retro-content/20 rounded-xl border': theme === 'retro',
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
              className={clsx('w-fit cursor-pointer p-2 active:scale-95', {
                'bg-red-custom rounded-xl': theme === 'retro',
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
          })}
        >
          <Icon icon='ic:baseline-plus' />
          <span>Tambah</span>
        </button>
      </div>
    </section>
  );
}
