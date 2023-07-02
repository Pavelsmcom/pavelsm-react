import { motion } from "framer-motion";

import "./TransitionEffect.css";

function TransitionEffect() {
  return (
    <>
      <motion.div
        className="transition-effect__background-one"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div
        className="transition-effect__background-two"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        className="transition-effect__background-three"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.2, ease: "easeInOut" }}
      />
    </>
  );
}

export default TransitionEffect;
