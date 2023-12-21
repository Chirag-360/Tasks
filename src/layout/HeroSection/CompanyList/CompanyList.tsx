import { image } from "../../../constants";

export const CompanyList = () => {
  return (
    <div className="bg-white w-full pb-16 flex flex-col items-center justify-center">
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
      </div>
    </div>
  );
};
