"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC, useEffect } from "react";

// // ROUTER
// import { useRouter } from "next/navigation";
// import { usePathname } from "next/navigation";

// // TYPES
interface ILayoutProps {
  children: ReactNode;
}

// export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
//   const router = useRouter();
//   const route = usePathname();

//   return (
//     <AnimatePresence mode={"wait"}>
//       <motion.div
//         key={route}
//         initial="initialState"
//         animate="animateState"
//         exit="exitState"
//         transition={{
//           type: "tween",
//           duration: 0.5,
//         }}
//         variants={{
//           initialState: {
//             opacity: 0,
//           },
//           animateState: {
//             opacity: 1,
//           },
//           exitState: {
//             opacity: 0,
//           },
//         }}
//         className="min-h-screen w-full" // Feel free to add your classes here
//       >
//         {children}
//       </motion.div>
//     </AnimatePresence>
//   );
// };

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.1 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

export const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// const YourComponent = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView();

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <AnimatePresence>
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={fadeInUp}
//       >
//         {/* Your content here */}
//       </motion.div>
//     </AnimatePresence>
//   );
// };
