import fetchAPI from "@/utils/fetchAPI";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(
    () => JSON.parse(localStorage.getItem("products")) || []
  );

  useEffect(() => {
    const result = async () => {
      const data = await fetchAPI();
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    };

    result();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
