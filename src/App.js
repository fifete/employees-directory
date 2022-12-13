import './App.css';
import { Login } from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import PrivateRoutes from './utils/PrivateRoutes';
import { useState } from 'react';

function App() {
  const [authorization, setAuthorization] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuthorization= {setAuthorization}/>} />
        <Route path="login" element={<Login setAuthorization= {setAuthorization}/>} />
        <Route element={<PrivateRoutes authorization={authorization} />}>
          <Route element={<Home />} path="/home" />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
