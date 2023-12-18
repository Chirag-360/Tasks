import { image } from "../../../constants";

export const CompanyList = () => {
  return (
    <div className="flex justify-center py-16 gap-5 bg-gray-500">
      <img
        className="w-16 h-16 bg-gray-200 bg-yellow-600 rounded-xl mx-1 flex items-center justify-center"
        src={image.expedia}
      />
      <img
        className="w-16 h-16 bg-gray-200 bg-yellow-600 rounded-xl mx-1 flex items-center justify-center"
        src={image.tripadvisor}
      />
      <img src={image.booking} />
      <img src={image.airbnb} />
      <img src={image.rbitz} />
    </div>
  );
};
