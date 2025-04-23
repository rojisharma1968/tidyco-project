import React from "react";

const PageHeading = ({ text }) => {
  return (
    <h1
      dangerouslySetInnerHTML={{ __html: text }}
      className="leading-[1.3] w-[90%] text-5xl font-bold text-white"
    ></h1>
  );
};

export default PageHeading;
