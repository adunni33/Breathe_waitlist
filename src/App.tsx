import React from "react";
import "./App.css";
import img from "./assets/copy.png";
import img_phone from "./assets/Rectangle.png";
import { Footer } from "./Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Category");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <div
        style={{ fontFamily: "Nunito Sans" }}
        className="bg-[#ffffff] px-[32px] lg:px-[104px] pt-[31px] lg:pt-[38px] pb-[90px] lg:pb-[156px] md:h-[100vh] lg:h-[100%]"
      >
        <div className="lg:w-[150px] lg:h-[118.493px] w-[80px] h-[63.196px]">
          <img src={img} alt="logo" />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col items-start gap-[20px] py-[30px] lg:py-0">
            <h1 className="text-[#2F2F30] text-[32px] text-center lg:text-start lg:text-[54px] w-[330px] lg:w-[500px] xl:w-[565px] not-italic font-[700] leading-[normal]">
              Taking your Mental Health Priority
            </h1>
            <p className="xl:w-[596px] w-[335px] lg:w-[450px] text-[#262626] flex text-center lg:text-start text-[14px] lg:text-[18px] font-[400] not-italic">
              A platform that gives you a safe space and connects you to
              therapist without breaking the bank.
            </p>
            <div className="border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] rounded-[8px]">
              <input
                type="text"
                placeholder="Name"
                className="no-border p-[16px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]"
              />
            </div>
            <div className="border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] rounded-[8px]">
              <input
                type="text"
                placeholder="Email"
                className="no-border p-[16px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]"
              />
            </div>
            <div className="flex justify-between items-center rounded-[8px] border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]">
              <p className="p-[16px]" placeholder="Category">
                {selectedOption}
              </p>
              <svg
                onClick={toggleDropdown}
                className="pr-[10px] cursor-pointer"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 9.5L12.5 15.5L18.5 9.5"
                  stroke="#505452"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isOpen && (
                <div className="dropdown absolute bg-[#fff] border-[1px] border-[#B2BBB6] rounded-[8px] py-[24px] px-[16px] w-[226px] h-[178px] top-[32rem] lg:top-[47rem] lg:left-[330px] xl:left-[390px] left-[130px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]">
                  <ul className="flex flex-col gap-[20px]">
                    <li
                      onClick={() => handleOptionSelect("Patient")}
                      className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
                    >
                      Patient
                    </li>
                    <li
                      onClick={() => handleOptionSelect("Therapist")}
                      className="cursor-pointer border-b-[2px] border-b-[#B2BBB6]"
                    >
                      Therapist
                    </li>
                  </ul>
                </div>
              )}
            </div>
              <button className="w-[212px] m-auto lg:m-0 h-[48px] px-[31px] rounded-[16px] bg-[#2131BA] text-[#FFF] text-[20px] not-italic font-[600] leading-[normal]">
                Join Waitlist
              </button>
          </div>
          <div className="lg:w-[410.224px] lg:h-[788px] w-[180.124px] h-[346px]">
            <img src={img_phone} alt="phone" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
