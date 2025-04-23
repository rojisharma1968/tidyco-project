import React from "react";

const SectionHeading = ({ text, align, color }) => {
  return (
    <div
      className={`${
        align ? align : "text-center mx-auto"
      } relative w-fit leading-[1.3] lg:leading-[1.1] text-3xl lg:text-4xl 2xl:text-5xl font-bold ${color ? color : 'text-black'}`}
    >
      <h2 dangerouslySetInnerHTML={{ __html: text }} />
      <img
        src="../images/sparking-star.webp"
        alt="sparking-img"
        className="absolute hidden lg:block -right-12 size-10 top-1/3 -translate-y-1/2"
      />
    </div>
  );
};

export default SectionHeading;
