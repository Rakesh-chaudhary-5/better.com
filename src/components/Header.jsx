import { useContext, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";
import Menu from "./Menu";
import HamburgerMenu from "./HamburgerMenu";
import betterLogo from "../assets/images/batterLogo.svg";
import { Link } from "react-router";

export default function Header() {
  const { menu, setMenu, setMenuPosition } = useContext(MenuContext);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  return (
    <div className="sticky z-20 w-full  top-0 bg-[#004733]">
      <Menu />
      <div className="relative h-full w-full">
        <HamburgerMenu
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
      </div>
      <nav className="flex items-center text-white justify-between w-full px-6  sm:px-14 py-6">
        <div className="flex gap-10 items-center">
          <Link to={"/"}>
            <img className="text-white" src={betterLogo} alt="" />
          </Link>

          <div className=" x12:flex gap-10 items-center hidden">
            <button
              className={`px-6  py-3 ${
                menu == "buy" ? "bg-white text-black" : ""
              } hover:bg-white rounded-full hover:text-black text-center`}
              name="buy"
              onMouseEnter={(el) => {
                setMenu(el.target.name);
                setMenuPosition(176);
              }}
            >
              Buy
            </button>

            <button
              className={`px-6 py-3 ${
                menu == "refinance" ? "bg-white text-black" : ""
              } hover:bg-white rounded-full hover:text-black text-center`}
              name="refinance"
              onMouseEnter={(el) => {
                setMenu(el.target.name);
                setMenuPosition(290);
              }}
            >
              Refinance
            </button>

            <button
              className={`px-6 py-3 ${
                menu == "HELOC" ? "bg-white text-black" : ""
              } hover:bg-white rounded-full hover:text-black text-center`}
              name="HELOC"
              onMouseEnter={(el) => {
                setMenu(el.target.name);
                setMenuPosition(440);
              }}
            >
              HELOC
            </button>

            <button
              className={`px-6 py-3 ${
                menu == "rates" ? "bg-white text-black" : ""
              } hover:bg-white rounded-full hover:text-black text-center`}
              name="rates"
              onMouseEnter={(el) => {
                setMenu(el.target.name);
                setMenuPosition(580);
              }}
            >
              Rates
            </button>

            <button
              className={`px-6 py-3 ${
                menu == "better" ? "bg-white text-black" : ""
              } hover:bg-white rounded-full hover:text-black text-center`}
              name="better"
              onMouseEnter={(el) => {
                setMenu(el.target.name);
                setMenuPosition(700);
              }}
            >
              Better+
            </button>
          </div>
        </div>

        <div className="flex sm:gap-4 md:gap-10 md:mr-6 items-center cursor-pointer ">
          <button
            name="contact"
            onMouseEnter={(el) => {
              setMenu(el.target.name);
              setMenuPosition(
                window.innerWidth >= 620
                  ? window.innerWidth - 600
                  : window.innerWidth - 450
              );
            }}
            className="sm:w-11 w-9 h-9 sm:h-11 rounded-full border-2 flex transition-all duration-300 hover:text-black hover:bg-white justify-center items-center border-white"
          >
            <i className="fa-solid fa-phone "></i>
          </button>
          <button className="w-24 py-2 hover:bg-white rounded-full hover:text-black">
            Sign in
          </button>

          <div
            onClick={() => setHamburgerMenuOpen(true)}
            className="text-2xl block x12:hidden"
          >
            &#9776;
          </div>
        </div>
      </nav>
    </div>
  );
}
