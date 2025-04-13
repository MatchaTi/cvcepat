import { personalInfoIcons } from '../constant/icons';
import { personalPlaceholders } from '../constant/placeholders';
import { useCVStore } from '../store/useCVStore';
import Input from './Input';

export default function PersonalInformation() {
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2>Informasi Personal</h2>
      <div className='grid gap-3 md:grid-cols-2'>
        {Object.keys(data.personalInfo).map((key, index) => (
          <Input
            key={key}
            type='text'
            label={key.charAt(0).toUpperCase() + key.slice(1)}
            icon={personalInfoIcons[index]}
            placeholder={personalPlaceholders[index]}
            value={data.personalInfo[key as keyof typeof data.personalInfo]}
            onChange={(e) =>
              setData({
                personalInfo: { ...data.personalInfo, [key]: e.target.value },
              })
            }
          />
        ))}
      </div>
    </section>
  );
}
