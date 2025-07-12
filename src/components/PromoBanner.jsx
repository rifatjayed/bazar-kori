import itemCard from "../assets/itemCard.png";

export default function PromoBanner() {
  return (
    <div
      className="rounded-2xl flex flex-col justify-center w-[237px] h-full min-h-[300px] text-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${itemCard})`,
      }}
    >
      <div className="flex flex-col justify-between h-full w-full my-[40px]">
        <h3 className="text-xl font-semibold mb-2">
          Bring fresh <br /> vegetables to <br />
          your home
        </h3>
        <button className="mt-5 px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium shadow">
          Shop Now
        </button>
      </div>
    </div>
  );
}
