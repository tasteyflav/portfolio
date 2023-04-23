import Image from "next/image";
import adminDashboard from "../assets/portfolio/adminDashboard.png";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const PortfolioPage = () => {
  const portfolios = [
    {
      id: 1,
      src: adminDashboard,
    },
    {
      id: 2,
      src: reactParallax,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4">
        <div className="pb-8">
          <p className="inline border-b-4 border-gray-500 text-4xl font-bold">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here.</p>
        </div>
        <div className="grid gap-8 px-12 sm:grid-cols-2 sm:px-0 md:grid-cols-3">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <Image
                src={src}
                alt="react Weather"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 duration-200 hover:scale-105">
                  Demo
                </button>
                <button>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
