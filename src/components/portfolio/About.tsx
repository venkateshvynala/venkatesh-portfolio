"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, TrendingUp, Database } from "lucide-react"

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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={slideInLeft}>
                        <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Certified Power BI Developer with over 3+ years of proven experience in Business Intelligence, Data
                            Modeling, and Dashboard Development. Skilled at transforming complex datasets into actionable insights
                            that enhance decision-making and operational efficiency.
                        </p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Specialized in end-to-end BI solution development using Power BI, SQL, Azure DevOps, and JIRA. Expert in
                            designing optimized data models with Star/Snowflake schema and implementing Row-Level Security (RLS)
                            with performance tuning using DAX and Power Query.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Power BI", "DAX", "Power Query", "SQL Server", "Azure DevOps", "JIRA", "Data Modeling", "RLS"].map(
                                (skill) => (
                                    <motion.div key={skill} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Badge variant="secondary">{skill}</Badge>
                                    </motion.div>
                                ),
                            )}
                        </div>
                    </motion.div>
                    <motion.div variants={slideInRight} className="grid grid-cols-2 gap-4">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <p className="font-semibold">50+</p>
                                    <p className="text-sm text-muted-foreground">JIRA Boards Managed</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <p className="font-semibold">10+</p>
                                    <p className="text-sm text-muted-foreground">Scrum Teams Supported</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <p className="font-semibold">40%</p>
                                    <p className="text-sm text-muted-foreground">Reporting Time Reduced</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="text-center">
                                <CardContent className="pt-6">
                                    <Database className="h-8 w-8 text-primary mx-auto mb-2" />
                                    <p className="font-semibold">3+</p>
                                    <p className="text-sm text-muted-foreground">Years Experience</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
