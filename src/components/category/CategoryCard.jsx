// const CategoryCard = ({ bgColor, title, image }) => {
//   return (
//     <div className="">
//       <div
//         className={`flex flex-col justify-center items-center w-[236px] h-[236px] ${bgColor}`}
//       >
//         <img src={image} alt="" className="w-[112px]" />
//         <p>{title}</p>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

const CategoryCard = ({ bgColor, title, image }) => {
  return (
    <div className="w-full">
      <div
        className={`flex flex-col justify-center items-center w-full aspect-square max-w-[236px] mx-auto ${bgColor} p-4 sm:p-5 md:p-6`}
      >
        <img
          src={image}
          alt={title}
          className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[112px] lg:h-[112px] object-contain"
        />
        <p className="text-xs xs:text-sm sm:text-base md:text-lg font-medium text-center mt-2 xs:mt-3 sm:mt-4">
          {title}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
