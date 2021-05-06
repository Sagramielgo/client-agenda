import React, { useState } from 'react';
import countryList from 'country-list';

console.log(countryList.getNameList());

function ClientDetail(props) {
  const [name, setName] = useState(props.client?.name || '');
  const [lastName, setLastName] = useState(props.client?.lastName || '');
  const [email, setEmail] = useState(props.client?.email || '');
  const [country, setCountry] = useState(props.client?.country || '');

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (props.isEdit) {
      props.setClient(props.client.id, {
        name: name,
        lastName: lastName,
        email: email,
        country: country,
      });
    } else {
      props.createClient({
        name: name,
        lastName: lastName,
        email: email,
        country: country,
      });
    }
    window.history.back(); //Back to home page
  };

  return (
    <main className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          First name:
        </label>
        <input
          className="form__input"
          type="text"
          name="name"
          value={name}
          required
          onChange={(ev) => setName(ev.target.value)}
        />
        <label className="form__label">Last name:</label>
        <input
          className="form__input"
          type="text"
          value={lastName}
          required
          onChange={(ev) => setLastName(ev.target.value)}
        />
        <label className="form__label">Email:</label>
        <input
          className="form__input"
          type="text"
          value={email}
          pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          required
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label className="form__label">Country:</label>
        <input
          className="form__input"
          type="text"
          value={country}
          required
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <input
          className="form__submit"
          type="submit"
          value={props.isEdit ? 'Edit' : 'Create'}
        />
      </form>
    </main>
  );
}

export default ClientDetail;
