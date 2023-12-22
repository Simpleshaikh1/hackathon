/* eslint-disable no-unused-vars */
import axios from "axios";
import ButtonCustom from "../../customs/ButtonCustom";
import image from "../../assets/contact-img.svg";
import { grey, purple, size } from "../../utilities/utils";
import man from "../../assets/walking-man.svg";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import woman from "../../assets/walking-girl.svg";
import "../banners/banner.css";
import "react-toastify/dist/ReactToastify.css";
import ConfirmationModal from "./ConfirmationModal";

const RegisterBanner = () => {
  const [category, setCategory] = useState([]);
  const [modal, setModal] = useState(false);
  const { register, handleSubmit } = useForm();
  const baseUrl = "https://backend.getlinked.ai";

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(`${baseUrl}/hackathon/categories-list`);
        console.log(res?.data);
        setCategory(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  

  const successMsg = (message) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const warningMsg = (message) => {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const errorMsg = (message) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const submit = async (data) => {
    if (!data.privacy_poclicy_accepted) {
      warningMsg(
        "Please agree to the terms and conditions and privacy policy."
      );
      return;
    }

    try {
      const res = await axios.post(`${baseUrl}/hackathon/registration`, data);
      console.log("Form submitted successfully:", res.data);
      successMsg("Form submitted successfully");
      setModal(!modal)
    } catch (error) {
      console.log(error);
      errorMsg(error);
    }
  };

  const closeModal = () => {
    setModal(false)
  }

  setTimeout(() => {
    closeModal()
  }, 5000);

  return (
    <>
      <div className="register-banner bg-mainBlue grid grid-cols-1 lg:grid-cols-2 gap-5 p-8 left-banner 2xl:place-items-center banner-left-blur min-h-screen">
        <div className="left-img lg:w-full">
          <img className="w-5 h-5 ml-12" src={purple} alt="" />
          <img className=" xl:w-full" src={image} alt="" />
          <img className="w-5 h-5 mb-8" src={grey} alt="" />
        </div>
        <div className="right-form lg:w-full 2xl:w-full">
          <div className="form-container bg-gradient-to-tl from-transparent to-mainBlue py-4 px-8 md:w-8/12 md:mx-auto lg:mx-0 lg:w-full">
            <img className="w-5 h-5 ml-auto mr-20" src={purple} alt="" />
            <h2 className="text-xl lg:text-3xl text-brightPurple font-custom font-bold py-3">
              Register
            </h2>
            <p className="flex items-end">
              <span className="text-xs text-white font-mont">
                Be part of this movement!
              </span>
              <span>
                <img src={woman} alt="" />
              </span>
              <span>
                <img src={man} alt="" />
              </span>
            </p>
            <p className="text-xl lg:text-2xl text-white font-mont pt-4 pb-6">
              CREATE YOUR ACCOUNT
            </p>
            <form className="w-full mt-4" onSubmit={handleSubmit(submit)}>
              <div className="team-and-phone grid grid-cols-1 lg:grid-cols-2 gap-3">
                <div className="team grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="team"
                  >
                    Team’s Name
                  </label>
                  <input
                    id="team"
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    {...register("team_name")}
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="phone grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="phone"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    {...register("phone_number")}
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div className="email-and-topic grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                <div className="email grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    {...register("email")}
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="topic grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="topic"
                  >
                    Project Topic
                  </label>
                  <input
                    id="topic"
                    {...register("project_topic")}
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    type="text"
                    placeholder="What is your group project topic"
                  />
                </div>
              </div>
              <div className="category-and-size grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                <div className="category grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="category"
                  >
                    Category
                  </label>
                  <select
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    id="category"
                    {...register("category")}
                  >
                    <option
                      value="Select a Category"
                      defaultValue="Select a Category"
                      selected
                      disabled
                    >
                      Select a Category
                    </option>
                    {category?.map((categories, index) => (
                      <option value={categories?.id} key={index}>
                        {categories?.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="catesizegory grid">
                  <label
                    className="text-sm text-white font-mont"
                    htmlFor="size"
                  >
                    Size
                  </label>
                  <select
                    className="w-full rounded-md p-2 font-mont text-sm border border-white text-white bg-white bg-opacity-10 focus:outline-none my-3"
                    id="size"
                    {...register("group_size")}
                  >
                    <option
                      value="Select"
                      defaultValue="Select"
                      disabled
                      selected
                    >
                      Select
                    </option>
                    {size?.map((group, index) => (
                      <option value={group?.value} key={index}>
                        {group?.size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <p className="text-xs text-brightPurple font-mont">
                Please review your registration details before submitting
              </p>
              <div className="terms-and-conditions flex items-center gap-1 mt-4">
                <input
                  type="checkbox"
                  id="agreed"
                  className="mr-2"
                  required
                  {...register("privacy_poclicy_accepted")}
                />
                <label
                  htmlFor="agreed"
                  className="text-sm text-white font-mont"
                >
                  I agree to the event terms and conditions and privacy policy
                </label>
              </div>
              <ButtonCustom
                type="submit"
                className="flex lg:w-full w-fit mx-auto lg:justify-center lg:mx-0 mt-6"
                text="Register Now"
              />
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      {<ConfirmationModal isVisible={modal} onClose={() => closeModal}/>}
    </>
  );
};

export default RegisterBanner;
