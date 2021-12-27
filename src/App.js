import "./App.css";
import "./normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//-----------------COMPONENTS-----------------
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
//-----------------REACT ROUTER-----------------
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar sesionIniciada={true} />

      <Routes>
        <Route path="/shop/" element={<ItemListContainer />} />
        <Route path="/shop/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
