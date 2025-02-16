import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { useThemeStore } from '../store/useThemeStore';
import { useWorkspaceStore } from '../store/useWorkspaceStore';
import { exportPDF } from '../util/PDF';

export default function Navbar() {
  const { theme } = useThemeStore();
  const { status, setStatus } = useWorkspaceStore();

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
          className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
            'bg-retro-accent text-retro-content hover:bg-retro-darker rounded-xl': theme === 'retro',
          })}
        >
          <Icon icon={theme == 'retro' ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
          <span>Contoh</span>
        </button>
      </div>

      <button
        type='button'
        onClick={exportPDF}
        disabled={status === 'editor'}
        className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
          'bg-retro-content text-retro-base rounded-xl': theme === 'retro',
        })}
      >
        <Icon icon='material-symbols:download' />
        <span>Ekspor ke PDF</span>
      </button>
    </nav>
  );
}
