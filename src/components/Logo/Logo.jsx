import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

function Logo() {
  return (
    <div>
      <motion.a
        href="https://pavelsm.com"
        className="logo"
        whileHover={{
          color: ["#232e35", "#7e74f1", "#9D92F1", "#232e35"],
          transition: { duration: 0.75, repeat: Infinity },
        }}
      >
        PavelSM
      </motion.a>
    </div>
  );
}

export default Logo;
