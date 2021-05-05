import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import ClientList from './ClientList';
import ClientDetail from './ClientDetail';
import ClientNew from './ClientNew';

// services
import clientsService from '../services/clients';

// styles
import '../styles/App.scss';

function App() {
  const [clients, setClients] = useState(clientsService.getAll());

  const createClient = (client) => {
    const newClients = clientsService.create(clients, client);
    setClients(newClients);
  };

  const setClient = (clientId, client) => {
    const newClients = clientsService.set(clients, clientId, client);
    setClients(newClients);
  };

  const renderClientDetail = (props) => {
    const clientId = props.match.params.clientId;
    const client = clientsService.get(clients, clientId);
    return <ClientDetail isEdit={true} client={client} setClient={setClient} />;
  };

  return (
    <Switch>
      <Route exact path="/">
        <ClientList clients={clients} />
        <ClientNew />
      </Route>
      <Route path="/detail/new">
        <ClientDetail isEdit={false} createClient={createClient} />
      </Route>
      <Route path="/detail/:clientId" render={renderClientDetail} />
    </Switch>
  );
}

export default App;
