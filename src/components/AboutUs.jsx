import React, { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import VishalMission from "../assets/images/vishal-mission.jpg";
import videoLogo from "../assets/images/videoPlayer.svg";
import { Link } from "react-router";

import softBank from "../assets/images/softbank.svg";
import ally from "../assets/images/ally.svg";
import citiBank from "../assets/images/city-bank.svg";
import pingBank from "../assets/images/ping-bank.svg";
import goldmanBank from "../assets/images/goldman-bank.svg";
import kpcpBank from "../assets/images/kpcp-bank.svg";
import americanExpress from "../assets/images/americanE.svg";

export default function AboutUs() {
  const { setMenu } = useContext(MenuContext);

  {
    /* Timeline data */
  }
  const yearData = [
    {
      year: "2014",
      text: "After Vishal Garg’s first attempt to purchase his own dream home...",
    },
    {
      year: "2015",
      text: "Better Mortgage funds its first mortgage loan entirely online...",
    },
    {
      year: "2016",
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer...",
    },
    {
      year: "2017",
      text: "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: "2018",
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      text: "Better Mortgage launches its pilot partnership with American Express...",
    },
    {
      year: "2021",
      text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
    },
    {
      year: "2022",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans online.",
    },
    {
      year: "2023",
      text: "Better Mortgage launches One Day Mortgage: Application to Commitment in 24 hours.",
    },
    {
      year: "Today",
      text: "You become part of the story by joining thousands of happy borrowers.",
    },
  ];
  return (
    <div className="text-[#292B29]" onMouseEnter={() => setMenu("")}>
      <div className="w-full sm:px-10 px-4 lg:px-20  ">
        {/* section-1 */}
        <section className="w-full h-screen  items-center lg:px-20 flex justify-center">
          <div className="w-[1060px] gap-10 flex flex-col items-center font-semibold">
            <h1 className="text-[#017848] text-4xl">Our mission</h1>
            <p className="text-4xl sm:text-5xl text-center  leading-[60px]">
              We’re making homeownership simpler, faster — and most importantly,
              more accessible for all Americans.
            </p>
          </div>
        </section>

        {/* section-2 */}
        <section className="flex py-20 flex-wrap-reverse md:flex-nowrap   justify-between gap-20 sm:px-10">
          <div>
            <h2 className="text-3xl font-semibold">The status quo is broken</h2>
            <p className="max-w-[500px] py-8">
              {" "}
              The traditional processes around homeownership are opaque and
              stressful. Fees aren’t transparent and some are simply outrageous
              in size. Traditional mortgage lending is rife with unnecessary
              fees and slow, painful processes. It’s a system set up to benefit
              insiders — not you. Better.com CEO, Vishal Garg, set out to change
              that.
            </p>
            <Link to="#">
              <button className="bg-[#017848] py-4 px-8 text-white font-semibold rounded-lg">
                Read Vishal's story
              </button>
            </Link>
          </div>

          <div className="relative">
            <Link to={"https://youtu.be/1KjYlLBM9j4"}>
              <img
                src={VishalMission}
                className="h-[400px] cursor-pointer"
                alt="vishalMission"
              />
              <img
                src={videoLogo}
                className="absolute z-10 top-[44%] left-[43%]"
                alt="video-Logo"
              />
            </Link>
          </div>
        </section>
      </div>

      {/* section-3 */}
      <section className="py-40">
        <div className="bg-[#017848] flex flex-col items-center text-white">
          <div className=" p-10 max-w-[850px] ">
            <h1 className="text-3xl md:text-5xl font-semibold">
              How we’re changing things
            </h1>
            <p className="py-10">
              Homeownership is a huge part of our economy. Housing overall is a
              $33 trillion business, and mortgages account for $15 trillion. Yet
              home finance operates in the same way it has for decades — through
              opaque systems and expensive intermediaries whose interests are
              misaligned with consumers’.
            </p>
            <p>
              That’s why Better.com is redefining the homeownership process from
              the ground up. We’re using technology to make it faster and more
              efficient, and humans to help make it friendly and enjoyable.
            </p>
          </div>
        </div>

        <div className="mt-28 px-6">
          <div className="w-full flex  flex-col items-center gap-20">
            <h2 className="text-4xl font-semibold">Backed by</h2>
            <div className="flex gap-4 justify-center lg:gap-10 flex-wrap">
              <img src={softBank} alt="softbank img" />
              <img src={ally} alt="ally img" />
              <img src={citiBank} alt="citi img" />
              <img src={pingBank} alt="ping img" />
              <img src={goldmanBank} alt="goldman sachs img" />
              <img src={kpcpBank} alt="kpcp img" />
              <img src={americanExpress} alt="american express img" />
            </div>
          </div>
        </div>
      </section>

      {/* section-4 */}
      <section className="flex flex-col px-6 items-center relative">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Company Timeline
        </h2>

        <div className="absolute top-28 h-full bottom-0 w-1 bg-[#E8EAE6]"></div>

        <div className="w-full max-w-4xl relative space-y-16">
          {/*  */}
          {yearData.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Year text */}
              <div className="bg-[#017848] text-white px-6 py-2 rounded-full text-lg font-semibold">
                {item.year}
              </div>

              {/* text Box */}
              <div
                className={`p-6 rounded-lg bg-[#DFE0DC] max-w-sm
            ${
              index % 2 === 0
                ? "md:-translate-x-40 lg:-translate-x-56 "
                : "md:translate-x-40 lg:translate-x-56 "
            } 
            mt-6 text-center md:text-left`}
              >
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
