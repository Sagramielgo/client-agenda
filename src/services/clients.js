import { getDefaultNormalizer } from '@testing-library/dom';
import { v4 as uuidv4 } from 'uuid'; //create random id

const getAll = () => {
  return [
    {
      id: '123',
      name: 'Sagra',
      lastName: 'Mielgo',
      email: 'sagramielgo@gmail.com',
      country: 'Spain',
    },
    {
      id: '456',
      name: 'Miguel',
      lastName: 'Del Mazo',
      email: 'miguel@gmail.com',
      country: 'Euskadi',
    },
  ];
};

const get = (clients, clientId) => {
  const newClients = [...clients];
  return newClients.find((client) => client.id === clientId);
};

const create = (clients, client) => {
  const newClients = [...clients];
  const newClient = { ...client };
  newClient.id = uuidv4();
  newClients.push(newClient);
  return newClients;
};

const set = (clients, clientId, client) => {
  const newClients = [...clients];
  const foundClient = newClients.find((client) => client.id === clientId);
  foundClient.name = client.name;
  foundClient.lastName = client.lastName;
  foundClient.email = client.email;
  foundClient.country = client.country;
  return newClients;
};

const remove = (clients, clientId) => {
  //test function remove
  const newClients = [...clients];
  const foundClient = newClients.find((client) => client.id === clientId);
  newClients.splice(foundClient);
  return newClients;
};

const objectToExport = {
  getAll,
  get,
  create,
  set,
  remove,
};

export default objectToExport;
