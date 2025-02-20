import React, { useState } from "react";
import toast from "react-hot-toast";

export default function WomenData({ product, setAllItems }) {
  const { id, image, title, price } = product; // Added id here
  const [isAdded, setIsAdded] = useState(false);
  const [seemore, setseemore] = useState(false);

  const changeHandler = () => {
    setIsAdded((prevIsAdded) => {
      const newIsAdded = !prevIsAdded;
      if (newIsAdded) {
        setAllItems((prevItems) => [...prevItems, product]);
        toast.success("Item Added");
      } else {
        setAllItems((prevItems) => prevItems.filter((item) => item.id !== id));
        toast.error("Item Removed");
      }
      return newIsAdded;
    });
  };

  function toggleExpansion() {
    setseemore(!seemore);
  }

  return (
    <div className="w-100 h-100 flex flex-col items-center justify-between hover:scale-105 hover:shadow-2xl transition duration-300 ease-in gap-2 p-3 mt-8 ml-4 rounded-lg shadow-md border border-white-300 bg-richblack-700">
      <div className="h-60 flex items-center justify-center">
        <img className="h-[180px]" src={image} alt={title} />
      </div>
      <div className="p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-sm text-richblack-25 -ml-2 font-serif font-bold">
          {seemore
            ? title
            : `${title.slice(0, 40)}${title.length > 40 ? "..." : ""}`}
        </h2>
        {title.length > 40 && (
          <button
            onClick={toggleExpansion}
            className="text-blue-500 underline text-xs mt-1"
          >
            {seemore ? "See less" : "See more"}
          </button>
        )}
        <p className="text-lg text-green-600 font-semibold">&#8377;{price}</p>
      </div>

      <button
        onClick={changeHandler}
        className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-200 border border-b-richblack-800"
        aria-label={
          isAdded ? `Remove ${title} from cart` : `Add ${title} to cart`
        }
      >
        {isAdded ? "Remove Item" : "Add to Cart"}
      </button>
    </div>
  );
}
