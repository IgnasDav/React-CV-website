import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
//Components
import InitialTransition from "./components/Animation";
import Footer from "./components/Footer";
// import Home from "./components/Home";
// import About from "./components/About";
// import Tetris from "./components/Tetris";
// import Contact from "./components/Contact";
// import Works from "./components/Works";
import Nav from "./components/Nav";
import CreateRoutes from "./components/Routes";
//styles
import { GlobalStyle } from "./GlobalStyles";

const App = () => {
  const [page, setPage] = useState("home.");
  const prevPage = useRef("");
  const [isFirstMount, setIsFirstMount] = useState(true);
  // const location = useLocation();
  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };
  });
  useEffect(() => {
    prevPage.current = page;
  }, [page]);

  return (
    <Router>
      {isFirstMount && <InitialTransition />}
      <h1>Previous page: {prevPage.current}</h1>
      <h1>Current page: {page}</h1>
      <Nav page={page} setPage={setPage} />
      <CreateRoutes prevPage={prevPage.current} page={page} />
      <GlobalStyle />
      <Footer />
    </Router>
  );
};

export default App;
