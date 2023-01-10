import React from "react";
import { category } from "./resource";

const SlideBar = ({ setTerm }) => {
  return (
    <div className="my-4">
      <ul className="flex flex-wrap gap-4 px-4 w-full">
        {category.map((item, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => setTerm(item.title)}
                className="py-2 px-4 border text-blue-700 border-blue-500 rounded-[100px] hover:text-white hover:bg-blue-500"
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SlideBar;
