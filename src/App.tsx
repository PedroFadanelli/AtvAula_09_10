
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './login';
import PerfilUsuario from './userProfile';
import Store from './store';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<PerfilUsuario />} />
        <Route path="/details/:id" element={<Store />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;