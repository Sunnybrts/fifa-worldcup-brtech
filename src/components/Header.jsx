import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="text-center py-8 md:py-12 px-4">

      <div
        className="
        mx-auto
        mb-6
        h-1
        w-40
        rounded-full
        bg-gradient-to-r
        from-transparent
        via-yellow-400
        to-transparent
      "
      />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src="/logo.png"
          alt="BR Tech"
          className="
          h-20 md:h-28
          mx-auto
          bg-white
          rounded-3xl
          p-3
          shadow-2xl
        "
        />
      </motion.div>

      <h2 className="text-white text-lg md:text-2xl mt-6 font-bold">
        CAN YOU SURVIVE THE
      </h2>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white">
        FIFA
      </h1>

      <h2 className="text-3xl md:text-5xl font-black text-red-500">
        WORLD CUP?
      </h2>

      <div
        className="
        inline-block
        mt-6
        bg-red-600
        px-6 md:px-8
        py-3
        rounded-full
        text-white
        font-bold
        text-sm md:text-base
      "
      >
        ANSWER • CALCULATE • SHARE
      </div>

    </div>
  );
}