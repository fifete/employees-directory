import './App.css';
import { Login } from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
