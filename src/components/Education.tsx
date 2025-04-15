import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../store/useCVStore';
import Input from './Input';

export default function Education() {
  const { data, addEducation, updateEducation, removeEducation } = useCVStore();

  return (
    <section>
      <h2>Pendidikan</h2>
      {data.education.map(({ degree, institute, year }, index) => (
        <div key={index} className='flex flex-wrap gap-3 justify-center items-end mb-3 md:flex-nowrap'>
          <Input
            type='text'
            label='Nama Sekolah'
            placeholder='Nama Sekolah'
            icon='material-symbols:work-outline'
            value={institute}
            onChange={(e) => updateEducation(index, 'institute', e.target.value)}
          />
          <Input
            type='text'
            label='Tahun Lulus / Angkatan'
            placeholder='Tahun Lulus / Angkatan'
            icon='charm:graduate-cap'
            value={year}
            onChange={(e) => updateEducation(index, 'year', e.target.value)}
          />
          <Input
            type='text'
            label='Gelar'
            placeholder='Gelar'
            icon='material-symbols:star-outline-rounded'
            value={degree}
            onChange={(e) => updateEducation(index, 'degree', e.target.value)}
          />
          <button className='mb-1 btn btn-error' onClick={() => removeEducation(index)}>
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <div className='flex justify-center items-center'>
        <button onClick={addEducation} className='btn btn-wide'>
          <Icon icon='ic:baseline-plus' />
          <span>Tambah Pendidikan</span>
        </button>
      </div>
    </section>
  );
}
