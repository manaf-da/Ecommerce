import React from "react";

const CustomInputs = (props) => {
  const { type, name, placeholder, className } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInputs;
