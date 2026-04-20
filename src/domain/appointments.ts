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
    startTime
  } = appointment;

  console.log('CREATING APPOINTMENT...');

  try {
    const response = await axios.post(`${url}/appointments`, {
      animalType,
      description,
      furIsTangled,
      furSize,
      name,
      race,
      size,
      startTime
    });

    console.log('Appointment created successfully:', response.data);
  } catch (error) {
    console.error('Error creating appointment:', error);
  }
};

export { createAppointment };
