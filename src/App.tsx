import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Gastos from './pages/Gastos/Gastos';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Gastos />
    </Router>
    </>
  );
}

export default App;
