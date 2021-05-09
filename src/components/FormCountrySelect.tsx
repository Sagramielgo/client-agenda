import countryList from 'country-list';

function FormSelect(props:any): JSX.Element {
  const handleSelect = (ev: { target: { value: any; }; }) =>  {
    props.handleSelect(ev.target.value);
  };

  //Get the name of the countries in the dropdown
  const renderOptions = () => {
    const countries = countryList.getNameList();
    const result:any[] = [];
    for (const countryName in countries) {
      const countryCode = countries[countryName];
      result.push(
        <option key={countryCode} value={countryCode}>
          {countryList.getName(countryCode)}
        </option>
      );
    }
    return result;
  };

  return (
    <>
      <label className="form__label">{props.label}</label>
      <select
        className="form__input"
        value={props.value}
        onChange={handleSelect}
      >
        {renderOptions()}
      </select>
    </>
  );
}

export default FormSelect;
