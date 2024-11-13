import React, { useEffect, useState } from "react";
import Products from "./Products";
import AddtoCart from "../Components/AddtoCart";
import Footer from "../Components/Footer";

function Home({ allItems, setAllItems, isCartVisible, setIsCartVisible }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {isCartVisible && (
        <AddtoCart cartItems={allItems} setIsCartVisible={setIsCartVisible} />
      )}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 p-2">
        {products.map((product) => (
          <Products
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

export default Home;
