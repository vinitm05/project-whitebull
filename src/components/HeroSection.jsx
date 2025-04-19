// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import bgVideo from "../assets/Office-Video.mp4";
import { Link } from "react-router";

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function HeroSection() {
  const headline =
    "Expert Outsourced Accounting Solutions for Indian Accounting Firms".split(
      " ",
    );

  return (
    <section
      id="hero"
      className="relative flex h-screen scroll-mt-16 items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 h-full w-full object-cover"
        src={bgVideo}
      />
      <div className="bg-opacity-60 absolute inset-0 z-10" />
      <div className="relative z-20 space-y-6 px-6 text-center">
        <h1 className="text-4xl leading-tight font-bold md:text-6xl">
          {headline.map((word, i) => (
            <motion.span
              key={i}
              className="mr-2 inline-block"
              custom={i}
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-lg text-gray-300"
        >
          A digital creative studio that designs and builds.
        </motion.p>
        <Link
          to="/about"
          className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
