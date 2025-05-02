import React from "react";
import SectionHeading from "../../../components/SectionHeading";
import Button from "../../../components/Button";
import { ChevronDown } from "lucide-react";

const WorkExperience = ({ setFormData, handleSubmit }) => {

  const handleSubmition = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <>
      <SectionHeading
        margin="mb-1"
        color="after:w-12 after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:bg-primary after:-translate-x-1/2"
        text="Basic <span class='text-primary'>Details</span>"
      />
      <form
        onSubmit={handleSubmition}
        className="w-1/2 mx-auto grid grid-cols-2 gap-6 mt-8"
      >
        <input
          type="text"
          name="qualification"
          placeholder="Highest Qualification"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, highest_study: e.target.value }))
          }
          className="outline-primary border border-gray rounded-lg px-3 py-2.5"
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, work_experience: e.target.value }))
          }
          className="outline-primary border border-gray rounded-lg px-3 py-2.5"
        />
        <div className="col-span-2 w-full h-fit">
          <div className="relative">
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              className="outline-primary cursor-pointer border border-gray rounded-lg px-3 py-2.5 size-full"
            />
            <svg
              className="absolute size-4.5 right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary"
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 13.5H10V7.5H14L7 0.5L0 7.5H4V13.5ZM0 15.5H14V17.5H0V15.5Z"
                fill="#45ACDE"
              />
            </svg>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Upload supported file (Max 15MB)
          </p>
        </div>
        <div className="col-span-2">
          <label className="block text-base font-semibold text-black mb-2">
            Select Work Areas
          </label>
          <div className="relative">
            <select
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  work_areas: [e.target.value],
                }))
              }
              name="service"
              className="w-full cursor-pointer font-normal border focus:outline-primary border-gray px-3 py-2.5 pr-10 rounded-md appearance-none"
            >
              {["Area1", "Area2", "Area3"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            {/* Custom arrow */}
            <ChevronDown
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black"
              size={25}
            />
          </div>
        </div>
        <div className="w-1/2 col-span-2 mx-auto mt-5">
          <Button spacing="mx-auto" text="Next Step" />
        </div>
      </form>
    </>
  );
};

export default WorkExperience;
