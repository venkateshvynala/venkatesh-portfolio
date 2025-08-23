"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Database, Code, Award, Shield, Globe, Zap } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export function Skills() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Technical Skills</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive expertise across Business Intelligence, Data Analytics, and DevOps tools
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-3 gap-8"
                >
                    {/* BI & Visualization */}
                    <motion.div variants={fadeInUp}>
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <BarChart3 className="h-6 w-6 text-primary" />
                                    <CardTitle className="text-lg">BI & Visualization</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: "Power BI", level: 95 },
                                    { name: "DAX", level: 90 },
                                    { name: "Power Query", level: 88 },
                                    { name: "Excel", level: 85 },
                                ].map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <motion.div
                                                className="bg-primary h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Databases & ETL */}
                    <motion.div variants={fadeInUp}>
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Database className="h-6 w-6 text-primary" />
                                    <CardTitle className="text-lg">Databases & ETL</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: "SQL Server", level: 88 },
                                    { name: "SharePoint", level: 80 },
                                    { name: "Data Modeling", level: 92 },
                                    { name: "Star & Snowflake", level: 85 },
                                ].map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <motion.div
                                                className="bg-primary h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* DevOps & Project Tools */}
                    <motion.div variants={fadeInUp}>
                        <Card className="h-full">
                            <CardHeader>
                                <div className="flex items-center space-x-3">
                                    <Code className="h-6 w-6 text-primary" />
                                    <CardTitle className="text-lg">DevOps & Project Tools</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: "Azure DevOps", level: 85 },
                                    { name: "JIRA (Admin)", level: 90 },
                                    { name: "Jenkins", level: 75 },
                                    { name: "Git", level: 80 },
                                ].map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium">{skill.name}</span>
                                            <span className="text-xs text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-muted rounded-full h-2">
                                            <motion.div
                                                className="bg-primary h-2 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Certifications</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { name: "PL-300: Microsoft Certified Power BI Data Analyst Associate", icon: Award },
                            { name: "AZ-900: Microsoft Certified Azure Fundamentals", icon: Shield },
                            { name: "Google Cloud: Associate Cloud Engineer", icon: Globe },
                            { name: "Udemy: Power BI Desktop for Business Intelligence", icon: Zap },
                            { name: "Udemy: Complete SQL Bootcamp – From Zero to Hero", icon: Database },
                        ].map((cert, index) => (
                            <motion.div key={index} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="text-center p-4">
                                    <cert.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <p className="text-sm font-medium">{cert.name}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
