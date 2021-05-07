import { Link } from 'react-router-dom';
import countryList from 'country-list';
import ClientNew from './ClientNew';

function ClientList(props) {
  const renderClientList = () => {
    return <ul className="clientList">{renderClientsItems()}</ul>;
  };

  const renderClientsItems = () => {
    return props.clients.map((client) => {
      const countryName = countryList.getName(client.country);
      return (
        <li key={client.id} className="table__client">
          {client.name}
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
          </section>
        </li>
      );
    });
  };

  const renderNewClient = () => {
    return (
      <div className="listContainer">
        <h1>There are no clients. Click on button to create a new one.</h1>
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
