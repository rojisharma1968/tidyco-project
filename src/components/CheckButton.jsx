import React from "react";

const CheckButton = ({title, values, padding}) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {values.map((opt) => (
        <label key={opt} className="cursor-pointer">
          <input
            type="radio"
            name={title}
            value={opt}
            defaultChecked={
              opt === "1" || opt === "Weekly" || opt === "Flat Rates"
            }
            className="peer hidden"
          />
          <div className={`${padding ? padding : 'px-4'} py-1.5 font-semibold rounded border-[#DCDCDC] border peer-checked:text-primary peer-checked:border-primary  peer-checked:bg-primary/30`}>
            {opt}
          </div>
        </label>
      ))}
    </div>
  );
};

export default CheckButton;
