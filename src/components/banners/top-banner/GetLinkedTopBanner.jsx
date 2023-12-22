import bulb from "../../../assets/Creative 1.svg";
import ButtonCustom from "../../../customs/ButtonCustom";
import chain from "../../../assets/chain-9365116-7621444.svg";
import curve from "../../../assets/curved-line.svg";
import explosive from "../../../assets/explosive.svg";
import LazyLoad from "react-lazyload";
import matrix from "../../../assets/metrix.svg";
import matrixBright from "../../../assets/bright-matrix.svg";
import star from "../../../assets/star.svg";
import greyStar from "../../../assets/grey-star.svg";
import vrMan from "../../../assets/vr-glasses-man.svg";
import "../banner.css";

const GetLinkedTopBanner = () => {
  return (
    <>
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-2 bg-mainBlue p-4 place-items-center left-banner-left">
        <div className="p-4 lg:translate-x-10 w-full text-center lg:text-left">
          <div>
            <span className="text-white flex flex-col text-sm lg:hidden lg:text-3xl pt-3 -mt-4 lg:mx-8">
              Igniting a Revolution in HR Innovation{" "}
            </span>
            <span className="">
              {" "}
              <img className="mx-auto lg:hidden" src={curve} alt="" />
            </span>
          </div>

          <img className="w-3 h-3 ml-8 lg:ml-20" src={star} alt="star-icon" />
          <div className="text-center lg:text-left mt-4">
            <h2 className="text-2xl py-1 lg:text-6xl flex justify-center lg:justify-start font-bold text-white font-custom">
              getlinked Tech
              <span>
                <img
                  className="w-6 h-6 -translate-x-7 -translate-y-4 lg:-translate-x-14 lg:-translate-y-2"
                  src={bulb}
                  alt=""
                />
              </span>
            </h2>
            <div className="hackaton-creative flex items-center w-fit mx-auto lg:w-fit lg:mx-0">
              <h2 className="text-2xl lg:text-6xl text-white font-custom">
                Hackathon <span className="text-brightPurple">1.0</span>
              </h2>
              <LazyLoad height={300} offset={100}>
                <img
                  className="w-6 h-6 mx-1 lg:w-12 lg:h-12"
                  src={chain}
                  alt=""
                />
              </LazyLoad>
              <LazyLoad height={300} offset={100}>
                <img
                  className="w-6 h-6 mx-1 lg:w-12 lg:h-12"
                  src={explosive}
                  alt=""
                />
              </LazyLoad>
            </div>
            <p className="text-lg text-white py-2 font-mont">
              Participate in getlinked tech Hackathon 2023{" "}
              <br className="lg:block" /> stand a chance to win a Big prize
            </p>
            <ButtonCustom text="Register" />
            <img className="w-3 h-3 mt-10 ml-[75%]" src={greyStar} alt="" />
            <p className="text-white text-2xl lg:text-5xl font-unica">
              00<sub className="text-xs lg:text-sm font-unica">H</sub> 00
              <sub className="text-xs lg:text-sm font-unica">M</sub> 00
              <sub className="text-xs lg:text-sm font-unica">S</sub>
            </p>
          </div>
        </div>
        <div className="banner-right relative w-full">
          <p className="text-white hidden lg:flex lg:flex-col text-xl lg:text-3xl text-right pt-3 -mt-4 lg:mx-8">
            Igniting a Revolution in HR Innovation{" "}
            <span className="ml-auto">
              {" "}
              <img src={curve} alt="" loading="lazy" />
            </span>
          </p>
          <LazyLoad height="100vh" offset={100}>
            <img src={vrMan} alt="man-with-vr-glasses" />
          </LazyLoad>
          <LazyLoad height="100vh" offset={100}>
            <img
              className="absolute bottom-10 z-20 right-48"
              src={matrix}
              alt=""
            />
          </LazyLoad>
          <LazyLoad height="100vh" offset={100}>
            <img
              className="absolute top-4 left-4 z-40"
              src={matrixBright}
              alt=""
            />
          </LazyLoad>
        </div>
      </div>
    </>
  );
};

export default GetLinkedTopBanner;
