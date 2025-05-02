import React from "react";

const PageHeading = ({ text, color, align, width ='true' }) => {
  return (
    <h1
      dangerouslySetInnerHTML={{ __html: text }}
      className={`leading-[1.3] ${ width ? 'lg:w-[90%]' : 'w-full' } relative text-3xl lg:text-4xl 2xl:text-5xl font-bold ${align ? align : 'text-left'} ${color ? color : 'text-white'}`}
    ></h1>
  );
};  

export default PageHeading;
