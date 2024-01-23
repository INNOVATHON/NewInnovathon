import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";


const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <h1>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
        >
          <img src="innova.png" alt="" />
        </motion.span></h1>
        <div className="social">
          <a href="https://www.linkedin.com/in/innovathonbits24/">
            <img src="/Linkedin_Logo-removebg-preview.png" alt="" />
          </a>
          <a href="https://www.instagram.com/innovathonbits24?igsh=MXgzZXFyMmtwamR0dw==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://youtu.be/Pmn4kbVxU4k?si=iKcXppuu6XenInou">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
