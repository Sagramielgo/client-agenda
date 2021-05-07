import { v4 as uuidv4 } from 'uuid'; //create random id
import localStorage from '../services/localStorage';

const getAll = () => {
  return localStorage.get([]);
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
  localStorage.set(newClients);
  return newClients;
};

const set = (clients, clientId, client) => {
  const newClients = [...clients];
  const foundClient = newClients.find((client) => client.id === clientId);
  foundClient.name = client.name;
  foundClient.lastName = client.lastName;
  foundClient.email = client.email;
  foundClient.country = client.country;
  localStorage.set(newClients);
  return newClients;
};

const remove = (clients, clientId) => {
  const newClients = [...clients];
  const foundClientIndex = newClients.findIndex(
    (client) => client.id === clientId
  );
  newClients.splice(foundClientIndex, 1);
  localStorage.set(newClients);
  return newClients;
};

const sortByLastName = (clients) => {
  return clients.sort((clientA, clientB) => {
    const clientALastName = clientA.lastName.toLowerCase();
    const clientBLastName = clientB.lastName.toLowerCase();
    if (clientALastName < clientBLastName) {
      return -1;
    } else if (clientALastName > clientBLastName) {
      return 1;
    } else {
      return 0;
    }
  });
};

const objectToExport = {
  getAll,
  get,
  create,
  set,
  remove,
  sortByLastName,
};

export default objectToExport;
