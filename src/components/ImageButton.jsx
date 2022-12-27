/* eslint-disable react/require-default-props */
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
      {icon === "none" ? (
        <input
          className={
            mode === "dark"
              ? `placeholder-gray-400 text-white ${height} bg-black w-full px-2 rounded`
              : "bg-white text-base text-center placeholder-gray-500 py-2.5 h-10 w-36"
          }
          placeholder={placeholder}
          value={value}
          onChange={handleTextChange}
        />
      ) : (
        <div className="relative flex justify-center align-middle">
          <div
            className={`absolute 
            ${iconLeft ? "left-2 top-5" : "right-2 top-3.5"}`}
          >
            {" "}
            {icon}{" "}
          </div>
          <input
            className={`pr-7 ${height} w-full rounded placeholder-gray-400 text-white bg-black  object-left-top 
              ${iconLeft ? "pl-16" : "pl-2"}`}
            placeholder={placeholder}
            value={value}
            onChange={handleTextChange}
          />
        </div>
      )}
    </div>
  );
}
