import greyStar from "../../../assets/grey-star.svg";
import star from "../../../assets/star.svg";
import LazyLoading from 'react-lazyload'
import woman from "../../../assets/woman-at-work.svg";

const RulesGuide = () => {
  return (
    <>
      <div className="px-10 grid gap-5 place-items-center grid-cols-1 lg:grid-cols-2 bg-mainBlue banner-left">
        <div className="left w-full relative order-2 lg:order-1">
          <img
            className="w-4 h-4 absolute right-10 lg:right-1/2"
            src={greyStar}
            alt=""
          />
          <h2 className="text-white text-xl text-center lg:text-left lg:text-3xl pt-4 pb-1 font-custom font-bold">
            Rules and
          </h2>
          <h2 className="text-brightPurple text-xl text-center lg:text-left lg:text-3xl py-1 font-custom font-bold">
            Guidelines
          </h2>
          <p className="text-xs text-center lg:text-left text-white pt-4 leading-8 font-mont">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
          <img
            className="w-3 h-3 absolute right-4"
            src={star}
            alt=""
          />
        </div>
        <div className="right w-full order-1 lg:order-2">
          <LazyLoading height={400} offset={100}>
          <img src={woman} alt="" loading="lazy" />
          </LazyLoading>
        </div>
      </div>
    </>
  );
};

export default RulesGuide;
