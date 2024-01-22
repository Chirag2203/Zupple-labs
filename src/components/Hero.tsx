import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {fadeIn } from "@/utils/motion.js";

const Hero = () => {
  return (
    <motion.section 
    initial="hidden"
    animate="show"
    variants={fadeIn("down", "tween", 0, 1)}
    className=" relative md:w-3/4 md:mx-auto mx-4  flex flex-col items-center ">
      <div className="py-16 text-5xl gap-4 font-extrabold flex flex-col items-center">
        <p className="text-gradient text-6xl  ">
          CRYPTO <span className="text-7xl -ml-4 ">X</span>
        </p>
        <p className="font-semibold text-center">Everything Crypto at one place</p>
        <p className="text-lg text-col2 font-normal">Zupple Labs Assignment By Chirag Rajput</p>
      </div>
      <div className="flex gap-4">
        <Button className="bg-gradient-to-r from-purple-500 to-purple-800 ">
          Get started
        </Button>
        <Button
          variant={"outline"}
          className="bg-col border-col4 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-800  "
        >
          Know more
        </Button>
      </div>
    </motion.section>
  );
};

export default Hero;
