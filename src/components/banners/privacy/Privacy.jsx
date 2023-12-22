import ButtonCustom from "../../../customs/ButtonCustom";
import {
  grey,
  licenseTerms,
  lockMan,
  purple,
  white,
} from "../../../utilities/utils";
import LazyLoad from 'react-lazyload'
import "../banner.css";

const Privacy = () => {
  return (
    <>
      <div className="bg-mainBlue grid place-items-center gap-5 p-5 grid-cols-1 lg:grid-cols-2 left-banner-left">
        <div className="left p-4">
          <div className="header-texts relative p-6">
            <img
              className="w-4 h-4 absolute right-1/3 top-2"
              src={grey}
              alt=""
              loading="lazy"
            />
            <h2 className="text-xl lg:text-3xl text-white font-custom font-bold text-center lg:text-left">
              Privacy Policy and{" "}
            </h2>
            <h2 className="text-xl lg:text-3xl text-brightPurple font-custom font-bold text-center lg:text-left">
              Terms
            </h2>
            <p className="pt-6 text-white font-mont text-sm pb-8 text-center lg:text-left">
              Last updated on September 12, 2023
            </p>
            <img
              className="w-4 h-4 absolute right-5 top-28"
              src={purple}
              alt=""
              loading="lazy"
            />
            <p className="pt-6 text-white font-mont text-sm pb-8 text-center lg:text-left">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>
          <div className="border border-brightPurple p-4 flex flex-col items-center gap-4">
            <p className="text-sm text-white font-mont leading-7 text-center lg:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="licensing w-full">
              <h4 className="text-lg text-brightPurple font-mont font-bold my-3">
                Licensing Policy
              </h4>
              <p className="text-sm text-white font-mont my-3">
                Here are terms of our Standard License:
              </p>
              <div className="license-terms py-8">
                {licenseTerms?.map((license, index) => (
                  <div className="flex gap-3 my-5 items-start" key={index}>
                    <img src={license?.src} alt="" loading="lazy" />
                    <p className="text-white text-sm font-mont">
                      {license?.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <ButtonCustom text="Read More" />
          </div>
        </div>
        <div className="right lock-bg relative w-full">
          <img
            className="w-3 h-3 absolute top-24 right-10"
            src={white}
            alt=""
            loading="lazy"
          />
          <LazyLoad height='30vh' offset={40}>
          <img className="lg:mt-44 mt-40" src={lockMan} alt="" />
          </LazyLoad>
          <img
            className="w-5 h-5 absolute bottom-36 md:right-8 right-2"
            src={grey}
            alt=""
            loading="lazy"
          />
          <img
            className="w-3 h-3 absolute bottom-1/3 md:left-32 left-20"
            src={purple}
            alt=""
            loading="lazy"
          />
          <img
            className="w-3 h-3 absolute bottom-1/4 md:left-24 left-16"
            src={white}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default Privacy;
