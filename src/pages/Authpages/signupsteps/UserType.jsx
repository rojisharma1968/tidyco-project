import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import PageHeading from "../../../components/PageHeading";
import Card from "../../../components/Card";
import Button from "../../../components/Button";

const UserType = ({ selected, handleSelect, SetStep }) => {
  return (
    <>
      <SectionHeading
        margin="mb-1"
        text="Turn Your Cleaning Skills into Earnings"
      />
      <PageHeading
        width={false}
        align="text-center"
        color="text-primary after:w-12 after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:bg-primary after:-translate-x-1/2"
        text="Sign Up Now"
      />
      <h3 className="text-center mt-8 text-2xl 2xl:text-3xl font-bold text-black mb-2">
        Are You?
      </h3>
      <div className="w-1/2 mx-auto mt-5">
        <div className="grid grid-cols-2 gap-6">
          {[
            {
              icon: "../images/cleaning-plan.svg",
              title: "Cleaner",
              isSelectable: true,
            },
            {
              icon: "../images/cleaning-plan.svg",
              title: "Client",
              isSelectable: true,
            },
          ].map((item, index) => (
            <Card
              key={index}
              item={item}
              selected={selected === item.title}
              onSelect={() => handleSelect(item.title)}
              isSelectable={item.isSelectable}
            />
          ))}
        </div>
        <Button
          disable={!selected}
          handler={selected ? () => SetStep((prev) => prev + 1) : undefined}
          spacing="mx-auto mt-8"
          text="Next Step"
        />
      </div>
    </>
  );
};

export default UserType;
