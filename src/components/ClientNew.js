import { Link } from 'react-router-dom';
import '../styles/App.scss';

function ClientNew() {
  return (
    <footer className="footer">
      <div className="btnNew">
        <Link to="/detail/new">+</Link>
      </div>
    </footer>
  );
}

export default ClientNew;
