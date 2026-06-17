import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="text-center py-12">

      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        src="/logo.png"
        alt="BR Tech"
        className="h-28 mx-auto bg-white rounded-3xl p-4 shadow-2xl"
      />

      <h2 className="text-white text-2xl mt-8 font-bold">
        CAN YOU SURVIVE THE
      </h2>

      <h1 className="text-7xl md:text-8xl font-black text-white">
        FIFA
      </h1>

      <h2 className="text-4xl md:text-6xl font-black text-red-500">
        WORLD CUP?
      </h2>

      <div className="inline-block mt-6 bg-red-600 px-8 py-3 rounded-full text-white font-bold shadow-xl">
        ANSWER • CALCULATE • SHARE
      </div>

    </div>
  );
}