
// "use client"

// import { motion } from "framer-motion"
// import { useEffect, useRef } from "react"

// export default function Hero() {
//   const auraRef = useRef(null)

//   useEffect(() => {
//     const aura = auraRef.current
//     const moveAura = (e) => {
//       if (!aura) return
//       const { clientX, clientY } = e
//       aura.style.transform = `translate(${clientX}px, ${clientY}px)`
//     }
//     window.addEventListener("mousemove", moveAura)
//     return () => window.removeEventListener("mousemove", moveAura)
//   }, [])

//   useEffect(() => {
//     const link = document.createElement("link")
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;600&display=swap"
//     link.rel = "stylesheet"
//     document.head.appendChild(link)
//   }, [])

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 bg-gradient-to-br from-neutral-100 via-white to-neutral-200 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-950"
//       style={{ fontFamily: "'Poppins', sans-serif" }}
//     >
//       {/* Soft cursor aura */}
//       <div
//         ref={auraRef}
//         className="pointer-events-none fixed top-0 left-0 w-24 h-24 rounded-full bg-blue-400/20 blur-3xl mix-blend-screen transition-transform duration-300 ease-out"
//       ></div>

//       <div className="text-center space-y-8 max-w-4xl animate-fadeInUp">
//         <motion.h1
//           className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight"
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent animate-gradient">
//             Pre-owned Car Price Prediction
//           </span>{" "}
//           Via Cross-Validated Meta Ensembles and Feature Composites
//         </motion.h1>

//         <motion.p
//           className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-[Inter] font-medium tracking-wide hover:text-blue-400 transition-colors duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4, duration: 1 }}
//         >
//           Team Members: G. Aishwarya, P. Sirisha, K. Anusha
//         </motion.p>

//         <motion.p
//           className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-[Inter] font-medium tracking-wide hover:text-blue-400 transition-colors duration-300"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 1 }}
//         >
//           Guide: Yamani Chandana
//         </motion.p>
//       </div>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 1.2s ease-out forwards;
//         }

//         @keyframes gradientMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradientMove 6s ease infinite;
//         }
//       `}</style>
//     </section>
//   )
// }


"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Hero() {
  const auraRef = useRef(null)

  useEffect(() => {
    const aura = auraRef.current
    const moveAura = (e) => {
      if (!aura) return
      const { clientX, clientY } = e
      aura.style.transform = `translate(${clientX}px, ${clientY}px)`
    }
    window.addEventListener("mousemove", moveAura)
    return () => window.removeEventListener("mousemove", moveAura)
  }, [])

  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;600&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Soft cursor aura */}
      <div
        ref={auraRef}
        className="pointer-events-none fixed top-0 left-0 w-24 h-24 rounded-full bg-blue-400/20 blur-3xl mix-blend-screen transition-transform duration-300 ease-out"
      ></div>

      <div className="text-center space-y-8 max-w-4xl animate-fadeInUp">
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-500 bg-clip-text text-transparent animate-gradient">
            Pre-owned Car Price Prediction
          </span>{" "}
          Via Cross-Validated Meta Ensembles and Feature Composites
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-[Inter] font-medium tracking-wide hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Team Members: G. Aishwarya, P. Sirisha, K. Anusha
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-[Inter] font-medium tracking-wide hover:text-blue-400 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Guide: Yamani Chandana
        </motion.p>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out forwards;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  )
}
