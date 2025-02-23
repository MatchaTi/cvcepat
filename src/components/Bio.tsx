import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Bio() {
  const { theme } = useThemeStore();
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>Bio</h2>
      <textarea
        className={clsx('field-sizing-content max-h-40 w-full border p-3', {
          'border-retro-content/20 font-inter rounded-xl': theme === 'retro',
          'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury',
          'border-light-content/10 font-inter rounded-xl': theme === 'light',
          'border-dark-content/10 font-inter rounded-xl': theme === 'dark',
          'border-elegant-content/10 font-lato rounded-xl': theme === 'elegant',
          'border-pastel-content/10 font-lato rounded-xl': theme === 'pastel',
        })}
        value={data.bio}
        onChange={(e) => setData({ bio: e.target.value })}
        placeholder='Tulis sesuatu tentang dirimu...'
      ></textarea>
    </section>
  );
}
