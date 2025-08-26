import React from "react";

const BrandCard = ({ title, image, description }) => {
  return (
    <div className="bg-white">
      <div
        className={`flex flex-col justify-center items-center w-[196px] h-[159px]`}
      >
        <img src={image} alt="" className="w-[112px]" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BrandCard;
