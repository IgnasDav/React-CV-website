import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Components
import Home from "../components/Home";
import About from "../components/About";
import Tetris from "../components/Tetris";
import Contact from "../components/Contact";
import Works from "../components/Works";
const CreateRoutes = ({ page, prevPage }) => {
  const location = useLocation();
  let element;
  switch (location.pathname) {
    case "/":
      element = <Home prevPage={prevPage} page={page} />;
      break;
    case "/about":
      element = <About prevPage={prevPage} page={page} />;
      break;
    case "/tetris":
      element = <Tetris prevPage={prevPage} page={page} />;
      break;
    case "/contact":
      element = <Contact prevPage={prevPage} page={page} />;
      break;
    case "/works":
      element = <Works prevPage={prevPage} page={page} />;
      break;

    default:
  }
  return (
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path={location.pathname} element={element} />
        {/* <Route path="/" element={<Home prevPage={prevPage} page={page} />} />
        <Route
          path="/about"
          element={<About prevPage={prevPage} page={page} />}
        />
        <Route
          path="/tetris"
          element={<Tetris prevPage={prevPage} page={page} />}
        />
        <Route
          path="/contact"
          element={<Contact prevPage={prevPage} page={page} />}
        />
        <Route
          path="/works"
          element={<Works prevPage={prevPage} page={page} />}
        /> */}
      </Routes>
    </AnimatePresence>
  );
};
export default CreateRoutes;
