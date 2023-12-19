import { DestinationCard } from "../Card/Card";

export const Destination = () => {
  return (
    <div className="mb-20">
      <h2 className="mx-[100px] text-2xl mb-4 uppercase flex text-theme-pink text-bold-5xl  space-between">
        choose your next destination
      </h2>
      <h1 className="mx-[100px] flex space-between text-black font-bold mb-16">
        Explore top destination
      </h1>
      <DestinationCard />
    </div>
  );
};
