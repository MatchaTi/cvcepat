import Dark from '../components/template/Dark';
import Elegant from '../components/template/Elegant';
import Formal from '../components/template/Formal';
import Light from '../components/template/Light';
import Luxury from '../components/template/Luxury';
import Pastel from '../components/template/Pastel';
import Retro from '../components/template/Retro';
import { Theme } from '../type/theme';

export const themes: { name: Theme; component: React.FC }[] = [
  { name: 'formal', component: Formal },
  { name: 'light', component: Light },
  { name: 'dark', component: Dark },
  { name: 'retro', component: Retro },
  { name: 'luxury', component: Luxury },
  { name: 'pastel', component: Pastel },
  { name: 'elegant', component: Elegant },
];
