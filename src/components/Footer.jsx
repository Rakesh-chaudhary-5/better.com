import betterLogo from "../assets/images/greenBetter.svg";
import home1Logo from "../assets/images/home-1.svg";
import home2Logo from "../assets/images/home-2.svg";
import facebookLogo from "../assets/images/facebook.svg";
import instagramLogo from "../assets/images/insta.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import { Link } from "react-router";
import { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";

export default function Footer() {
  const { setMenu } = useContext(MenuContext);

  const betterDataArr = [
    {
      title: "Mortgage",
      text: "We can’t wait to say 'Welcome home.' Apply 100% online, with expert customer support.",
    },
    {
      title: "Real Estate",
      text: "Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.",
    },
    {
      title: "Cover",
      text: "Shop, bundle, and save on insurance coverage for home, auto, life, and more.",
    },
    {
      title: "Inspect",
      text: "Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.",
    },
    {
      title: "Settlement Services",
      text: "Get transparent rates when you shop for title insurance all in one convenient place.",
    },
  ];

  const resources = [
    "Home affordability calculator",
    "Mortgage calculator",
    "Free mortgage calculator",
    "Mortgage calculator with taxes",
    "Mortgage calculator with PMI",
    "Rent vs buy calculator",
    "HELOC payment calculator",
    "HELOC vs cash-out refinance calculator",
    "Buy a home",
    "Sell a home",
    "Get home inspection",
  ];

  const company = [
    "About Us",
    "Careers",
    "Media",
    "Partner With Us",
    "Learning Center",
    "FAQs",
    "Investor Relations",
  ];

  const contactInfo = [
    "hello@better.com",
    "415-523-8837",
    "FAQ",
    "Glossary",
    "Legal",
    "NMLS Consumer Access",
    "Privacy Policy",
    "Terms of Use",
    "Disclosures & Licensing",
    "Affiliated Business",
    "Browser Disclaimer",
  ];

  return (
    <div
      className="relative mt-20 border-t-2 border-gray-700"
      onMouseEnter={() => setMenu("")}
    >
      <div className="py-10 px-6 md:px-20 lg:px-40">
        <section>
          <img className="w-24 mb-10" src={betterLogo} alt="better img" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <p className="mb-6">
                Better is a family of companies serving all your homeownership
                needs.
              </p>
              <ul className="flex flex-col gap-4">
                {betterDataArr.map((el, index) => (
                  <li key={index} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <img src={betterLogo} alt="" className="w-16" />
                      <p className="font-semibold">{el.title}</p>
                    </div>
                    <p className="text-sm">{el.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold">Resources</p>
              <ul className="flex flex-col gap-2 mt-4 text-sm">
                {resources.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold">Company</p>
              <ul className="flex flex-col gap-2 mt-4 text-sm">
                {company.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold">Contact Us</p>
              <ul className="flex flex-col gap-2 mt-4 text-sm">
                {contactInfo.map((el, index) => (
                  <li key={index} className={el === "Legal" ? "font-bold" : ""}>
                    {el}
                  </li>
                ))}
                <div className="flex gap-4 mt-4">
                  <img src={home1Logo} className="w-10" alt="home logo-1" />
                  <img src={home2Logo} className="w-10" alt="home logo-2" />
                </div>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-20 text-xs">
          <div className="border-t-2 border-gray-600 py-10 flex flex-col gap-4">
            <div className="flex justify-center gap-4">
              <Link to="https://www.facebook.com/better/">
                <img
                  className="cursor-pointer w-6"
                  src={facebookLogo}
                  alt="facebook-logo"
                />
              </Link>
              <Link to="https://www.instagram.com/betterdotcom/">
                <img
                  className="cursor-pointer w-6"
                  src={instagramLogo}
                  alt="instagram-logo"
                />
              </Link>
              <Link to="https://www.linkedin.com/company/betterdotcom/">
                <img
                  className="cursor-pointer w-6"
                  src={linkedinLogo}
                  alt="linkedin-logo"
                />
              </Link>
            </div>
            <p>
              <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers
              qualified customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a mortgage loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in a
              final underwriting approval.{" "}
              <span className="underline">
                See One Day Mortgage™ Terms and Conditions.
              </span>
            </p>

            <p>
              <sup>2</sup>Better Mortgage’s One Day HELOC™ promotion offers
              qualified customers who provide certain required financial
              information/documentation to Better Mortgage within 4 hours of
              locking a rate on a HELOC loan the opportunity to receive an
              underwriting determination from Better Mortgage within 24 hours of
              their rate lock. The underwriting determination is subject to
              customary terms, including fraud and anti-money laundering checks,
              that take place pre-closing and which may trigger additional
              required documentation from the customer. Better Mortgage does not
              guarantee that initial underwriting approval will result in final
              underwriting approval. See
              <span className="underline">
                One Day Heloc™ Terms and Conditions.
              </span>
            </p>

            <p>
              <sup>3</sup>Assumes borrowers are eligible for the Automated
              Valuation Model (AVM) to calculate their home value, their loan
              amount is less than $400,000, all required documents are uploaded
              to their Better Mortgage online account within 24 hours of
              application, closing is scheduled for the earliest available date
              and time, and a notary is readily available. Funding timelines may
              vary and may be longer if an appraisal is required to calculate a
              borrower’s home value.
            </p>
          </div>
          {/* subpart-2 */}
          <div className=" flex flex-col gap-6 mt-10 ">
            <p>
              © 2025 Better Home & Finance Holding Company and/or its
              affiliates. Better is a family of companies. Better Mortgage
              Corporation provides home loans; Better Real Estate, LLC and
              Better Real Estate California Inc License # 02164055 provides real
              estate services; Better Cover, LLC sells insurance products; and
              Better Settlement Services provides title insurance services; and
              Better Inspect, LLC provides home inspection services. All rights
              reserved.
            </p>

            <p>
              Home lending products offered by Better Mortgage Corporation.
              Better Mortgage Corporation is a direct lender. NMLS #330511. 1
              World Trade Center, 80th Floor, New York, NY 10007. Loans made or
              arranged pursuant to a California Finance Lenders Law License. Not
              available in all states. Equal Housing Lender. NMLS Consumer
              Access
            </p>

            <p>
              Better Real Estate, LLC dba BRE, Better Home Services, BRE
              Services, LLC and Better Real Estate, and operating in the State
              of California through its wholly owned subsidiary Better Real
              Estate California Inc., is a licensed real estate brokerage and
              maintains its corporate headquarters at 325-41 Chestnut Street,
              Suite 826, Philadelphia, PA 19106. Here is a full listing of
              Better Real Estate, LLC’s license numbers. Better Real Estate, LLC
              provides access to real estate brokerage services via its
              nationwide network of partner brokerages and real estate agents
              (“Better Real Estate Partner Agents”). Equal Housing Opportunity.
              All rights reserved.
            </p>

            <p className="underline">
              New York State Housing and Anti-Discrimination Notice
            </p>

            <p className="underline">New York Standard Operating Procedures</p>

            <p>
              Texas Real Estate Commission:{" "}
              <span className="underline">
                Information About Brokerage Services
              </span>{" "}
              | <span className="underline">Consumer Protection Notice</span>
            </p>

            <p>
              Better Settlement Services, LLC. 325-41 Chestnut Street, Suite
              803, Philadelphia, PA 19106.
            </p>

            <p>
              Homeowners insurance policies are offered through Better Cover,
              LLC, a Pennsylvania Resident Producer Agency. License #881593.
              325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
            </p>

            <p>
              Insurance quotes and policies are offered through Better Cover,
              LLC. A Pennsylvania Resident Producer Agency. License #881593.
              Here is a full listing of Better Cover, LLC’s{" "}
              <span className="underline">license numbers</span>.
            </p>

            <p>
              Better Mortgage Corporation, Better Real Estate, LLC, Better
              Settlement Services, LLC, Better Cover, LLC, Better Connect, and
              Better Inspect, LLC are separate operating subsidiaries of Better
              Home & Finance Holding Company. Each company is a separate legal
              entity operated and managed through its own management and
              governance structure as required by its state of incorporation,
              and applicable and legal and regulatory requirements. Products not
              available in all states.
            </p>

            <p>
              Any unauthorized use of any proprietary or intellectual property
              is strictly prohibited. All trademarks, service marks, trade
              names, logos, icons, and domain names are proprietary to Better
              Home & Finance Holding Company. Better Home & Finance Holding
              Company trademarks are federally registered with the U. S. Patent
              and Trademark Office. Better Cover is a registered trademark with
              the U.S. Patent and Trademark Office and is owned by Better Cover,
              LLC.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
