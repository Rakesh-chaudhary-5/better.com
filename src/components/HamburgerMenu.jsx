import { useContext, useState } from "react";
import betterIcon from "../assets/images/blackBatter.svg";
import { MenuContext } from "../contexts/MenuContext";
import phoneImg from "../assets/images/phone.svg";

export default function HamburgerMenu({
  setHamburgerMenuOpen,
  hamburgerMenuOpen,
}) {
  const { menuData } = useContext(MenuContext);
  const [selectedMenu, setSelectedMenu] = useState("");

  return (
    <div
      className={`${
        hamburgerMenuOpen ? "left-0" : "-left-[100%]"
      } absolute  w-full h-screen transition-all duration-200`}
    >
      <div className="p-8 flex h-full bg-white flex-col gap-2">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center ">
            {/* better logo */}
            <img src={betterIcon} alt="better-logo" />
            <p
              onClick={() => setHamburgerMenuOpen(false)}
              className="font-semibold cursor-pointer text-2xl px-2 rounded-md hover:bg-[#E8EAE6]"
            >
              X
            </p>
          </div>

          {/* main div-1 */}
          <div
            id="buy"
            onClick={(e) =>
              setSelectedMenu((prev) =>
                prev == e.target.id ? "" : e.target.id
              )
            }
            className="w-full justify-between py-3 pt-6 cursor-pointer  flex"
          >
            <div>Buy</div>
            <span
              className={` ${
                selectedMenu == "buy" ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              &#9660;
            </span>
          </div>

          {/* sub dives-1 */}
          {selectedMenu == "buy"
            ? menuData.buy.map((el) => (
                <div
                  key={el.title}
                  className="w-full hover:bg-[#E8EAE6] px-6 py-4 rounded-lg cursor-pointer "
                >
                  <div>{el.title}</div>
                </div>
              ))
            : ""}

          {/* main div-2 */}
          <div
            id="refinance"
            onClick={(e) =>
              setSelectedMenu((prev) =>
                prev == e.target.id ? "" : e.target.id
              )
            }
            className="w-full justify-between py-3 cursor-pointer  flex"
          >
            <div>Refinance</div>
            <span
              className={` ${
                selectedMenu == "refinance" ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              &#9660;
            </span>
          </div>

          {/* sub divs-2 */}
          {selectedMenu == "refinance"
            ? menuData.refinance.map((el) => (
                <div
                  key={el.title}
                  className="w-full hover:bg-[#E8EAE6] px-6 py-4 rounded-lg cursor-pointer "
                >
                  <div>{el.title}</div>
                </div>
              ))
            : ""}

          {/* main div-3 */}
          <div
            id="HELOC"
            onClick={(e) =>
              setSelectedMenu((prev) =>
                prev == e.target.id ? "" : e.target.id
              )
            }
            className="w-full justify-between py-3 cursor-pointer  flex"
          >
            <div>HELOC</div>
            <span
              className={` ${
                selectedMenu == "HELOC" ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              &#9660;
            </span>
          </div>

          {/* sub divs-3 */}
          {selectedMenu == "HELOC"
            ? menuData.HELOC.map((el) => (
                <div
                  key={el.title}
                  className="w-full hover:bg-[#E8EAE6] px-6 py-4 rounded-lg cursor-pointer "
                >
                  <div>{el.title}</div>
                </div>
              ))
            : ""}

          {/* main div-4 */}
          <div
            id="rates"
            onClick={(e) =>
              setSelectedMenu((prev) =>
                prev == e.target.id ? "" : e.target.id
              )
            }
            className="w-full justify-between py-3 cursor-pointer  flex"
          >
            <div>Rates</div>
            <span
              className={` ${
                selectedMenu == "rates" ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              &#9660;
            </span>
          </div>

          {/* sub divs-4 */}
          {selectedMenu == "rates"
            ? menuData.rates.map((el) => (
                <div
                  key={el.title}
                  className="w-full hover:bg-[#E8EAE6] px-6 py-4 rounded-lg cursor-pointer "
                >
                  <div>{el.title}</div>
                </div>
              ))
            : ""}
          {/* main div-5 */}
          <div
            id="better"
            onClick={(e) =>
              setSelectedMenu((prev) =>
                prev == e.target.id ? "" : e.target.id
              )
            }
            className="w-full justify-between py-3 cursor-pointer  flex"
          >
            <div>Better+</div>
            <span
              className={` ${
                selectedMenu == "better" ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              &#9660;
            </span>
          </div>

          {/* sub dives-5 */}
          {selectedMenu == "better"
            ? menuData.better.map((el) => (
                <div
                  key={el.title}
                  className="w-full hover:bg-[#E8EAE6] px-6 py-4 rounded-lg cursor-pointer "
                >
                  <div>{el.title}</div>
                </div>
              ))
            : ""}

          <div className="flex gap-4 justify-center w-full py-3 bg-[#F0F7F1] rounded-full">
            <img src={phoneImg} alt="phone-img" />
            <p>
              Call us anytime at{" "}
              <span className="underline">(415) 523 88371</span>
            </p>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 justify-center w-full py-4 transition-all duration-300 hover:text-white font-semibold cursor-pointer hover:bg-[#004733] bg-[#1EE07F] rounded-full">
            <p>Continue</p>
          </div>

          <div className="flex gap-4 cursor-pointer border-4 transition-all duration-300 hover:text-green-600 border-gray-300 font-semibold hover:border-green-600 justify-center w-full py-4 bg-[#F0F7F1] rounded-full">
            <p>Sign in</p>
          </div>
        </div>
      </div>
    </div>
  );
}
