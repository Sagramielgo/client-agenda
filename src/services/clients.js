import { v4 as uuidv4 } from 'uuid';

const getAll = () => {
  return [
    {
      id: '123',
      name: 'Sagra',
      lastName: 'Mielgo',
    },
    {
      id: '456',
      name: 'Miguel',
      lastName: 'Del Mazo',
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
  console.log(newClients);
  return newClients;
};

const set = (clients, clientId, client) => {
  const newClients = [...clients];
  const foundClient = newClients.find((client) => client.id === clientId);
  foundClient.name = client.name;
  foundClient.lastName = client.lastName;
  return newClients;
};

const remove = (clients, clientId) => {};

const objectToExport = {
  getAll,
  get,
  create,
  set,
  remove,
};

export default objectToExport;
