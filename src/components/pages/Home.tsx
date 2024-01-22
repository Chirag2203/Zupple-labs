/*
This is the home page of the application
Navigate to Form or Task 1 to see the first task
Navigate to Explorer or Task 2 to see the second task
*/

import Hero from "../Hero";
import ScreenCard from "../shared/ScreenCard";
import { motion } from "framer-motion";
import {fadeIn } from "@/utils/motion.ts";
import { tasks } from "@/utils/data.ts";

const Home = () => {
    const fadeAnimation = fadeIn("up", "tween", 0, 1); // Customize parameters as needed
  return (
    <div 
    className="pt-16 pb-12 min-h-screen w-full bg-hero-pattern bg-cover bg-no-repeat ">
      <Hero />
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeAnimation}

      className=" flex justify-center md:flex-row flex-col items-center md:items-start gap-8 pt-24">
        {tasks.map((task, index) => (
          <ScreenCard key={index} title={task.title} desc={task.desc} link={task.link} />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
