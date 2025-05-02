import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import Button from "../../../components/Button";
import Addressform from "./Addressform";

const Address = ({ setFormData, handleSubmit }) => {
  const handleSubmition = (e) => {
    e.preventDefault();
    handleSubmit()  
  };

  return (
    <>
      <SectionHeading
        margin="mb-1"
        color="after:w-12 after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:bg-primary after:-translate-x-1/2"
        text="Add <span class='text-primary'>Address</span>"
      />
      <form
        onSubmit={handleSubmition}
        className="w-1/2 mx-auto grid grid-cols-2 gap-6 mt-8"
      >
        <Addressform setFormData={setFormData} />
        <div className="w-1/2 col-span-2 mx-auto">
          <Button spacing="mx-auto" text="Next Step" />
        </div>
      </form>
    </>
  );
};

export default Address;
