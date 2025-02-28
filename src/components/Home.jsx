import HeroImage from "../assets/images/hero-variant-c.webp";
import GoogleImg from "../assets/images/google.svg";
import StarImg from "../assets/images/star.svg";
import HalfStarImg from "../assets/images/half-star.svg";
import ArianImg from "../assets/images/still-quote-Arian.webp";
import AmandaImg from "../assets/images/Amanda.webp";
import PaulImg from "../assets/images/Paul.webp";

import TrustPilotImg from "../assets/images/trustpilot.svg";
import { useContext, useState } from "react";
import GridSection from "./GridSection";
import { MenuContext } from "../contexts/MenuContext";
import { Link } from "react-router";

export default function Home() {
  const [imageSelection, setImageSelection] = useState("arian");
  const [gridData, setGridData] = useState("products");
  const { setMenu } = useContext(MenuContext);

  const imageArr = [
    { name: "Arian", img: ArianImg },
    { name: "amanda", img: AmandaImg },
    { name: "paul", img: PaulImg },
  ];

  return (
    <div className="w-full relative" onMouseEnter={() => setMenu("")}>
      {/* Hero Section */}
      <section className="bg-[#004733]  x900:min-h-screen flex flex-col justify-between">
        <div className="relative">
          <div className="w-full flex absolute flex-col pt-32 z-10 items-center text-[#1EE07F] text-5xl sm:text-6xl md:text-8xl x800:text-9xl font-semibold text-center">
            <h1>Mortgages</h1>
            <h1>made simple</h1>
          </div>
          {/* Image & Button Section */}
          <div className="text-white relative z-0 items-center   h-full md:h-auto bg-[#004733] -bottom-60  sm:-bottom-80  md:-bottom-56 flex-col md:flex-row flex justify-center p-4 ">
            {/* Left  Section */}
            <div className="flex gap-2 flex-col items-center justify-center">
              <Link
                to={"/start"}
                className="text-black hover:bg-inherit hover:text-white text-center rounded-full w-60 text-lg py-4 bg-[#1EE07F]"
              >
                Start my approval
              </Link>

              <div className="flex items-center gap-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 17"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 6H8.5V10.5H7.5V6ZM6.5 1.5H9.5V2.5H6.5V1.5Z"
                    class="fill-accentSecondary"
                  ></path>
                  <path
                    class="fill-accentSecondary"
                    d="M13.9987 5.00055L13.2887 4.29555L12.1637 5.42055C11.2429 4.35706 9.94762 3.68926 8.54717 3.5559C7.14671 3.42254 5.74872 3.83386 4.64365 4.70442C3.53857 5.57497 2.81139 6.83782 2.61318 8.23057C2.41497 9.62333 2.76098 11.0389 3.57931 12.1832C4.39765 13.3275 5.62539 14.1125 7.00745 14.3751C8.3895 14.6377 9.81961 14.3578 11.0006 13.5934C12.1817 12.8291 13.0228 11.6391 13.3493 10.2707C13.6758 8.90233 13.4625 7.46077 12.7537 6.24554L13.9987 5.00055ZM7.99875 13.5005C7.10873 13.5005 6.2387 13.2366 5.49868 12.7422C4.75866 12.2477 4.18189 11.5449 3.84129 10.7226C3.5007 9.90035 3.41158 8.99555 3.58522 8.12264C3.75885 7.24972 4.18743 6.4479 4.81677 5.81856C5.44611 5.18923 6.24793 4.76064 7.12084 4.58701C7.99376 4.41338 8.89856 4.50249 9.72082 4.84309C10.5431 5.18368 11.2459 5.76046 11.7404 6.50048C12.2348 7.2405 12.4987 8.11053 12.4987 9.00055C12.4987 10.194 12.0246 11.3386 11.1807 12.1825C10.3368 13.0264 9.19222 13.5005 7.99875 13.5005Z"
                  ></path>
                </svg>
                <p>3 min | No credit impact</p>
              </div>
            </div>

            {/* Hero Image */}
            <img
              className="max-h-[675px] w-[520px] translate-y-4  md:mt-0 md:w-[320px] x800:w-[400px] x900:w-[500px] z-10"
              src={HeroImage}
              alt="Hero Image"
            />

            {/* Right  Section */}
            <div className="absolute z-10 bottom-16 bg-[#073126] p-4 md:p-0  rounded-lg md:bottom-auto md:bg-transparent flex-col md:relative items-center justify-center">
              <div className="flex gap-1">
                <img src={GoogleImg} alt="google image" />
                <img src={StarImg} alt="star image" />
                <img src={StarImg} alt="star image" />
                <img src={StarImg} alt="star image" />
                <img src={StarImg} alt="star image" />
                <img src={HalfStarImg} alt="Half star image" />
              </div>
              <p className="text-[12px] mt-1">
                4.6 Stars | 3177 Google reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="h-auto mt-96 md:mt-80  px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-20">
          {/* Image Selection */}
          <div className="flex flex-col gap-4 items-center">
            {imageArr.map(
              (el) =>
                el.name.toLowerCase() === imageSelection.toLowerCase() && (
                  <div key={el.name} className=" w-60 sm:w-80">
                    <img
                      className="rounded-2xl w-full"
                      src={el.img}
                      alt={el.name}
                    />
                  </div>
                )
            )}
            {/* Buttons */}
            <div className="flex gap-3 md:gap-6">
              {imageArr.map((el) => (
                <button
                  key={el.name}
                  name={el.name.toLowerCase()}
                  onClick={(e) => setImageSelection(e.target.name)}
                  className={`${
                    imageSelection === el.name.toLowerCase()
                      ? "border-[#017848] text-[#017848] border-4"
                      : ""
                  } w-20 md:w-28 py-2 border-2 hover:border-4 rounded-full transition-all duration-300 hover:text-[#017848] font-semibold hover:border-[#017848]`}
                >
                  {el.name}
                </button>
              ))}
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold text-[#292B29]">
              Find out why we’re better.
            </h1>
            <Link to={"/better.com/about-us"}>
              <button className="my-6 bg-[#004733] hover:bg-[#017848] transition-all px-8 md:px-12 py-3 md:py-4 rounded-full text-white font-semibold">
                See all our stories
              </button>
            </Link>
            <div className="flex justify-center md:justify-start items-center gap-2">
              <img src={TrustPilotImg} alt="TrustPilot" />
              <p className="font-semibold mt-1 text-[#565D5A]">
                Excellent 4.4 out of 5
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="mt-20 md:mt-64 h-auto flex justify-center px-4">
        <div className="w-full max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
            <p className="text-4xl md:text-5xl font-semibold text-[#292B29] text-center md:text-left">
              Got questions? We've got answers
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              {["products", "calculators", "guides"].map((item) => (
                <button
                  key={item}
                  name={item}
                  onClick={(e) => setGridData(e.target.name)}
                  className={`${
                    gridData === item
                      ? "border-[#017848] text-[#017848] border-4"
                      : ""
                  } w-40 py-2 md:py-3 border-4 hover:border-4 rounded-full transition-all duration-300 hover:text-[#017848] font-semibold hover:border-[#017848]`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <GridSection gridData={gridData} />
        </div>
      </section>
    </div>
  );
}
