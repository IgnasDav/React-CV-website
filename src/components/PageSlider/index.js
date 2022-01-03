import { motion } from "framer-motion";

const PageSlider = ({ page, prevPage, children }) => {
  return (
    <>
      {page !== "home." && (
        <motion.div
          initial={{ transform: "translateX(100%)" }}
          animate={{ transform: "translateX(0)" }}
          exit={{ transform: "translateX(100%)" }}
        >
          {children}
        </motion.div>
      )}
      {page === "home." && (
        <motion.div
          initial={{ transform: "translateX(-100%)" }}
          animate={{ transform: "translateX(0)" }}
          exit={{ transform: "translateX(-100%)" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
export default PageSlider;
