import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../store/useCVStore';
import Input from './Input';
import Textarea from './Textarea';

export default function Experience() {
  const { data, addExperience, updateExperience, removeExperience } = useCVStore();

  return (
    <section>
      <h2>Pengalaman</h2>
      {data.experience.map(({ company, position, year, description }, index) => (
        <div key={index} className='flex flex-col gap-3 items-center mb-3'>
          <div className='grid grid-cols-3 gap-3 w-full'>
            <Input
              type='text'
              label='Nama Tempat'
              placeholder='Nama Tempat'
              icon='material-symbols:work-outline'
              value={company}
              onChange={(e) => updateExperience(index, 'company', e.target.value)}
            />
            <Input
              type='text'
              label='Jabatan'
              placeholder='Jabatan'
              icon='fluent:position-forward-20-filled'
              value={position}
              onChange={(e) => updateExperience(index, 'position', e.target.value)}
            />

            <Input
              type='text'
              label='Durasi'
              placeholder='Durasi'
              icon='material-symbols:calendar-today'
              value={year}
              onChange={(e) => updateExperience(index, 'year', e.target.value)}
            />
            <div className='col-span-3'>
              <Textarea
                label='Deskripsi Pengalaman'
                placeholder='Deskripsi Pengalaman'
                value={description}
                onChange={(e) => updateExperience(index, 'description', e.target.value)}
              />
            </div>
          </div>
          <button className='btn btn-error' onClick={() => removeExperience(index)}>
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <div className='flex justify-center items-center'>
        <button onClick={addExperience} className='btn btn-wide'>
          <Icon icon='ic:baseline-plus' />
          <span>Tambah Pengalaman</span>
        </button>
      </div>
    </section>
  );
}
