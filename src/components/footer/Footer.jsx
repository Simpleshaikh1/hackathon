import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GiPhone, GiPositionMarker } from "react-icons/gi";
import { grey, logo, purple, short, white } from "../../utilities/utils";

const Footer = () => {
  return (
    <>
      <footer className="bg-mainBlue flex flex-col justify-center items-center p-8">
        <img className="w-4 h-4 " src={white} alt="" loading="lazy" />
        <div className="flex flex-col lg:flex-row lg:justify-between p-4 gap-5">
          <div className="get-linked-footer relative left-side w-full">
            <img src={logo} alt="" loading="lazy" />
            <p className="pt-3 text-xs font-mont text-white leading-6">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
            <div className="absolute lg:bottom-4 flex items-center gap-2">
              <p className="text-xs font-mont text-white">Terms of Use</p>
              <img className="w-3 h-3" src={short} alt="" loading="lazy" />
              <p className="text-xs font-mont text-white">Privacy Policy</p>
            </div>
          </div>
          <div className="middle w-full relative flex flex-col lg:items-center">
            <img
              className="w-4 h-4 absolute right-4 top-10"
              src={grey}
              alt=""
              loading="lazy"
            />
            <ul>
              <li className="text-sm text-brightPurple font-mont py-2">
                Useful Links
              </li>
              <li className="text-xs text-white font-mont py-2">Overview</li>
              <li className="text-xs text-white font-mont py-2">Timeline</li>
              <li className="text-xs text-white font-mont py-2">FAQs</li>
              <li className="text-xs text-white font-mont py-2">Register</li>
              <li className="text-xs text-white font-mont py-2">
                <>
                  <div className="footer-links py-3 flex gap-3 mx-auto items-center">
                    <p className="text-xs text-brightPurple font-mont">
                      Follow us
                    </p>
                    <p className="px-2 flex space-x-2">
                      <span className="text-xs text-white">
                        <AiOutlineInstagram />
                      </span>
                      <span className="text-xs text-white">
                        <AiOutlineTwitter />
                      </span>
                      <span className="text-xs text-white">
                        <AiFillFacebook />
                      </span>
                      <span className="text-xs text-white">
                        <AiFillLinkedin />
                      </span>
                    </p>
                  </div>
                </>
              </li>
            </ul>
          </div>
          <div className="right contact-us w-full">
            <h4 className="text-sm text-brightPurple font-mont py-2">
              Contact Us
            </h4>
            <p className="text-xs text-white font-mont py-3 flex items-center gap-2">
              <span>
                <GiPhone />
              </span>
              <span>+234 6707653444</span>
            </p>
            <p className="text-xs text-white font-mont py-3 flex items-start gap-2">
              <span>
                <GiPositionMarker />
              </span>
              <span>
                27, Alara Street <br /> Yaba 100012 <br /> Lagos State
              </span>
            </p>
            <img
              className="w-4 h-4 ml-auto mr-6"
              src={white}
              alt=""
              loading="lazy"
            />
          </div>
        </div>
        <img className="w-4 h-4" src={purple} alt="" loading="lazy" />
        <p className="text-xs text-white font-mont py-4">
          All rights reserved. © getlinked Ltd.
        </p>
      </footer>
    </>
  );
};

export default Footer;
