

// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import ThemeToggle from './ThemeToggle.jsx'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)

//   const navItems = ["Home", "About", "Objectives", "Procedure", "Results", "Validation"]

//   return (
//     <header className="fixed top-4 inset-x-0 backdrop-blur z-50">
//       {/* Navbar */}
//       <div className="container flex items-center justify-between h-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
//         <Link  className="font-bold text-xl tracking-wide text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
//           Price Predictor
//         </Link>

//         {/* Desktop links */}
//         <nav className="hidden md:flex gap-8 text-lg items-center">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
//             >
//               {item}
//             </Link>
//           ))}
//           <ThemeToggle />
//         </nav>

//         {/* Mobile toggle */}
//         <div className="md:hidden flex items-center gap-3">
//           <ThemeToggle />
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label="Open menu"
//             className="p-2 rounded-md border border-neutral-300 dark:border-neutral-700"
//           >
//             {open ? '✕' : '☰'}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 mt-2 rounded-lg shadow`}>
//         <div className="container py-4 flex flex-col gap-4 text-lg">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               to={
//   item === "Home"
//     ? "/"
//     : item === "About"
//     ? "/qualification"            // <-- special-case About
//     : `/${item.toLowerCase()}`
// }

//               onClick={() => setOpen(false)}
//               className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </header>
//   )
// }


import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle.jsx"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", to: "/" },
      { label: "About", to: "/qualification" },
    { label: "Objectives", to: "/projects" },
    { label: "Procedure", to: "/skills" },
    // { label: "About", to: "/qualification" }, // <-- About points to Qualification page
    { label: "Result", to: "/achievements" },
    { label: "Validation", to: "/contact" },
  ]

  return (
    <header className="fixed top-4 inset-x-0 backdrop-blur z-50">
      {/* Navbar container */}
      <div className="container flex items-center justify-between h-16 bg-gray-100 dark:bg-gray-900 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <Link
          to="/"
          className="font-bold text-xl tracking-wide text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
         Car Price Predictor
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex gap-8 text-lg items-center">
          {navItems.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
            >
              {nav.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="p-2 rounded-md border border-neutral-300 dark:border-neutral-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 mt-2 rounded-lg shadow">
          <div className="container py-4 flex flex-col gap-4 text-lg">
            {navItems.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                onClick={() => setOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {nav.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
