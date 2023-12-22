import axios from "axios";
import ButtonCustom from "../../customs/ButtonCustom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { grey, purple, white } from "../../utilities/utils";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "../banners/banner.css";

const ContactBanner = () => {
  const baseUrl = "https://backend.getlinked.ai";

  const { register, handleSubmit } = useForm()

  // Success toastify to alert that form is submitted
  const successMsg = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const submitContact = async (data) => {
    try {
      const res = await axios.post(`${baseUrl}/hackathon/contact-form`, data)
      console.log("Form submitted successfully:", res.data);
      successMsg('Form submitted successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:place-items-center bg-mainBlue banner-left banner-left-blur p-5 min-h-screen">
        <div className="left hidden md:block p-4 xl:w-full">
          <img className="w-4 h-4" src={purple} alt="" loading="lazy" />
          <div className="left-contact-text">
            <h2 className="lg:text-3xl text-xl text-brightPurple font-custom font-bold py-3">
              Get in touch
            </h2>
            <p className="text-sm text-white font-mont py-3">
              Contact <br /> Information
            </p>
            <p className="text-sm text-white font-mont py-3">
              27,Alara Street <br /> Yaba 100012 <br /> Lagos State
            </p>
            <p className="text-sm text-white font-mont py-3">
              Call Us : 07067981819
            </p>
            <p className="text-sm text-white font-mont py-3">
              we are open from Monday-Friday <br /> 08:00am - 05:00pm
            </p>
            <p className="text-sm text-brightPurple font-mont mt-8">Share on</p>
            <p className="py-1 flex gap-2">
              <Link className="text-sm text-white">
                <AiOutlineInstagram />
              </Link>
              <Link className="text-sm text-white">
                <AiOutlineTwitter />
              </Link>
              <Link className="text-sm text-white">
                <AiFillFacebook />
              </Link>
              <Link className="text-sm text-white">
                <AiFillLinkedin />
              </Link>
            </p>
          </div>
        </div>
        <div className="right hidden md:block w-full xl:w-full">
          <img className="w-4 h-4 ml-auto" src={grey} alt="" loading="lazy" />
          <div className="contact-form-container bg-gradient-to-tl from-transparent to-mainBlue py-4 px-8 md:w-full lg:w-9/12 rounded-md shadow-xl">
            <h2 className="text-lg text-brightPurple font-bold font-custom py-1">
              Questions or need assistance?
            </h2>
            <h2 className="text-lg text-brightPurple font-bold font-custom py-1">
              Let us know about it!
            </h2>
            <form className=" pt-6" onSubmit={handleSubmit(submitContact)}>
              <div className="team-inputs">
                <input
                  className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                  type="text"
                  placeholder="Team’s Name"
                  {...register('first_name')}
                />
                <input
                  className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                  type="email"
                  placeholder="Mail"
                  {...register('email')}
                />
                <textarea
                  className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  {...register('message')}
                ></textarea>
              </div>
              <ButtonCustom text="Submit" className="flex mx-auto" />
            </form>
          </div>
          <img className="w-4 h-4 ml-auto mr-24" src={white} alt="" loading="lazy" />
        </div>
        <div className="small-screens md:hidden">
          <img className="w-3 h-3 mx-auto" src={purple} alt="" loading="lazy" />
          <h2 className="text-lg text-brightPurple font-custom font-bold py-3">
            Questions or need <br /> assistance? <br /> Let us know about it
          </h2>
          <img className="w-3 h-3 ml-auto -mt-4" src={white} alt="" loading="lazy" />
          <p className="text-sm text-white font-mont py-3">
            Email us below to any question related to our event
          </p>
          <form className=" pt-6">
            <div className="team-inputs">
              <input
                className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                type="text"
                placeholder="Team’s Name"
              />
              <input
                className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                type="text"
                placeholder="Topic"
              />
              <input
                className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                type="email"
                placeholder="Mail"
              />
              <textarea
                className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                cols="30"
                rows="5"
                placeholder="Message"
              ></textarea>
            </div>
            <ButtonCustom text="Submit" className="flex mx-auto" />
          </form>
          <img className="w-3 h-3 -translate-y-4" src={purple} alt="" />
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default ContactBanner;
