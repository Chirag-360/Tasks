import { Destination } from "../../Arrays/Destination";
import { image } from "../../constants/images";

export const DestinationCard = () => {
  return (
    <div className="flex flex-wrap gap-12  bg-transparent justify-center mx-20">
      {Destination.map((item) => {
        const { description, images, price, star, title, address } = item;

        return (
          <div key={title} className="relative h-auto w-auto overflow-hidden">
            <img
              src={images}
              alt={title}
              className="w-full h-auto rounded-lg"
            />

            {star ? (
              <button className="absolute backdrop-blur-sm bg-black/20 top-2 right-5 backdrop-blur-none rounded-3xl shadow-lg flex items-center justify-between gap-3 border-none text-theme-pink whitespace-nowrap px-7 py-3 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
                <div className="absolute inset-0 bg-transparent  rounded-3xl"></div>
                <div className="flex items-center gap-3 z-10">
                  <img src={image.star} alt="star-Icon" className="w-5 h-5" />
                  {star}
                </div>
              </button>
            ) : (
              <></>
            )}
            <h2 className="font-bold m-4 text-3xl">{title}</h2>
            <p className="text-gray-600 mb-2 mx-4">{description}</p>
            <div className="flex justify-between mt-10 backdrop-blur-md bg-gray-600/5 items-center rounded-b-2xl mb-2 p-1">
              <div className="items-center w-full mt-2 px-3">
                <p className="text-grey-500 text-md mb-2">{address}</p>
                <span className="text-black font-bold text-2xl">${price}</span>
                <span className="text-gray-400 opacity-70">
                  x 12 interest free
                </span>
              </div>
              <button className="backdrop-blur-sm mr-1 bg-theme-blue rounded-3xl shadow-lg flex items-center justify-between gap-3 border-none text-white whitespace-nowrap px-7 py-3 hover:shadow-lg shadow-theme-blue/60 hover:shadow-theme-pink/50 hover:text-white hover:bg-theme-pink">
                See More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
