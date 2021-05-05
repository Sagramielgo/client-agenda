import React, { useState } from 'react';
import countryList from 'country-list';

console.log(countryList.getNameList());

function ClientDetail(props) {
  const [name, setName] = useState(props.client?.name || '');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (props.isEdit) {
      props.setClient(props.client.id, { name: name });
    } else {
      props.createClient({ name: name });
    }
    window.history.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <input type="submit" value={props.isEdit ? 'Editar' : 'Añadir'} />
    </form>
  );
}

export default ClientDetail;
