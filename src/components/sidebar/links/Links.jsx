import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Timeline", "Problems", "Contact", "Register"];

  return (
    <motion.div className="links" variants={variants}>
      
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#Homepage"
        >
          Homepage
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#Timeline"
        >Timeline
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#Problems"
        >
          Problems
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#Contact"
        >
         Contact
        </motion.a>
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/register"
        >
          Register
        </motion.a>
     
    </motion.div>
  );
};

export default Links;
