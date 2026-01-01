"use client";

import { motion } from "framer-motion";
import { Section } from "../types/types";
import { SpeakerIcon } from "./icons";

export const Hero = () => {
  return (
    <section
      id={Section.HERO}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-black px-4"
    >
      {/* Background Grid - Very subtle */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="z-10 text-center max-w-4xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 border border-white/20 px-4 py-1.5 rounded-full mb-4 bg-white/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-sm font-mono text-gray-300">
            v2.0.1 Now Available
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter"
        >
          <div className="glitch" data-text="ERROR NARRATOR">
            ERROR NARRATOR
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Stop context switching between your UI and the console.
          <span className="text-white font-semibold"> Hear your bugs</span>{" "}
          before you see them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <a
            href="#demo"
            className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-none hover:bg-gray-200 transition-all flex items-center space-x-2"
          >
            <SpeakerIcon className="w-5 h-5" />
            <span>Try Live Demo</span>
            <div className="absolute inset-0 border-2 border-white translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform -z-10"></div>
          </a>

          <a
            href="#installation"
            className="px-8 py-4 bg-transparent text-white border border-white/30 font-mono text-lg hover:bg-white/10 transition-colors"
          >
            npm install error-narrator
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        // className="mt-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
          Scroll to Debug
        </span>
        <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};
