import { image } from "../../../constants";

export const Navbar = () => {
  return (
    <nav className="bg-white p-4 fixed top-0 w-screen z-10">
      <div className="flex items-center justify-between p-4 mx-16">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img src={image.logo} alt="Travlog logo" className="h-8 w-auto" />
          </a>
        </div>

        <div className="flex justify-center">
          <ul className="flex justify-center gap-10">
            <li>
              <a
                href="#"
                className="hover:text-gray-600 text-black text-1xl rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Destinations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Packages
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 text-1xl rounded">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="md:flex items-center gap-4">
          <button className="bg-white rounded-3xl text-black px-7 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
            Log In
          </button>
          <button className="bg-theme-blue rounded-3xl text-white px-7 shadow-lg shadow-theme-blue/50">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
