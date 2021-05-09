//Components
import ClientNew from './ClientNew';
import ClientCard from './ClientCard';

//Styles
import '../styles/layout/clientList.scss';

function ClientList(props: { clients: any[]; removeClient: (arg0: any) => void; }) {
  const renderClientList = () => {
    return (
      <>
        <h1 className="clientListTitle">Client list</h1>
        <ul className="clientList">{renderClientsItems()}</ul>
      </>
    );
  };

//Paint every item of the list by travelling around the array
  const renderClientsItems = () => {
    return props.clients.map((client) => {
      return (
        <li key={client.id} className="clientItem">
          <ClientCard
            client={client}
            removeClient={() => {
              props.removeClient(client.id);
            }}
          />
        </li>
      );
    });
  };

  //Paint a message in case there are no clients yet.
  const renderNewClient = () => {
    return (
      <div className="listContainer">
        <header className="listContainer__header">
          <h1 className="listContainer__header--title">
            There are no registered clients.
          </h1>
          <h2 className="listContainer__header--title">
            Click on the button below to create a new one.
          </h2>
        </header>
        <ClientNew />
      </div>
    );
  };

  return (
    <div className="listContainer">
      {props.clients.length ? renderClientList() : renderNewClient()} 
    </div>
  );
}

export default ClientList;
