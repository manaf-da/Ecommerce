import React from "react";

const CustomInputs = (props) => {
  const { type, placeholder, className, label, i_id } = props;
  return (
    <div>
      <label htmlFor={label}>label</label>
      <input
        type={type}
        id={i_id}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInputs;
