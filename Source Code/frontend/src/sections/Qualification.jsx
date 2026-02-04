

"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function Qualification() {
  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)
  }, [])

  return (
    <section
      id="about"
      className="relative max-w-3xl mx-auto text-center space-y-7 pt-20 pb-16 px-4 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Heading */}
      <motion.h2
        className="relative text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 bg-clip-text"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <span className="shine-text">About This Project</span>
      </motion.h2>

      {/* First Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-justify leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        This project tackles one of the most persistent challenges in India’s fast-growing
        pre-owned car market - determining a fair resale price. Traditional valuation
        methods rely heavily on guesswork, fixed depreciation tables, and human judgment,
        which often fail to capture the complexity of factors like mileage, age, fuel type,
        and regional price variations. To solve this, we built a machine learning pipeline
        that cleans and enriches real car listing data, engineers new features such as
        price-per-kilometer and horsepower-to-age ratio, and trains multiple regression
        models, including Decision Trees, Random Forest, XGBoost, and CatBoost.
      </motion.p>

      {/* Second Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-800 dark:text-gray-200 text-justify leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        The best results came from a stacked ensemble combining
        <span className="text-blue-700 dark:text-blue-400 font-semibold"> Ridge Regression</span>,
        <span className="text-blue-700 dark:text-blue-400 font-semibold"> XGBoost</span>,
        and
        <span className="text-blue-700 dark:text-blue-400 font-semibold"> LightGBM</span>,
        achieving an R² score of 0.9886 with very low error margins (MAE ≈ ₹0.90L).
        This level of accuracy enables car dealerships, fintech platforms, and buyers
        to make data-driven decisions with confidence. The system has been deployed
        as a Flask-based web service, making real-time predictions accessible through
        an API. Beyond technical achievement, the project delivers industry value
        by improving transparency, reducing manual effort by over 60%, and enabling
        smarter loan evaluations and marketplace pricing.
      </motion.p>

      <style jsx>{`
        .shine-text {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #2563eb, #38bdf8, #818cf8, #2563eb);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 4s linear infinite;
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
