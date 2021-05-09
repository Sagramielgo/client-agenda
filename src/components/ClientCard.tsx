import { Link } from 'react-router-dom';

//libraries
import countryList from 'country-list';

//styles
import '../styles/layout/clientCard.scss';

function ClientCard(props:any):JSX.Element {
  //Function to get country names
  const countryName: string | undefined = countryList.getName(props.client.country);

  //Return card structure for each client
  return (
    <article className="clientCard">
      <h3 className="clientCard__name">{props.client.name}</h3>
      <h3 className="clientCard__lastName">{props.client.lastName}</h3>
      <a className="clientCard__email" 
         href={`mailto:${props.client.email}`}>
         {props.client.email}</a>
      <h3 className="clientCard__country">{countryName}</h3>
      <section className="btnSection">
        <button className="btnSection__btnEdit">
          <Link //Goes to form page
            className="btnSection__btnEdit--link"
            to={`/detail/${props.client.id}`}
          >
            Edit
          </Link>
        </button>
        <button
          className="btnSection__btnRemove far fa-trash-alt"
          onClick={() => {
            props.removeClient(props.client.id);
          }}
        ></button>
      </section>
    </article>
  );
}

export default ClientCard;
