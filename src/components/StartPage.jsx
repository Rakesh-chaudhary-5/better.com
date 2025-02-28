import betterLogo from "../assets/images/greenBetter.svg";
import phoneLogo from "../assets/images/phone.svg";
import betty1 from "../assets/images/betty1.jpg";
import homeImg from "../assets/images/home.svg";
import logo1 from "../assets/images/logo-1.svg";
import { Link } from "react-router";

export default function StartPage() {
  return (
    <div className="flex justify-center text-[#292B29]">
      <div className="w-[1500px] px-10">
        {/* nav section */}
        <nav className="pt-10 sticky pb-8 bg-white border-b-4 top-0">
          <div className="flex justify-between relative">
            <div>
              <Link to={"/better.com"}>
                <img src={betterLogo} alt="better-img" />
                <p className="text-[#6F7672] text-xl">Mortgage</p>
              </Link>
            </div>

            <div className="flex gap-6 items-center">
              <div className="bg-[#CCE9D3] p-2 rounded-full w-10">
                <img src={phoneLogo} className="w-10" alt="phone-img" />
              </div>
              <p className="text-xl hidden lg:block font-semibold">
                Need help? Call(415) 523 8837
              </p>
            </div>
          </div>
          <img
            className="absolute w-14 rounded-full translate-y-8 left-1/2 -translate-x-1/2 bottom-0"
            src={betty1}
            alt="betty1-logo"
          />
        </nav>

        {/* main section */}
        <section className="mt-28 flex justify-center ">
          <div className="flex items-center gap-16  flex-col">
            <p className="text-4xl text-center font-semibold md:5xl lg:text-7xl">
              Hi, I'm Betsy! <br /> <span>What can I help you with?</span>
            </p>

            <div className="flex items-center border-4 shadow-md hover:text-[#017848] hover:shadow-[#017848] shadow-black border-transparent w-full h-20 rounded-xl px-10 gap-8 border-[#292B29]">
              <img src={homeImg} alt="home-img" />
              <p className="text-2xl font-semibold">Buying a home</p>
            </div>

            <div className="flex items-center border-4 shadow-md hover:text-[#017848] hover:shadow-[#017848] shadow-black border-transparent w-full h-20 rounded-xl px-10 gap-8 border-[#292B29]">
              <img src={homeImg} alt="home-img" />
              <p className="text-2xl font-semibold">Refinance my mortgage</p>
            </div>

            <div className="flex items-center border-4 shadow-md hover:text-[#017848] hover:shadow-[#017848] shadow-black border-transparent w-full h-20 rounded-xl px-10 gap-8 border-[#292B29]">
              <img src={homeImg} alt="home-img" />
              <p className="text-2xl font-semibold">Get cash from my home</p>
            </div>

            <div className="flex justify-around gap-4 my-10 w-full">
              <div className="text-center">
                <h2 className="text-5xl font-semibold pb-4">$100B</h2>
                <p>home loans funded entirely online</p>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-semibold pb-4">400K</h2>
                <p>Customers who chose a Better Mortgage</p>
              </div>
            </div>

            <div className="bg-[#F0F7F1] text-[#565D5A] justify-center w-full px-10 py-8 flex flex-col text-lg font-semibold gap-4 items-center">
              <p>After a few questions, you'll unlock:</p>

              <div className="flex min-w-64  gap-4">
                <img src={logo1} className="w-7" alt="logo-1" />
                <p>Custom mortgage rates</p>
              </div>

              <div className="flex min-w-64  gap-4">
                <svg
                  className="w-6 h-6 fill-[#017848] hover:fill-[#015F36] transition-colors duration-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42"></path>
                </svg>

                <p>Exclusive offers</p>
              </div>

              <div className="flex min-w-64  gap-4">
                <svg
                  className="w-6 h-6"
                  fill="#017848" // Sets the fill color to green
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1m-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5-4H7V4h9z"></path>
                </svg>
                <p>A personalized dashboard</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
