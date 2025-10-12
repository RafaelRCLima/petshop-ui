import { StrictMode } from 'react';
import './styles/global.css';
import Form from './components/Form';
import { Header, Container, Footer } from './styles';
import { Instagram as InstagramIcon } from '@mui/icons-material';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Table from './components/Table';
import Home from './components/Home';

const App = () => {
  return (
    <StrictMode>
      <Container>
        <BrowserRouter>
          <Header>
            <img className="logo" src="logo.png" alt="Logo" />
            <nav className="menu-container">
              <Link to="/" className="menu">
                Quem somos
              </Link>
              <Link to="/agendar" className="menu">
                Agendar Serviço
              </Link>
              <Link to="/agendamentos" className="menu">
                Agendamentos
              </Link>
              <a
                className="menu"
                href={process.env.REACT_APP_INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon />
              </a>
            </nav>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<Form />} />
            <Route path="/agendamentos" element={<Table />} />
          </Routes>
        </BrowserRouter>
        <Footer>Made by Rafael Lima &copy; - {new Date().getFullYear()}</Footer>
      </Container>
    </StrictMode>
  );
};

export default App;
