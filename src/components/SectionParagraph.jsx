import React from "react";

const SectionParagraph = ({ text, align, color, spacing, size }) => {
  return (
    <p
      className={`${align ? align : "text-center"} ${
        spacing ? spacing : "mt-4"
      } font-normal ${size ? size : "text-sm lg:text-base"} ${
        color ? color : "text-black-content"
      }`}
    >
      {text}
    </p>
  );
};

export default SectionParagraph;
