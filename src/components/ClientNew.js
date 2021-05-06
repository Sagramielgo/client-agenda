import { Link } from 'react-router-dom';
import '../styles/App.scss';

function ClientNew() {
  return (
    <div className="btnNew">
      <Link to="/detail/new">+</Link>
    </div>
  );
}

export default ClientNew;
