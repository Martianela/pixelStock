import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { category } from "./resource";
import Searchbar from "./Searchbar";
import { fetchImages } from "./utils";
const FrontPage = ({ term, setTerm }) => {
  const [imgURL, setimgURL] = useState(null);
  const [user, setUser] = useState("xyz");
  useEffect(() => {
    fetchImages("top").then((images) => {
      setimgURL(images.hits[0].largeImageURL);
      setUser(images.hits[0].user);
    }, []);
  });
  return (
    <div
      className="overflow-hidden h-[70vh] bg-cover  text-white relative "
      style={{ backgroundImage: `url(${imgURL}) ` }}
    >
      <div className="bg-black/60 px-4 absolute top-0 w-full h-full left-0 flex flex-col  justify-center">
        <div className="max-w-3xl w-full mx-auto relative">
          <h2 className="text-3xl font-bold my-3">
            Stunning free images & free stocks
          </h2>
          <p>over million+ high quality images on our community</p>
          <div className="my-6">
            <Searchbar setTerm={setTerm} />
          </div>
          <div>
            <ul className="flex gap-2 text-gray-500r">
              {category.map((item, index) => {
                return (
                  <li key={index} className="hover:underline text-gray-300">
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-gray-300 my-2 absolute -bottom-40">
            <p>
              free image by{" "}
              <a href="/" className="underline">
                {user}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
