import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "~/components/Navbar";
import SocialLinks from "~/components/SocialLinks";
import AboutPage from "~/pages/AboutPage";
import PortfolioPage from "~/pages/PortfolioPage";
import ExperiencePage from "~/pages/ExperiencePage";
import ContactPage from "~/pages/ContactPage";
import HeroImage from "~/assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link as LinkScroll } from "react-scroll";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center px-4 md:flex-row">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white sm:text-7xl">
              Front End Developer
            </h2>
            <p className="max-w-md py-4 text-gray-500">
              Idfjhkjahdfkjahjadjkfhadlfjkhfkjadslfjkashfj
            </p>
            <div>
              <LinkScroll
                to="portfolio"
                className="group my-2 flex w-fit cursor-pointer items-center rounded-md bg-gradient-to-r from-cyan-500
              to-blue-500 px-6 py-3 text-white"
                smooth
                duration={500}
              >
                Portfolio
                <span className="duration-300 group-hover:rotate-90">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </LinkScroll>
            </div>
          </div>
          <div>
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="mx-auto w-2/3 rounded-2xl md:w-full"
            />
          </div>
        </div>
      </div>
      <SocialLinks />
      <AboutPage />
      <PortfolioPage />
      <ExperiencePage />
      <ContactPage />
    </>
  );
};

export default Home;
