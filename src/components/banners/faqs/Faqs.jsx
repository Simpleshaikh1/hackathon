import { useState, useRef } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  brightQuestion,
  darkQuestion,
  faqs,
  grey,
  purple,
  white,
} from "../../../utilities/utils";
import LazyLoading from "react-lazyload";
import thinking from "../../../assets/thinking-man.svg";

const Faqs = () => {
  const [dropdown, setDropdown] = useState(false);
  const faqsRef = useRef(null);

  const toggleDrop = (index) => {
    if (dropdown === index) {
      setDropdown(false);
    } else {
      setDropdown(index);
    }
  };

  return (
    <>
      <div
        ref={faqsRef}
        id="faqs"
        className="grid place-items-center gap-5 px-12 grid-cols-1 lg:grid-cols-2 bg-mainBlue banner-left"
      >
        <div className="left w-full relative p-4">
          <img
            className="w-6 h-6 absolute -left-6 top-12"
            src={purple}
            alt=""
            loading="lazy"
          />
          <h2 className="text-xl lg:text-3xl text-white font-custom font-bold py-1 mt-24 text-center lg:text-left">
            Frequently Asked
          </h2>
          <h2 className="text-xl lg:text-3xl text-brightPurple font-custom font-bold py-1 text-center lg:text-left">
            Questions
          </h2>
          <p className="text-sm font-mont leading-7 mt-6 mb-10 text-white text-center lg:text-left">
            We got answers to the questions that you might{" "}
            <br className="hidden lg:block" /> want to ask about getlinked
            Hackathon 1.0
          </p>
          <div className="questions-dropdown">
            <div className="flex flex-col items-center lg:items-start">
              {faqs?.map((faq, index) => (
                <div
                  className="my-6 w-fit border-b border-b-brightPurple p-4"
                  key={index}
                >
                  <p className="flex gap-2 items-center font-mont text-sm text-white">
                    {faq?.question}
                    <span
                      className="text-brightPurple"
                      onClick={() => {
                        toggleDrop(index);
                      }}
                    >
                      {" "}
                      {dropdown === index ? (
                        <AiOutlineMinus className="cursor-pointer" />
                      ) : (
                        <AiOutlinePlus className="cursor-pointer" />
                      )}{" "}
                    </span>{" "}
                  </p>

                  {dropdown === index ? (
                    <p className="text-sm mt-4 text-white font-mont">
                      {faq?.answer}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right lg:w-full mx-auto lg:mx-0 relative p-4">
          <LazyLoading height="100vh" offset={5}>
            <img
              className="lg:w-14 w-7 h-7 lg:h-14 absolute top-6 left-[20%] lg:left-12"
              src={darkQuestion}
              alt=""
            />
            <img
              className="md:w-12 w-6 lg:w-24 md:h-12 h-6 lg:h-24 absolute lg:-top-16 md:-top-4  top-0 left-[35%] md:left-[30%] lg:left-[25%]"
              src={brightQuestion}
              alt=""
            />
            <img
              className="md:w-6 md:h-6 w-3 h-3 absolute lg:-top-10 md:-top-4 top-2 lg:left-[40%] right-[45%] md:left-[45%]"
              src={purple}
              alt=""
              loading="lazy"
            />
            <img
              className="md:w-14 md:h-14 w-6 h-6 absolute md:-top-6 md:left-[53%] top-0 right-[30%]"
              src={darkQuestion}
              alt=""
            />
          </LazyLoading>
          <img
            className="md:w-4 md:h-4 absolute md:top-[20%] md:left-[20%] top-[27%] left-[25%] w-3 h-3"
            src={purple}
            alt=""
          />
          <LazyLoading height={600} offset={30}>
            <img className="w-full" src={thinking} alt="" loading="lazy" />
          </LazyLoading>
          <img
            className="md:w-8 md:h-8 w-4 h-4 absolute bottom-[50%] md:left-12"
            src={grey}
            alt=""
          />
          <img
            className="h-4 w-4 absolute bottom-[4%] right-[20%]"
            src={white}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Faqs;
