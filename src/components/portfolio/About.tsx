"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Brain } from "lucide-react"
import { aboutSkills, aboutStats, aboutContent } from "@/data/data"

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
}

const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
}

export function About() {

    return (
        <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl shadow-purple-500/30"
                    >
                        <Brain className="h-10 w-10 text-white" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            {aboutContent.title}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {aboutContent.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Content */}
                    <motion.div variants={slideInLeft} className="space-y-8">
                        <div className="space-y-6">
                            <motion.p
                                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {aboutContent.description1}
                            </motion.p>

                            <motion.p
                                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {aboutContent.description2}
                            </motion.p>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                {aboutContent.skillsTitle}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {aboutSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group"
                                    >
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer`}>
                                            <div className="flex items-center gap-2">
                                                <skill.icon className="h-4 w-4 text-white" />
                                                <span className="text-xs font-medium text-white truncate">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Stats Cards */}
                    <motion.div variants={slideInRight} className="grid grid-cols-2 gap-6">
                        {aboutStats.map((stat) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: stat.delay, type: "spring", stiffness: 300 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="group"
                            >
                                <Card className="h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                    <CardContent className="p-6 text-center relative">
                                        {/* Background Gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                                        {/* Icon */}
                                        <div className={`relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <stat.icon className="h-8 w-8 text-white" />
                                        </div>

                                        {/* Number */}
                                        <div className="relative z-10 text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                                            {stat.number}
                                        </div>

                                        {/* Label */}
                                        <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400 font-medium leading-tight">
                                            {stat.label}
                                        </div>

                                        {/* Hover Effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`} />
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
