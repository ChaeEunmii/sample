import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageA from './pages/PageA';

function App() {
  return (
    <Routes>
       <Route path='/'>
        <Route index element={<PageA />} />
        <Route path='/pageA' element={<PageA />} />
      </Route>
    </Routes>
  );
}

export default App;
