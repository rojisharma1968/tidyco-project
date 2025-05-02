import React, { useState } from "react";
import SectionHeading from "../../../components/SectionHeading";
import { CalendarDays, Check, ChevronDown } from "lucide-react";
import Button from "../../../components/Button";
import Addressform from "./Addressform";

const BasicDetails = ({
  selected,
  userType,
  SetStep,
  setFormData,
}) => {
  const [password, setPassword] = useState({
    "current-password": "",
    "confirm-password": "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const updatedPassword = { ...password, [name]: value };
    setPassword(updatedPassword);

    if (
      updatedPassword["current-password"] &&
      updatedPassword["confirm-password"]
    ) {
      if (updatedPassword["current-password"] === updatedPassword["confirm-password"]) {
        setFormData(prev => ({ ...prev, password: updatedPassword["current-password"] }));
      } else {
        setPasswordError("Passwords do not match");
      }
    }
  };

  return (
    <>
      <SectionHeading
        margin="mb-1"
        color="after:w-12 after:h-1 after:absolute after:-bottom-2 after:left-1/2 after:bg-primary after:-translate-x-1/2"
        text="Basic <span class='text-primary'>Details</span>"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 mx-auto grid grid-cols-2 gap-6 mt-8"
      >
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, firstname: e.target.value }))
          }
          className="outline-primary border border-gray rounded-lg px-3 py-2.5"
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, lastname: e.target.value }))
          }
          className="outline-primary border border-gray rounded-lg px-3 py-2.5"
        />
        <div className="relative h-fit">
          <CalendarDays
            className="absolute right-3 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
            size={18}
          />
          <input
            type="date"
            onClick={(e) => e.target.showPicker()}
            name="dob"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, dob: e.target.value }))
            }
            placeholder="Date of Birth"
            className="w-full px-3 h-full cursor-pointer outline-primary border border-gray py-2.5 font-semibold rounded-md appearance-none pr-10"
          />
        </div>
        <div className="relative h-fit">
          <select
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, gender: e.target.value }))
            }
            name="gender"
            className="outline-primary border border-gray cursor-pointer rounded-lg px-3 py-2.5 size-full appearance-none"
          >
            <option value="" disabled selected>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-primary"
            size={25}
          />
        </div>
        <input
          type="email"
          name="email"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder="Email Address"
          className="outline-primary border border-gray rounded-lg px-3 py-2.5 size-full"
        />
        <input
          type="tel"
          name="mobile"
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, mobile: e.target.value }))
          }
          placeholder="Phone Number"
          className="outline-primary border border-gray rounded-lg px-3 py-2.5 size-full"
        />

        <input
          type="password"
          name="current-password"
          placeholder="Password"
          value={password["current-password"]}
          onChange={handlePasswordChange}
          className="outline-primary border border-gray rounded-lg px-3 py-2.5 size-full"
        />
        <input
          type="password"
          name="confirm-password"
          placeholder="Confirm Password"
          value={password["confirm-password"]}
          onChange={handlePasswordChange}
          className="outline-primary border border-gray rounded-lg px-3 py-2.5 size-full"
        />


        {userType === "cleaner" && <Addressform setFormData={setFormData} />}

        <div className="col-span-2 flex gap-2 items-center">
          <label className="inline-flex items-center cursor-pointer peer">
            <input type="checkbox" className="peer hidden" name="Community" />
            <div className="w-5 h-5 rounded-md border-2 border-gray-300 flex items-center justify-center transition-colors peer-checked:bg-primary peer-checked:border-primary">
              <Check className="w-full h-full text-white" />
            </div>
          </label>
          <label className="text-black-heading">Join the Community</label>
        </div>

        <div className="w-1/2 col-span-2 mx-auto mt-5">
          <Button
            disable={!selected}
            handler={selected ? () => SetStep((prev) => prev + 1) : undefined}
            spacing="mx-auto"
            text="Next Step"
          />
        </div>
      </form>
    </>
  );
};

export default BasicDetails;
