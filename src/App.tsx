import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import NotFound from './components/NotFound';
import Form from './pages/Form';
import Result from './pages/Result';
import Panduan from './pages/Panduan';
import Homepage from './components/Homepage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/result' element={<Result />} />
        <Route path='/panduan' element={<Panduan />} />
      </Routes>
    </BrowserRouter>
  );
}
