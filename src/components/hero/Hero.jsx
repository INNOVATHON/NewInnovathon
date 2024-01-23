import "./hero.scss";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-0%",
//     transition: {
//       repeat: Infinity,
//       repeatType:"mirror",
//       duration: 20,
//     },
//   },
// };

const Hero = () => {

  // useEffect(() => {
  //   AOS.init();
  //   // AOS.refresh();
  // }, []);

  return (
    <div className="hero" id="Homepage">
      <div className="wrapper">
        <motion.div
          className="textContainer v1"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>What is Innovathon?</motion.h2>
          <motion.p variants={textVariants}>
          Innovathon – Where Ideas Ignite and Innovation Thrives!
Event that empowers students to address real-life challenges head-on and showcase their creativity and ingenuity. This competition serves as a dynamic platform for budding minds to unleash their potential, network with like-minded peers, and turn their innovative solutions into reality.

          </motion.p>
          <motion.div variants={textVariants} className="buttons">
           <a href="https://drive.google.com/drive/u/3/folders/18vfOF8D0tHF8Wf63GvHWHMnGMaNtsSKR"> <motion.button variants={textVariants} className="button">
              PPT Draft
            </motion.button></a>
           <a href="https://drive.google.com/file/d/1mqQ7N_PG2uAfLF0bw5FfswgK6gp0Xjho/view?usp=sharing"> <motion.button variants={textVariants} className="button">Brochure</motion.button></a>
           <a href="https://forms.gle/JwWbUkpWtPubosQ19"> <motion.button variants={textVariants} className="button" style={{backgroundColor:"orange",border:"orange"}}>Reg Form</motion.button></a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      
      <motion.div
        className="slidingTextContainer"
        // variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        <hr />
        
       <span><img height={80} width={80} src="PIES.png" alt="" /> <span style={{fontSize:"30px",fontWeight:"bold",textAlign:"center"}}> PRODUCTION & INDUSTRIAL <br/> ENGINEERING SOCIETY </span> <span style={{fontSize:"20px",textAlign:"center"}}> <i style={{fontSize:"30px",fontWeight:"bold"}}>In collaboration <br /> with</i></span> <span style={{fontSize:"30px", textAlign:"center",fontWeight:"bold"}}>INSTITUTION'S INNOVATION <br /> COUNCIL, BIT SINDRI</span><img height={80} width={80} src="IIC logo.png" alt="" /></span>
      </motion.div>
      <div className="imageContainer">
        <img src="/Illus.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
