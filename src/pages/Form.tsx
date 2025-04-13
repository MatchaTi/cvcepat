import MainLayout from '../components/MainLayout';
import 'driver.js/dist/driver.css';
import { useCVStore } from '../store/useCVStore';
import { useEffect } from 'react';
import CVForm from '../components/CVForm';

export default function Form() {
  const { data } = useCVStore();

  useEffect(() => {
    const nama = data.personalInfo.fullName ? data.personalInfo.fullName : 'CVCepat';
    if (nama) document.title = `${nama} - CVCepat`;
  }, [data.personalInfo.fullName]);

  return (
    <MainLayout>
      <CVForm />
    </MainLayout>
  );
}
