import { Link } from 'react-router-dom';
import countryList from 'country-list';
import '../styles/layout/clientCard.scss';

function ClientCard(props) {
  const countryName = countryList.getName(props.client.country);
  return (
    <article className="clientCard">
      <h3 className="clientCard__name">{props.client.name}</h3>
      <h3 className="clientCard__lastName">{props.client.lastName}</h3>
      <h3 className="clientCard__email">✉ {props.client.email}</h3>
      <h3 className="clientCard__country">{`Country: ${countryName}`}</h3>
      <section className="btnSection">
        <div className="btn">
          <Link to={`/detail/${props.client.id}`}>Edit</Link>
        </div>
        <button
          className="btn"
          onClick={() => {
            props.removeClient(props.client.id);
          }}
        >
          🗑
        </button>
      </section>
    </article>
  );
}

export default ClientCard;
