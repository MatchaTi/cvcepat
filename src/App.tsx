import clsx from 'clsx';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import './App.css';
import CVForm from './components/CVForm';
import Navbar from './components/Navbar';
import Light from './components/template/Light';
import ThemeSwitcher from './components/ThemeSwitcher';
import { themes } from './constant/themes';
import { useFirstTimeStore } from './store/firstTimeStore';
import { useThemeStore } from './store/useThemeStore';
import { useWorkspaceStore } from './store/useWorkspaceStore';

export default function App() {
  const { theme } = useThemeStore();
  const { status } = useWorkspaceStore();
  const { isNotFirstTime, setIsNotFirstTime } = useFirstTimeStore();
  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: 'body',
        popover: {
          title: 'Selamat Datang di Aplikasi CVCepat',
          description: 'Aplikasi ini bisa membuat CV dengan mudah dan cepat. Mari kita mulai!',
          align: 'center',
          side: 'over',
        },
      },
      {
        element: '#editor',
        popover: {
          title: 'Editor Mode',
          description: 'Kamu bisa mengisi data CV kamu di sini.',
        },
      },
      {
        element: '#preview',
        popover: {
          title: 'Preview Mode',
          description: 'Lihat hasil CV kamu di sini.',
        },
      },
      {
        element: '#dummy',
        popover: {
          title: 'Dummy Data',
          description: 'Klik tombol ini untuk mengisi data secara otomatis sebagai contoh.',
        },
      },
      {
        element: '#pdf',
        popover: {
          title: 'Ekspor ke PDF',
          description: 'Klik tombol ini untuk mengunduh CV kamu dalam format PDF.',
        },
      },
    ],
  });

  if (!isNotFirstTime) {
    driverObj.drive();
    setIsNotFirstTime();
  }

  const SelectedTemplate = themes.find((t) => t.name === theme)?.component || Light;

  return (
    <div
      className={clsx('min-h-fit w-full pb-10', {
        'bg-retro-base text-retro-content font-abhaya-libre': theme === 'retro',
        'bg-luxury-base text-luxury-content font-abhaya-libre': theme === 'luxury',
        'bg-light-base text-light-content font-plus-jakarta-sans': theme === 'light',
        'bg-dark-base text-dark-content font-plus-jakarta-sans': theme === 'dark',
        'bg-elegant-base text-elegant-content font-spectral': theme === 'elegant',
        'font-raleway bg-pastel-base text-pastel-content': theme === 'pastel',
        'font-source-serif bg-formal-base text-formal-content': theme === 'formal',
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
