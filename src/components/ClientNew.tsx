import { Link } from 'react-router-dom';
import '../styles/layout/clientNew.scss';

function ClientNew(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__btnNew">
        <Link className="footer__btnNew--link" to="/detail/new">
          +
        </Link>
      </div>
    </footer>
  );
}

export default ClientNew;
