import { image } from "../../constants";
import { DestinationCard } from "../Card/Card";

export const Destination = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mx-[100px] text-2xl mb-4 uppercase flex text-theme-pink text-bold-5xl  space-between">
            choose your next destination
          </h2>
          <h1 className="mx-[100px] flex space-between text-black font-bold mb-16">
            Explore top destination
          </h1>
        </div>
        <div className="mx-20 flex gap-7">
          <button className="rounded-full h-12 w-12 shadow-lg shadow-theme-blue/20">
            <div className="flex  items-center z-10 rounded ">
              <img src={image.arrowRight} alt="star-Icon" className="w-4 h-4" />
            </div>
          </button>
          <button className="rounded-full h-12 w-12 bg-theme-blue shadow-lg shadow-black/20">
            <div className="flex items-center z-10 ">
              <img src={image.arrowLeft} alt="star-Icon" className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
      <DestinationCard />
    </div>
  );
};
