"use client"

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

function Portfolio() {
    return (
        <div className="min-h-screen bg-background">
            <div className="fixed inset-0 -z-10 dark:hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 via-transparent to-pink-50/50" />
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />
            </div>
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />

        </div>
    )
}

export default Portfolio