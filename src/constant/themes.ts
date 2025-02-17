import Brutalist from '../components/form/Brutalist';
import Formal from '../components/form/Formal';
import Playful from '../components/form/Playful';
import Luxury from '../components/template/Luxury';
import Retro from '../components/template/Retro';
import { Theme } from '../type/theme';

export const themes: { name: Theme; component: React.FC }[] = [
  { name: 'light', component: Formal },
  { name: 'dark', component: Playful },
  { name: 'retro', component: Retro },
  { name: 'luxury', component: Luxury },
  { name: 'pastel', component: Brutalist },
];
