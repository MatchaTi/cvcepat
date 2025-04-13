import LayoutFive from '../components/template/LayoutFive';
import LayoutFour from '../components/template/LayoutFour';
import LayoutOne from '../components/template/LayoutOne';
import LayoutSeven from '../components/template/LayoutSeven';
import LayoutSix from '../components/template/LayoutSix';
import LayoutThree from '../components/template/LayoutThree';
import LayoutTwo from '../components/template/LayoutTwo';

export const layouts: { name: string; component: React.FC }[] = [
  { name: 'layout 1', component: LayoutOne },
  { name: 'layout 2', component: LayoutTwo },
  { name: 'layout 3', component: LayoutThree },
  { name: 'layout 4', component: LayoutFour },
  { name: 'layout 5', component: LayoutFive },
  { name: 'layout 6', component: LayoutSix },
  { name: 'layout 7', component: LayoutSeven },
];
