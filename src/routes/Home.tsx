"use client"
import { motion } from "framer-motion"
import {
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Contact,
    Navigation
} from "@/components/portfolio"
import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

function Portfolio() {
    const [activeSection, setActiveSection] = useState("home")
    const [showScrollTop, setShowScrollTop] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400)

            // Update active section based on scroll position
            const sections = ["home", "about", "experience", "projects", "skills", "education", "contact"]
            const current = sections.find((section) => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 100 && rect.bottom >= 100
                }
                return false
            })
            if (current) setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }


    return (
        <div className="min-h-screen">
            <div className="fixed inset-0 -z-10 dark:hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 via-transparent to-pink-50/50" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            </div>
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection} scrollToSection={scrollToSection} />
            <Hero scrollToSection={scrollToSection} />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            {/* Scroll to Top Button */}
            {showScrollTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg z-40 transition-all duration-300"
                >
                    <ArrowUp className="h-6 w-6" />
                </motion.button>
            )}
        </div>
    )
}

export default Portfolio