const CustomInputs = (props) => {
  const { type, id, placeholder, className, label, name, value, onChange } =
    props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInputs;
