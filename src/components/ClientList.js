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
          <span>First name: </span>
          <h3>{client.name}</h3>
          <h3>{`Last name: ${client.lastName}`}</h3>
          <h3>{`Email: ${client.email}`}</h3>
          <h3>{`Country: ${client.country}`}</h3>

          <section className="btnSection">
            <div className="btn">
              <Link to={`/detail/${client.id}`}>Edit</Link>
            </div>
            <button className="btn" onClick={handleRemove}>
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
