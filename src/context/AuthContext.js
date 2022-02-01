import React, { useState, useContext, useEffect } from "react";
import Loading from "../components/Loading/Loading";
//---------------- FIREBASE ----------------
import { auth } from "./../firebase/firebase";

// Contexto/estado global
const AuthContext = React.createContext();

// Hook para acceder al contexto
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, changeUser] = useState();

  // Para saber cuando termina de cargar la comprobación
  // del onAuthStateChanged
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para ejecutar la comprobación una sola vez.
  useEffect(() => {
    // Comprobación si hay un user
    const cancelarSuscripcion = auth.onAuthStateChanged((user) => {
      changeUser(user);
      setIsLoading(false);
    });

    return cancelarSuscripcion;
  }, []);

  return (
    <AuthContext.Provider value={{ user: user }}>
      {/*
            Se retorna los elementos hijos cuando no esté cargando.
            Durante la carga se comprueba si hay usuario o no.
        */}
      {!isLoading ? children : <Loading />}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };
