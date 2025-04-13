import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'driver.js/dist/driver.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Form from './pages/Form.tsx';
import Result from './pages/Result.tsx';
import NotFound from './components/NotFound.tsx';
import Panduan from './pages/Panduan.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<App />} />
        <Route path='/form' element={<Form />} />
        <Route path='/result' element={<Result />} />
        <Route path='/panduan' element={<Panduan />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
