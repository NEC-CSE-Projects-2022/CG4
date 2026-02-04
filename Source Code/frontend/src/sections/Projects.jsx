
// const objectives = [
//   { 
//     title: "Scalable & Accurate Model", 
//     desc: "Develop a highly scalable and accurate machine learning model for predicting used car prices." 
//   },
//   { 
//     title: "Adapted for Indian Market", 
//     desc: "Adapt the solution specifically to the Indian market, considering local price variations and heterogeneous vehicle data." 
//   },
//   { 
//     title: "Real-time Deployment", 
//     desc: "Deploy a practical, API-based system that enables real-time predictions on digital platforms." 
//   },
//   { 
//     title: "Data-driven Decisions", 
//     desc: "Enable data-driven decision-making for dealerships, fintech platforms, and end-users of vehicles." 
//   },
// ]

// function ObjectiveCard({ o }) {
//   return (
//     <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-500 p-8 flex flex-col justify-center text-center group">
//       <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-blue-500 transition-colors">
//         {o.title}
//       </h3>
//       <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
//         {o.desc}
//       </p>
//     </div>
//   )
// }

// export default function Objectives() {
//   return (
//     <section 
//       id="objectives" 
//       className="relative py-20 px-6 overflow-hidden"
//     >
//       {/* 🌈 Animated Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-black dark:to-gray-800 animate-gradient"></div>

//       {/* Content Overlay */}
//       <div className="relative z-10">
//         <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center text-neutral-900 dark:text-neutral-100">
//           🎯 Project Objectives
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
//           {objectives.map((o, i) => (
//             <ObjectiveCard key={i} o={o} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

const objectives = [
  { 
    title: "Scalable & Accurate Model", 
    desc: "Develop a highly scalable and accurate machine learning model for predicting used car prices." 
  },
  { 
    title: "Adapted for Indian Market", 
    desc: "Adapt the solution specifically to the Indian market, considering local price variations and heterogeneous vehicle data." 
  },
  { 
    title: "Real-time Deployment", 
    desc: "Deploy a practical, API-based system that enables real-time predictions on digital platforms." 
  },
  { 
    title: "Data-driven Decisions", 
    desc: "Enable data-driven decision-making for dealerships, fintech platforms, and end-users of vehicles." 
  },
]

function ObjectiveCard({ o, index }) {
  return (
    <motion.div
      className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg hover:shadow-blue-400/30 dark:hover:shadow-blue-500/30 transition-transform transform hover:-translate-y-2 duration-500 p-8 flex flex-col justify-center text-center group border border-transparent hover:border-blue-400/40"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4 group-hover:text-blue-500 transition-colors duration-300">
        {o.title}
      </h3>
      <p className="text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {o.desc}
      </p>
    </motion.div>
  )
}

export default function Objectives() {
  const auraRef = useRef(null)

  useEffect(() => {
    const aura = auraRef.current
    const moveAura = (e) => {
      if (!aura) return
      aura.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }
    window.addEventListener("mousemove", moveAura)
    return () => window.removeEventListener("mousemove", moveAura)
  }, [])

  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }, [])

  return (
    <section
      id="objectives"
      className="relative py-20 px-6 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Cursor glow */}
      <div
        ref={auraRef}
        className="pointer-events-none fixed top-0 left-0 w-24 h-24 rounded-full bg-blue-400/20 blur-3xl mix-blend-screen transition-transform duration-300 ease-out"
      ></div>

      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-14 text-center text-neutral-900 dark:text-neutral-100"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🎯 <span className="shine-text">Project Objectives</span>
      </motion.h2>

      {/* Objective Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {objectives.map((o, i) => (
          <ObjectiveCard key={i} o={o} index={i} />
        ))}
      </div>

      <style jsx>{`
        .shine-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #2563eb, #38bdf8, #60a5fa, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 5s linear infinite;
        }

        @keyframes shine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </section>
  )
}
