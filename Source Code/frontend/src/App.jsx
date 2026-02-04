// import Navbar from './components/Navbar.jsx'
// import Hero from './sections/Hero.jsx'
// import Projects from './sections/Projects.jsx'
// import Skills from './sections/Skills.jsx'
// import Qualification from './sections/Qualification.jsx'
// import Achievements from './sections/Achievements.jsx'
// import Contact from './sections/Contact.jsx'
// import Footer from './components/Footer.jsx'

// export default function App(){ 
//   return (
//     <div>
//       <Navbar/>
//       <main className="container space-y-24 md:space-y-32 mt-20">
//         <Hero/>
//         <Projects/>
//         <Skills/>
//         <Qualification/>
//         <Achievements/>
//         <Contact/>
//       </main>
//       <Footer/>
//     </div>
//   )
// }


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'

// // Import sections as pages
// import Hero from './sections/Hero.jsx'
// import Projects from './sections/Projects.jsx'
// import Skills from './sections/Skills.jsx'
// import Qualification from './sections/Qualification.jsx'
// import Achievements from './sections/Achievements.jsx'
// import Contact from './sections/Contact.jsx'

// function App() {
//   return (
//     <Router>
//       <Navbar />

//       <main className="container space-y-24 md:space-y-32 mt-20">
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Skills />} />
//           <Route path="/qualification" element={<Qualification />} />
//           <Route path="/achievements" element={<Achievements />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>

//       <Footer />
//     </Router>
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'

// import Hero from './sections/Hero.jsx'
// import Projects from './sections/Projects.jsx'
// import Skills from './sections/Skills.jsx'
// import Qualification from './sections/Qualification.jsx'
// import Achievements from './sections/Achievements.jsx'
// import Contact from './sections/Contact.jsx'

// function App() {
//   return (
//     <Router>
//       {/* flex column, full screen height */}
//       <div className="flex flex-col min-h-screen">
//         <Navbar />

//         {/* main grows to fill available space */}
//         <main className="flex-grow container space-y-24 md:space-y-32 mt-20">
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/skills" element={<Skills />} />
//             <Route path="/qualification" element={<Qualification />} />
//             <Route path="/achievements" element={<Achievements />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"

// Import sections (used as pages)
import Hero from "./sections/Hero.jsx"
import Projects from "./sections/Projects.jsx"
import Skills from "./sections/Skills.jsx"
import Qualification from "./sections/Qualification.jsx"
import Achievements from "./sections/Achievements.jsx"
import Contact from "./sections/Contact.jsx"

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar is always visible */}
        <Navbar />

        {/* Page content switches based on route */}
        <main className="flex-grow container space-y-24 md:space-y-32 mt-20">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/qualification" element={<Qualification />} /> {/* About page */}
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
