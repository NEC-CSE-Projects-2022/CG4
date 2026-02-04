"use client"
import { motion } from "framer-motion"

const results = [
  {
    title: "🏆 Best Model",
    description: "Stacking Regressor (Ridge + XGBoost + LightGBM) achieved the highest performance: R² = 0.9886, RMSE = ₹1.79L, MAE = ₹0.90L, MAPE = 3.12%."
  },
  {
    title: "🔎 Feature Importance",
    description: "Brand had the highest influence. Mileage and horsepower affect depreciation. Car age and price/km were also critical."
  },
  {
    title: "✅ Validation",
    description: "5-Fold CV: Avg R²≈98.7%, RMSE≈₹1.84L. On unseen 150 samples: 91.5% predictions were within ±20% error."
  },
  {
    title: "💡 Market Insights",
    description: "Diesel cars: 10–15% premium. Cars <5 years: retain 25% more value. Ownership transfer: 7–10% drop. Automatics: 12–18% premium."
  }
]

export default function Achievements() {
  const headingClass = "text-2xl md:text-3xl font-bold mb-10 text-center text-blue-700 dark:text-blue-400"
  const subHeadingClass = headingClass

  return (
    <section id="achievements" className="pt-20 pb-12">
      
      {/* Main Heading */}
      <motion.h2
        className={headingClass}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🏅 Results & Achievements
      </motion.h2>

      {/* Result Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {results.map((res, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl border
                       bg-gradient-to-r from-indigo-50 via-white to-blue-50
                       dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                       border-indigo-200 dark:border-indigo-800
                       shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                       hover:scale-[1.03] transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-2 text-blue-700 dark:text-blue-400">
              {res.title}
            </h3>
            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {res.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pre-processing Visuals */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h3 className={subHeadingClass}>
          🛠️ Pre-processing Visuals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { src: "/images/pairplot.png", alt: "Pairplot", caption: "Pairplot of Features" },
            { src: "/images/outlier_detection.png", alt: "Outlier Detection", caption: "Outlier Detection Plot" },
            { src: "/images/correlation_matrix.png", alt: "Correlation Matrix", caption: "Feature Correlation Matrix" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-lg mx-auto w-full h-64 object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                Figure: {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Model Performance Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-12"
      >
        <h3 className={subHeadingClass}>
          📊 Model Performance Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-neutral-300 dark:border-neutral-700 text-sm md:text-base transition-all duration-500">
            <thead className="bg-neutral-200 dark:bg-neutral-800">
              <tr>
                <th className="p-3 border">Model</th>
                <th className="p-3 border">R²</th>
                <th className="p-3 border">RMSE (Lakhs)</th>
                <th className="p-3 border">MAE (Lakhs)</th>
                <th className="p-3 border">MAPE (%)</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="hover:bg-indigo-50 dark:hover:bg-neutral-800">
                <td className="p-3 border">CatBoost</td>
                <td className="p-3 border">0.9848</td>
                <td className="p-3 border">2.06</td>
                <td className="p-3 border">1.10</td>
                <td className="p-3 border">3.82</td>
              </tr>
              <tr className="hover:bg-indigo-50 dark:hover:bg-neutral-800">
                <td className="p-3 border">XGBoost</td>
                <td className="p-3 border">0.9845</td>
                <td className="p-3 border">2.09</td>
                <td className="p-3 border">1.11</td>
                <td className="p-3 border">3.82</td>
              </tr>
              <tr className="hover:bg-indigo-50 dark:hover:bg-neutral-800">
                <td className="p-3 border">Random Forest</td>
                <td className="p-3 border">0.9785</td>
                <td className="p-3 border">2.50</td>
                <td className="p-3 border">1.30</td>
                <td className="p-3 border">4.25</td>
              </tr>
              <tr className="hover:bg-indigo-50 dark:hover:bg-neutral-800 font-bold">
                <td className="p-3 border">Stacking Regressor</td>
                <td className="p-3 border">0.9886</td>
                <td className="p-3 border">1.79</td>
                <td className="p-3 border">0.90</td>
                <td className="p-3 border">3.12</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Visual Results */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-12"
      >
        <h3 className={subHeadingClass}>
          📈 Visual Results (Stacking Regressor)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { src: "/images/predicted_vs_actual.png", alt: "Predicted vs Actual Prices", caption: "Predicted vs Actual Prices" },
            { src: "/images/residual_distribution.png", alt: "Residual Distribution", caption: "Residual Distribution" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="rounded-lg shadow-lg mx-auto w-full max-w-[600px] h-96 object-cover transition-transform duration-300 hover:scale-[1.03]"
              />
              <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                Figure: {img.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
