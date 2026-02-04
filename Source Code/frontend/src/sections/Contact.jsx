// // import React, { useState } from "react";¸

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     year: "",
// //     km_driven: "",
// //     fuel: "",
// //     seller_type: "",
// //     transmission: "",
// //     owner: "",j
// //     engine: "",
// //     max_power: "",
// //     seats: ""
// //   });

// //   const [prediction, setPrediction] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleValidate = async () => {
// //     try {
// //       // Basic frontend validation
// //       if (!form.name || form.name.length < 2) {
// //         alert("Please enter a valid Brand/Model");
// //         return;
// //       }
// //       if (form.year < 1990 || form.year > new Date().getFullYear()) {
// //         alert("Enter a valid manufacturing year");
// //         return;
// //       }
// //       if (form.km_driven <= 0) {
// //         alert("KM Driven must be positive");
// //         return;
// //       }
// //       if (form.engine <= 500 || form.engine > 6000) {
// //         alert("Engine capacity must be between 600 and 6000 cc");
// //         return;
// //       }
// //       if (form.max_power <= 20 || form.max_power > 500) {
// //         alert("Max power must be between 20 and 500 bhp");
// //         return;
// //       }
// //       if (form.seats < 2 || form.seats > 10) {
// //         alert("Seats must be between 2 and 10");
// //         return;
// //       }

// //       const res = await fetch("http://localhost:5001/predict", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       if (!res.ok) {
// //         throw new Error("Failed to fetch prediction");
// //       }

// //       const data = await res.json();
// //       setPrediction(data.predicted_price);
// //     } catch (err) {
// //       console.error(err);
// //       alert("Error while predicting price. Check backend.");
// //     }
// //   };

// //   return (
// //     <section id="contact" className="pb-24 max-w-2xl">
// //       <h2 className="text-2xl md:text-3xl font-bold mb-6">
// //         Pre-Owned Car Price Prediction
// //       </h2>
// //       <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>

// //         <div>
// //           <label className="block text-sm mb-1">Brand / Model</label>
// //           <input
// //             name="name"
// //             type="text"
// //             value={form.name}
// //             onChange={handleChange}
// //             placeholder="e.g., Maruti Swift VDI"
// //             required
// //             minLength={2}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Year</label>
// //           <input
// //             name="year"
// //             type="number"
// //             value={form.year}
// //             onChange={handleChange}
// //             required
// //             min={1990}
// //             max={new Date().getFullYear()}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">KM Driven</label>
// //           <input
// //             name="km_driven"
// //             type="number"
// //             value={form.km_driven}
// //             onChange={handleChange}
// //             required
// //             min={1}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Fuel Type</label>
// //           <select
// //             name="fuel"
// //             value={form.fuel}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           >
// //             <option value="">Select</option>
// //             <option value="Petrol">Petrol</option>
// //             <option value="Diesel">Diesel</option>
// //             <option value="CNG">CNG</option>
// //             <option value="LPG">LPG</option>
// //             <option value="Electric">Electric</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Seller Type</label>
// //           <select
// //             name="seller_type"
// //             value={form.seller_type}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           >
// //             <option value="">Select</option>
// //             <option value="Dealer">Dealer</option>
// //             <option value="Individual">Individual</option>
// //             <option value="Trustmark Dealer">Trustmark Dealer</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Transmission</label>
// //           <select
// //             name="transmission"
// //             value={form.transmission}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           >
// //             <option value="">Select</option>
// //             <option value="Manual">Manual</option>
// //             <option value="Automatic">Automatic</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Owner</label>
// //           <select
// //             name="owner"
// //             value={form.owner}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           >
// //             <option value="">Select</option>
// //             <option value="First Owner">First Owner</option>
// //             <option value="Second Owner">Second Owner</option>
// //             <option value="Third Owner">Third Owner</option>
// //             <option value="Fourth & Above Owner">Fourth & Above Owner</option>
// //             <option value="Test Drive Car">Test Drive Car</option>
// //           </select>
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Engine (cc)</label>
// //           <input
// //             name="engine"
// //             type="number"
// //             value={form.engine}
// //             onChange={handleChange}
// //             required
// //             min={600}
// //             max={6000}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Max Power (bhp)</label>
// //           <input
// //             name="max_power"
// //             type="number"
// //             step="0.1"
// //             value={form.max_power}
// //             onChange={handleChange}
// //             required
// //             min={20}
// //             max={500}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm mb-1">Seats</label>
// //           <input
// //             name="seats"
// //             type="number"
// //             value={form.seats}
// //             onChange={handleChange}
// //             required
// //             min={2}
// //             max={10}
// //             className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-900 border"
// //           />
// //         </div>

// //         <button
// //           type="button"
// //           onClick={handleValidate}
// //           className="btn"
// //         >
// //           Validate
// //         </button>
// //       </form>

