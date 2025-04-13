import { useCVStore } from '../store/useCVStore';
import Textarea from './Textarea';

export default function Bio() {
  const { data, setData } = useCVStore();

  return (
    <section>
      <h2>Bio</h2>
      <Textarea
        label='Deskripsikan Dirimu'
        placeholder='Tulis sesuatu tentang dirimu...'
        value={data.bio}
        onChange={(e) => setData({ bio: e.target.value })}
      />
    </section>
  );
}
