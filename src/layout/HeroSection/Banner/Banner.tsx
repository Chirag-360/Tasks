import { image } from "../../../constants";

export const Banner = () => {
  return (
    // <div classNameName="bg-blue-500 text-white py-20">
    //   <div classNameName="container mx-auto text-center">
    //     <h1 classNameName="text-4xl font-bold mb-4">Your Hero Heading</h1>
    //     <p classNameName="text-lg mb-8">Your hero subheading goes here.</p>
    //     <button classNameName="bg-white text-blue-500 py-2 px-6 rounded-full hover:bg-blue-100">
    //       Learn More
    //     </button>
    //   </div>
    // </div>
    <div className="bg-neutral-50 px-6 text-center bg-white md:px-12 lg:text-left">
      {/* <div className="w-full mx-16 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl h-screen flex items-center justify-center"> */}
      <div className="w-full mx-16  h-screen flex items-center justify-center">
        {/* <div className="grid items-center gap-[6rem] lg:grid-cols-2"> */}
        <div className="flex justify-between items-center gap-60">
          <div className="mt-12 lg:mt-0">
            <button className="bg-white rounded-3xl shadow-lg  w-30 h-14 flex items-center justify-between mb-12 gap-3 shadow-gray-600/20 border-gray-100 text-theme-pink whitespace-nowrap px-7 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
              Explore the world!
              <div>
                <img src={image.bag} alt="bag-Icon" />
              </div>
            </button>
            <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-7xl xl:text-8xl">
              Travel <span className="text-theme-pink">top</span>
              <p className="text-theme-pink">destination</p>
              <span className="text-primary">of the world</span>
            </h1>
            <div className="flex gap-5">
              <button className="bg-theme-blue rounded-3xl text-white px-7 shadow-lg shadow-theme-blue/50">
                Get Started
              </button>
              <button className="bg-white rounded-3xl border-gray-200 text-black px-7 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
                Watch Demo
              </button>
            </div>
          </div>
          {/* <div className="mb-12 lg:mb-0 w-[400px] h-[200px]"> */}
          <div className="">
            <div className="relative  inset-0 bg-blue-500 w-[600px] h-[600px] to-purple-500 rounded-full opacity-80">
              <div
                className="w-full h-full z-500 flex justify-center item-center bg-no-repeat relative"
                // style={{
                //   // backgroundImage: `url(${image.layer})`,
                //   backgroundPosition: "1ch 2em",
                //   overflow: "hidden",
                // }}
              >
                <img src={image.layer} className="h-full w-[700px]"></img>
                <button className="bg-white left-80bottom-5 top-0 relative rounded-3xl shadow-lg  w-30 h-20 flex items-center justify-between mb-12 gap-3 shadow-gray-600/20 border-gray-100 text-theme-black whitespace-nowrap px-7 hover:shadow-lg hover:shadow-theme-pink/50 hover:text-white hover:bg-theme-pink">
                  <div className="">
                    <img
                      src={image.location}
                      alt="bag-Icon"
                      className="relative"
                    />
                  </div>
                  <p className="text-2xl text-theme-blue">
                    5000+ <br />
                    <span className="text-[12px]">Customer</span>
                  </p>
                  d
                </button>
                <img
                  src={image.woman}
                  // className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  className="absolute self-end -bottom-1"
                  alt=""
                />
              </div>
              <button className="bg-white  bottom-5 right-20 relative rounded-3xl shadow-lg  w-30 h-14 flex items-center justify-between mb-12 gap-3 shadow-gray-600/20 border-gray-100 text-theme-black whitespace-nowrap px-7 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
                <div>
                  <img src={image.location} alt="bag-Icon" />
                </div>
                Top Places
              </button>
              <button className="bg-white bottom-36 left-80 relative rounded-3xl shadow-lg  w-30 h-14 flex items-center justify-between mb-12 gap-3 shadow-gray-600/20 border-gray-100 text-theme-black whitespace-nowrap px-7 hover:shadow-lg hover:shadow-theme-blue/50 hover:text-white hover:bg-theme-blue">
                <div>
                  <img src={image.location} alt="bag-Icon" />
                </div>
                Top Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
