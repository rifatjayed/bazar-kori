import React from "react";

const CategoryCard = ({ bgColor, title, image }) => {
  return (
    <div className="">
      <div
        className={`flex flex-col justify-center items-center w-[236px] h-[236px] ${bgColor}`}
      >
        <img src={image} alt="" className="w-[112px]" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
