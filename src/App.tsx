import "./styles/styles.css";
import Header from "./components/Header";
import Content from "./components/Content";
import GardenList from "./components/GardenList";

function App() {
  return (
    <div
      className="min-w-[256px] overflow-x-hidden w-screen h-screen bg-custom50 
      p-5 
      sm:p-8"
    >
      <div
        className="overflow-x-hidden h-full border-green rounded-3xl overflow-y-auto
       p-4 
       sm:p-8"
      >
        <Header />
        <Content />
        <GardenList />
      </div>
    </div>
  );
}

export default App;
