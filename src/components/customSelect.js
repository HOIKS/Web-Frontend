import React, { useState } from 'react';

const CustomSelect = ({ name, options, defaultValue, onChange, style }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleSelectChange = (e) => {
    const valueId = e.target.value;
    const nameString = e.target.options[e.target.selectedIndex].text;
    setSelectedValue(valueId);
    if (onChange) {
      onChange(valueId, nameString);  // onChange 콜백이 있다면 호출
    }
  };

  return (
    <div>
      <select
        value={selectedValue}
        name={name}
        onChange={handleSelectChange}
        style={style}
      >
        {options.map((option, index) => (
          <option
            key={index}
            value={option.id}
            style={style} // option에도 style 적용
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
