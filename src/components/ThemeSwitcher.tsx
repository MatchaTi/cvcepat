import { themes } from '../constant/themes';
import { useThemeStore } from '../store/useThemeStore';
import { useEffect } from 'react';
import { Theme } from '../type/theme';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <fieldset id='theme' className='flex gap-3 justify-center items-center fieldset'>
      <p className='fieldset-legend'>Tema</p>
      <select
        className='select'
        name='theme'
        defaultValue={theme}
        id='theme'
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        {themes.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
