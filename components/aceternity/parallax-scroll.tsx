"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  // Set up the scrolling effects for 4 sections
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Split images into 4 sections
  const fourth = Math.ceil(images.length / 4);
  const firstPart = images.slice(0, fourth);
  const secondPart = images.slice(fourth, 2 * fourth);
  const thirdPart = images.slice(2 * fourth, 3 * fourth);
  const fourthPart = images.slice(3 * fourth);

  return (
    <div className={cn("min-h-screen h-screen overflow-auto w-full", className)} ref={gridRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-5 px-5">
        {/* First Column */}
        <div className="grid gap-5">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${idx}`}>
              <Image
                src={el}
                className="w-full h-full object-cover rounded-lg"
                layout="responsive"
                height="400"
                width="400"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Second Column */}
        <div className="grid gap-5">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${idx}`}>
              <Image
                src={el}
                className="w-full h-full object-cover rounded-lg"
                layout="responsive"
                height="400"
                width="400"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-5">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${idx}`}>
              <Image
                src={el}
                className="w-full h-full object-cover rounded-lg"
                layout="responsive"
                height="400"
                width="400"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>

        {/* Fourth Column */}
        <div className="grid gap-5">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: translateFourth }} key={`grid-4-${idx}`}>
              <Image
                src={el}
                className="w-full h-full object-cover rounded-lg"
                layout="responsive"
                height="400"
                width="400"
                alt={`image-${idx}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
