// src/components/ShowcaseSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Project One",
    description: "A modern web experience with bold visuals.",
    image: "https://images.unsplash.com/photo-1612831455545-708f3fa5c897",
  },
  {
    title: "Project Two",
    description: "A cinematic portfolio design.",
    image: "https://images.unsplash.com/photo-1617048673545-81fe17d8f29c",
  },
];

export default function ShowcaseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="showcase"
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-16 px-6 py-24"
    >
      <h2 className="mb-12 text-3xl font-bold md:text-5xl">Our Work</h2>
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="transform overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
