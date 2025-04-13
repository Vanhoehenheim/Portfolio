"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative flex w-[90vw] md:w-full flex-1 scale-y-100 md:scale-y-125 items-center justify-center isolate z-0 ">
        <motion.div
          initial={{ opacity: 0.5, width: "min(12rem, 30vw)" }}
          whileInView={{ opacity: 0.7, width: "min(28rem, 60vw)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-40 md:h-56 overflow-visible w-[15rem] md:w-[30rem] bg-gradient-conic from-playful-pink via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-background h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "min(12rem, 30vw)" }}
          whileInView={{ opacity: 0.7, width: "min(28rem, 60vw)"}}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-40 md:h-56 w-[15rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-playful-pink text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-background h-20 md:h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-32 md:h-48 w-full translate-y-8 md:translate-y-12 scale-x-100 md:scale-x-150 bg-background blur-xl md:blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-32 md:h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-24 md:h-36 w-[18rem] md:w-[28rem] -translate-y-1/4 md:-translate-y-1/2 rounded-full bg-playful-pink opacity-15 dark:opacity-30 blur-2xl md:blur-3xl"></div>
        <motion.div
          initial={{ width: "min(8rem, 16vw)" }}
          whileInView={{ width: "min(16rem, 32vw)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-24 md:h-36 w-32 md:w-64 -translate-y-[4rem] md:-translate-y-[6rem] rounded-full bg-playful-pink blur-xl md:blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "min(12rem, 30vw)" }}
          whileInView={{ width: "min(28rem, 60vw)" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[15rem] md:w-[30rem] -translate-y-[5rem] md:-translate-y-[7rem] bg-playful-pink"
        ></motion.div>

        <div className="absolute inset-auto z-40 h-28 md:h-44 w-full -translate-y-[8.5rem] md:-translate-y-[12.5rem] bg-background"></div>
      </div>

      <div className="relative z-50 flex -translate-y-48 sm:-translate-y-44 md:-translate-y-40 lg:-translate-y-48 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};