import LayoutSwitcher from './LayoutSwitcher';
import Navbar from './Navbar';
import ThemeSwitcher from './ThemeSwitcher';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='px-6 pb-10 w-full min-h-fit'>
      <Navbar />
      <div className='flex flex-wrap gap-3 mx-auto mb-10 w-full md:justify-center md:items-center'>
        <ThemeSwitcher />
        <LayoutSwitcher />
      </div>
      {children}
    </div>
  );
}
