import Brutalist from '../components/form/Brutalist';
import Elegant from '../components/form/Elegant';
import Formal from '../components/form/Formal';
import Playful from '../components/form/Playful';
import { Theme } from '../type/theme';

export const themes: { name: Theme; component: React.FC }[] = [
  { name: 'formal', component: Formal },
  { name: 'playful', component: Playful },
  { name: 'elegant', component: Elegant },
  { name: 'brutalist', component: Brutalist },
];
