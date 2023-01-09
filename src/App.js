import { useEffect } from "react";
import { useState } from "react";
import Cards from "./Cards";
import Searchbar from "./Searchbar";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=29997179-e41b31803c41a36ce1e9a1a19&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
        console.log(term);
      });
  }, [term]);

  return (
    <div className="bg-slate-900 mx-auto flex justify-center ">
      <div className=" container px-1 bg-slate-900">
        <div className="pt-10  flex justify-between">
          <div className="px-14">
            <h1 className="text-white font-semibold text-4xl ">ImageGallery</h1>
          </div>
          <div className="px-14">
            <Searchbar searchText={(text) => setTerm(text)} />
          </div>
        </div>
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
          <div className=" grid grid-cols-3 gap-1  ">
            {images.map((image) => (
              <Cards key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
