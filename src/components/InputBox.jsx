import React, { useState } from "react";

export default function InputBox({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange = () => {},
  placeholder,
  iconLeft = false,
  height = "h-10",
  icon = "none",
  text = "",
  mode = "normal",
}) {
  const [value, setValue] = useState(text);

  const handleTextChange = (e) => {
    setValue(e.target.value);
    onChange({ target: { name: placeholder, value: e.target.value } });
  };

  return (
    <div className="w-full">
      <div className="relative flex justify-center align-middle">
        <input
          className={`pr-7 ${height} w-full rounded placeholder-gray-400 bg-white  object-left-top 
              ${iconLeft ? "pl-16" : "pl-2"}`}
          placeholder={placeholder}
          value={value}
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
}
