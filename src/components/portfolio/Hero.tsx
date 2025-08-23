"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, Mail, ArrowDown } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
}

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:100px_100px] opacity-40" />
                
                {/* Floating Elements - More Subtle */}
                <motion.div
                    className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
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
                    className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"
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
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content - Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4"
                        >
                            Hello, I'm
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                            <span className="text-slate-800 dark:text-slate-100">
                                Vynala
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Venkatesh
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium"
                        >
                            Certified Power BI Developer & Business Intelligence Expert
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Transforming complex datasets into actionable insights with 3+ years of proven experience in Business Intelligence, Data Modeling, and Dashboard Development.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                        >
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Download className="h-5 w-5 mr-2" />
                                Download Resume
                            </Button>
                            
                            <Button 
                                size="lg" 
                                variant="outline"
                                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="h-5 w-5 mr-2" />
                                Get In Touch
                            </Button>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
                        >
                            {[
                                { number: "3+", label: "Years Experience" },
                                { number: "50+", label: "Projects Delivered" },
                                { number: "100%", label: "Client Satisfaction" },
                            ].map((stat, index) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Picture */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Profile Picture Container */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="relative w-80 h-80 lg:w-96 lg:h-96"
                            >
                                {/* Background Circle */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 dark:from-blue-800 dark:to-indigo-800 rounded-full blur-2xl opacity-50" />
                                
                                {/* Profile Picture Frame */}
                                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-2 shadow-2xl">
                                    {/* Placeholder for Profile Picture */}
                                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-full flex items-center justify-center overflow-hidden">
                                        <div className="text-center p-8">
                                            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                                                <span className="text-4xl font-bold text-white">VV</span>
                                            </div>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                                Add your profile picture here
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements Around Profile */}
                                <motion.div
                                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <span className="text-white text-xs">⭐</span>
                                </motion.div>
                                
                                <motion.div
                                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                                    animate={{ y: [0, 10, 0] }}
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
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                    <span className="text-sm mb-2">Scroll Down</span>
                    <ArrowDown className="h-6 w-6" />
                </motion.div>
            </motion.div>
        </section>
    )
}
