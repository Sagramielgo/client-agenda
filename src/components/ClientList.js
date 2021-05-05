import { Link } from 'react-router-dom';
import ClientNew from './ClientNew';

function ClientList(props) {
  const renderClientList = () => {
    return <ul>{renderClientsItems()}</ul>;
  };

  const renderClientsItems = () => {
    return props.clients.map((client) => {
      return (
        <li key={client.id}>
          {client.name}
          <Link to={`/detail/${client.id}`}>Editar</Link>
        </li>
      );
    });
  };

  const renderNewClient = () => {
    return (
      <div>
        <p>No hay clientes. Pulsa en el botón para crear uno</p>
        <ClientNew />
      </div>
    );
  };

  return (
    <div>{props.clients.length ? renderClientList() : renderNewClient()}</div>
  );
}

export default ClientList;
