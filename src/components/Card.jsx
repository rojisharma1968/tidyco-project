import React from "react";
import SectionParagraph from "./SectionParagraph";

const Card = ({ item, selected, onSelect, isSelectable = false }) => {
  const Wrapper = isSelectable ? "label" : "div";
  return (
    <Wrapper
      className={`bg-white duration-200 text-center px-3 2xl:px-6 py-6 rounded-2xl border relative overflow-hidden block ${
        selected && isSelectable
          ? "border-primary cursor-pointer"
          : "border-gray/50"
      } ${isSelectable ? "hover:scale-[0.95]  active:scale-[0.95]" : ""}`}
    >
      {isSelectable && (
        <input
          type="radio"
          name="userType"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={onSelect}
          checked={selected}
        />
      )}

      {isSelectable && selected && (
        <div className="absolute size-6 top-4 right-4 z-10">
          <svg
            className="size-full"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="30.3" height="30.025" rx="15.0125" fill="#34A853" />
            <path
              d="M12.7 21.025L7 15.325L8.425 13.9L12.7 18.175L21.875 9L23.3 10.425L12.7 21.025Z"
              fill="white"
            />
          </svg>
        </div>
      )}

      {/* Content */}
      <span className="size-18 bg-primary/15 inline-flex items-center px-4 rounded-full mb-4">
        <img
          src={item?.icon}
          alt={item.title}
          loading="lazy"
          className="size-fit mx-auto"
        />
      </span>
      <h3 className="text-xl 2xl:text-2xl font-bold text-black-heading mb-2">
        {item.title}
      </h3>
      {item.description && (
        <SectionParagraph spacing="mt-1" text={item.description} />
      )}

      {/* Decorative Bottom */}
      <span className="pointer-events-none w-full z-1 block bg-white h-4 absolute left-0 bottom-2 rounded-b-2xl"></span>
      <span className="pointer-events-none w-full block bg-primary h-5 absolute left-0 bottom-0"></span>
    </Wrapper>
  );
};

export default Card;
