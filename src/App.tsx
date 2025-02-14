import './App.css';
import CVForm from './components/CVForm';
import { useCVStore } from './store/useCVStore';

function App() {
  const { data } = useCVStore();
  console.log(data);

  return (
    <div className='h-dvh w-dvw bg-black font-sans text-white'>
      <CVForm />
    </div>
  );
}

export default App;
