import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/getlinked.svg";
import { navLinks } from "../../utilities/utils";
import { useState, } from "react";
import "../banners/banner.css";
import ButtonCustom from "../../customs/ButtonCustom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation()

  

  return (
    <>
      <div className="bg-mainBlue sticky w-full top-0 z-10 flex justify-between items-center px-3 md:px-6 md:py-3">
        <a className="lg:mx-12" href="/">
          <div className="logo" id="#">
            <Link to='/'>
            <>
            <img src={logo} alt="CityFix-Logo" />
            </>
            </Link>
          </div>
        </a>
        <div className="md:flex md:items-center gap-10 lg:mx-8">
          <div className="md:flex md:items-center gap-5">
            <ul
              className={`absolute md:static w-full bg-mainBlue md:w-auto p-4 ${
                openNav ? "top-[2.45rem] left-0 z-20" : "top-[-20rem] left-0"
              } flex flex-col md:flex-row justify-center items-start md:items-center md:justify-end gap-8 py-4 md:py-2 transition-all duration-700 ease-in`}
            >
              <>
                {navLinks?.map((links, index) => (
                  <li key={index} className={`text-white`}>
                    <Link
                      className={`cursor-pointer ${
                        location.pathname === links?.path ? "active" : ""
                      }`}
                      to={links?.path}
                    >
                      {links?.link === 'Register' ? (
                        <li className="lg:ml-4">
                        <Link to="/register">
                          <ButtonCustom
                            text="Register"
                            className={`${location.pathname === '/register' ? 'bg-none border-linear mt-0' : 'mt-0 bg-gradient-to-r from-brightPurple to-lightBlue py-3 px-8 border-none text-white text-sm rounded-sm hover:bg-mainBlue hover:text-white'}`}
                          />
                        </Link>
                      </li>
                      ): ( links?.link)}
                    </Link>
                    
                  </li>
                ))}
              </>
            </ul>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-2xl text-grayText outline-none focus:border-gray-400"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <AiOutlineClose className="border border-brightPurple text-white rounded-full" />
          ) : (
            <GiHamburgerMenu className="border border-brightPurple text-white rounded-md" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
