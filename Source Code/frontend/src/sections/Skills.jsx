// "use client"
// import { motion } from "framer-motion"

// const steps = [
//   {
//     title: "1. Problem Definition",
//     description: "Objective: Predict the resale price of used cars in the Indian market. Motivation: Helps buyers, sellers, dealers, and banks make data-driven decisions."
//   },
//   {
//     title: "2. Dataset Collection",
//     description: "Source: Kaggle’s Used Car Price Prediction Dataset (~5,000 records). Features include categorical (brand, model, transmission, fuel type), numerical (mileage, horsepower, price), and boolean (accident history, ownership status)."
//   },
//   {
//     title: "3. Data Preprocessing",
//     description: "Data Cleaning: Handle missing values and remove unrealistic entries (mileage > 500,000 km, price < ₹50,000). Feature Transformation: Convert mileage/engine size to numeric, derive car age, apply log-transform to price. Outlier Removal: Apply Interquartile Range (IQR). Encoding & Scaling: Label Encoding for categorical, StandardScaler for numerical."
//   },
//   {
//     title: "4. Feature Engineering",
//     description: "Created domain-relevant features like price per kilometer (Price ÷ Mileage), horsepower-to-age ratio (HP ÷ Age), and brand-wise average price. Correlation analysis used to select high-impact features."
//   },
//   {
//     title: "5. Model Development",
//     description: "Models tested: Linear Regression, Decision Tree, Random Forest, AdaBoost, XGBoost, CatBoost, and Stacking Regressor (Ridge + XGBoost + LightGBM)."
//   },
//   {
//     title: "6. Model Training & Optimization",
//     description: "Environment: Python 3.10 (Google Colab with GPU). Libraries: Pandas, NumPy, Scikit-learn, XGBoost, CatBoost, LightGBM, Matplotlib, Seaborn. Process: Train-test split (80/20), K-Fold Cross Validation (k=5), hyperparameter tuning via Grid Search and early stopping."
//   },
//   {
//     title: "7. Model Evaluation",
//     description: "Metrics: R² Score, RMSE, MAE, and MAPE. Best Model: Stacking Regressor with R² = 0.9886, RMSE = ₹1.79 Lakhs, MAE = ₹0.90 Lakhs, MAPE = 3.12%."
//   },
//   {
//     title: "8. Model Validation",
//     description: "5-Fold Cross Validation: Stable results with R² ≈ 98.7%. Unseen Data Testing: 91.5% predictions within ±20% margin."
//   },
//   {
//     title: "9. Deployment",
//     description: "Built a Flask API for real-time predictions. Integrated with web platforms for user inputs and instant car price estimation."
//   },
//   {
//     title: "10. Results & Insights",
//     description: "Diesel cars fetch a 10–15% premium over petrol. Cars under 5 years retain 25% more value. Each ownership transfer reduces price by 7–10%. Automatic cars in urban areas command a 12–18% premium."
//   },
//   {
//     title: "11. Future Enhancements",
//     description: "Use deep learning (CNN/MLP) with car images. Include geo-spatial data (street/satellite view). Enable real-time scraping from listing sites. Provide mobile app & 3rd-party API integrations for dealers/banks."
//   }
// ]

// export default function Procedure() {
//   return (
//     <section id="procedure" className="pb-16">
//       <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
//         🚗 Used Car Price Prediction – Project Procedure
//       </h2>
//       <div className="space-y-6 max-w-4xl mx-auto">
//         {steps.map((step, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: i * 0.15 }}
//             viewport={{ once: true }}
//             className="p-6 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-md hover:shadow-xl transition-shadow"
//           >
//             <h3 className="font-semibold text-lg md:text-xl text-indigo-600 dark:text-indigo-400 mb-2">
//               {step.title}
//             </h3>
//             <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
//               {step.description}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }

"use client"
import { motion } from "framer-motion"

const steps = [
  {
    title: "1. Problem Definition",
    description: "Objective: Predict the resale price of used cars in the Indian market. Motivation: Helps buyers, sellers, dealers, and banks make data-driven decisions."
  },
  {
    title: "2. Dataset Collection",
    description: "Source: Kaggle dataset (~5,000 records). Features: Categorical (brand, model, transmission, fuel type), Numerical (mileage, horsepower, price), Boolean (accident history, ownership status)."
  },
  {
    title: "3. Data Preprocessing",
    description: "Cleaning: Handle missing values & unrealistic entries. Transformations: Numeric conversion, car age, log-transform. Outlier removal with IQR. Encoding & scaling applied."
  },
  {
    title: "4. Feature Engineering",
    description: "Created domain-relevant features like price/km, horsepower-to-age ratio, and brand-wise average price. Selected impactful features via correlation analysis."
  },
  {
    title: "5. Model Development",
    description: "Models tested: Linear Regression, Decision Tree, Random Forest, AdaBoost, XGBoost, CatBoost, and Stacking Regressor."
  },
  {
    title: "6. Model Training & Optimization",
    description: "Environment: Python 3.10 (Google Colab + GPU). Libraries: Pandas, NumPy, Scikit-learn, XGBoost, CatBoost, LightGBM, Matplotlib, Seaborn. Process: Train-test split (80/20), K-Fold CV, Grid Search, early stopping."
  },
  {
    title: "7. Model Evaluation",
    description: "Metrics: R², RMSE, MAE, MAPE. Best Model: Stacking Regressor with R² = 0.9886, RMSE = ₹1.79 Lakhs, MAE = ₹0.90 Lakhs, MAPE = 3.12%."
  },
  {
    title: "8. Model Validation",
    description: "5-Fold CV: Stable results (R²≈98.7%). Unseen Data Testing: 91.5% predictions within ±20% margin."
  },
  {
    title: "9. Deployment",
    description: "Built a Flask API for real-time predictions. Integrated with web platforms for instant car price estimation."
  },
  {
    title: "10. Results & Insights",
    description: "Diesel cars fetch a 10–15% premium. Cars <5 years retain 25% higher value. Ownership transfer reduces price by 7–10%. Automatics in cities: 12–18% premium."
  },
  {
    title: "11. Future Enhancements",
    description: "Use deep learning (CNN/MLP) with car images. Add geo-spatial data. Real-time scraping from listing sites. Mobile app & 3rd-party API integrations."
  }
]

export default function Procedure() {
  return (
    <section id="procedure" className="pt-20 pb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center 
                     text-neutral-900 dark:text-neutral-100">
        🚗 Used Car Price Prediction – Project Procedure
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl border 
                       bg-gradient-to-r from-indigo-50 via-white to-blue-50 
                       dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900
                       border-indigo-200 dark:border-indigo-800
                       shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] 
                       transition-all duration-300"
          >
            <h3 className="font-semibold text-lg md:text-xl 
                           text-indigo-700 dark:text-indigo-400 mb-2">
              {step.title}
            </h3>
            <p className="text-sm md:text-base 
                          text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
