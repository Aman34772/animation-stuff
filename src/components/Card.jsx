import React from "react";
import {motion} from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover==="true" && "#7443ff", padding:"23px" }}
      className={`${width} bg-zinc-800 p-5  rounded-xl flex flex-col justify-between min-h-[22rem]`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>one heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever heading</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-5xl font-semibold tracking-tight leading-none">
              start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-3">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
