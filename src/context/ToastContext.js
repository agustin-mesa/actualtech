import React, { useContext } from "react";

import toast, { Toaster } from "react-hot-toast";
// Contexto/estado global
const ToastContext = React.createContext();

// Hook para acceder al contexto
const useToast = () => {
  return useContext(ToastContext);
};

const ToastProvider = ({ children }) => {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Toaster />
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext, useToast };
