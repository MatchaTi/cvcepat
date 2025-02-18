import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';
import { useWorkspaceStore } from '../store/useWorkspaceStore';
import { exportPDF } from '../util/PDF';

export default function Navbar() {
  const { theme } = useThemeStore();
  const { isDummyData, toggleDummy, setDummyData, clearData } = useCVStore();
  const { status, setStatus } = useWorkspaceStore();

  const setDummy = () => {
    toggleDummy();
    if (!isDummyData) {
      setDummyData();
      setStatus('preview');
    } else {
      clearData();
      setStatus('editor');
    }
  };

  return (
    <nav className='flex items-center justify-between p-6'>
      <div className='flex items-center gap-1'>
        <Icon icon='mynaui:lightning-solid' className='text-dark-blue' />
        <span className='text-2xl font-bold'>CVCepat</span>
      </div>

      <div className='flex items-center gap-3'>
        <div
          className={clsx('flex items-center gap-3 p-3', {
            'bg-retro-accent text-retro-content rounded-xl': theme === 'retro',
            'bg-luxury-accent text-luxury-content rounded-xl': theme === 'luxury',
            'bg-light-accent text-light-content rounded-xl': theme === 'light',
            'bg-dark-accent text-dark-content rounded-xl': theme === 'dark',
            'bg-elegant-accent text-elegant-content rounded-xl': theme === 'elegant',
          })}
        >
          <button
            type='button'
            onClick={() => setStatus('editor')}
            className={clsx(
              'flex cursor-pointer items-center gap-1 border-b',
              status === 'editor' ? 'border-current' : 'border-transparent',
            )}
          >
            <Icon icon='lucide:edit' />
            <span>Editor</span>
          </button>
          <button
            type='button'
            onClick={() => setStatus('preview')}
            className={clsx(
              'flex cursor-pointer items-center gap-1 border-b',
              status === 'preview' ? 'border-current' : 'border-transparent',
            )}
          >
            <Icon icon='mingcute:grid-line' />
            <span>Preview</span>
          </button>
        </div>
        <button
          type='button'
          onClick={setDummy}
          className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
            'bg-retro-accent text-retro-content hover:bg-retro-darker rounded-xl': theme === 'retro',
            'bg-luxury-accent text-luxury-content hover:bg-luxury-darker rounded-xl': theme === 'luxury',
            'bg-light-accent text-light-content hover:bg-light-darker rounded-xl': theme === 'light',
            'bg-dark-accent text-dark-content hover:bg-dark-darker rounded-xl': theme === 'dark',
            'bg-elegant-accent text-elegant-content hover:bg-elegant-darker rounded-xl': theme === 'elegant',
          })}
        >
          <Icon icon={isDummyData ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
          <span>Contoh</span>
        </button>
      </div>

      <button
        type='button'
        onClick={exportPDF}
        disabled={status === 'editor'}
        className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
          'bg-retro-content text-retro-base rounded-xl': theme === 'retro',
          'bg-luxury-content text-luxury-base rounded-xl': theme === 'luxury',
          'bg-light-content text-light-base rounded-xl': theme === 'light',
          'bg-dark-content text-dark-base rounded-xl': theme === 'dark',
          'bg-elegant-content text-elegant-base rounded-xl': theme === 'elegant',
        })}
      >
        <Icon icon='material-symbols:download' />
        <span>Ekspor ke PDF</span>
      </button>
    </nav>
  );
}
