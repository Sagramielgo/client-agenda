function FormInput(props) {
  const handleInput = (ev) => {
    props.handleInput(ev.target.value);
  };

  return (
    <>
      <label className="form__label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="form__input"
        type="text"
        id={props.id}
        value={props.value}
        pattern={props.pattern}
        required={props.required}
        onChange={handleInput}
      />
    </>
  );
}

export default FormInput;
