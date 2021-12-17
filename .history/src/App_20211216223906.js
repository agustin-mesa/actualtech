import "./App.css";
import "./normalize.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar sesionIniciada={true} />
      <ItemListContainer />
    </>
  );
};

export default App;
