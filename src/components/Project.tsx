import { Icon } from '@iconify/react/dist/iconify.js';
import { useCVStore } from '../store/useCVStore';
import Input from './Input';
import Textarea from './Textarea';

export default function Project() {
  const { data, addProject, updateProject, removeProject } = useCVStore();

  return (
    <section>
      <h2>Proyek atau Penghargaan</h2>
      {data.projects.map(({ projectName, description }, index) => (
        <div key={index} className='flex flex-col gap-3 items-center mb-3'>
          <div className='grid gap-3 w-full'>
            <Input
              type='text'
              label='Nama Proyek atau Penghargaan'
              placeholder='Nama Proyek atau Penghargaan'
              icon='material-symbols:work-outline'
              value={projectName}
              onChange={(e) => updateProject(index, 'projectName', e.target.value)}
            />
            <Textarea
              label='Deskripsi Proyek atau Penghargaan'
              placeholder='Deskripsi Proyek atau Penghargaan'
              value={description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
            />
          </div>
          <button className='btn btn-error' onClick={() => removeProject(index)}>
            <Icon icon='material-symbols:close' />
          </button>
        </div>
      ))}
      <div className='flex items-center'>
        <button onClick={addProject} className='mx-auto btn btn-wide'>
          <Icon icon='ic:baseline-plus' />
          <span>Tambah Proyek</span>
        </button>
      </div>
    </section>
  );
}
