import { Icon } from '@iconify/react/dist/iconify.js';
import clsx from 'clsx';
import { themes } from '../constant/themes';
import { useThemeStore } from '../store/useThemeStore';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <div id='theme' className='mb-10 flex items-center justify-center gap-3'>
      {themes.map(({ name }) => (
        <button
          type='button'
          key={name}
          onClick={() => setTheme(name)}
          className={clsx('flex cursor-pointer items-center gap-1 p-3 active:scale-95', {
            'bg-retro-accent text-retro-content hover:bg-retro-darker rounded-xl': theme === 'retro',
            'bg-luxury-accent text-luxury-content hover:bg-luxury-darker rounded-xl': theme === 'luxury',
            'bg-light-accent text-light-content hover:bg-light-darker rounded-xl': theme === 'light',
            'bg-dark-accent text-dark-content hover:bg-dark-darker rounded-xl': theme === 'dark',
            'bg-elegant-accent text-elegant-content hover:bg-elegant-darker rounded-xl': theme === 'elegant',
            'bg-pastel-accent text-pastel-content hover:bg-pastel-darker rounded-xl': theme === 'pastel',
            'bg-formal-accent text-formal-content hover:bg-formal-darker rounded-xl': theme === 'formal',
          })}
        >
          <Icon icon={theme == name ? 'charm:circle-tick' : 'material-symbols:circle-outline'} />
          <span className='capitalize'>{name}</span>
        </button>
      ))}
    </div>
  );
}
