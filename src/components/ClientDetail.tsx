import React, { useState } from 'react';

//Components
import FormInput from './FormInput';
import FormCountrySelect from './FormCountrySelect';

//Styles
import '../styles/layout/clientDetail.scss';

function ClientDetail(props:any) {
  //Initial state of client properties
  const [name, setName] = useState<string>(props.client?.name || '');
  const [lastName, setLastName] = useState<string>(props.client?.lastName || '');
  const [email, setEmail] = useState<string>(props.client?.email || '');
  const [country, setCountry] = useState<string>(props.client?.country || '');

  const handleSubmit = (ev:any) => {
    ev.preventDefault(); //Avoid the form sending by default
    if (props.isEdit) {
      props.setClient(props.client.id, {
       name,
       lastName,
       email,
       country,
      });
    } else {
      props.createClient({
      name,
      lastName,
      email,
      country,
      });
    }
    window.history.back(); // Back to home page
  };

  //Regular expression to validate mail
  const emailRegexValidator =
    '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  return (
    <main className="formContainer">
      <h2 className="formContainer__title">All the fields are required</h2>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          label="First name:"
          id="name"
          required
          value={name}
          handleInput={setName}
        />
        <FormInput
          label="Last name:"
          id="lastName"
          value={lastName}
          required
          handleInput={setLastName}
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
        <section className="form__submitSection">
          <input
            className="form__submit btnCancel "
            type="button"
            value="Cancel"
            onClick={() => window.history.back()}
          />
          <input
            className="form__submit btnCreate"
            type="submit"
            value={props.isEdit ? 'Save' : 'Create'}
          />
        </section>
      </form>
    </main>
  );
}

export default ClientDetail;
