import { useLayoutStore } from '../store/useLayoutStore';
import { layouts } from '../constant/layouts';

export default function LayoutSwitcher() {
  const { layout, setLayout } = useLayoutStore();

  return (
    <fieldset id='layout' className='flex gap-3 justify-center items-center fieldset'>
      <p className='fieldset-legend'>Layout</p>
      <select
        className='select'
        name='layout'
        id='layout'
        defaultValue={layout}
        onChange={(e) => setLayout(e.target.value)}
      >
        {layouts.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
