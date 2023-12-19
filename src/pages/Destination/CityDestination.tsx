import { CityDestination } from "../CityDestination";

export const CityDestinationMain = () => {
  return (
    <div className="mb-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mx-[100px] text-2xl mb-4 uppercase  text-theme-pink text-bold-5xl  space-between">
            Top Destination
          </h2>
          <h1 className="mx-[100px]  space-between text-black font-bold mb-16">
            Explore top destination
          </h1>
        </div>
        <div>
          <ul className="flex gap-7 mx-20">
            <li>
              <a
                href="#"
                className="hover:text-gray-600 text-black text-1xl rounded"
              >
                City
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Mountain
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Forest
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Island
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-theme-pink text-1xl rounded underline"
              >
                see all
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CityDestination />
    </div>
  );
};
