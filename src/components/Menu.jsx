import React, { useContext } from "react";
import { Link } from "react-router";
import { MenuContext } from "../contexts/MenuContext";

export default function Menu() {
  const { menu, menuPosition, menuData } = useContext(MenuContext);
  const contact = [{ title: "" }];

  const showMenu =
    menu == "buy"
      ? menuData.buy
      : menu == "refinance"
      ? menuData.refinance
      : menu == "HELOC"
      ? menuData.HELOC
      : menu == "rates"
      ? menuData.rates
      : menu == "better"
      ? menuData.better
      : contact;
  return (
    <div
      className={`bg-white z-20 top-20 text-black rounded-lg absolute ${
        menu ? "block" : "hidden"
      } w-[370px] `}
      style={{ left: `${menuPosition}px` }}
    >
      <div className="py-6 px-4">
        {showMenu.map((el) => (
          <Link key={el.title} to={el.url}>
            <div className="flex items-center  justify-between group rounded-lg hover:bg-[#f7f7ec] cursor-pointer p-2 px-6">
              <h2 className="">
                {el.title ? (
                  el.title
                ) : (
                  <p>
                    Call us anytime at span{" "}
                    <span className="underline">415-523-8837</span>{" "}
                  </p>
                )}
              </h2>
              {el.agents ? (
                <div className="text-black bg-[#FFD566] px-3 font-semibold rounded-xl">
                  For Agents
                </div>
              ) : (
                ""
              )}
              {el.title ? (
                <div className="text-3xl group-hover:visible invisible text-green-900 ">
                  &rarr;
                </div>
              ) : (
                ""
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
