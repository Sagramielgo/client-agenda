const localStorageKey = 'data';

const get = (defaultData) => {
  const data = localStorage.getItem(localStorageKey);
  return data === null ? defaultData : JSON.parse(data);
};

const set = (data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

const objectToExport = {
  get,
  set,
};

export default objectToExport;
