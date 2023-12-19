import { image } from "../../../constants";

export const CompanyList = () => {
  return (
    <div className="bg-white w-full py-16 flex flex-col items-center justify-center">
      <div className="flex gap-20">
        <div className="w-30 h-10 rounded-xl flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={image.expedia}
            alt="Expedia"
          />
        </div>
        <div className="w-30 h-10  rounded-xl flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={image.tripadvisor}
            alt="TripAdvisor"
          />
        </div>
        <div className="w-30 h-10  rounded-xl flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={image.booking}
            alt="booking"
          />
        </div>
        <div className="w-30 h-10  rounded-xl flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={image.airbnb}
            alt="airbnb"
          />
        </div>
        <div className="w-30 h-10  rounded-xl flex items-center justify-center">
          <img
            className="w-full h-full object-contain"
            src={image.rbitz}
            alt="rbitz"
          />
        </div>
        {/* Add more images with similar structure */}
      </div>
    </div>
    // <div className="flex justify-center py-16 gap-5 bg-gray-500">
    //   <img
    //     className="w-30 h-16 bg-gray-200 bg-yellow-600 rounded-xl mx-1 flex items-center justify-center"
    //     src={image.expedia}
    //   />
    //   <img
    //     className="w-16 h-16 bg-gray-200 bg-yellow-600 rounded-xl mx-1 flex items-center justify-center"
    //     src={image.tripadvisor}
    //   />
    //   <img src={image.booking} />
    //   <img src={image.airbnb} />
    //   <img src={image.rbitz} />
    // </div>
  );
};
