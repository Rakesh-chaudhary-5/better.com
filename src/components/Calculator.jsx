import { useContext, useState } from "react";
import { MenuContext } from "../contexts/MenuContext";
import { parse } from "postcss";

export default function Calculator() {
  const { setMenu } = useContext(MenuContext);
  const [utilitiesMenu, setUtilitiesMenu] = useState(false);
  const [checkBox, setCheckBox] = useState(true);
  const [selectBar, setSelectBar] = useState("");
  const [utilitiesCost, setUtilitiesCost] = useState({
    water: 25,
    gas: 25,
    internet: 50,
  });
  const utilitiesAllCost = checkBox
    ? utilitiesCost.water + utilitiesCost.gas + utilitiesCost.internet
    : 0;

  const [allMonthlyCosts, setAllMonthlyCosts] = useState({
    taxes: 265,
    insurance: 132,
    hoa: 132,
    pmi: 100,
  });

  const [value, setValue] = useState(1);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const homePrice = value * 50000; // Home price
  const downPaymentAmount = (downPayment / 100) * homePrice; // Down payment amount
  const loanAmount = homePrice - downPaymentAmount; // Principal loan amount

  const monthlyInterestRate = interestRate / 100 / 12; // Convert annual rate to monthly
  const totalMonths = loanTerm * 12; // Total loan duration in months

  // EMI Formula:
  const emi =
    monthlyInterestRate > 0
      ? (loanAmount *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, totalMonths)) /
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1)
      : loanAmount / totalMonths;

  const totalEMI =
    parseInt(emi) +
    utilitiesAllCost +
    allMonthlyCosts.taxes +
    allMonthlyCosts.insurance +
    allMonthlyCosts.hoa +
    allMonthlyCosts.pmi;

  const infoArr = [
    {
      title: "Principal & interest",
      info: "Principal is the amount originally borrowed. Interest is the cost of borrowing that principal.",
    },
    {
      title: "Property taxes",
      info: "These are taxes paid to the local government, not your mortgage lender. This estimate uses the national average for property taxes, which is 1.06%.",
    },
    {
      title: "Homeowners insurance",
      info: "This is an estimate of your monthly premium.",
    },
    {
      title: "HOA fees",
      info: "These are payments made to a homeowners association (HOA) that oversees day-to-day operations, rules, and regulations.",
    },
    {
      title: "Utilities",
      info: "These include things like water, gas, electricity, and internet.",
    },
    {
      title: "PMI",
      info: "Private mortgage insurance (PMI) is insurance required by for borrowers who put less than 20% down on a conventional loan.  PMI can be cancelled once the borrower has at least 20% equity in the property.",
    },
  ];
  return (
    <div
      className="text-[#292B29]"
      onMouseOver={(e) => {
        setMenu("");
        // setSelectBar("");
      }}
    >
      <div className="bg-[#F0F7F1]">
        {/* Calculator section */}
        <section className="py-20  px-6 md:px-10 lg:px-24">
          <h1 className="font-semibold text-4xl md:text-6xl">
            Mortgage calculator
          </h1>
          <p className="py-8 md:py-12 text-xl lg:w-[800px]">
            Our mortgage calculator includes key factors like property taxes and
            insurance. Get the whole picture and calculate your monthly payment.
          </p>

          <div className="flex relative justify-around md:justify-between gap-6  font-semibold">
            <div className="flex flex-col gap-4 justify-center">
              <label className="text-xl">Home price</label>
              <div className="border-2 bg-white hover:border-4 hover:border-[#017848] text-xl sm:text-3xl lg:text-5xl text-black flex items-center border-black overflow-hidden h-[60px] lg:h-[96px] rounded-lg w-40 sm:w-52 lg:w-72">
                <p>$</p>
                <input
                  type="text"
                  value={homePrice}
                  className="w-full outline-none h-full"
                  readOnly
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <label className="text-xl">Monthly payment</label>
              <p className="text-xl sm:text-3xl lg:text-5xl">${totalEMI}/mo</p>
            </div>
            {/*  Get pre-approved btn */}
            <div className="flex absolute  -bottom-52 rounded-lg justify-center w-full md:w-auto bg-[#017848] md:bg-transparent md:bottom-0  md:relative items-end">
              <button className="bg-[#017848] px-8 rounded-lg text-xl py-4 lg:py-6 text-white">
                Get pre-approved
              </button>
            </div>
          </div>

          {/* Slider Input */}
          <div className="w-full py-16">
            <input
              type="range"
              min="1"
              max="100"
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="w-full h-1 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #000000 ${value}%, #C8C9C6 ${value}% 100%)`,
              }}
            />
          </div>

          <div className="flex flex-wrap sm:flex-nowrap mt-20 md:mt-0 justify-between gap-4">
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              {/* ZIP Code */}
              <div className="bg-white w-full md:w-80 rounded-lg border-2 border-gray-300 py-4 px-4">
                <p className="text-sm">ZIP code</p>
                <input
                  type="number"
                  className="outline-none w-full text-lg font-semibold"
                  value={380001}
                  readOnly
                />
              </div>

              {/* Down Payment Section */}
              <div className="flex w-full md:w-auto">
                <div className="bg-white w-full md:w-64 rounded-lg border-2 border-gray-300 py-4 px-4 rounded-r-none">
                  <p className="text-sm">Down payment</p>
                  <div className="flex gap-2">
                    <p className="text-lg">$</p>
                    <input
                      type="number"
                      className="outline-none w-full text-lg font-semibold"
                      value={downPaymentAmount}
                      readOnly
                    />
                  </div>
                </div>
                {/* Percentage */}
                <div className="outline-none items-center relative bg-white flex text-center border-2 overflow-hidden rounded-lg rounded-l-none border-gray-300 border-l-0 w-20 md:w-16 text-lg font-semibold">
                  <input
                    type="number"
                    className="w-full pl-2 h-full"
                    value={downPayment}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (value < 0) value = 0;
                      if (value > 100) value = 100;
                      setDownPayment(value);
                    }}
                  />
                  <div className="absolute right-1 md:right-2 bg-transparent">
                    %
                  </div>
                </div>
              </div>
            </div>

            {/* Interest Rate & Loan Term */}
            <div className="flex flex-wrap gap-4 w-full justify-end md:w-auto">
              <div className="bg-white w-full md:w-80 rounded-lg border-2 border-gray-300 py-4 px-4">
                <p className="text-sm">Interest rate</p>
                <div className="flex">
                  <input
                    type="number"
                    className="outline-none w-full text-lg font-semibold"
                    value={interestRate}
                    onChange={(e) => {
                      let value = Number(e.target.value);
                      if (value < 0) value = 0;
                      if (value > 10) value = 10;
                      setInterestRate(value);
                    }}
                  />
                  <div>%</div>
                </div>
              </div>
              <div className="bg-white w-full md:w-80 rounded-lg border-2 border-gray-300 py-4 px-4">
                <p className="text-sm">Length of loan</p>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full outline-none"
                >
                  <option value="30">30 years</option>
                  <option value="20">20 years</option>
                  <option value="15">15 years</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* payment breakdown section */}
      <section className="lg:pt-40 pt-10 px-10 xl:px-20">
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-20">
          {/* part-1 */}
          <div className="font-semibold flex flex-col w-[800px] p-4 gap-10">
            <h1 className="text-2xl">Monthly payment breakdown</h1>
            <p className="text-5xl">${totalEMI}/mo</p>

            <div
              className="h-20 md:h-28  flex"
              onMouseOut={() => setSelectBar("")}
            >
              <div
                data-name="Principal & interest"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "Principal & interest" || selectBar == ""
                    ? "bg-[#017848]"
                    : "bg-[#E8EAE6]"
                }    rounded-full h-full`}
                style={{ width: `${(parseInt(emi) * 100) / totalEMI}%` }}
              ></div>
              <div
                data-name="Property taxes"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "Property taxes" || selectBar == ""
                    ? "bg-[#6E4CF6]"
                    : "bg-[#E8EAE6]"
                }  w-[15%] rounded-full h-full`}
                style={{
                  width: `${(allMonthlyCosts.taxes * 100) / totalEMI}%`,
                }}
              ></div>
              <div
                data-name="Homeowners insurance"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "Homeowners insurance" || selectBar == ""
                    ? "bg-[#8E8EEB]"
                    : "bg-[#E8EAE6]"
                }  w-[15%] rounded-full h-full`}
                style={{
                  width: `${(allMonthlyCosts.insurance * 100) / totalEMI}%`,
                }}
              ></div>
              <div
                data-name="HOA fees"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "HOA fees" || selectBar == ""
                    ? "bg-[#FFD566]"
                    : "bg-[#E8EAE6]"
                }  w-[15%] rounded-full h-full`}
                style={{ width: `${(allMonthlyCosts.hoa * 100) / totalEMI}%` }}
              ></div>
              <div
                data-name="Utilities"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "Utilities" || selectBar == ""
                    ? "bg-[#FE8B72]"
                    : "bg-[#E8EAE6]"
                }  w-[15%] rounded-full h-full`}
                style={{ width: `${(utilitiesAllCost * 100) / totalEMI}%` }}
              ></div>
              <div
                data-name="PMI"
                onMouseEnter={(e) => {
                  setSelectBar(e.target.getAttribute("data-name"));
                }}
                className={` ${
                  selectBar == "PMI" || selectBar == ""
                    ? "bg-[#B24A00]"
                    : "bg-[#E8EAE6]"
                }  w-[15%] rounded-full h-full`}
                style={{ width: `${(allMonthlyCosts.pmi * 100) / totalEMI}%` }}
              ></div>
            </div>

            {infoArr.map((el) =>
              el.title == selectBar ? (
                <div
                  className={`bg-[#FFFDFA] ${
                    selectBar ? "opacity-1" : "opacity-0 "
                  }  shadow-xl p-6 flex flex-col gap-4`}
                >
                  <h2 className="text-lg">{el.title}</h2>
                  <p className=" font-normal">{el.info}</p>
                </div>
              ) : (
                ""
              )
            )}
          </div>

          {/* part-2 */}
          <div className="w-full flex flex-col md:px-4  md:text-xl gap-10">
            <div className="flex justify-between">
              <div className="flex gap-2 md:gap-4">
                <div className="bg-[#017848] h-6 w-[6px] rounded-xl"></div>

                <p>Principal & interest</p>
              </div>
              <div className=" text-black py-2 w-40 flex items-center font-semibold">
                <span>$</span>
                <p>{parseInt(emi)}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <div className="bg-[#6E4CF6] h-6 w-[6px] rounded-xl"></div>
                <p>Property taxes</p>
              </div>
              <div className="border-2 relative border-[#A4A8A4] hover:border-4 md:h-16  hover:border-green-600 font-bold rounded-lg overflow-hidden w-40 items-center flex ">
                <p className="absolute left-2 ">$</p>
                <input
                  value={allMonthlyCosts.taxes}
                  name="taxes"
                  onChange={(el) => {
                    let value = parseInt(el.target.value) || 0;

                    setAllMonthlyCosts((prev) => ({
                      ...prev,
                      [el.target.name]: value,
                    }));
                  }}
                  className="w-full h-full text-end  py-4"
                  type="number"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <div className="bg-[#8E8EEB] h-6 w-[6px] rounded-xl"></div>
                <p>Homeowners insurance</p>
              </div>
              <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden  w-40 items-center flex ">
                <p className="absolute left-2 ">$</p>
                <input
                  value={allMonthlyCosts.insurance}
                  name="insurance"
                  onChange={(el) => {
                    let value = parseInt(el.target.value) || 0;

                    setAllMonthlyCosts((prev) => ({
                      ...prev,
                      [el.target.name]: value,
                    }));
                  }}
                  className="w-full h-full text-end  py-4"
                  type="number"
                />
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <div className="bg-[#FFD566] h-6 w-[6px] rounded-xl"></div>
                <p>HOA fees</p>
              </div>
              <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden w-40 items-center flex ">
                <p className="absolute left-2 ">$</p>
                <input
                  value={allMonthlyCosts.hoa}
                  name="hoa"
                  onChange={(el) => {
                    let value = parseInt(el.target.value) || 0;

                    setAllMonthlyCosts((prev) => ({
                      ...prev,
                      [el.target.name]: value,
                    }));
                  }}
                  className="w-full h-full text-end  py-4"
                  type="number"
                />
              </div>
            </div>

            <div className="flex justify-between py-1">
              <div className="flex gap-2  ">
                <div className="bg-[#FE8B72] h-6 w-[6px] rounded-xl"></div>

                <p>Utilities</p>
              </div>
              <div
                onClick={() => setUtilitiesMenu((prev) => !prev)}
                className="py-2  w-40 text-black font-semibold flex justify-between cursor-pointer"
              >
                <p>${checkBox ? utilitiesAllCost : 0}</p>
                <p
                  className={` ${
                    utilitiesMenu ? " rotate-90" : "-rotate-90"
                  } transition-all duration-200`}
                >
                  {">"}
                </p>
              </div>
            </div>

            <div
              className={`${
                utilitiesMenu ? "flex flex-col gap-6" : "hidden"
              }  transition-all  `}
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ">
                  <p>Water/Sewer</p>
                </div>
                <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden w-40 items-center flex ">
                  <p className="absolute left-2 ">$</p>
                  <input
                    type="number"
                    value={utilitiesCost.water || 0}
                    name="water"
                    onChange={(e) => {
                      let value = parseInt(e.target.value) || 0;
                      setUtilitiesCost((prev) => ({
                        ...prev,
                        [e.target.name]: value,
                      }));
                    }}
                    className="w-full h-full text-end py-4"
                  />
                </div>
              </div>{" "}
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ">
                  <p>Gas</p>
                </div>
                <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden w-40 items-center flex ">
                  <p className="absolute left-2 ">$</p>
                  <input
                    name="gas"
                    value={utilitiesCost.gas || 0}
                    onChange={(e) => {
                      let value = parseInt(e.target.value) || 0;
                      setUtilitiesCost((prev) => ({
                        ...prev,
                        [e.target.name]: value,
                      }));
                    }}
                    className="w-full h-full text-end  py-4"
                    type="number"
                  />
                </div>
              </div>{" "}
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ">
                  <p>Internet</p>
                </div>
                <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden w-40 items-center flex ">
                  <p className="absolute left-2 ">$</p>
                  <input
                    name="internet"
                    value={utilitiesCost.internet || 0}
                    onChange={(e) => {
                      let value = parseInt(e.target.value) || 0;
                      setUtilitiesCost((prev) => ({
                        ...prev,
                        [e.target.name]: value,
                      }));
                    }}
                    className="w-full h-full text-end  py-4"
                    type="number"
                  />
                </div>
              </div>
              <div className="flex gap-2  items-center">
                <div
                  onClick={() => setCheckBox((rev) => !rev)}
                  className="hover:bg-[#F5F5F1] flex justify-center cursor-pointer rounded-md p-2 items-center"
                >
                  <div
                    className={` border-[2px] rounded-md ${
                      checkBox ? " bg-green-600" : ""
                    } text-white hover:text-[#F5F5F1] px-2 text-lg  border-[#A4A8A4]`}
                  >
                    &#10003;
                  </div>
                </div>
                <p>Include utilities in payment</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <div className="bg-[#B24A00] h-6 w-[6px] rounded-xl"></div>
                <p>PMI</p>
              </div>
              <div className="border-2 relative border-[#A4A8A4] font-bold hover:border-4 md:h-16 hover:border-green-600 rounded-lg overflow-hidden w-40 items-center flex ">
                <p className="absolute left-2 ">$</p>
                <input
                  value={allMonthlyCosts.pmi}
                  name="pmi"
                  onChange={(el) => {
                    let value = parseInt(el.target.value) || 0;

                    setAllMonthlyCosts((prev) => ({
                      ...prev,
                      [el.target.name]: value,
                    }));
                  }}
                  className="w-full h-full text-end  py-4"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
