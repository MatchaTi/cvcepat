import MainLayout from '../components/MainLayout';
import LayoutOne from '../components/template/LayoutOne';
import { layouts } from '../constant/layouts';
import { useLayoutStore } from '../store/useLayoutStore';

export default function Result() {
  const { layout } = useLayoutStore();
  const SelectedTemplate = layouts.find((t) => t.name === layout)?.component || LayoutOne;

  return (
    <MainLayout>
      <div id='resumeResult'>
        <SelectedTemplate />
      </div>
    </MainLayout>
  );
}
