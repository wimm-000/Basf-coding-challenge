import React, { createContext, useReducer } from "react";
import { PatentReducer } from "./reducers/PatentReducer";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, productDispatch] = useReducer(PatentReducer, []);
  return (
    <ProductContext.Provider
      value={{
        productsorder,
        productDispatch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
