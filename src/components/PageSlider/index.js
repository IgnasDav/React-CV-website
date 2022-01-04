import { motion } from "framer-motion";

const PageSlider = ({ page, prevPage, children }) => {
  return (
    <>
      {console.log("Component renders")}
      {page !== "home." && (
        <motion.div
          initial={{
            transform: "translateX(100%)",
          }}
          animate={{
            transform: "translateX(0)",
          }}
          exit={{
            transform: "translateX(100%)",
            transition: {
              duration: 0.6,
              ease: [0.6, -0.05, 0.01, 0.99],
            },
          }}
          onAnimationStart={() => {
            console.log(`Animation starts and Page renders: ${page}`);
          }}
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
