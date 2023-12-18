import { image } from "../../../constants";

export const Navbar = () => {
  return (
    <nav className="bg-gray-200 p-4 fixed top-0 w-screen z-10">
      <div className="container-fluid mx-auto ">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src={image.logo} alt="Travlog logo" />
        </div>
      </div>
    </nav>
  );
};
