import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import FrontPage from "./FrontPage";
import Navbar from "./Navbar";
import SlideBar from "./SlideBar";

const Home = ({ setSelectedImg }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      });
  }, [term]);

  return (
    <div className="w-full">
      <div className="">
        <section className="sticky z-10 top-0 w-full">
          <Navbar />
        </section>
        <section className="">
          <FrontPage term={term} setTerm={setTerm} />
        </section>
        <section>
          <SlideBar setTerm={setTerm} />
        </section>

        {!isLoading && images.length === 0 && (
          <div className="h-screen">
            <h1 className=" text-white text-5xl my-32 text-center mx-auto">
              Oops no image found . . . . .
            </h1>
          </div>
        )}
        {isLoading ? (
          <div className="h-screen">
            <h1 className=" text-white text-5xl my-32 text-center mx-auto">
              Loading....
            </h1>
          </div>
        ) : (
          <div className=" grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center p-4  ">
            {images.map((image, index) => (
              <>
                <div
                  className=" mx-auto overflow-hidden w-full "
                  onClick={() => {
                    setSelectedImg(image);
                  }}
                  key={index}
                >
                  <Link to={`/${image.id}`}>
                    <img
                      src={image.webformatURL}
                      alt="img"
                      className="w-full object-cover"
                    />
                  </Link>
                </div>

                {/* <Cards key={image.id} image={image} /> */}
              </>
            ))}
          </div>
        )}
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default Home;
