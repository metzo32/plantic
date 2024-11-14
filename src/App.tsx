import "./styles/styles.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div className="wrapper">
      <div className="page-container">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
