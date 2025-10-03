import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

function Shopping() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/products");
        console.log(res.data.products);
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    axiosData();
  }, []);

  return (
    <div className="shoppingStyle">
      {products.map(({ id, title, price, images }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          image={images[0]}
        />
      ))}
    </div>
  );
}

export default Shopping;
