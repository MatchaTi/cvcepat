import clsx from 'clsx';
import './App.css';
import CVForm from './components/CVForm';
import Navbar from './components/Navbar';
import Light from './components/template/Light';
import ThemeSwitcher from './components/ThemeSwitcher';
import { themes } from './constant/themes';
import { useThemeStore } from './store/useThemeStore';
import { useWorkspaceStore } from './store/useWorkspaceStore';

export default function App() {
  const { theme } = useThemeStore();
  const { status } = useWorkspaceStore();

  const SelectedTemplate = themes.find((t) => t.name === theme)?.component || Light;

  return (
    <div
      className={clsx('min-h-fit w-full pb-10', {
        'bg-retro-base text-retro-content font-abhaya-libre': theme === 'retro',
      })}
    >
      <Navbar />
      <ThemeSwitcher />
      {status === 'editor' ? (
        <CVForm />
      ) : (
        <div id='resumeResult'>
          <SelectedTemplate />
        </div>
      )}
    </div>
  );
}
