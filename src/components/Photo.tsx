import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Photo() {
  const { data, setData } = useCVStore();
  const { theme } = useThemeStore();

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setData({ photo: reader.result as string });
      };

      reader.readAsDataURL(file);
    }
  }

  function clearPhoto() {
    setData({ photo: '' });
  }

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>Photo</h2>
      <div className='flex items-center gap-4'>
        <label
          htmlFor='photo'
          className={clsx('flex w-fit cursor-pointer items-center gap-1 active:scale-95', {
            'bg-retro-content text-retro-base rounded-xl p-3': theme === 'retro',
            'bg-luxury-content text-luxury-base rounded-xl p-3': theme === 'luxury',
            'bg-light-content text-light-base rounded-xl p-3': theme === 'light',
            'bg-dark-content text-dark-base rounded-xl p-3': theme === 'dark',
            'bg-elegant-content text-elegant-base rounded-xl p-3': theme === 'elegant',
            'bg-pastel-content text-pastel-base rounded-xl p-3': theme === 'pastel',
            'bg-formal-content text-formal-base rounded-xl p-3': theme === 'formal',
          })}
        >
          <Icon icon='material-symbols:upload' />
          <span>{data.photo ? 'Ganti' : 'Upload'} Gambar</span>
        </label>
        {data.photo ? (
          <button
            className={clsx('bg-red-custom flex w-fit cursor-pointer items-center p-3 active:scale-95', {
              'rounded-xl': theme === 'retro' || theme === 'luxury',
              'text-light-base rounded-xl': theme === 'light',
              'text-dark-base rounded-xl': theme === 'dark',
              'text-elegant-base rounded-xl': theme === 'elegant',
              'text-pastel-base rounded-xl': theme === 'pastel',
              'text-formal-base rounded-xl': theme === 'formal',
            })}
            onClick={clearPhoto}
          >
            <Icon icon='material-symbols:close' />
          </button>
        ) : null}
      </div>

      <input type='file' onChange={handlePhotoChange} placeholder='Upload gambar' className='hidden' id='photo' />

      {data.photo ? (
        <div className={clsx('mt-3 h-24 w-24 overflow-hidden rounded-xl')}>
          <img src={data.photo} alt='avatar' className='h-full w-full object-cover' />
        </div>
      ) : null}
    </section>
  );
}
