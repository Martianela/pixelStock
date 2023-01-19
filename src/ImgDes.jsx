import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineShareAlt, AiTwotoneHeart } from "react-icons/ai";
import { FaCamera } from "react-icons/fa";
import { HiSave } from "react-icons/hi";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ImgDes = ({ image }) => {
  const [tags, setTags] = useState([]);
  useEffect(() => {
    let str = image.tags;
    setTags(str.split(","));
  }, [image.tags]);
  console.log(image);
  return (
    <div className="w-full ">
      <section>
        <Navbar />
      </section>
      <section className="mt-10 flex flex-col lg:flex-row lg:flex-1 gap-10 items-center mx-auto overflow-hidden sm:w-[80%] w-[95%]  ">
        <div>
          <img
            className="max-h-[95vh] mx-auto w-full"
            src={image.largeImageURL}
            alt=""
          />{" "}
          <div className="my-5 flex  flex-wrap gap-4">
            {tags.map((tag) => {
              return (
                <>
                  <p className="bg-gray-200 text-black/70 text-sm px-4 lg:px-6 py-1 rounded-full">
                    #{tag}
                  </p>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <div className="">
            <hr />
            <br />
            <div className="flex items-center gap-5">
              <img
                className="w-20 h-20 rounded-[100%] object-cover"
                src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg"
                alt=""
              />
              <div>
                <h3 className="text-xl text-gray-600 font-normal">
                  {image.user}/1000+ images
                </h3>
                <div className="flex gap-4 py-3">
                  <button className="rounded-full bg-gray-400 px-4 py-1">
                    Follow
                  </button>{" "}
                  <button className=" rounded-full bg-black/75 text-white px-5 py-1">
                    Join
                  </button>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div>
              <div className="flex gap-4  text-white">
                <button className="px-8 flex items-center py-1 rounded-full bg-blue-500 text-md">
                  <AiTwotoneHeart />
                  <span className="mx-1">{image.likes}</span>
                </button>{" "}
                <button className="px-10 py-1 rounded-full bg-blue-500 text-lg">
                  <HiSave />
                </button>{" "}
                <button className="px-10 py-1 rounded-full bg-blue-500 text-lg">
                  <AiOutlineShareAlt />
                </button>
              </div>
            </div>
            <br />
            <hr />
          </div>
          <div className="my-10 bg-gray-100 px-4 py-6 text-gray-600   ">
            <h1 className="mb-4">
              <FaCamera size={20} />
            </h1>{" "}
            <div className="flex gap-8">
              <ul className=" flex flex-col gap-2">
                <li>Formate </li>
                <li>Category </li>
                <li>Views</li>
                <li>Resolution</li>
                <li>Downlods </li>
                <li>Comments</li>
              </ul>
              <ul className=" flex flex-col gap-2">
                <li>JPG/PNG</li>
                <li>{tags[0]}</li>
                <li>{image.views}</li>
                <li>
                  {image.webformatHeight}X{image.webformatWidth}
                </li>
                <li>{image.downloads}</li>
                <li>{image.comments}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default ImgDes;
