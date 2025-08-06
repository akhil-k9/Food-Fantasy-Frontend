// import React, { useState, useEffect } from "react";
// import { API_URL } from "../api";
// import { useParams } from "react-router-dom";
// import TopBar from "./TopBar";

// let expItems = [];
// const ProductMenu = () => {
//   const [products, setProducts] = useState([]);

//   const { firmId, firmName } = useParams();
    

//   const productHandler = async () => {
//     try {
//       const response = await fetch(`${API_URL}/product/${firmId}/products`);
//       const newProductData = await response.json();
//       setProducts(newProductData.products);
//     } catch (error) {
//       console.error("product failed to fetch", error);
//     }
//   };

//   useEffect(() => {
//     productHandler();
//   }, []);
    
//   const [items, setItems] = useState([]);

//   // Accept data in the function
//   const handleAdd = (item) => {
//     const upItems = [...items, item];
//     setItems(upItems);
//     expItems=upItems;
//   };

//   return (
//     <>
//       <TopBar />
//       <section className="productSection">
//         <h3>{firmName}</h3>
//         {products.map((item) => {
//           return (
//             <div className="productBox">
//               <div>
//                 <div><strong>{item.productName}</strong></div>
//                 <div>₹{item.price}</div>
//                 <div>{item.description}</div>
//               </div>
//               <div className="productGroup">
//                 <img src={`${API_URL}/uploads/${item.image}`} />
//                 <div className="addButton"><button style={{ all: 'unset',cursor: 'pointer'}} onClick={() => handleAdd(item)}>Add</button></div>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export {expItems};
// export default ProductMenu;



// import React, { useState, useEffect } from "react";
// import { API_URL } from "../api";
// import { useParams } from "react-router-dom";
// import TopBar from "./TopBar";
// import axios from "axios";

// const ProductMenu = () => {
//   const [products, setProducts] = useState([]);
//   const [status, setStatus] = useState('');
//   const { firmId, firmName } = useParams();

//   const productHandler = async () => {
//     try {
//       const response = await fetch(`${API_URL}/product/${firmId}/products`);
//       const newProductData = await response.json();
//       setProducts(newProductData.products);
//     } catch (error) {
//       console.error("Product fetch failed", error);
//     }
//   };

//   useEffect(() => {
//     productHandler();
//   }, []);

//   const handleAdd = async (item) => {
//     const email = localStorage.getItem("userEmail");
//     if (!email) {
//       alert("Please login to add items to cart.");
//       return;
//     }

//     const quantityStr = prompt(`Enter quantity for "${item.productName}":`);
//     const quantity = parseInt(quantityStr);

//     if (!quantity || quantity <= 0) {
//       alert("Invalid quantity entered.");
//       return;
//     }

//     try {
//       const res = await axios.post(`${API_URL}/cart/add`, {
//         email,
//         productId: item._id,
//         quantity,
//       });
//       setStatus("Item added to cart ✅");
//     } catch (error) {
//       setStatus("Failed to add to cart ❌");
//       console.error("Cart API error", error);
//     }

//     // Clear status after 3 seconds
//     setTimeout(() => setStatus(""), 3000);
//   };

//   return (
//     <>
//       <TopBar />
//       <section className="productSection">
//         <h3>{firmName}</h3>
//         {status && <div style={{ color: "green", textAlign: "center", margin: "10px" }}>{status}</div>}

//         {products.map((item) => (
//           <div key={item._id} className="productBox">
//             <div>
//               <div><strong>{item.productName}</strong></div>
//               <div>₹{item.price}</div>
//               <div>{item.description}</div>
//             </div>
//             <div className="productGroup">
//               <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
//               <div className="addButton">
//                 <button
//                   style={{
//                     all: "unset",
//                     cursor: "pointer",
//                     color: "#fff",
//                     backgroundColor: "#ff6f00",
//                     padding: "6px 12px",
//                     borderRadius: "6px",
//                   }}
//                   onClick={() => handleAdd(item)}
//                 >
//                   Add
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };

// export default ProductMenu;






import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import axios from "axios";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('');
  const { firmId, firmName } = useParams();

  // Fetch products by firm ID
  const productHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("Product fetch failed", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  // Handle Add to Cart
  const handleAdd = async (item) => {
  const email = localStorage.getItem("userEmail");
  if (!email) {
    alert("Please login to add items to cart.");
    navigate("/signin");  // <-- redirect after alert
    return;
  }

  const quantityStr = prompt(`Enter quantity for "${item.productName}":`);
  const quantity = parseInt(quantityStr);

  if (!quantity || quantity <= 0) {
    alert("Invalid quantity entered.");
    return;
  }

  try {
    const res = await axios.post(`${API_URL}/cart/add`, {
      email,
      productId: item._id,
      quantity,
    });

    const currentCount = parseInt(localStorage.getItem("cartCount")) || 0;
    localStorage.setItem("cartCount", currentCount + 1);

    setStatus("Item added to cart ✅");
  } catch (error) {
    setStatus("Failed to add to cart ❌");
    console.error("Cart API error", error);
  }

  setTimeout(() => setStatus(""), 3000);
};


  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {status && <div style={{ color: "green", textAlign: "center", margin: "10px" }}>{status}</div>}

        {products.map((item) => (
          <div key={item._id} className="productBox">
            <div>
              <div><strong>{item.productName}</strong></div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>
            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <div className="addButton">
                <button
                  style={{
                    all: "unset",
                    cursor: "pointer"
                  }}
                  onClick={() => handleAdd(item)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ProductMenu;
