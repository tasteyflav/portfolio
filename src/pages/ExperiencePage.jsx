import Image from "next/image";
import css from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import firebase from "../assets/firebase.png";

const ExperiencePage = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "react",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind  ",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-300",
    },
    {
      id: 8,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className="h-screen w-full bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 text-white">
        <div>
          <p className="inline border-b-4 border-gray-500 p-3 text-4xl font-bold">
            Experience
          </p>
          <p className="py-6 ">These are the technologies I've worked with</p>
        </div>

        <div className=" grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "rounded-lg py-2 shadow-md duration-500 hover:scale-105" +
                " " +
                style
              }
            >
              <Image src={src} alt="css" className="mx-auto w-20" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
