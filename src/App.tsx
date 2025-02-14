import './App.css';
import CVForm from './components/CVForm';
import { useCVStore } from './store/useCVStore';

function App() {
  const { data } = useCVStore();
  console.log(data);

  return (
    <div className='h-dvh w-dvw bg-white font-sans text-black'>
      <CVForm />
    </div>
  );
}

export default App;
