import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { category } from "./resource";
const Searchbar = ({ setTerm }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(text);
    setText("");
  };

  return (
    <div className="bg-gray-200 rounded-[100px] overflow-hidden mx-auto py-3 px-5">
      <form
        className="w-full   overflow-hidden flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full">
          <button type="submit">
            <AiOutlineSearch className="text-gray-600" size={25} />
          </button>
          <input
            type="text"
            placeholder="search images on pixel-stock...."
            onChange={(e) => {
              setText(e.target.value);
            }}
            size={35}
            value={text}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setTerm(text);
                setText("");
              }
            }}
            className="text-black appearance-none bg-transparent border-none px-2 w-full leading-tight focus:outline-none h-full py-2"
          />
        </div>

        <div className="text-slate-600 cursor-pointer flex gap-1 items-center rounded-[100px] py-2 px-4">
          <select name="category" id="#" className="bg-inherit outline-0">
            <option value="trending">trending</option>
            {category.map((item) => {
              return (
                <option
                  key={item.id}
                  value={item.title}
                  onClick={(e) => setTerm(e.target.value)}
                >
                  {item.title}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
