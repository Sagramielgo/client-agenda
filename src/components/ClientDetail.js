import React, { useState } from 'react';
import FormInput from './FormInput';
import FormCountrySelect from './FormCountrySelect';

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
    window.history.back(); // Back to home page
  };

  const emailRegexValidator =
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  return (
    <main className="formContainer">
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          label="First name:"
          id="name"
          required
          value={name}
          handleInput={setName}
        />
        <label className="form__label">Last name:</label>
        <input
          className="form__input"
          type="text"
          value={lastName}
          required
          onChange={(ev) => setLastName(ev.target.value)}
        />
        <FormInput
          label="Email:"
          id="email"
          required
          value={email}
          pattern={emailRegexValidator}
          handleInput={setEmail}
        />
        <FormCountrySelect
          label="Country:"
          value={country}
          handleSelect={setCountry}
        />
        <input
          className="form__submit"
          type="submit"
          value={props.isEdit ? 'Edit' : 'Create'}
        />
        <input
          className="form__submit"
          type="button"
          value="Cancel"
          onClick={() => window.history.back()}
        />
      </form>
    </main>
  );
}

export default ClientDetail;
