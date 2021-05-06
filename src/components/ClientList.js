import { Link } from 'react-router-dom';
import ClientNew from './ClientNew';

function ClientList(props) {
  const renderClientList = () => {
    return <ul className="clientList">{renderClientsItems()}</ul>;
  };

  const handleRemove = (ev) => {
    props.removeClient(ev.currentTarget);
  };

  const renderClientsItems = () => {
    return props.clients.map((client) => {
      return (
        <li key={client.id} className="card">
          <h2>{client.name}</h2>
          <h2>{client.lastName}</h2>
          <h2>{client.email}</h2>
          <h2>{client.country}</h2>
          <Link className="btn" to={`/detail/${client.id}`}>
            Edit
          </Link>
          <button className="btn" onClick={handleRemove}>
            Remove
          </button>
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
