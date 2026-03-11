import { motion } from 'motion/react';
import Logo from './Logo';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] bg-blue-50 flex flex-col items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Logo className="w-24 h-24" textClassName="text-4xl mt-4" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex gap-3"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-blue-500 rounded-full"
            animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  );
}
