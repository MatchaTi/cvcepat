import { socialLinksPlaceholders } from '../constant/placeholders';
import { useCVStore } from '../store/useCVStore';
import Input from './Input';
import { socialMediaIcons } from '../constant/icons';

export default function SocialMedia() {
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2>Sosial Media</h2>
      <div className='grid grid-cols-2 gap-3'>
        {Object.keys(data.socialLinks).map((key, index) => (
          <Input
            key={key}
            type='text'
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            icon={socialMediaIcons[index]}
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
