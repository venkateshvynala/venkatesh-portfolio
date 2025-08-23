"use client"

import {
    Hero,
    About,
    Experience,
    Projects,
    Skills,
    Education,
    Contact,
    Footer,
    Navigation
} from "@/components/portfolio"

function Portfolio() {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
            <Footer />
        </div>
    )
}

export default Portfolio