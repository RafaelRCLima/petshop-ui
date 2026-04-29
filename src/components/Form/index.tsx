import { useState } from 'react';

import { FormContainer } from './styles';
import DatePicker from '../DatePicker';
import Input from '../Input';
import Select from '../Select';
import { SelectChangeEvent, Button } from '@mui/material';
import { createAppointment } from '../../domain/appointments';
import { set } from 'date-fns';
import Swal from 'sweetalert2';
import { useSnackbar } from 'notistack';

const animalTypes = ['Cachorro', 'Gato'];
const serviceTypes = [
  'Banho',
  'Tosa na tesoura',
  'Banho e tosa',
  'Banho e tosa higiênica'
];
const furSizes = ['Curto', 'Médio', 'Longo'];
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
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [service, setService] = useState(serviceTypes[0]);
  const [animalType, setAnimalType] = useState(animalTypes[0]);
  const [furSize, setFurSize] = useState(furSizes[0]);
  const [animalSize, setAnimalSize] = useState(animalSizes[0]);
  const [time, setTime] = useState(times[0]);
  const [race, setRace] = useState('');
  const [isTangled, setIsTangled] = useState(tangled[1]);
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;

    if (newName.length >= 3) setNameError(false);

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

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };

  const handleDateChange = (date: Date | null) => {
    if (date) setDate(date);
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!name || name.length < 3) {
      setNameError(true);
      enqueueSnackbar(
        name.length > 0
          ? 'O nome deve conter ao menos 3 caracteres.'
          : 'Por favor, informe o nome do seu Pet.',
        {
          variant: 'error'
        }
      );
      return;
    }

    try {
      await createAppointment({
        name,
        race: race || 'Não informada.',
        service,
        animalType,
        furSize,
        size: animalSize,
        description: description || 'Nenhuma observação.',
        furIsTangled: isTangled === 'Sim',
        startTime: set(date, {
          hours: Number(time.split(':')[0]),
          minutes: Number(time.split(':')[1])
        })
      });

      Swal.fire({
        icon: 'success',
        title: 'Agendamento realizado!',
        text: 'O serviço para o seu pet foi agendado com sucesso.'
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao agendar',
        text: 'Ocorreu um erro ao tentar agendar o serviço para o seu pet.'
      });
    }
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
            error={nameError}
          />
          <Input
            inputLabel="Raça"
            inputId="race"
            value={race}
            onChange={handleRaceChange}
            className="input-area"
            placeholder="(Ex.: Persa, Bulldog, Basset...)"
            required={false}
          />
          <Input
            inputLabel="Observações"
            inputId="description"
            value={description}
            onChange={handleDescriptionChange}
            className="input-area"
            placeholder="(Ex.: Não gosta que mexa na pata esquerda)"
            required={false}
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
            selectLabel="Pelo emaranhado?"
            selectId="is-tangled"
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
