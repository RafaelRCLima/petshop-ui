import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

type AppointmentType = {
  animalType: string;
  description: string;
  furIsTangled: boolean;
  furSize: string;
  name: string;
  race: string;
  size: string;
  startTime: Date;
  service: string;
};

const createAppointment = async (appointment: AppointmentType) => {
  const {
    animalType,
    description,
    furIsTangled,
    furSize,
    name,
    race,
    size,
    startTime,
    service
  } = appointment;

  const response = await axios.post(`${url}/appointments`, {
    animalType,
    description,
    furIsTangled,
    furSize,
    name,
    race,
    size,
    startTime,
    service
  });

  return response.data;
};

const searchAppointments = async (query: any) => {
  const { rowsPerPage, page } = query;

  const response = await axios.get(
    `${url}/appointments/${rowsPerPage}/${page}`
  );
  return response.data;
};

export { createAppointment, searchAppointments };
