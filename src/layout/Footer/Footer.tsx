import { image } from "../../constants";

export const Footer = () => {
  const socialMediaIcons = [
    {
      icon: image.facebook,
      title: "facebook",
    },
    {
      icon: image.twitter,
      title: "twitter",
    },
    {
      icon: image.instagram,
      title: "instagram",
    },
    {
      icon: image.linkedIn,
      title: "linkedin",
    },
    {
      icon: image.youtube,
      title: "youtube",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-150 p-4 fixed bottom-0 w-screen z-10 pt-20">
      <div className="max-w mx-10 mt-10 flex flex-wrap justify-center">
        <div className="w-full lg:w-1/4 px-4 mb-8 border-b border-gray-300 pb-4">
          <img src={image.logo} alt="Travlog logo" className="h-8 w-auto" />
          <ul className="list-disc py-4">
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur
            </p>
            <p className="text-gray-400">
              adipisicing elit. Est Gables, consectetur
            </p>
            <div className=" flex flex-wrap  justify-between">
              {socialMediaIcons.map(({ icon, title }) => (
                <div
                  key={title}
                  className="w-full md:w-1/2 lg:w-1/5  justify-center pt-7 bg-transparent"
                >
                  <img src={icon} alt={title} className="mb-2 mx-2 " />
                </div>
              ))}
            </div>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-black">Product</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium text-gray-500">Features</p>
            <p className="my-7 font-medium text-gray-500">Pricing</p>
            <p className="my-7 font-medium text-gray-500">Case studies</p>
            <p className="my-7 font-medium text-gray-500">Updates</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-black">Company</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium text-gray-500">About</p>
            <p className="my-7 font-medium text-gray-500">Contact us</p>
            <p className="my-7 font-medium text-gray-500">Privacy Policies</p>
            <p className="my-7 font-medium text-gray-500">Culture</p>
            <p className="my-7 font-medium text-gray-500">Blog</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-black">Support</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium text-gray-500">Getting started</p>
            <p className="my-7 font-medium text-gray-500">Help center</p>
            <p className="my-7 font-medium text-gray-500">Server status</p>
            <p className="my-7 font-medium text-gray-500">Report a bug</p>
            <p className="my-7 font-medium text-gray-500">Chat support</p>
          </ul>
        </div>
        <div className="w-full lg:w-1/6 px-4 mb-8 border-b border-gray-300 pb-4">
          <h3 className="text-lg font-bold mb-2 text-black">Contact us</h3>
          <ul className="list-disc">
            <p className="my-7 font-medium text-gray-500">
              contact@company.com
            </p>
            <p className="my-7 font-medium text-gray-500">(xx) xxxx-xxxx</p>
            <p className="my-7 font-medium text-gray-500">794 Mcallister St</p>
          </ul>
        </div>
      </div>
      <div className="max-w-screen mx-14 text-left text-gray-900 flex flex-end justify-between	">
        <div className="text-gray-500">
          Copyright &copy; 2023 Travlog. Made by Chirag
        </div>
        <div className="flex-end flex">
          <p className="text-gray-500">All Rights Reserved | </p>
          <a className="underline" href={""}>
            {"Terms and Conditions"}
          </a>
          <p> | </p>
          <a className="underline" href={""}>
            {"Privacy Policy"}
          </a>
        </div>
      </div>
    </footer>
  );
};
