import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagicCursor = () => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth motion
  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    // ✅ Detect mobile / touch devices
    const checkMobile = () =>
      window.innerWidth < 768 || "ontouchstart" in window;
    setIsMobile(checkMobile());

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);

    // detect hover elements
    const hoverables = document.querySelectorAll("a, button, .hoverable");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });

    window.addEventListener("resize", () => setIsMobile(checkMobile()));

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("resize", () => setIsMobile(checkMobile()));
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  // 🛑 Stop rendering if mobile
  if (isMobile) return null;

  return (
    <motion.div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference ${
        hovered ? "w-12 h-12 bg-white/90" : "w-6 h-6 bg-white/60"
      }`}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
};

export default MagicCursor;
