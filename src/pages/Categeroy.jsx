import React from "react";
import { useState } from "react";
import { detail as Data21 } from "./Data21";
import Categ from "../Categeory/Categ";
import Footer from "../Components/Footer";

import AddtoCart from "../Components/AddtoCart";
import toast from "react-hot-toast";

export default function Category({
  allItems,
  setAllItems,
  isCartVisible,
  setIsCartVisible,
}) {
  const [Products, setProducts] = useState(Data21);
  return (
    <div>
      {isCartVisible && (
        <AddtoCart cartItems={allItems} setIsCartVisible={setIsCartVisible} />
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
        {Products.map((product) => (
          <Categ key={product.id} product={product} setAllItems={setAllItems} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
