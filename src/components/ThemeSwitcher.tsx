import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { themes } from '../constant/themes';
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className='mb-10 flex items-center justify-center gap-3'>
      {themes.map(({ name }) => (
        <button
          type='button'
          key={name}
          onClick={() => setTheme(name)}
          className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
            'bg-retro-accent text-retro-content hover:bg-retro-darker rounded-xl': theme === 'retro',
            'bg-luxury-accent text-luxury-content hover:bg-luxury-darker rounded-xl': theme === 'luxury',
            'bg-light-accent text-light-content hover:bg-light-darker rounded-xl': theme === 'light',
          })}
        >
          <Icon icon={theme == name ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
          <span className='capitalize'>{name}</span>
        </button>
      ))}
    </div>
  );
}
