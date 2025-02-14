import { useCVStore } from '../store/useCVStore';

export default function CVForm() {
  const { data, setData, addEducation, updateEducation, removeEducation } = useCVStore();

  return (
    <div>
      <h2>Personal Info</h2>
      <input
        type='text'
        value={data.personalInfo.fullName}
        onChange={(e) =>
          setData({
            personalInfo: { ...data.personalInfo, fullName: e.target.value },
          })
        }
        placeholder='Full Name'
      />

      <h2>Education</h2>
      {data.education.map((edu, index) => (
        <div key={index} className='education-item'>
          <input
            type='text'
            value={edu.institute}
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
            placeholder='Year'
          />
          <button onClick={() => removeEducation(index)}>❌ Remove</button>
        </div>
      ))}

      <button onClick={addEducation}>➕ Add Education</button>
    </div>
  );
}
