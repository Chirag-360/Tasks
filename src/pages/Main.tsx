import { Banner } from "../layout/HeroSection/Banner/Banner";
import { CompanyList } from "../layout/HeroSection/CompanyList/CompanyList";
import { CityDestinationMain } from "./Destination/CityDestination";
import { Destination } from "./Destination/Destination";

export const Main = () => {
  return (
    <>
      <Banner />
      <CompanyList />
      <Destination />
      <CityDestinationMain />
    </>
  );
};
