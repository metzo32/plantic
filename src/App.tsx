import "./styles/styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Provider } from "react-redux";
import store from "./redux/store";


import Home from "./pages/Home";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
      <TransitionGroup>
        <CSSTransition
          key={location.key} // 위치 변경 시 애니메이션 트리거
          timeout={500} // 애니메이션 지속 시간
          classNames="fade" // CSS 클래스 이름
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:name" element={<DetailPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
  );
};

const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <div className="wrapper">
        <div className="page-container">
          <Header />
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
    </Provider>
  );
};

export default App;
