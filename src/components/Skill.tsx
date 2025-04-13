import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../store/useCVStore';

export default function Skill() {
  const { data, addSkill, updateSkill, removeSkill } = useCVStore();

  return (
    <section>
      <h2>Kemampuan</h2>
      <div className='flex flex-wrap gap-3 mt-2'>
        {data.skills.map((skill, index) => (
          <div key={index} className='flex gap-1 items-center'>
            <input
              type='text'
              value={skill}
              className='p-3 input field-sizing-content'
              onChange={(e) => updateSkill(index, e.target.value)}
              placeholder='Skill'
            />
            <button className='btn btn-error' onClick={() => removeSkill(index)}>
              <Icon icon='material-symbols:close' />
            </button>
          </div>
        ))}
        <button onClick={addSkill} className='btn'>
          <Icon icon='ic:baseline-plus' />
          <span>Tambah Kemampuan</span>
        </button>
      </div>
    </section>
  );
}
