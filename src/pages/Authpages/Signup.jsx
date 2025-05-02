import React, { useState } from "react";
import UserType from "./signupsteps/usertype";
import BasicDetails from "./signupsteps/BasicDetails";
import Address from "./signupsteps/Address";
import Axios from "../../utils/Axios";
import WorkExperience from "./signupsteps/WorkExperience";

const Signup = () => {
  const [Step, SetStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [userType, setUserType] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
    gender: "",
    street_address: "",
    suburb: "",
    state: "",
    postcode: "",
    work_experience: "",
    highest_study: "",
    work_areas: [""],
  });

  const handleSubmit = async () => {
    try {
      SetStep(4);
      const res = await Axios.post(
        `/auth/register/${
          userType.toLowerCase() == "cleaner"
            ? "worker"
            : userType.toLowerCase()
        }`,
        {
          ...formData,
        }
      );

      console.log("Response:", res.data);
      localStorage.setItem("auth", res.data.authorization.token);
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

  const handleSelect = (title) => {
    setUserType(title.toLowerCase());
    setSelected(title);
    SetStep(1);
  };

  const getWidth = () => {
    if (Step === 1) return "30%";
    if (Step === 2) return "30%";
    if (Step === 3) return "80%";
    if (Step === 4) return "100%";
    return "0%";
  };

  return (
    <div className="my-15">
      {(Step === 0 || Step === 1) && (
        <UserType
          selected={selected}
          handleSelect={handleSelect}
          SetStep={SetStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {Step === 2 && (
        <BasicDetails
          selected={selected}
          userType={userType}
          SetStep={SetStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {userType == "cleaner"
        ? (Step === 3 || Step === 4) && (
            <WorkExperience
              handleSubmit={handleSubmit}
              setFormData={setFormData}
            />
          )
        : (Step === 3 || Step === 4) && (
            <Address
              handleSubmit={handleSubmit}
              formData={formData}
              setFormData={setFormData}
            />
          )}

      <div className="container mx-auto">
        <div className="w-full h-2.5 mt-5 bg-primary/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{
              width: getWidth(),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
