import { createContext, useContext, useState } from "react";

const MyContext = createContext({});
const MyProvider = ({ children }) => {
  // ... tu lógica de proveedor aquí
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext debe ser usado dentro de MyProvider");
  }
  return context;
};

export { MyProvider, useMyContext };
export default MyContext;
