const CustomInputs = (props) => {
  const { type, id, placeholder, className, label } = props;
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={id}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInputs;
