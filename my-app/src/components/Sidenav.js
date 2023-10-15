import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaChevronDown } from "react-icons/fa";
import {
  faChartBar,
  faBox,
  faUser,
  faMoneyBill,
  faBullhorn,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidenav = ({ component }) => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const handleLinkClick = (newOption) => {
    setSelectedOption(newOption);
  };

  const iconMapping = {
    Dashboard: faChartBar,
    Product: faBox,
    Customer: faUser,
    Income: faMoneyBill,
    Promote: faBullhorn,
    Help: faQuestionCircle,
  };

  return (
    <div className="flex">
      <div className="bg-[#1b164b] h-screen w-64 fixed top-0 left-0 overflow-y-auto">
        <div className="py-4 px-4">
          {/* Logo or Branding with icon */}
          <div className="text-white text-2xl font-bold">
            <FontAwesomeIcon
              icon={iconMapping[selectedOption]}
              className="mr-2"
            />
            {selectedOption}
          </div>
        </div>
        <div className="p-4">
          {/* Navigation Links */}
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                onClick={() => handleLinkClick("Dashboard")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Dashboard" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faChartBar} /> &nbsp; Dashboard
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Product")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Product" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faBox} /> &nbsp; Product
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Customer")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Customer" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faUser} /> &nbsp; Customers
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Income")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Income" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faMoneyBill} /> &nbsp; Income
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Promote")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Promote" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faBullhorn} /> &nbsp; Promote
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Help")}
                className={`text-white hover:bg-[#a8a4ca] py-2 px-4 block ${
                  selectedOption === "Help" ? "bg-[#a8a4ca]" : ""
                }`}
              >
                <FontAwesomeIcon icon={faQuestionCircle} /> &nbsp; Help
              </a>
            </li>
          </ul>
        </div>
        <div className="absolute bottom-4 left-4 bg-[#87b3d7] p-2 rounded-lg">
          <div className="flex items-center text-white">
            <img
              src="./assets/manager.png"
              alt="Manager's Image"
              className="h-12 w-18 rounded-full"
            />
            <div>
              <div className="text-lg font-semibold">Evano</div>
              <div className="text-xs">Project Manager</div>
            </div>
            <div className="ml-8">
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full ml-64 sm:w-30 md:w-30 p-1 bg-gray-100">
        <div className="w-full">{component}</div>
      </div>
    </div>
  );
};

export default Sidenav;
