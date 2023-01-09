import React, { useState } from "react";

const Searchbar = ({ searchText }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchText(text);
    setText("");
  };
  return (
    <div className=" bg-gray-200 rounded max-w-sm overflow-hidden mx-auto mb-5 ">
      <form
        className="w-full max-w-sm  overflow-hidden flex"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="serch images...."
          onChange={(e) => setText(e.target.value)}
          size={35}
          value={text}
          className=" appearance-none bg-transparent border-none px-2 w-full leading-tight focus:outline-none h-full py-2"
        />
        <button type="submit" className="bg-gray-300 p-2 rounded-sm">
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
