import React from "react";

const CustomInputs = (props) => {
  const { type, name, placeholder, className, value, onChange } = props;
  return (
    <div>
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
