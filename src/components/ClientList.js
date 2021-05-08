/* import { Link } from 'react-router-dom';
//Libraries
import countryList from 'country-list'; */

//Components
import ClientNew from './ClientNew';
import ClientCard from './ClientCard';

//Styles
import '../styles/layout/clientList.scss';

function ClientList(props) {
  const renderClientList = () => {
    return <ul className="clientList">{renderClientsItems()}</ul>;
  };

  const renderClientsItems = () => {
    return props.clients.map((client) => {
      /*  const countryName = countryList.getName(client.country); */
      return (
        <li key={client.id} className="table__client">
          <ClientCard
            client={client}
            removeClient={() => {
              props.removeClient(client.id);
            }}
          />

          {/*  {client.name}
          {client.lastName}
          {client.email}
          <h3>{`Country: ${countryName}`}</h3>
          <section className="btnSection">
            <div className="btn">
              <Link to={`/detail/${client.id}`}>Edit</Link>
            </div>
            <button
              className="btn"
              onClick={() => {
                props.removeClient(client.id);
              }}
            >
              Remove
            </button>
          </section> */}
        </li>
      );
    });
  };

  const renderNewClient = () => {
    return (
      <div className="listContainer">
        <header className="listContainer__header">
          <h1 className="listContainer__header--title">
            There are no registered clients.
          </h1>
          <h2 className="listContainer__header--title">
            Click on button to create a new one.
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
