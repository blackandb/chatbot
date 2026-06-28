import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="flex max-w-4xl flex-col items-center px-6 text-center"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/40"
        initial={{ opacity: 0, y: 12 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        BLACK& Intelligence
      </motion.div>

      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl lg:text-7xl"
        initial={{ opacity: 0, y: 12 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Transforming
        <br />
        Intelligence
        <br />
        Into Enterprise.
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 max-w-2xl text-base leading-8 text-white/60 md:text-lg"
        initial={{ opacity: 0, y: 12 }}
        transition={{ delay: 0.55, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        The official AI assistant of BLACK&. Explore our technologies,
        companies, investment opportunities and enterprise intelligence
        platform.
      </motion.p>
    </div>
  );
};