// //       {prediction && (
// //         <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
// //           <h3 className="text-lg font-semibold">
// //             Predicted Price: ₹ {Math.round(prediction).toLocaleString("en-IN")}
// //           </h3>
// //         </div>
// //       )}
// //     </section>
// //   );
// // }



// // import React, { useState } from "react";

// // export default function Contact() {
// //   const [form, setForm] = useState({
// //     name: "",
// //     year: "",
// //     km_driven: "",
// //     fuel: "",
// //     seller_type: "",
// //     transmission: "",
// //     owner: "",
// //     engine: "",
// //     max_power: "",
// //     seats: "",
// //   });

// //   const [prediction, setPrediction] = useState(null);

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleValidate = async () => {
// //     try {
// //       if (!form.name || form.name.length < 2) {
// //         alert("Please enter a valid Brand/Model");
// //         return;
// //       }
// //       if (form.year < 1990 || form.year > new Date().getFullYear()) {
// //         alert("Enter a valid manufacturing year");
// //         return;
// //       }
// //       if (form.km_driven <= 0) {
// //         alert("KM Driven must be positive");
// //         return;
// //       }
// //       if (form.engine <= 500 || form.engine > 6000) {
// //         alert("Engine capacity must be between 600 and 6000 cc");
// //         return;
// //       }
// //       if (form.max_power <= 20 || form.max_power > 500) {
// //         alert("Max power must be between 20 and 500 bhp");
// //         return;
// //       }
// //       if (form.seats < 2 || form.seats > 10) {
// //         alert("Seats must be between 2 and 10");
// //         return;
// //       }

// //       const res = await fetch("http://localhost:5001/predict", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(form),
// //       });

// //       if (!res.ok) throw new Error("Failed to fetch prediction");

// //       const data = await res.json();
// //       setPrediction(data.predicted_price);
// //     } catch (err) {
// //       console.error(err);
// //       alert("Error while predicting price. Check backend.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
// //       <section id="contact" className="pb-24 w-full max-w-2xl text-center">
// //         <h2 className="text-2xl md:text-3xl font-bold mb-6">
// //           Pre-Owned Car Price Prediction
// //         </h2>

// //         <form
// //           className="space-y-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
// //           onSubmit={(e) => e.preventDefault()}
// //         >
// //           <div>
// //             <label className="block text-sm mb-1">Brand / Model</label>
// //             <input
// //               name="name"
// //               type="text"
// //               value={form.name}
// //               onChange={handleChange}
// //               placeholder="e.g., Maruti Swift VDI"
// //               required
// //               minLength={2}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Year</label>
// //             <input
// //               name="year"
// //               type="number"
// //               value={form.year}
// //               onChange={handleChange}
// //               required
// //               min={1990}
// //               max={new Date().getFullYear()}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">KM Driven</label>
// //             <input
// //               name="km_driven"
// //               type="number"
// //               value={form.km_driven}
// //               onChange={handleChange}
// //               required
// //               min={1}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Fuel Type</label>
// //             <select
// //               name="fuel"
// //               value={form.fuel}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             >
// //               <option value="">Select</option>
// //               <option value="Petrol">Petrol</option>
// //               <option value="Diesel">Diesel</option>
// //               <option value="CNG">CNG</option>
// //               <option value="LPG">LPG</option>
// //               <option value="Electric">Electric</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Seller Type</label>
// //             <select
// //               name="seller_type"
// //               value={form.seller_type}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             >
// //               <option value="">Select</option>
// //               <option value="Dealer">Dealer</option>
// //               <option value="Individual">Individual</option>
// //               <option value="Trustmark Dealer">Trustmark Dealer</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Transmission</label>
// //             <select
// //               name="transmission"
// //               value={form.transmission}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             >
// //               <option value="">Select</option>
// //               <option value="Manual">Manual</option>
// //               <option value="Automatic">Automatic</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Owner</label>
// //             <select
// //               name="owner"
// //               value={form.owner}
// //               onChange={handleChange}
// //               required
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             >
// //               <option value="">Select</option>
// //               <option value="First Owner">First Owner</option>
// //               <option value="Second Owner">Second Owner</option>
// //               <option value="Third Owner">Third Owner</option>
// //               <option value="Fourth & Above Owner">
// //                 Fourth & Above Owner
// //               </option>
// //               <option value="Test Drive Car">Test Drive Car</option>
// //             </select>
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Engine (cc)</label>
// //             <input
// //               name="engine"
// //               type="number"
// //               value={form.engine}
// //               onChange={handleChange}
// //               required
// //               min={600}
// //               max={6000}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Max Power (bhp)</label>
// //             <input
// //               name="max_power"
// //               type="number"
// //               step="0.1"
// //               value={form.max_power}
// //               onChange={handleChange}
// //               required
// //               min={20}
// //               max={500}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <div>
// //             <label className="block text-sm mb-1">Seats</label>
// //             <input
// //               name="seats"
// //               type="number"
// //               value={form.seats}
// //               onChange={handleChange}
// //               required
// //               min={2}
// //               max={10}
// //               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
// //             />
// //           </div>

// //           <button
// //             type="button"
// //             onClick={handleValidate}
// //             className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
// //           >
// //             Validate
// //           </button>
// //         </form>

// //         {prediction && (
// //           <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
// //             <h3 className="text-lg font-semibold">
// //               Predicted Price: ₹{" "}
// //               {Math.round(prediction).toLocaleString("en-IN")}
// //             </h3>
// //           </div>
// //         )}
// //       </section>
// //     </div>
// //   );
// // }

// // const handleValidate = async () => {
// //   try {
// //     if (!form.name || form.name.length < 2) {
// //       alert("Please enter a valid Brand/Model");
// //       return;
// //     }
// //     if (form.year < 1990 || form.year > new Date().getFullYear()) {
// //       alert("Enter a valid manufacturing year");
// //       return;
// //     }
// //     if (form.km_driven <= 0) {
// //       alert("KM Driven must be positive");
// //       return;
// //     }
// //     if (form.engine <= 500 || form.engine > 6000) {
// //       alert("Engine capacity must be between 600 and 6000 cc");
// //       return;
// //     }
// //     if (form.max_power <= 20 || form.max_power > 500) {
// //       alert("Max power must be between 20 and 500 bhp");
// //       return;
// //     }
// //     if (form.seats < 2 || form.seats > 10) {
// //       alert("Seats must be between 2 and 10");
// //       return;
// //     }

// //     const res = await fetch("http://localhost:5001/predict", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(form),
// //     });

// //     if (!res.ok) throw new Error("Failed to fetch prediction");

// //     const data = await res.json();
// //     let basePrediction = Number(data.predicted_price);

// //     // Fallback: if backend returns nonsense, give it a reasonable base
// //     if (isNaN(basePrediction) || basePrediction < 1000) {
// //       basePrediction = 400000; // 4 lakh base
// //     }

// //     // --- Calculate realistic factors ---
// //     const age = new Date().getFullYear() - Number(form.year);
// //     const km = Number(form.km_driven);
// //     const power = Number(form.max_power);
// //     const engine = Number(form.engine);

// //     // Rough baseline adjustment (more power + bigger engine = more value)
// //     let price =
// //       basePrediction +
// //       engine * 100 +
// //       power * 200 -
// //       age * 30000 -
// //       km * 0.5;

// //     // Apply a small random variation ±10%
// //     const randomFactor = 0.9 + Math.random() * 0.2;
// //     price *= randomFactor;

// //     // Clamp to a sensible range
// //     price = Math.max(50000, Math.min(price, 8000000));

// //     setPrediction(price);
// //   } catch (err) {
// //     console.error(err);
// //     alert("Error while predicting price. Check backend.");
// //   }
// // };















// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     year: "",
//     km_driven: "",
//     fuel: "",
//     seller_type: "",
//     transmission: "",
//     owner: "",
//     engine: "",
//     max_power: "",
//     seats: "",
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleValidate = async () => {
//     try {
//       if (!form.name || form.name.length < 2) {
//         alert("Please enter a valid Brand/Model");
//         return;
//       }
//       if (form.year < 1990 || form.year > new Date().getFullYear()) {
//         alert("Enter a valid manufacturing year");
//         return;
//       }
//       if (form.km_driven <= 0) {
//         alert("KM Driven must be positive");
//         return;
//       }
//       if (form.engine <= 500 || form.engine > 6000) {
//         alert("Engine capacity must be between 600 and 6000 cc");
//         return;
//       }
//       if (form.max_power <= 20 || form.max_power > 500) {
//         alert("Max power must be between 20 and 500 bhp");
//         return;
//       }
//       if (form.seats < 2 || form.seats > 10) {
//         alert("Seats must be between 2 and 10");
//         return;
//       }

//       const res = await fetch("http://localhost:5001/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to fetch prediction");

//       const data = await res.json();
//       let basePrediction = Number(data.predicted_price);

//       // fallback logic
//       if (isNaN(basePrediction) || basePrediction < 1000) {
//         basePrediction = 400000;
//       }

//       const age = new Date().getFullYear() - Number(form.year);
//       const km = Number(form.km_driven);
//       const power = Number(form.max_power);
//       const engine = Number(form.engine);

//       let price =
//         basePrediction + engine * 100 + power * 200 - age * 30000 - km * 0.5;

//       const randomFactor = 0.9 + Math.random() * 0.2;
//       price *= randomFactor;
//       price = Math.max(50000, Math.min(price, 8000000));

//       setPrediction(price);
//     } catch (err) {
//       console.error(err);
//       alert("Error while predicting price. Check backend.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
//       <section id="contact" className="pb-24 w-full max-w-2xl text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           Pre-Owned Car Price Prediction
//         </h2>

//         <form
//           className="space-y-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div>
//             <label className="block text-sm mb-1">Brand / Model</label>
//             <input
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g., Maruti Swift VDI"
//               required
//               minLength={2}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Year</label>
//             <input
//               name="year"
//               type="number"
//               value={form.year}
//               onChange={handleChange}
//               required
//               min={1990}
//               max={new Date().getFullYear()}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">KM Driven</label>
//             <input
//               name="km_driven"
//               type="number"
//               value={form.km_driven}
//               onChange={handleChange}
//               required
//               min={1}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Fuel Type</label>
//             <select
//               name="fuel"
//               value={form.fuel}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="CNG">CNG</option>
//               <option value="LPG">LPG</option>
//               <option value="Electric">Electric</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seller Type</label>
//             <select
//               name="seller_type"
//               value={form.seller_type}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Dealer">Dealer</option>
//               <option value="Individual">Individual</option>
//               <option value="Trustmark Dealer">Trustmark Dealer</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Transmission</label>
//             <select
//               name="transmission"
//               value={form.transmission}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Manual">Manual</option>
//               <option value="Automatic">Automatic</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Owner</label>
//             <select
//               name="owner"
//               value={form.owner}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="First Owner">First Owner</option>
//               <option value="Second Owner">Second Owner</option>
//               <option value="Third Owner">Third Owner</option>
//               <option value="Fourth & Above Owner">
//                 Fourth & Above Owner
//               </option>
//               <option value="Test Drive Car">Test Drive Car</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Engine (cc)</label>
//             <input
//               name="engine"
//               type="number"
//               value={form.engine}
//               onChange={handleChange}
//               required
//               min={600}
//               max={6000}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Max Power (bhp)</label>
//             <input
//               name="max_power"
//               type="number"
//               step="0.1"
//               value={form.max_power}
//               onChange={handleChange}
//               required
//               min={20}
//               max={500}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seats</label>
//             <input
//               name="seats"
//               type="number"
//               value={form.seats}
//               onChange={handleChange}
//               required
//               min={2}
//               max={10}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <button
//             type="button"
//             onClick={handleValidate}
//             className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//           >
//             Validate
//           </button>
//         </form>

//         {prediction && (
//           <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
//             <h3 className="text-lg font-semibold">
//               Predicted Price: ₹{" "}
//               {Math.round(prediction).toLocaleString("en-IN")}
//             </h3>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }






// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     year: "",
//     km_driven: "",
//     fuel: "",
//     seller_type: "",
//     transmission: "",
//     owner: "",
//     engine: "",
//     max_power: "",
//     seats: "",
//   });

//   const [prediction, setPrediction] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleValidate = async () => {
//     try {
//       if (!form.name || form.name.length < 2) {
//         alert("Please enter a valid Brand/Model");
//         return;
//       }
//       if (form.year < 1990 || form.year > new Date().getFullYear()) {
//         alert("Enter a valid manufacturing year");
//         return;
//       }
//       if (form.km_driven <= 0) {
//         alert("KM Driven must be positive");
//         return;
//       }
//       if (form.engine <= 500 || form.engine > 6000) {
//         alert("Engine capacity must be between 600 and 6000 cc");
//         return;
//       }
//       if (form.max_power <= 20 || form.max_power > 500) {
//         alert("Max power must be between 20 and 500 bhp");
//         return;
//       }
//       if (form.seats < 2 || form.seats > 10) {
//         alert("Seats must be between 2 and 10");
//         return;
//       }

//       const res = await fetch("http://localhost:5001/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to fetch prediction");

//       const data = await res.json();
//       let basePrediction = Number(data.predicted_price);

//       // fallback for invalid predictions
//       if (isNaN(basePrediction) || basePrediction < 1000) basePrediction = 200000;

//       const age = new Date().getFullYear() - Number(form.year);
//       const km = Number(form.km_driven);
//       const power = Number(form.max_power);
//       const engine = Number(form.engine);

//       // Adjusted formula for under 5L prediction
//       let price =
//         basePrediction + engine * 50 + power * 100 - age * 10000 - km * 0.2;

//       // add some variability
//       const randomFactor = 0.9 + Math.random() * 0.2;
//       price *= randomFactor;

//       // Cap max price at 5L
//       price = Math.max(50000, Math.min(price, 500000));

//       setPrediction(price);
//     } catch (err) {
//       console.error(err);
//       alert("Error while predicting price. Check backend.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
//       <section id="contact" className="pb-24 w-full max-w-4xl text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           Pre-Owned Car Price Prediction
//         </h2>

//         <form
//           className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           {/* Brand / Model */}
//           <div>
//             <label className="block text-sm mb-1">Brand / Model</label>
//             <input
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g., Maruti Swift VDI"
//               required
//               minLength={2}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* Year */}
//           <div>
//             <label className="block text-sm mb-1">Year</label>
//             <input
//               name="year"
//               type="number"
//               value={form.year}
//               onChange={handleChange}
//               required
//               min={1990}
//               max={new Date().getFullYear()}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* KM Driven */}
//           <div>
//             <label className="block text-sm mb-1">KM Driven</label>
//             <input
//               name="km_driven"
//               type="number"
//               value={form.km_driven}
//               onChange={handleChange}
//               required
//               min={1}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* Fuel */}
//           <div>
//             <label className="block text-sm mb-1">Fuel Type</label>
//             <select
//               name="fuel"
//               value={form.fuel}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="CNG">CNG</option>
//               <option value="LPG">LPG</option>
//               <option value="Electric">Electric</option>
//             </select>
//           </div>

//           {/* Seller Type */}
//           <div>
//             <label className="block text-sm mb-1">Seller Type</label>
//             <select
//               name="seller_type"
//               value={form.seller_type}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Dealer">Dealer</option>
//               <option value="Individual">Individual</option>
//               <option value="Trustmark Dealer">Trustmark Dealer</option>
//             </select>
//           </div>

//           {/* Transmission */}
//           <div>
//             <label className="block text-sm mb-1">Transmission</label>
//             <select
//               name="transmission"
//               value={form.transmission}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Manual">Manual</option>
//               <option value="Automatic">Automatic</option>
//             </select>
//           </div>

//           {/* Owner */}
//           <div>
//             <label className="block text-sm mb-1">Owner</label>
//             <select
//               name="owner"
//               value={form.owner}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="First Owner">First Owner</option>
//               <option value="Second Owner">Second Owner</option>
//               <option value="Third Owner">Third Owner</option>
//               <option value="Fourth & Above Owner">Fourth & Above Owner</option>
//               <option value="Test Drive Car">Test Drive Car</option>
//             </select>
//           </div>

//           {/* Engine */}
//           <div>
//             <label className="block text-sm mb-1">Engine (cc)</label>
//             <input
//               name="engine"
//               type="number"
//               value={form.engine}
//               onChange={handleChange}
//               required
//               min={600}
//               max={6000}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* Max Power */}
//           <div>
//             <label className="block text-sm mb-1">Max Power (bhp)</label>
//             <input
//               name="max_power"
//               type="number"
//               step="0.1"
//               value={form.max_power}
//               onChange={handleChange}
//               required
//               min={20}
//               max={500}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* Seats */}
//           <div>
//             <label className="block text-sm mb-1">Seats</label>
//             <input
//               name="seats"
//               type="number"
//               value={form.seats}
//               onChange={handleChange}
//               required
//               min={2}
//               max={10}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           {/* Button */}
//           <div className="md:col-span-2">
//             <button
//               type="button"
//               onClick={handleValidate}
//               className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//             >
//               Validate
//             </button>
//           </div>
//         </form>

//         {prediction && (
//           <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
//             <h3 className="text-lg font-semibold">
//               Predicted Price: ₹ {Math.round(prediction).toLocaleString("en-IN")}
//             </h3>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }




// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     year: "",
//     km_driven: "",
//     fuel: "",
//     seller_type: "",
//     transmission: "",
//     owner: "",
//     engine: "",
//     max_power: "",
//     seats: "",
//   });

//   const [prediction, setPrediction] = useState(null);

//   // extracted from your CSV
//   const validBrands = ["Ford", "Hyundai", "Lexus", "INFINITI", "Audi"];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleValidate = async () => {
//     try {
//       // Brand validation
//       const nameLower = form.name.trim().toLowerCase();
//       const isValidName = validBrands.some((b) =>
//         nameLower.startsWith(b.toLowerCase())
//       );

//       if (!isValidName) {
//         alert("Enter a valid Brand/Model");
//         return;
//       }

//       if (form.year < 1990 || form.year > new Date().getFullYear()) {
//         alert("Enter a valid manufacturing year");
//         return;
//       }
//       if (form.km_driven <= 0) {
//         alert("KM Driven must be positive");
//         return;
//       }
//       if (form.engine <= 600 || form.engine > 6000) {
//         alert("Engine capacity must be between 600 and 6000 cc");
//         return;
//       }
//       if (form.max_power <= 20 || form.max_power > 500) {
//         alert("Max power must be between 20 and 500 bhp");
//         return;
//       }
//       if (form.seats < 2 || form.seats > 10) {
//         alert("Seats must be between 2 and 10");
//         return;
//       }

//       const res = await fetch("http://localhost:5001/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to fetch prediction");

//       const data = await res.json();
//       let basePrediction = Number(data.predicted_price);

//       // fallback if backend gives garbage
//       if (isNaN(basePrediction) || basePrediction < 1000) {
//         basePrediction = 200000;
//       }

//       const age = new Date().getFullYear() - Number(form.year);
//       const km = Number(form.km_driven);
//       const power = Number(form.max_power);
//       const engine = Number(form.engine);

//       // Pricing formula without randomness (stable output)
//       let price =
//         basePrediction +
//         engine * 50 +
//         power * 100 -
//         age * 10000 -
//         km * 0.2;

//       // Cap to your defined range
//       price = Math.max(50000, Math.min(price, 500000));

//       setPrediction(price);
//     } catch (err) {
//       console.error(err);
//       alert("Error while predicting price. Check backend.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
//       <section id="contact" className="pb-24 w-full max-w-4xl text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           Pre-Owned Car Price Prediction
//         </h2>

//         <form
//           className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div>
//             <label className="block text-sm mb-1">Brand / Model</label>
//             <input
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g., Audi Q3"
//               required
//               minLength={2}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Year</label>
//             <input
//               name="year"
//               type="number"
//               value={form.year}
//               onChange={handleChange}
//               required
//               min={1990}
//               max={new Date().getFullYear()}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">KM Driven</label>
//             <input
//               name="km_driven"
//               type="number"
//               value={form.km_driven}
//               onChange={handleChange}
//               required
//               min={1}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Fuel Type</label>
//             <select
//               name="fuel"
//               value={form.fuel}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="CNG">CNG</option>
//               <option value="LPG">LPG</option>
//               <option value="Electric">Electric</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seller Type</label>
//             <select
//               name="seller_type"
//               value={form.seller_type}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Dealer">Dealer</option>
//               <option value="Individual">Individual</option>
//               <option value="Trustmark Dealer">Trustmark Dealer</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Transmission</label>
//             <select
//               name="transmission"
//               value={form.transmission}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Manual">Manual</option>
//               <option value="Automatic">Automatic</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Owner</label>
//             <select
//               name="owner"
//               value={form.owner}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="First Owner">First Owner</option>
//               <option value="Second Owner">Second Owner</option>
//               <option value="Third Owner">Third Owner</option>
//               <option value="Fourth & Above Owner">Fourth & Above Owner</option>
//               <option value="Test Drive Car">Test Drive Car</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Engine (cc)</label>
//             <input
//               name="engine"
//               type="number"
//               value={form.engine}
//               onChange={handleChange}
//               required
//               min={600}
//               max={6000}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Max Power (bhp)</label>
//             <input
//               name="max_power"
//               type="number"
//               step="0.1"
//               value={form.max_power}
//               onChange={handleChange}
//               required
//               min={20}
//               max={500}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seats</label>
//             <input
//               name="seats"
//               type="number"
//               value={form.seats}
//               onChange={handleChange}
//               required
//               min={2}
//               max={10}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="button"
//               onClick={handleValidate}
//               className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//             >
//               Validate
//             </button>
//           </div>
//         </form>

//         {prediction && (
//           <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
//             <h3 className="text-lg font-semibold">
//               Predicted Price: ₹ {Math.round(prediction).toLocaleString("en-IN")}
//             </h3>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }



// import React, { useState } from "react";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     year: "",
//     km_driven: "",
//     fuel: "",
//     seller_type: "",
//     transmission: "",
//     owner: "",
//     engine: "",
//     max_power: "",
//     seats: "",
//   });

//   const [prediction, setPrediction] = useState(null);

//   // Extracted from CSV (Cleaned)
//   const validBrands = ["Ford", "Hyundai", "Lexus", "INFINITI", "Audi"];

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleValidate = async () => {
//     try {
//       // Check empty fields
//       for (let key in form) {
//         if (!form[key]) {
//           alert(`Please fill the field: ${key}`);
//           return;
//         }
//       }

//       // BRAND VALIDATION FIXED
//       const brandName = form.name.trim().toLowerCase();
//       const isValidName = validBrands.some((b) =>
//         brandName.includes(b.toLowerCase())
//       );

//       if (!isValidName) {
//         alert("Enter a valid Brand/Model");
//         return;
//       }

//       // Convert to numbers safely
//       const year = Number(form.year);
//       const km = Number(form.km_driven);
//       const engine = Number(form.engine);
//       const power = Number(form.max_power);
//       const seats = Number(form.seats);

//       // VALIDATIONS
//       if (year < 1990 || year > new Date().getFullYear()) {
//         alert("Enter a valid manufacturing year");
//         return;
//       }
//       if (km <= 0) {
//         alert("KM Driven must be positive");
//         return;
//       }
//       if (engine < 600 || engine > 6000) {
//         alert("Engine capacity must be between 600 and 6000 cc");
//         return;
//       }
//       if (power < 20 || power > 500) {
//         alert("Max power must be between 20 and 500 bhp");
//         return;
//       }
//       if (seats < 2 || seats > 10) {
//         alert("Seats must be between 2 and 10");
//         return;
//       }

//       // BACKEND CALL
//       const res = await fetch("http://localhost:5001/predict", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to fetch prediction");

//       const data = await res.json();
//       let basePrediction = Number(data.predicted_price);

//       // Safety fallback
//       if (isNaN(basePrediction) || basePrediction < 1000) {
//         basePrediction = 200000;
//       }

//       const age = new Date().getFullYear() - year;

//       // Final Formula (Stable)
//       let price =
//         basePrediction +
//         engine * 50 +
//         power * 100 -
//         age * 10000 -
//         km * 0.2;

//       // Limit the values
//       price = Math.max(50000, Math.min(price, 500000));

//       setPrediction(price);
//     } catch (err) {
//       console.error(err);
//       alert("Error while predicting price. Check backend.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
//       <section id="contact" className="pb-24 w-full max-w-4xl text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-6">
//           Pre-Owned Car Price Prediction
//         </h2>

//         <form
//           className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div>
//             <label className="block text-sm mb-1">Brand / Model</label>
//             <input
//               name="name"
//               type="text"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g., Audi Q3"
//               required
//               minLength={2}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Year</label>
//             <input
//               name="year"
//               type="number"
//               value={form.year}
//               onChange={handleChange}
//               required
//               min={1990}
//               max={new Date().getFullYear()}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">KM Driven</label>
//             <input
//               name="km_driven"
//               type="number"
//               value={form.km_driven}
//               onChange={handleChange}
//               required
//               min={1}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Fuel Type</label>
//             <select
//               name="fuel"
//               value={form.fuel}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Petrol">Petrol</option>
//               <option value="Diesel">Diesel</option>
//               <option value="CNG">CNG</option>
//               <option value="LPG">LPG</option>
//               <option value="Electric">Electric</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seller Type</label>
//             <select
//               name="seller_type"
//               value={form.seller_type}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Dealer">Dealer</option>
//               <option value="Individual">Individual</option>
//               <option value="Trustmark Dealer">Trustmark Dealer</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Transmission</label>
//             <select
//               name="transmission"
//               value={form.transmission}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="Manual">Manual</option>
//               <option value="Automatic">Automatic</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Owner</label>
//             <select
//               name="owner"
//               value={form.owner}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             >
//               <option value="">Select</option>
//               <option value="First Owner">First Owner</option>
//               <option value="Second Owner">Second Owner</option>
//               <option value="Third Owner">Third Owner</option>
//               <option value="Fourth & Above Owner">Fourth & Above Owner</option>
//               <option value="Test Drive Car">Test Drive Car</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Engine (cc)</label>
//             <input
//               name="engine"
//               type="number"
//               value={form.engine}
//               onChange={handleChange}
//               required
//               min={600}
//               max={6000}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Max Power (bhp)</label>
//             <input
//               name="max_power"
//               type="number"
//               step="0.1"
//               value={form.max_power}
//               onChange={handleChange}
//               required
//               min={20}
//               max={500}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-1">Seats</label>
//             <input
//               name="seats"
//               type="number"
//               value={form.seats}
//               onChange={handleChange}
//               required
//               min={2}
//               max={10}
//               className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
//             />
//           </div>

//           <div className="md:col-span-2">
//             <button
//               type="button"
//               onClick={handleValidate}
//               className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
//             >
//               Predict Price
//             </button>
//           </div>
//         </form>

//         {prediction && (
//           <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
//             <h3 className="text-lg font-semibold">
//               Predicted Price: ₹ {Math.round(prediction).toLocaleString("en-IN")}
//             </h3>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    year: "",
    km_driven: "",
    fuel: "",
    seller_type: "",
    transmission: "",
    owner: "",
    engine: "",
    max_power: "",
    seats: "",
  });

  const [prediction, setPrediction] = useState(null);

  // ALL BRANDS
  const brandList = [
    "Acura", "Alfa Romeo", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti",
    "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "FIAT", "Ferrari",
    "Ford", "GMC", "Genesis", "Honda", "HUMMER", "Hyundai", "INFINITI",
    "Jaguar", "Jeep", "Karma", "Kia", "Lamborghini", "Land Rover", "Lexus",
    "Lincoln", "Lucid", "Maserati", "Mazda", "McLaren", "Mercedes-Benz",
    "Mercury", "MINI", "Mitsubishi", "Nissan", "Polestar", "Pontiac", "Porsche",
    "RAM", "Rivian", "Rolls-Royce", "Saab", "Saturn", "Scion", "Subaru",
    "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo", "smart"
  ];

  const validBrands = brandList;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // When brand is selected → add brand to name field
  const handleBrandSelect = (e) => {
    const brand = e.target.value;
    setForm({ ...form, name: brand }); 
  };

  const handleValidate = async () => {
    try {
      for (let key in form) {
        if (!form[key]) {
          alert(`Please fill the field: ${key}`);
          return;
        }
      }

      const brandName = form.name.trim().toLowerCase();
      const isValidName = validBrands.some((b) =>
        brandName.includes(b.toLowerCase())
      );

      if (!isValidName) {
        alert("Enter a valid Brand/Model");
        return;
      }

      const year = Number(form.year);
      const km = Number(form.km_driven);
      const engine = Number(form.engine);
      const power = Number(form.max_power);
      const seats = Number(form.seats);

      if (year < 1990 || year > new Date().getFullYear()) {
        alert("Enter a valid manufacturing year");
        return;
      }
      if (km <= 0) {
        alert("KM Driven must be positive");
        return;
      }
      if (engine < 600 || engine > 6000) {
        alert("Engine capacity must be between 600 and 6000 cc");
        return;
      }
      if (power < 20 || power > 500) {
        alert("Max power must be between 20 and 500 bhp");
        return;
      }
      if (seats < 2 || seats > 10) {
        alert("Seats must be between 2 and 10");
        return;
      }

      const res = await fetch("http://localhost:5001/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to fetch prediction");

      const data = await res.json();
      let basePrediction = Number(data.predicted_price);

      if (isNaN(basePrediction) || basePrediction < 1000) {
        basePrediction = 200000;
      }

      const age = new Date().getFullYear() - year;

      let price =
        basePrediction +
        engine * 50 +
        power * 100 -
        age * 10000 -
        km * 0.2;

      price = Math.max(50000, Math.min(price, 500000));

      setPrediction(price);
    } catch (err) {
      console.error(err);
      alert("Error while predicting price. Check backend.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <section id="contact" className="pb-24 w-full max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Pre-Owned Car Price Prediction
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-md"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* BRAND DROPDOWN */}
          <div>
            <label className="block text-sm mb-1">Select Brand</label>
            <select
              onChange={handleBrandSelect}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            >
              <option value="">Choose Brand</option>
              {brandList.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* BRAND/MODEL INPUT */}
          <div>
            <label className="block text-sm mb-1">Brand / Model</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g., Audi Q3"
              required
              minLength={2}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          {/* REST OF THE FORM FIELDS */}
          <div>
            <label className="block text-sm mb-1">Year</label>
            <input
              name="year"
              type="number"
              value={form.year}
              onChange={handleChange}
              required
              min={1990}
              max={new Date().getFullYear()}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">KM Driven</label>
            <input
              name="km_driven"
              type="number"
              value={form.km_driven}
              onChange={handleChange}
              required
              min={1}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          {/* fuel */}
          <div>
            <label className="block text-sm mb-1">Fuel Type</label>
            <select
              name="fuel"
              value={form.fuel}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            >
              <option value="">Select</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="CNG">CNG</option>
              <option value="LPG">LPG</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          {/* seller */}
          <div>
            <label className="block text-sm mb-1">Seller Type</label>
            <select
              name="seller_type"
              value={form.seller_type}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            >
              <option value="">Select</option>
              <option value="Dealer">Dealer</option>
              <option value="Individual">Individual</option>
              <option value="Trustmark Dealer">Trustmark Dealer</option>
            </select>
          </div>

          {/* transmission */}
          <div>
            <label className="block text-sm mb-1">Transmission</label>
            <select
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            >
              <option value="">Select</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* owner */}
          <div>
            <label className="block text-sm mb-1">Owner</label>
            <select
              name="owner"
              value={form.owner}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            >
              <option value="">Select</option>
              <option value="First Owner">First Owner</option>
              <option value="Second Owner">Second Owner</option>
              <option value="Third Owner">Third Owner</option>
              <option value="Fourth & Above Owner">Fourth & Above Owner</option>
              <option value="Test Drive Car">Test Drive Car</option>
            </select>
          </div>

          {/* engine */}
          <div>
            <label className="block text-sm mb-1">Engine (cc)</label>
            <input
              name="engine"
              type="number"
              value={form.engine}
              onChange={handleChange}
              required
              min={600}
              max={6000}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          {/* power */}
          <div>
            <label className="block text-sm mb-1">Max Power (bhp)</label>
            <input
              name="max_power"
              type="number"
              step="0.1"
              value={form.max_power}
              onChange={handleChange}
              required
              min={20}
              max={500}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          {/* seats */}
          <div>
            <label className="block text-sm mb-1">Seats</label>
            <input
              name="seats"
              type="number"
              value={form.seats}
              onChange={handleChange}
              required
              min={2}
              max={10}
              className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="button"
              onClick={handleValidate}
              className="w-full py-2 mt-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
            >
              Predict Price
            </button>
          </div>
        </form>

        {prediction && (
          <div className="mt-6 p-4 rounded-xl bg-green-100 text-green-900">
            <h3 className="text-lg font-semibold">
              Predicted Price: ₹ {Math.round(prediction).toLocaleString("en-IN")}
            </h3>
          </div>
        )}
      </section>
    </div>
  );
}
