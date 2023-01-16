import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState(true);
  return (
    <div className="flex items-center justify-between py-3 px-3 w-full bg-white">
      <div className="text-5xl font-medium">🅿🆂</div>
      <div>
        <ul className="flex gap-5 items-center">
          <li className="hidden sm:block">
            <a href="/">login</a>
          </li>{" "}
          <li>
            <a
              href="/"
              className="border-black/40 border rounded-3xl px-4 py-3 hidden sm:block"
            >
              join
            </a>
          </li>{" "}
          <li>
            <a
              href="/"
              className=" bg-green-400 text-white font-semibold rounded-3xl px-7 py-3"
            >
              Upload
            </a>
          </li>
          <li
            className="cursor-pointer text-gray-900 px-2"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <AiOutlineMenu size={30} />
            ) : (
              <MdCancel size={30} className="curser-pointer" />
            )}
          </li>{" "}
        </ul>
        {!menu && (
          <div className="absolute top-[65px] right-0 bg-white py-10  px-9 items-center rounded-md w-[300px]">
            <ul className="flex gap-5 text-base flex-col w-full text-center">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Report</a>
              </li>
              <li className="flex gap-4 items-center justify-center sm:hidden">
                <a
                  className="px-7 py-2 border-2 rounded-full border-gray-400 "
                  href="/"
                >
                  login
                </a>
                <a
                  className="px-7 py-2  rounded-full  text-white bg-black/80"
                  href="/"
                >
                  signup
                </a>
              </li>{" "}
              <li className="bg-black/10 text-gray-700 px-6 py-3 rounded-[100px] text-center cursor-pointer">
                <a href="/">Get Premium</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
