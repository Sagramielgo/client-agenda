import React, { useState } from 'react';
import countryList from 'country-list';

console.log(countryList.getNameList());

function ClientDetail(props) {
  const [name, setName] = useState(props.client?.name || '');
  const [lastName, setLastName] = useState(props.client?.lastName || '');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (props.isEdit) {
      props.setClient(props.client.id, { name: name, lastName: lastName });
    } else {
      props.createClient({ name: name, lastName: lastName });
    }
    window.history.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First name:</label>
      <input
        type="text"
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />
      <label>Last name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(ev) => setLastName(ev.target.value)}
      />
      <input type="submit" value={props.isEdit ? 'Editar' : 'Añadir'} />
    </form>
  );
}

export default ClientDetail;
