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
          <li>
            <a href="/">login</a>
          </li>{" "}
          <li>
            <a
              href="/"
              className="border-black/40 border rounded-3xl px-4 py-3"
            >
              join
            </a>
          </li>{" "}
          <li
            className="px-2"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? (
              <AiOutlineMenu size={20} className="cursor-pointer" />
            ) : (
              <MdCancel size={20} className="curser-pointer" />
            )}
          </li>
          <li>
            <a
              href="/"
              className=" bg-green-400 text-white font-semibold rounded-3xl px-7 py-3"
            >
              Upload
            </a>
          </li>{" "}
        </ul>
        {!menu && (
          <div className="absolute top-[65px] right-0 bg-white py-4  px-4 items-center rounded-md w-[300px]">
            <ul className="flex gap-4 flex-col w-full ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Report</a>
              </li>
              <li className="bg-black text-white px-6 py-3 rounded-[100px] text-center cursor-pointer">
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
