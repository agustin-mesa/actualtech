import "./App.css";
import "./normalize.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

//-----------------COMPONENTS-----------------
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
    <>
      <NavBar sesionIniciada={true} />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
};

export default App;
