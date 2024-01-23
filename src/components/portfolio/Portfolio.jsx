import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: " Quality control in manufacturing using AI/ML",
    img: "https://media.licdn.com/dms/image/D5612AQH7JKDC-nRoYQ/article-cover_image-shrink_600_2000/0/1679758606866?e=2147483647&v=beta&t=_nmZ2q3GtCWM8ksZfPQXMakJmIKEc9qX-yuyspK5H6A",
    desc: "Develop an AI/ML-based framework for detecting and classifying surface defects in a manufactured component. Manufacturing processes such as casting, forming, machining, welding, etc. can be considered. The dataset of surface defects can be collected from any source on the internet. The minimum number of datasets and model stability must be justified.  Evaluate model performance using appropriate metrics (e.g., accuracy, precision, recall, etc.).",
  },
  {
    id: 2,
    title: "Predictive model for manufacturing application",
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    desc: "Develop an ML pipeline for the prediction of cracks in laser-welded parts and weld depth. Laser welding input process parameters (independent variables) such as laser beam power (W), welding speed (m/min), angular position in welding direction (°), focal position (mm), gas flow rate (l/min), material thickness of the steel sheet (mm)  were collected for an experiment for welded steel-copper joints in the lap configuration with steel on the top side. Geometrical dimensions such as cross-section position in the weld, width of weld seam on steel, width of weld seam on copper and depth of weld in copper were recorded.",
  },
  {
    id: 3,
    title: "Autonomous Robot for Sample Pick and Place Activity with Navigation",
    img: "https://www.techbooky.com/wp-content/uploads/2021/05/abstract-robot-thinking-800x450-1.jpg",
    desc: "The goal is to design a robot which can perform sample pick and place task by traversing on the path autonomously from initial destination to final destinantion",
  },
  {
    id: 4,
    title: "Development of an Automated Robotic Arm System for Efficient Fuel Refilling at Petrol Stations",
    img: "https://www.buyourobot.com/wp-content/uploads/edd/2017/07/2549_robotic-arm_thumb.jpg",
    desc: "Develop a robust system that can autonomously detect and align with vehicles entering the refueling station, ensuring precise positioning of the robotic arm for efficient and safe fuel dispensing.",
  },
  {
    id: 5,
    title: "EMG-Controlled Robotic Arm for Enhanced Human-Machine Interaction",
    img: "https://cepr.org/sites/default/files/styles/16_9_small/public/2023-10/AdobeStock_593140846.jpeg?itok=92wRHdsT",
    desc: "Design an intelligent control algorithm that adapts to the user's muscle signals, allowing for intuitive and precise control of the robotic arm. Consider variations in muscle strength, fatigue, and user-specific gestures.",
  },
  {
    id: 6,
    title: "Open Innovation",
    img: "open.jpg",
    desc: "Join our Open Innovation challenge to revolutionize refueling. We're seeking visionary solutions for the themes below. Be part of reshaping the future of efficient and sustainable systems. Your creative ideas can make a lasting impact, transforming the way we refuel and fostering positive change.",
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Problem Statements</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
