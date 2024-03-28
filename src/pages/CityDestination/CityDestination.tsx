import { CityDestinations } from "../../Arrays/Destination";
import { image } from "../../constants/images";

export const CityDestination = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-20">
      {CityDestinations.map(
        ({ description, images, price, star, title, address }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <img src={images} alt={title} className="w-full h-auto" />
            {star && (
              <div className="absolute top-2 right-2 bg-black bg-opacity-20 rounded-full p-2 flex items-center justify-center">
                <img src={image.star} alt="star" className="w-5 h-5 mr-1" />
                <span className="text-white font-bold">{star}</span>
              </div>
            )}
            <div className="p-4">
              <h2 className="font-bold text-2xl mb-2">{title}</h2>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-sm">{address}</p>
                <div className="flex items-center">
                  <span className="text-black font-bold text-xl mr-1">
                    ${price}
                  </span>
                  <span className="text-gray-400 opacity-70">
                    x 12 interest free
                  </span>
                </div>
              </div>
              <button className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                See More
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
