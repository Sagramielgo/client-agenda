import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import ClientList from './ClientList';
import ClientDetail from './ClientDetail';
import ClientNew from './ClientNew';

// services
import clientsService from '../services/clients';

//Fuctional componenet
function App(): JSX.Element {
  const [clients, setClients] = useState(clientsService.getAll());


  //We create a new client and keep it in the array
  const createClient = (client: object) => {
    const newClients: any[] = clientsService.create(clients, client);
    setClients(newClients);
  };


  //
  const setClient = (clientId: number, client: object) => {
    const newClients: any[] = clientsService.set(clients, clientId, client);
    setClients(newClients);
  };

  const removeClient = (clientId: number) => {
    const newClients: any[] = clientsService.remove(clients, clientId);
    setClients(newClients);
  };

  const renderClientDetail = (props: { match: { params: { clientId: any; }; }; }) => {
    const clientId: any = props.match.params.clientId;
    const client: any = clientsService.get(clients, clientId);
    return <ClientDetail isEdit={true} client={client} setClient={setClient} />;
  };

  //Call the function to order alphabetically
  const sortedClients = clientsService.sortByLastName(clients);

  return (
    <Switch>
      <Route exact path="/">
        {/*  to go strictly home */}
        <ClientList clients={sortedClients} removeClient={removeClient} />
        <ClientNew />
      </Route>
      <Route path="/detail/new">
        <ClientDetail isEdit={false} createClient={createClient} />
      </Route>
      {/*  dinamic route to go to links in a SPA and share link in browser */}
      <Route path="/detail/:clientId" render={renderClientDetail} />
    </Switch>
  );
}

export default App;
