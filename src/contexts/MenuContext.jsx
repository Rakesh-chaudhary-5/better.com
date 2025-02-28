import { createContext, useState } from "react";

export const MenuContext = createContext();

export const MyProvider = ({ children }) => {
  const [menu, setMenu] = useState("");
  const [menuPosition, setMenuPosition] = useState(44);

  const menuData = {
    buy: [
      { title: "Apply now", url: "" },
      { title: "Purchase rates", url: "" },
      { title: "Affordability calculator", url: "" },
      { title: "Mortgage calculator", url: "/better.com/mortgage-calculator" },
      { title: "Rent vs buy calculator ", url: "" },
      { title: "Find an agent", url: "" },
      { title: "VA loans", url: "" },
      { title: "Learning center", url: "" },
    ],
    refinance: [
      { title: "Apply now", url: "" },
      { title: "Refinance rates", url: "" },
      { title: "Cash-out refinance calculator", url: "" },
      { title: "Learning Center", url: "" },
    ],
    HELOC: [
      { title: "Apply now", url: "" },
      { title: "Calculator your Cash 💵", url: "" },
      { title: "HELOC vs. Cash-out Refinance", url: "" },
      { title: "Learning Center", url: "" },
    ],
    rates: [
      { title: "Purchase mortgage rates", url: "" },
      { title: "Refinance rates", url: "" },
      { title: "HELOC rates", url: "" },
      { title: "Learning Center", url: "" },
      { title: "Purchase VA rates", url: "" },
    ],
    better: [
      { title: "Get Insurance", url: "" },
      { title: "Title and Closing", url: "" },
      { title: "Better Attorney Match", url: "" },
      { title: "Learning Center", url: "" },
      { title: "Better Agent Match", url: "", agents: true },
      { title: "Better Duo", url: "", agents: true },
    ],
  };

  return (
    <MenuContext.Provider
      value={{ menu, setMenu, menuPosition, menuData, setMenuPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
};
