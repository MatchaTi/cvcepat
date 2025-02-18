import Brutalist from '../components/form/Brutalist';
import Dark from '../components/template/Dark';
import Light from '../components/template/Light';
import Luxury from '../components/template/Luxury';
import Retro from '../components/template/Retro';
import { Theme } from '../type/theme';

export const themes: { name: Theme; component: React.FC }[] = [
  { name: 'light', component: Light },
  { name: 'dark', component: Dark },
  { name: 'retro', component: Retro },
  { name: 'luxury', component: Luxury },
  { name: 'pastel', component: Brutalist },
];
