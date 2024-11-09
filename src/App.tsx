import "./styles/styles.css";
import Header from "./components/Header";
import Content from "./components/Content";
import GardenList from "./components/GardenList";

function App() {
  return (
    <div className="wrapper">
      <div
        className="page-container"
      >
        <Header />
        <Content />
        <GardenList />
      </div>
    </div>
  );
}

export default App;
