import clsx from 'clsx';
import { themes } from '../constant/themes';
import { useThemeStore } from '../store/useThemeStore';
import { Theme } from '../type/theme';
import { exportPDF } from '../util/PDF';
import Formal from './form/Formal';

export default function CVForm() {
  const { theme, setTheme } = useThemeStore();

  const SelectedTemplate = themes.find((t) => t.name === theme)?.component || Formal;

  return (
    <div
      className={clsx('', {
        'font-petit-formal-script bg-red-500': theme === 'formal',
        'font-pacifico bg-yellow-500': theme === 'playful',
        'bg-green-500': theme === 'elegant',
        'bg-blue-500': theme === 'brutalist',
      })}
    >
      <div>
        {themes.map(({ name }) => (
          <button key={name} onClick={() => setTheme(name as Theme)}>
            {name}
          </button>
        ))}
      </div>
      <div
        id='resumeResult'
        className={clsx('mx-auto max-w-2xl p-4', {
          'font-petit-formal-script bg-red-500': theme === 'formal',
          'font-pacifico bg-yellow-500': theme === 'playful',
          'bg-green-500': theme === 'elegant',
          'bg-blue-500': theme === 'brutalist',
        })}
      >
        <SelectedTemplate />
      </div>
      <button type='button' onClick={exportPDF}>
        Download Cuy
      </button>
    </div>
  );
}
