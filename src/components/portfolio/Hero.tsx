"use client"
import ProfileImg from "@/assets/venky_img.jpg"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Database, ChevronDown, BarChart3, Calendar } from "lucide-react"
import { fadeInUp, staggerContainer } from "@/components/theme/animation-variants"
import Resume from "@/assets/VYNALA_VENKATESH.pdf"
import { heroData } from "@/data/data"

interface HeroProps {
    scrollToSection: (sectionId: string) => void
}


export function Hero({ scrollToSection }: HeroProps) {
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollIndicator(window.scrollY <= 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/50 via-transparent to-pink-50/50 dark:from-cyan-950/50 dark:to-pink-950/50" />

            {/* Floating Background Shapes */}
            <motion.div
                className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full ">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div variants={staggerContainer} initial="initial" animate="animate" className="text-center lg:text-left">
                        <motion.div variants={fadeInUp} className="mb-6">
                            <motion.span
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium font-poppins mb-4"
                            >
                                {heroData.greeting}
                            </motion.span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-slate-900 dark:text-white mb-4 leading-tight"
                        >
                            {heroData.name}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                                className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2"
                            >
                                {heroData.title}
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-inter max-w-2xl mx-auto lg:mx-0"
                        >
                            {heroData.description}
                            <span className=""></span>
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    to={Resume}
                                    // to="https://www.canva.com/design/DAFj-JlZs_I/lYKRtoro-a54diJcflWvuA/view?utm_content=DAFj-JlZs_I&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-medium px-8 py-3 rounded-full shadow-lg"
                                >
                                    {heroData.resumeButton}
                                </Link>
                            </motion.div>
                            <motion.div onClick={() => scrollToSection('projects')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <span
                                    className="cursor-pointer font-poppins font-medium px-8 py-3 rounded-full border-2 hover:bg-blue-50 dark:hover:bg-slate-800"
                                >
                                    {heroData.projectsButton}

                                </span>
                                {/* </a> */}
                            </motion.div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start space-x-4">
                            {heroData.socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target={social.href.startsWith("http") ? "_blank" : undefined}
                                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 ${social.color} transition-all duration-300`}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 100 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
                        className="relative"
                    >
                        <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                            {/* Background decorations */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20 blur-xl"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                                className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-lg"
                            />

                            {/* Main image container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                                    <img src={ProfileImg} alt="Venu Gopal Reddy V" className="w-full h-full object-cover object-bottom scale-110" />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                            >
                                <Database className="h-6 w-6 text-blue-600" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                            >
                                <Calendar className="h-6 w-6 text-purple-600" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [-3, 7, -3] }}
                                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                                className="absolute top-1/2 -left-8 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg border border-slate-200 dark:border-slate-700"
                            >
                                <BarChart3 className="h-6 w-6 text-green-600" />
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                {/* Scroll indicator */}
                {showScrollIndicator && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
                        onClick={() => {
                            const aboutSection = document.getElementById('about');
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                            className="flex flex-col items-center space-y-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                        >
                            <span className="text-sm font-poppins">{heroData.scrollText}</span>
                            <ChevronDown className="h-5 w-5" />
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
