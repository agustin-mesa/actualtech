import "./App.css";
import "./normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//-----------------COMPONENTS-----------------
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContainer from "./components/CartContainer";
//-----------------REACT ROUTER-----------------
import { BrowserRouter, Route, Routes } from "react-router-dom";
//-----------------CONTEXT-----------------
import { CartContextProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar sesionIniciada={true} />

        <Routes>
          <Route path="/shop/" exact="true" element={<ItemListContainer />} />
          <Route
            path="/shop/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};
export default App;
