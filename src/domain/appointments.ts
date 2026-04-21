import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

const createAppointment = async (appointment: any) => {
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

export { createAppointment };
