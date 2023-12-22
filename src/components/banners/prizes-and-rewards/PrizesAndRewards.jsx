import { grey, medals, purple, trophy, white } from "../../../utilities/utils";
import LazyLoad from "react-lazyload";
import "../banner.css"; 

const PrizesAndRewards = () => {
  return (
    <>
      <div className="bg-mainBlue grid place-items-center gap-4 grid-cols-1 lg:grid-cols-2 p-4 left-banner-left">
        <div className="left w-full relative p-4">
          <LazyLoad height="100vh" offset={5}>
            <img
              className="w-4 h-4 absolute top-8 left-1/4"
              src={purple}
              alt=""
            />
          </LazyLoad>
          <LazyLoad height="30vh" offset={10}>
            <img className="w-full" src={trophy} alt="" />
          </LazyLoad>
          <LazyLoad height="100vh" offset={5}>
            <img
              className="w-4 h-4 absolute bottom-2 left-1/3"
              src={white}
              alt=""
            />
          </LazyLoad>
        </div>
        <div className="right w-full relative p-4">
          <div className="lg:w-fit lg:mx-auto text-center lg:text-left my-4">
            <h2 className="lg:text-3xl text-xl text-white font-custom font-bold">
              Prizes and
            </h2>
            <h2 className="lg:text-3xl text-xl text-brightPurple font-custom font-bold">
              Rewards
            </h2>
            <p className="text-sm text-white font-mont leading-6 py-4">
              Highlight of the prizes or rewards for winners and <br /> for
              participants.
            </p>
          </div>
          <img
            className="w-4 h-4 absolute top-[15%] right-[30%]"
            src={purple}
            alt=""
            loading="lazy"
          />
          <LazyLoad height="100vh" offset={5}></LazyLoad>
          <LazyLoad height="100vh" offset={5}>
            <img
              className="w-4 h-4 absolute top-1/3 left-28 hidden lg:block"
              src={white}
              alt=""
              loading="lazy"
            />
          </LazyLoad>
          <LazyLoad height="100vh" offset={5}>
            <img
              className="w-4 h-4 absolute top-2/4 right-8"
              src={white}
              alt=""
              loading="lazy"
            />
          </LazyLoad>
          <LazyLoad height="30vh" offset={50}>
            <img src={medals} alt="" loading="lazy" />
          </LazyLoad>
          <LazyLoad height="100vh" offset={5}>
            <img
              className="w-4 h-4 absolute bottom-3 right-16"
              src={grey}
              alt=""
              loading="lazy"
            />
          </LazyLoad>
        </div>
      </div>
    </>
  );
};

export default PrizesAndRewards;
