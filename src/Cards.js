import React from "react";

const Cards = ({ image }) => {
  const tags = image.tags.split(",");
  // console.log(image.webformatURL);
  const url = image.webformatURL;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg shadow-slate-600 mx-auto my-2 bg-white">
      <img src={url} alt="img" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul className=" list-none">
          <li>
            <strong>views :</strong> {image.views}
          </li>
          <li>
            <strong>Downlods :</strong> {image.downloads}
          </li>
          <li>
            <strong>Likes :</strong>
            {image.likes}
          </li>
        </ul>
        <div className="px-2 py-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className=" inline-block bg-gray-200 rounded-full text-sm text-center px-3 py-1 font-semibold m-1"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
