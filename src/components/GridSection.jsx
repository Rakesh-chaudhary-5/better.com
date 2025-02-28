import firstHome from "../assets/images/first-home.webp";
import oneDayImg from "../assets/images/one-day.webp";
import betterImg from "../assets/images/better-heloc.webp";
import insurance from "../assets/images/insurance.webp";

import calculator1 from "../assets/images/calculator-1.webp";
import calculator2 from "../assets/images/calculator-2.webp";
import calculator3 from "../assets/images/calculator-3.webp";
import calculator4 from "../assets/images/calculator-4.webp";

import loan1 from "../assets/images/loan-1.webp";
import loan2 from "../assets/images/loan-2.webp";
import loan3 from "../assets/images/loan-3.webp";
import loan4 from "../assets/images/loan-4.webp";
import { Link } from "react-router";

export default function GridSection({ gridData }) {
  const products = [
    { img: firstHome, id: 1, title: "Buying your first home with Better" },
    {
      img: oneDayImg,
      id: 2,
      title: "One Day Mortgage",
      text: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
    },
    {
      img: betterImg,
      id: 3,
      title: "Better HELOC",
      text: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2.",
    },
    { img: insurance, id: 4, title: "Insurance" },
  ];

  const calculators = [
    { img: calculator1, id: 1, title: "Mortgage calculator" },
    {
      img: calculator2,
      id: 2,
      title: "Affordability calculator",
      text: "Got homeownership dreams? Let's put some numbers behind them.",
    },
    {
      img: calculator3,
      id: 3,
      title: "HELOC calculator",
      text: "Need cash? Quickly see how much equity you can borrow.",
    },
    { img: calculator4, id: 4, title: "Fixed-rate loan comparison calculator" },
  ];

  const guides = [
    { img: loan1, id: 1, title: "What is a good debt-to-income ratio?" },
    {
      img: loan2,
      id: 2,
      title: "Buying a house without a realtor",
      text: "Thinking about buying a house without an agent? Read this first.",
    },
    {
      img: loan3,
      id: 3,
      title: "Timeline for homebuying process",
      text: "Buying a home seem daunting? Don't stress, here are 8 easy steps.",
    },
    { img: loan4, id: 4, title: "Conventional loan requirements" },
  ];

  const showData =
    gridData === "products"
      ? products
      : gridData === "calculators"
      ? calculators
      : guides;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
        {showData.map((el) => (
          <div
            key={el.id}
            className={`bg-[#F0F7F1] p-8 rounded-xl ${
              el.text
                ? "col-span-2 flex flex-col-reverse  justify-between gap-4"
                : "flex flex-col-reverse md:block md:flex-row"
            } md:flex-row gap-4`}
          >
            {el.img && (
              <img
                src={el.img}
                className={`rounded-xl ${
                  el.text ? "w-[400px] md:w-80 md:h-auto" : ""
                }`}
                alt={el.title}
              />
            )}
            <div className={`pb-6 ${el.text ? "flex flex-col gap-4" : ""}`}>
              <p className="text-2xl  font-semibold text-[#073126]">
                {el.title}
              </p>
              {el.text && <p className="hidden md:block">{el.text}</p>}
              <Link to={el.id == 1 ? "/mortgage-calculator" : "#"}>
                <div className=" hover:bg-green-900 hover:border-green-900 cursor-pointer border-2 border-[#A4A8A4] transition-all duration-300 mt-4 text-4xl hover:text-white text-green-900 w-12 h-12 flex justify-center rounded-full">
                  &rarr;
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
