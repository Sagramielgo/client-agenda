import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import ClientList from './ClientList';
import ClientDetail from './ClientDetail';
import ClientNew from './ClientNew';

// services
import clientsService from '../services/clients';


//Interface for const client
export type clientObj = {
  id: number
  name: string;
  lastName: string;
  email: string;
  country: string;
};


//Fuctional component
function App(): JSX.Element {
  const [clients, setClients] = useState<clientObj[]>(clientsService.getAll());


  //Create a new client and save it into the array
  const createClient = (client: object) => {
    const newClients: any[] = clientsService.create(clients, client);
    setClients(newClients);
  };


  //Modify client's data and save it into the array 
  const setClient = (clientId: number, client: object) => {
    const newClients: any[] = clientsService.set(clients, clientId, client);
    setClients(newClients);
  };

  //Alert for the user to rethink delete one client, if it's confirmed then remove client and his data from the array
  const removeClient = (clientId: number) => {
    if (window.confirm('Are you sure? This action will permanently delete this client from the list.')) { const newClients: any[] = clientsService.remove(clients, clientId);
    setClients(newClients);
    }window.history.back(); }; 
 
  //Route to go to detail card of one client, in order to modify all or some of them.
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
