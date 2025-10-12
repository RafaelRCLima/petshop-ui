import { useState } from 'react';

import { FormContainer } from './styles';
import DatePicker from '../DatePicker';
import Input from '../Input';
import Select from '../Select';
import { SelectChangeEvent, Button } from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';

const animalTypes = ['Cachorro', 'Gato'];
const serviceTypes = [
  'Banho',
  'Tosa na tesoura',
  'Banho e tosa',
  'Banho e tosa higiênica'
];
const furSizes = ['Pequeno', 'Médio', 'Grande'];
const animalSizes = ['Pequeno', 'Médio', 'Grande'];
const times = [
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00'
];
const tangled = ['Sim', 'Não'];

export default function Form() {
  const [name, setName] = useState('');
  const [service, setService] = useState(serviceTypes[0]);
  const [animalType, setAnimalType] = useState(animalTypes[0]);
  const [furSize, setFurSize] = useState(furSizes[0]);
  const [animalSize, setAnimalSize] = useState(animalSizes[0]);
  const [time, setTime] = useState(times[0]);
  const [race, setRace] = useState('');
  const [isTangled, setIsTangled] = useState(tangled[1]);
  const [date, setDate] = useState(new Date());

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleRaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRace = event.target.value;
    setRace(newRace);
  };

  const handleServiceChange = (event: SelectChangeEvent) => {
    const newService = event.target.value as string;
    setService(newService);
  };

  const handleAnimalTypeChange = (event: SelectChangeEvent) => {
    const newAnimalType = event.target.value;
    setAnimalType(newAnimalType);
  };

  const handleFurSizeChange = (event: SelectChangeEvent) => {
    const newFurSize = event.target.value;
    setFurSize(newFurSize);
  };

  const handleAnimalSizeChange = (event: SelectChangeEvent) => {
    const newAnimalSize = event.target.value;
    setAnimalSize(newAnimalSize);
  };

  const handleTimeChange = (event: SelectChangeEvent) => {
    const newTime = event.target.value;
    setTime(newTime);
  };

  const handleFurIsTangledChange = (event: SelectChangeEvent) => {
    const newIsTangled = event.target.value;
    setIsTangled(newIsTangled);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) setDate(date);
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(
      'Values: ',
      name,
      race,
      service,
      animalType,
      furSize,
      animalSize,
      time,
      race,
      isTangled,
      date
    );
  }

  return (
    <>
      <FormContainer>
        <h1 className="form-title">Agende o serviço para o seu Pet 🐾</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <Input
            inputLabel="Nome do Pet"
            inputId="pet-name"
            onChange={handleNameChange}
            className="input-area"
          />
          <Input
            inputLabel="Raça"
            inputId="race"
            value={race}
            onChange={handleRaceChange}
            className="input-area"
          />
          <Select
            itemsList={serviceTypes}
            selectLabel="Serviço"
            selectId="service"
            value={service}
            onChange={handleServiceChange}
            className="select-input"
          />
          <Select
            itemsList={animalTypes}
            selectLabel="Qual é seu Pet?"
            selectId="animal-type"
            value={animalType}
            onChange={handleAnimalTypeChange}
            className="select-input"
          />
          <Select
            itemsList={furSizes}
            selectLabel="Tamanho do Pêlo"
            selectId="fur-size"
            value={furSize}
            onChange={handleFurSizeChange}
            className="select-input"
          />
          <Select
            itemsList={animalSizes}
            selectLabel="Tamanho do Pet"
            selectId="animal-size"
            value={animalSize}
            onChange={handleAnimalSizeChange}
            className="select-input"
          />
          <Select
            itemsList={tangled}
            selectLabel="Tamanho do Pet"
            selectId="animal-size"
            value={isTangled}
            onChange={handleFurIsTangledChange}
            className="select-input"
          />

          <div className="date-time-container">
            <DatePicker onChange={handleDateChange} selected={date} />
            <Select
              itemsList={times}
              selectLabel="Selecione o horário"
              selectId="time"
              value={time}
              onChange={handleTimeChange}
              className="select-input-time"
            />
          </div>

          <Button type="submit" variant="contained" className="submit-button">
            Agendar
          </Button>
        </form>
      </FormContainer>
    </>
  );
}
