import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar sesionIniciada={true} />
      <ItemListContainer texto="HOLAAAAA" />
    </>
  );
};

export default App;
