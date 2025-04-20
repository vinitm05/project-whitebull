// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex min-h-[60vh] scroll-mt-16 flex-col items-center justify-center px-6 py-24"
    >
      <h2 className="text-center text-3xl font-bold md:text-5xl">
        Let’s Work Together
      </h2>
      <p className="mt-4 max-w-md text-center text-gray-400">
        We’d love to hear about your project and how we can help you bring it to
        life.
      </p>
      <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200">
        Get in Touch
      </button>
    </motion.section>
  );
}
