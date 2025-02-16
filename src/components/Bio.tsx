import clsx from 'clsx';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function Bio() {
  const { theme } = useThemeStore();
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3', { 'text-xl font-bold uppercase': theme === 'retro' })}>Bio</h2>
      <textarea
        className={clsx('field-sizing-content max-h-40 w-full p-3', {
          'border-retro-content/20 rounded-xl border': theme === 'retro',
        })}
        value={data.bio}
        onChange={(e) => setData({ bio: e.target.value })}
        placeholder='Tulis sesuatu tentang dirimu...'
      ></textarea>
    </section>
  );
}
