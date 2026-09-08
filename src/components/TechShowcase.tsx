import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

interface TechShowcaseProps {
  imageSrc: string;
}

export default function TechShowcase({ imageSrc }: TechShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and drift effects
  const yDrift = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);

  return (
    <div ref={containerRef} className="relative group perspective-1000">
      <motion.div
        style={{ 
          y: yDrift,
          rotateY: rotation,
          scale: scale,
        }}
        animate={{
          y: [0, -15, 0],
          rotateZ: [0, 1, 0, -1, 0],
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-blue-500/10 preserve-3d"
      >
        {/* Main Exploded View Image */}
        <img
          src={imageSrc}
          alt="Exploded view of a high-end smartphone"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic Light Beams (Pseudo-layers) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent blur-sm animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-orange-400/20 to-transparent blur-sm animate-pulse delay-700" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-sm" />
        </div>

        {/* Dynamic Glow Overlay */}
        <motion.div 
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-orange-500/10"
        />

        {/* Floating Particles Overlay */}
        <div className="absolute inset-0 overflow-hidden mix-blend-screen opacity-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 100 + "%", y: "100%" }}
              animate={{
                y: "-20%",
                x: (Math.random() * 100 - 50) + "%",
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
            />
          ))}
        </div>
      </motion.div>

      {/* Shadow Projection */}
      <motion.div
        style={{ scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]) }}
        className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-blue-500/10 blur-3xl rounded-full -z-10"
      />
    </div>
  );
}
