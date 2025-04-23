import React from "react";

const Button = ({ text, bcolor, stroke = true, position, spacing, width, isShow }) => {
  return (
    <button
      className={`bg-primary shrink-0 ${width ? width : 'size-fit' } font-semibold cursor-pointer rounded-full border-3 ${
        stroke ? (bcolor ? bcolor : "border-[#c7e6f5]") : "border-primary"
      }  px-7 text-white py-2 text-base ${position ? position : "relative"} ${
        spacing ? spacing : "mt-0"
      } ${isShow ? isShow : 'block'}`}
    >
      {text}
    </button>
  );
};

export default Button;
