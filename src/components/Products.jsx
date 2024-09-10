import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
const Products = () => {
  var products = [
    {
      title: "arqitel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat nemo iure exercitationem beatae eligendi, eius laudantium?",
      live: true,
      case: false,
      
    },
    {
      title: "TTR",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat nemo iure exercitationem beatae eligendi, eius laudantium?",
      live: true,
      case: false,
    },
    {
      title: "YIR 2024",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat nemo iure exercitationem beatae eligendi, eius laudantium?",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis repellat nemo iure exercitationem beatae eligendi, eius laudantium?",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);
  function chalao(val) {
    setPosition(val * 15);
  }
  return (
    <div className="mt-20  relative ">
      {products.map((elem, index) => (
        <Product val={elem} key={index} index={index} chalao={chalao} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[23rem] h-[15rem] bg-white left-[44%]  overflow-hidden "
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className="div w-full h-full bg-violet-700"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="div w-full h-full bg-sky-300"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="div w-full h-full bg-zinc-400"
          ></motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="div w-full h-full bg-orange-500"
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
