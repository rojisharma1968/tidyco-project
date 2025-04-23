import React from "react";

const PageHeading = ({ text }) => {
  return (
    <h1
      dangerouslySetInnerHTML={{ __html: text }}
      className="leading-[1.3] lg:w-[90%] text-4xl lg:text-5xl font-bold text-white"
    ></h1>
  );
};

export default PageHeading;
