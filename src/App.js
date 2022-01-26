import "./App.css";
import "./normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//-----------------COMPONENTS-----------------
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Login from "./pages/Login";
//-----------------REACT ROUTER-----------------
import { BrowserRouter, Route, Routes } from "react-router-dom";
//-----------------CONTEXT-----------------
import { CartContextProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";

const App = () => {
  return (
    <ToastProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar sesionIniciada={true} />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/shop/" exact="true" element={<ItemListContainer />} />
            <Route
              path="/shop/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ToastProvider>
  );
};
export default App;
