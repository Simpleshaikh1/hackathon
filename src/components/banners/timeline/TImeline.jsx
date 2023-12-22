import {
  five,
  four,
  long,
  one,
  purple,
  short,
  six,
  three,
  two,
} from "../../../utilities/utils";
import LazyLoading from "react-lazyload";
import { useRef } from "react";

const TImeline = () => {
  const timelineRef = useRef();

  return (
    <>
      <div
        id="timeline"
        ref={timelineRef}
        className="flex flex-col items-center bg-mainBlue p-8"
      >
        <h2 className="text-white md:text-3xl text-xl font-custom font-bold">
          Timeline
        </h2>
        <p className="text-white text-sm font-mont leading-7 text-center mt-6">
          Here is the breakdown of the time we anticipate <br /> using for the
          upcoming event.
        </p>
        <img className="w-6 h-6 mr-auto" src={purple} alt="" loading="lazy" />
        <div className="timeline hidden lg:grid lg:grid-cols-3 mt-6">
          <div className="left w-full p-4 flex flex-col justify-around">
            <div className="announcement translate-y-12">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                Hackathon Announcement
              </h2>
              <p className="text-white text-sm font-mont text-right leading-7">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="date translate-y-12">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                November 18, 2023
              </h2>
            </div>
            <div className="team-reg translate-y-14">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                Teams Registration ends
              </h2>
              <p className="text-white text-sm font-mont text-right leading-7">
                Interested Participants are no longer Allowed to register
              </p>
            </div>
            <div className="date translate-y-16">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                November 18, 2023
              </h2>
            </div>
            <div className="team-reg translate-y-16">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                Getlinked Hackathon 1.0 Offically Begins
              </h2>
              <p className="text-white text-sm font-mont text-right leading-7">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="date translate-y-12">
              <h2 className="text-brightPurple text-xl font-mont font-bold text-right">
                November 18, 2023
              </h2>
            </div>
          </div>

          <div className="middle w-full p-4 flex flex-col justify-between items-center">
            <div className="flex flex-col items-center">
              <img src={long} alt="" />
              <img src={one} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img className="my-3" src={short} alt="" />
              <img src={two} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img className="my-3" src={short} alt="" />
              <img className="" src={three} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img className="my-3" src={short} alt="" />
              <img className="" src={four} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img className="my-3" src={short} alt="" />
              <img className="" src={five} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <img className="my-3" src={short} alt="" />
              <img className="" src={six} alt="" />
            </div>
          </div>

          <div className="right w-full p-4 flex flex-col justify-between">
            <div className="translate-y-36">
              <h2 className="text-brightPurple text-xl font-mont font-bold mr-auto">
                November 18, 2023
              </h2>
            </div>
            <div className="team-reg translate-y-32">
              <h2 className="text-brightPurple text-xl font-mont font-bold">
                Teams Registration begins
              </h2>
              <p className="text-white text-sm font-mont leading-7">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="translate-y-28">
              <h2 className="text-brightPurple text-xl font-mont font-bold mr-auto">
                November 18, 2023
              </h2>
            </div>
            <div className="team-reg translate-y-20">
              <h2 className="text-brightPurple text-xl font-mont font-bold">
                Announcement of the accepted teams and ideas
              </h2>
              <p className="text-white text-sm font-mont leading-7">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="translate-y-10">
              <h2 className="text-brightPurple text-xl font-mont font-bold mr-auto">
                November 18, 2023
              </h2>
            </div>
            <div className="team-reg">
              <h2 className="text-brightPurple text-xl font-mont font-bold">
                Demo Day
              </h2>
              <p className="text-white text-sm font-mont leading-7">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
          </div>
        </div>
        <div className="bg-mainBlue lg:hidden">
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" />
                <img className="" src={one} alt="" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Hackathon Announcement
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" />
                <img className="" src={two} alt="" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Teams Registration begins
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" loading="lazy" />
                <img className="w-6 h-6" src={three} alt="" loading="lazy" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Teams Registration ends
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                Interested Participants are no longer Allowed to register
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" loading="lazy" />
                <img className="" src={four} alt="" loading="lazy" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Announcement of the accepted teams and ideas
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" loading="lazy" />
                <img className="w-10 h-10" src={five} alt="" loading="lazy" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Getlinked Hackathon 1.0 Offically Begins
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
          <div className="flex space-x-4 items-center my-4">
            <div className="flex flex-col items-center">
              <LazyLoading height="100vh" offset={5}>
                <img className="my-3" src={short} alt="" loading="lazy" />
                <img className="" src={six} alt="" loading="lazy" />
              </LazyLoading>
            </div>
            <div className="content-text">
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                Demo Day
              </h2>
              <p className="text-xs text-white font-mont py-2 leading-6">
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <h2 className="text-xs text-brightPurple font-mont font-bold py-2">
                November 18, 2023
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TImeline;
