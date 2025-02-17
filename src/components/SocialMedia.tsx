import clsx from 'clsx';
import { socialLinksPlaceholders } from '../constant/placeholders';
import { useCVStore } from '../store/useCVStore';
import { useThemeStore } from '../store/useThemeStore';

export default function SocialMedia() {
  const { theme } = useThemeStore();
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2 className={clsx('mb-3 text-xl font-bold', { uppercase: theme === 'retro' || theme === 'luxury' })}>
        Sosial Media
      </h2>
      <div className='grid grid-cols-2 gap-3'>
        {Object.keys(data.socialLinks).map((key, index) => (
          <input
            key={key}
            type='text'
            className={clsx(
              'border p-3',
              { 'border-retro-content/20 font-inter rounded-xl': theme === 'retro' },
              { 'border-luxury-content/10 font-inter rounded-xl': theme === 'luxury' },
              { 'border-light-content/10 font-inter rounded-xl': theme === 'light' },
              key === 'twitter' && 'col-span-2',
            )}
            value={data.socialLinks[key as keyof typeof data.socialLinks]}
            onChange={(e) =>
              setData({
                socialLinks: { ...data.socialLinks, [key]: e.target.value },
              })
            }
            placeholder={socialLinksPlaceholders[index]}
          />
        ))}
      </div>
    </section>
  );
}
