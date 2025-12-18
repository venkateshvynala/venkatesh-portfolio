"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"
import { skillCategories, certifications, skillsContent } from "@/data/data"

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export function Skills() {
    const scaleIn = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: "easeOut" },
    }

    return (
        <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950" />

            {/* Floating Elements */}
            <motion.div
                className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, -40, 0],
                    x: [0, 30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-10 blur-3xl"
                animate={{
                    y: [0, 40, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 25,
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
                        className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-6 shadow-2xl shadow-blue-500/30"
                    >
                        <Brain className="h-10 w-10 text-white" />
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {skillsContent.title}
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        {skillsContent.subtitle}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className={index === 5 ? "md:col-span-2 lg:col-span-1" : ""}
                        >
                            <Card className="h-full p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center text-xl font-bold font-poppins">
                                        <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}>
                                            <category.icon className="h-5 w-5 text-white" />
                                        </div>
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                            >
                                                <Badge variant="secondary" className="font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                                                    {skill}
                                                </Badge>
                                                {/* <Badge variant="outline" className="font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200">
                                                    {skill}
                                                </Badge> */}
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {skillsContent.certificationsTitle}
                        </span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group"
                            >
                                <Card className="h-full p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <div className="text-center">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                                            <cert.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 line-clamp-3">
                                            {cert.name}
                                        </h4>
                                        <Badge
                                            className={`bg-gradient-to-r ${cert.color} text-white border-0 px-3 py-1`}
                                        >
                                            {cert.badge}
                                        </Badge>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
