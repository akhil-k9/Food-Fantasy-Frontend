import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

let expItems = [];
const ProductMenu = () => {
  const [products, setProducts] = useState([]);

  const { firmId, firmName } = useParams();
    

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("product failed to fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);
    
  const [items, setItems] = useState([]);

  // Accept data in the function
  const handleAdd = (item) => {
    const upItems = [...items, item];
    setItems(upItems);
    expItems=upItems;
  };

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div>
                <div><strong>{item.productName}</strong></div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>
              <div className="productGroup">
                <img src={`${API_URL}/uploads/${item.image}`} />
                <div className="addButton"><button style={{ all: 'unset',cursor: 'pointer'}} onClick={() => handleAdd(item)}>Add</button></div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export {expItems};
export default ProductMenu;
