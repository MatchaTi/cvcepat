import clsx from 'clsx';
import { useThemeStore } from '../store/useThemeStore';
import { Theme } from '../type/theme';
import { exportPDF } from '../util/PDF';
import Brutalist from './form/Brutalist';
import Elegant from './form/Elegant';
import Formal from './form/Formal';
import Playful from './form/Playful';

export default function CVForm() {
  const { theme, setTheme } = useThemeStore();

  const themes: { name: Theme; component: React.FC }[] = [
    { name: 'formal', component: Formal },
    { name: 'playful', component: Playful },
    { name: 'elegant', component: Elegant },
    { name: 'brutalist', component: Brutalist },
  ];

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
