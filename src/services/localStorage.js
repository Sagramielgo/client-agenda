const localStorageKey = 'info';

const get = () => {
  const clients = localStorage.getItem(localStorageKey) || [];
  return JSON.parse(clients);
};

const set = (clients) => {
  localStorage.setItem(localStorageKey, JSON.stringify(clients));
};

const objectToExport = {
  get,
  set,
};

export default objectToExport;
