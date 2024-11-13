import React, { useState } from "react";
import { detail2 as Data23 } from "./Data23";
import WomenData from "./WomenData";
import Footer from "../Components/Footer";

export default function Women({
  allItems,
  setAllItems,
  isCartVisible,
  setIsCartVisible,
}) {
  const [Products, setProducts] = useState(Data23);
  return (
    <div>
      {isCartVisible && (
        <AddtoCart cartItems={allItems} setIsCartVisible={setIsCartVisible} />
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
        {Products.map((product) => (
          <WomenData
            key={product.id}
            product={product}
            setAllItems={setAllItems}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
