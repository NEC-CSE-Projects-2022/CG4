import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="mt-24 border-t border-neutral-200 dark:border-neutral-800 py-8 bg-gray-100 dark:bg-gray-900 transition-colors relative">
      <div className="container text-center">
        <div className="text-base md:text-lg text-gray-800 dark:text-gray-200">
          © {new Date().getFullYear()} Pre-Owned Car Price Prediction. All rights reserved.
        </div>
      </div>

      {/* Floating arrow button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  )
}
