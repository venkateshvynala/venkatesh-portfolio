"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, ArrowUp } from "lucide-react"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900" />
            
            {/* Floating Elements */}
            <motion.div
                className="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-10 right-1/4 w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl"
                animate={{
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="text-center mb-12">
                    {/* Logo/Brand */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl shadow-purple-500/30"
                    >
                        <Sparkles className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    {/* Name */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl font-bold mb-4"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Vynala Venkatesh
                        </span>
                    </motion.h3>
                    
                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transforming data into insights, one dashboard at a time. 
                        Passionate about business intelligence and data visualization.
                    </motion.p>
                </div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
                >
                    {[
                        { title: "About", href: "#about" },
                        { title: "Experience", href: "#experience" },
                        { title: "Projects", href: "#projects" },
                        { title: "Skills", href: "#skills" },
                        { title: "Education", href: "#education" },
                        { title: "Contact", href: "#contact" },
                        { title: "Resume", href: "#resume" },
                        { title: "Blog", href: "#blog" },
                    ].map((link, index) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            whileHover={{ y: -2, scale: 1.05 }}
                            className="text-gray-300 hover:text-white transition-colors duration-300 text-center group"
                        >
                            <span className="relative">
                                {link.title}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8"
                />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="text-gray-400 text-center md:text-left"
                    >
                        <p className="flex items-center justify-center md:justify-start gap-2">
                            © 2024 Vynala Venkatesh. Made with 
                            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
                            and lots of coffee ☕
                        </p>
                    </motion.div>

                    {/* Back to Top Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <ArrowUp className="h-5 w-5" />
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.button>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="mt-8 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        Built with React, TypeScript, Tailwind CSS, and Framer Motion
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Hosted on Vercel • Designed with ❤️ in Hyderabad, India
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}
