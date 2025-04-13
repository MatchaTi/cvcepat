import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';

export default function Photo() {
  const { data, setData } = useCVStore();

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
      <h2>Photo</h2>
      <input
        type='file'
        onChange={handlePhotoChange}
        placeholder='Upload gambar'
        className='mt-2 file-input'
        id='photo'
      />
      <div className='relative w-fit'>
        {data.photo ? (
          <>
            <button className='absolute -right-2 -bottom-2 btn-xs btn-circle btn btn-error' onClick={clearPhoto}>
              <Icon icon='material-symbols:close' />
            </button>
            <div className={clsx('mt-3 h-24 w-24 overflow-hidden rounded-xl')}>
              <img src={data.photo} alt='avatar' className='object-cover w-full h-full' />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
