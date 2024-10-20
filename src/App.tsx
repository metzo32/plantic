import "./styles/styles.css";
import Header from "./components/Header";
import Content from "./components/Content";
import GardenList from "./components/GardenList";


function App() {
  
  return (
    <div className="overflow-x-hidden w-screen h-screen p-8 bg-custom50 ">
      <div className="h-full border-green rounded-3xl p-8 overflow-y-auto">
        <Header />
        <Content />
        <GardenList/>
      </div>
    </div>
  );
}

export default App;
