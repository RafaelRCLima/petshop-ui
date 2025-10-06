import React from "react";
import "./styles/global.css";
import { Header, Container, FormContainer } from "./styles";
import { Instagram as InstagramIcon } from "@mui/icons-material";
import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
import DatePicker from "./components/DatePicker";
import "react-datepicker/dist/react-datepicker.css";

const animalTypes = ["Cachorro", "Gato"];
const serviceTypes = [
  "Banho",
  "Tosa na tesoura",
  "Banho e tosa",
  "Banho e tosa higiênica",
];
const furSizes = ["Pequeno", "Médio", "Grande"];
const animalSizes = ["Pequeno", "Médio", "Grande"];
const times = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
];
const tangled = ["Sim", "Não"];

const App = () => {
  return (
    <>
      <Container>
        <Header>
          <img className="logo" src="logo.png" alt="Logo" />
          <nav className="menu">Quem somos</nav>
          <nav className="menu">Agendar Serviço</nav>
          <nav className="menu">Agendamentos</nav>
          <a
            className="menu"
            href="https://instagram.com/anaamanda_groomer"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </Header>
        <FormContainer>
          <form className="form-container">
            <InputLabel className="input-label">Nome do pet</InputLabel>
            <TextField className="input-area" size="small" />

            <InputLabel className="input-label">Serviço</InputLabel>
            <Select className="input-area" size="small">
              {serviceTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>

            <InputLabel className="input-label">Animal</InputLabel>
            <Select className="input-area" size="small">
              {animalTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>

            <InputLabel className="input-label">Tamanho do pêlo</InputLabel>
            <Select className="input-area" size="small">
              {furSizes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>

            <InputLabel className="input-label">Tamanho do pet</InputLabel>
            <Select className="input-area" size="small">
              {animalSizes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>

            <InputLabel className="input-label">Raça</InputLabel>
            <TextField className="input-area" size="small" />

            <InputLabel className="input-label">
              Pelos estão embolados?
            </InputLabel>
            <Select className="input-area" size="small">
              {tangled.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>

            <div className="date-time-container">
              <div className="date-time-position">
                <InputLabel className="input-label">Data</InputLabel>
                <DatePicker />
              </div>
              <div className="date-time-position">
                <InputLabel className="input-label">Horário</InputLabel>
                <Select className="input-area time-input-area" size="small">
                  {times.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </form>
        </FormContainer>
      </Container>
    </>
  );
};

export default App;
