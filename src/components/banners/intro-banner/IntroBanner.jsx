import { useRef } from "react";
import bulb from "../../../assets/bulb-clipart.svg";
import LazyLoad from 'react-lazyload'
import purpleStar from "../../../assets/purple-star.svg";

const IntroBanner = () => {
  const overviewRef = useRef()
  return (
    <>
      <div ref={overviewRef} id="overview" className="bg-mainBlue px-4 py-8 grid grid-cols-1 gap-3 lg:grid-cols-2 place-items-center">
        <div className="img w-full p-4">
          <LazyLoad height={400} offset={150}>
            <img className="mx-auto lg:mx-0" src={bulb} alt="" />
          </LazyLoad>
        </div>
        <div className="right-text p-4">
          <div className="right-header justify-center lg:justify-start flex items-center">
            <div>
              <h2 className="text-center lg:text-left text-white text-lg lg:text-3xl font-custom font-bold">
                Introduction to getlinked
              </h2>
              <h2 className="text-center mx-auto lg:mx-0 lg:text-left text-brightPurple text-lg lg:text-3xl font-custom font-bold">
                tech Hackathon 1.0
              </h2>
            </div>
            <LazyLoad height='100vh' offset={100}>
            <img className="w-3 h-3 lg:w-10 lg:h-10 lg:ml-16" src={purpleStar} alt="" />
            </LazyLoad>
          </div>
          <p className="text-white text-sm leading-8 py-4 text-center lg:text-left font-mont">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day to shape the future. Whether you&apos;re a coding
            genius, a design maverick, or a concept wizard, you&apos;ll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that&apos;s what we&apos;re all about!
          </p>
        </div>
      </div>
    </>
  );
};

export default IntroBanner;
