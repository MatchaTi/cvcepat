import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Project() {
  const { theme } = useThemeStore();
  const { data, addProject, updateProject, removeProject } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3', { 'text-xl font-bold uppercase': theme === 'retro' || theme === 'luxury' })}>
        Proyek atau Penghargaan
      </h2>
      {data.projects.map(({ projectName, description }, index) => (
        <div key={index} className='mb-3 flex items-center gap-3'>
          <div className='grid w-full gap-3'>
            <input
              type='text'
              value={projectName}
              onChange={(e) => updateProject(index, 'projectName', e.target.value)}
              className={clsx('w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              placeholder='Nama Project'
            />
            <textarea
              className={clsx('field-sizing-content max-h-40 w-full p-3', {
                'border-retro-content/20 font-inter rounded-xl border': theme === 'retro',
                'border-luxury-content/10 font-inter rounded-xl border': theme === 'luxury',
              })}
              value={description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
              placeholder='Deskripsi Pengalaman'
            ></textarea>
          </div>
          <button
            className={clsx('flex w-fit cursor-pointer p-3 active:scale-95', {
              'bg-red-custom rounded-xl': theme === 'retro' || theme === 'luxury',
            })}
            onClick={() => removeProject(index)}
          >
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <button
        onClick={addProject}
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
