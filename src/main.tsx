import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Form from './pages/Form.tsx';
import Result from './pages/Result.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/form' element={<Form />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
