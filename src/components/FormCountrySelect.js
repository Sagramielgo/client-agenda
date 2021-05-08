import countryList from 'country-list';

function FormSelect(props) {
  const handleSelect = (ev) => {
    props.handleSelect(ev.target.value);
  };

  const renderOptions = () => {
    const countries = countryList.getNameList();
    const result = [];
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
