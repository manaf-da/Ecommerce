const CustomInputs = (props) => {
  const { type, id, placeholder, className, label, name, value, onChange } =
    props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInputs;
