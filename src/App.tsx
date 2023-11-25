import React, { useRef } from "react";
import "./App.css";
import img from "./assets/copy.png";
import img_phone from "./assets/Rectangle.png";
import { Footer } from "./Footer";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [categoryError, setCategoryError] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedOption) {
      setCategoryError("Please select a category before submitting.");
      return;
    }

    setCategoryError(null);

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_7z533gq",
          "template_no76k4c",
          formRef.current,
          "dLPdlcf1B8ic4ZTE2"
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log("Email sent successfully:", result.text);
            formRef.current?.reset();
            setSelectedOption("");
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, 5000);
          },
          (error: EmailJSResponseStatus) => {
            console.error("Email sending failed:", error.text);
          }
        );
    }
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
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col items-start gap-[20px] py-[30px] lg:py-0"
          >
            <h1 className="text-[#2F2F30] text-[32px] text-center lg:text-start lg:text-[54px] w-[330px] lg:w-[500px] xl:w-[565px] not-italic font-[700] leading-[normal]">
              Taking your Mental Health Priority
            </h1>
            <p className="xl:w-[596px] w-[335px] lg:w-[450px] text-[#262626] flex text-center lg:text-start text-[14px] lg:text-[18px] font-[400] not-italic">
              A platform that gives you a safe space and connects you to
              therapist without breaking the bank.
            </p>
            <div className="border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] rounded-[8px]">
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Name"
                className="no-border p-[16px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal] w-[100%] lg:w-[400px] xl:w-[500px]"
                required
              />
            </div>
            <div className="border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] rounded-[8px]">
              <input
                id="user_emil"
                name="user_email"
                type="email"
                placeholder="Email"
                className="no-border p-[16px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal] w-[100%] lg:w-[400px] xl:w-[500px]"
                required
              />
            </div>
            <div
              onClick={toggleDropdown}
              className="flex justify-between items-center rounded-[8px] border-[1px] w-[100%] lg:w-[450px] xl:w-[512px] border-[#B2BBB6] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]"
            >
              <input
                type="text"
                id="user_input"
                name="user_input"
                value={selectedOption}
                placeholder="Category"
                readOnly
                className="p-[16px] no-border w-full cursor-pointer"
                required
              />
              <svg
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
              <div className="error-message text-red-600 font-semibold mt-2 absolute top-[420px] lg:top-[655px]">
                {categoryError}
              </div>
              {isOpen && (
                <div className="dropdown absolute bg-[#fff] border-[1px] border-[#B2BBB6] rounded-[8px] py-[24px] px-[16px] w-[226px] h-[130px] top-[32rem] lg:top-[47rem] lg:left-[330px] xl:left-[390px] left-[130px] text-[#2F2F30] text-[18px] not-italic font-[400] leading-[normal]">
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
            <button
              type="submit"
              className="w-[212px] m-auto lg:m-0 h-[48px] px-[31px] rounded-[16px] bg-[#2131BA] text-[#FFF] text-[20px] not-italic font-[600] leading-[normal]"
            >
              Join Waitlist
            </button>
            {showSuccessMessage && (
              <div className="text-green-600 font-semibold mt-4 flex justify-center">
                Form submitted successfully!
              </div>
            )}
          </form>
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
