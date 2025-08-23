"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Mail, ArrowDown, Sparkles, TrendingUp, Award } from "lucide-react"

export function Hero() {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('section:nth-of-type(2)')
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-30" />

                {/* Floating Elements - Very Subtle */}
                <motion.div
                    className="absolute top-32 left-16 w-48 h-48 bg-gradient-to-r from-blue-200/10 to-indigo-200/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, -20, 0],
                        x: [0, 15, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-r from-indigo-200/10 to-purple-200/10 rounded-full blur-3xl"
                    animate={{
                        y: [0, 20, 0],
                        x: [0, -15, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >

                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base text-slate-600 dark:text-slate-400 font-medium mb-3"
                        >
                            Hello, I'm
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                        >
                            <span
                                className="  text-blue-600 dark:text-blue-400  ">
                                Venkatesh Vynala
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-slate-800 dark:text-slate-100 font-bold"
                        >
                            Power BI Developer & Business Intelligence Specialist
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-base text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Transforming complex datasets into actionable insights with expertise in Power BI, DAX, data modeling, and dashboard development. Certified Microsoft Power BI Data Analyst with 3+ years of experience.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8"
                        >
                            <Button
                                size="default"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Download Resume
                            </Button>

                            <Button
                                size="default"
                                variant="outline"
                                className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300"
                            >
                                <Mail className="h-4 w-4 mr-2" />
                                Contact Me
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="grid grid-cols-3 gap-4 max-w-xs mx-auto lg:mx-0"
                        >
                            {[
                                { number: "3+", label: "Years", icon: TrendingUp },
                                { number: "50+", label: "Projects", icon: Award },
                                { number: "100%", label: "Success", icon: Sparkles },
                            ].map((stat, index) => (
                                <div key={stat.label} className="text-center">
                                    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-2 mx-auto">
                                        <stat.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Profile Picture Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="relative w-64 h-64 lg:w-72 lg:h-72"
                            >
                                {/* Background Circle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-800/30 dark:to-indigo-800/30 rounded-full blur-2xl opacity-60" />

                                {/* Profile Picture Frame */}
                                <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-1.5 shadow-xl">
                                    {/* Placeholder for Profile Picture */}
                                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                                        <div className="text-center p-6">
                                            <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                                                <span className="text-2xl font-bold text-white">VV</span>
                                            </div>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                                Add your profile picture here
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements Around Profile */}
                                <motion.div
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-md"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-white text-xs">⭐</span>
                                </motion.div>

                                <motion.div
                                    className="absolute -bottom-2 -left-2 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center shadow-md"
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-white text-xs">💡</span>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToNextSection}
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
                    aria-label="Scroll to next section"
                >
                    <span className="text-xs mb-1 font-medium">Scroll Down</span>
                    <ArrowDown className="h-4 w-4" />
                </motion.button>
            </motion.div>
        </section>
    )
}
