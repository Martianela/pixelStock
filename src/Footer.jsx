import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaRedditAlien,
} from "react-icons/fa";

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <>
      <div className=" rounded-t-lg p-4 px-6 md:flex text-center  md:text-left ">
        <div className="md:w-[50%] my-5 mt-14">
          <a href="/">
            {" "}
            <h1 className="text-3xl font-bold text-gray-900">🅿ixel st🅾ck</h1>
          </a>
          <ul className="my-4 pl-1 flex flex-col gap-3 text-lg font-normal text-gray-800">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/">trending</a>
            </li>
            <li className="hover:underline">
              <a href="/">Most Viewed</a>
            </li>
            <li className="hover:underline">
              <a href="/">Upload</a>
            </li>
            <li className="hover:underline">
              <a href="/">Report</a>
            </li>
          </ul>
          <ul className="text-2xl text-white flex gap-4 my-14 text-center justify-center md:justify-start">
            <li className="bg-blue-500 p-2 rounded-[100%] max-w-fit ">
              <a href="www.facebook.com">
                <FaFacebookF />
              </a>
            </li>
            <li className="bg-blue-500 p-2 rounded-[100%] max-w-fit ">
              <a href="www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li className="bg-blue-500  p-2 rounded-[100%] max-w-fit ">
              <a href="www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="bg-blue-500  p-2 rounded-[100%] max-w-fit ">
              <a href="www.twitter.com">
                <FaTwitter />
              </a>
            </li>
            <li className="bg-blue-500  p-2 rounded-[100%] max-w-fit ">
              <a href="www.twitter.com">
                <FaRedditAlien />
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-[40%] w-full my-14 text-left">
          <h1 className="text-2xl font-semibold mb-4 text-gray-700 ">
            Feedback
          </h1>
          <h2 className="text-lg ">Write your review</h2>
          <form action="post">
            <input
              type="text"
              placeholder="start writing from hare"
              className="bg-inherit w-full border-b-2 border-gray-400 py-2 outline-0 my-4"
            />
            <button
              type="submit"
              className="border-2 border-gray-700 px-8 py-2 rounded-3xl text-gray-900 hover:bg-gray-700 my-3 hover:text-white  "
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <p className="text-gray-400 text-center w-full   pb-3">
          ` © {date} www.PixelStock.com. All rights reserved`
        </p>
      </div>
    </>
  );
};

export default Footer;
