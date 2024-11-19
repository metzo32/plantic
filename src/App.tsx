import "./styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import { configureStore } from "redux";

import Home from "./pages/Home";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";

const App = () => {

  return (
    <Router>
      <div className="wrapper">
        <div className="page-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
