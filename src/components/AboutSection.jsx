// src/components/AboutSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen scroll-mt-16 px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold md:text-5xl">About Us</h2>
        <p className="mt-6 text-gray-400">
          We’re a creative team with a focus on crafting unique, high-impact
          digital experiences. Our team of designers, developers, and
          strategists create innovative solutions for brands around the globe.
        </p>
        <img
          src="https://images.unsplash.com/photo-1603570419984-58c48d2df3c1"
          alt="Studio work"
          className="mt-8 h-64 w-full rounded-xl object-cover shadow-lg"
        />
      </div>
    </motion.section>
  );
}
