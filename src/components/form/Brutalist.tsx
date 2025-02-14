import { useCVStore } from '../../store/useCVStore';

export default function Brutalist() {
  const { data, setData, addEducation, updateEducation, removeEducation } = useCVStore();

  return (
    <>
      <h2>Brutalist</h2>
      <h2>Personal Info</h2>
      {Object.keys(data.personalInfo).map((key) => (
        <input
          key={key}
          type='text'
          className='bg-gray-100 p-4'
          value={data.personalInfo[key as keyof typeof data.personalInfo]}
          onChange={(e) =>
            setData({
              personalInfo: { ...data.personalInfo, [key]: e.target.value },
            })
          }
          placeholder={key}
        />
      ))}

      <h2>Bio</h2>
      <textarea
        className='field-sizing-content max-h-20 w-full p-4'
        value={data.bio}
        onChange={(e) =>
          setData({
            bio: e.target.value,
          })
        }
      ></textarea>

      <h2>Social Media</h2>
      {Object.keys(data.socialLinks).map((key) => (
        <input
          key={key}
          type='text'
          className='bg-gray-100 p-4'
          value={data.socialLinks[key as keyof typeof data.socialLinks]}
          onChange={(e) =>
            setData({
              socialLinks: { ...data.socialLinks, [key]: e.target.value },
            })
          }
          placeholder={key}
        />
      ))}

      <h2>Education</h2>
      {data.education.map((edu, index) => (
        <div key={index} className='education-item'>
          <input
            type='text'
            value={edu.institute}
            className='bg-gray-100 p-4'
            onChange={(e) => updateEducation(index, 'institute', e.target.value)}
            placeholder='School'
          />
          <input
            type='text'
            value={edu.degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
            placeholder='Degree'
          />
          <input
            type='text'
            value={edu.year}
            onChange={(e) => updateEducation(index, 'year', e.target.value)}
            className='bg-gray-100 p-4'
            placeholder='Year'
          />
          <button onClick={() => removeEducation(index)}>❌ Remove</button>
        </div>
      ))}
      <button onClick={addEducation}>➕ Add Education</button>
    </>
  );
}
