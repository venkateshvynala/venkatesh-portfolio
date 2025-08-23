"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
}

export function Education() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Education</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Strong analytical foundation with successful transition to data analytics
                    </p>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="overflow-hidden">
                        <CardHeader className="bg-primary/5">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                        <GraduationCap className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl">Bachelor of Technology (B.Tech)</CardTitle>
                                        <CardDescription className="text-lg font-medium text-primary">Civil Engineering</CardDescription>
                                        <p className="text-muted-foreground mt-1">
                                            Jayamukhi Institute of Technological Sciences - Warangal
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge variant="secondary" className="text-lg px-3 py-1">
                                        CGPA: 7.8/10
                                    </Badge>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Academic Foundation</h4>
                                    <p className="text-muted-foreground mb-4 leading-relaxed">
                                        Strong analytical foundation with coursework in mathematics, statistics, and project management.
                                        Successfully transitioned from civil engineering to data analytics, leveraging problem-solving
                                        skills and attention to detail in business intelligence solutions.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-3 text-foreground">Key Skills Developed</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Mathematics</Badge>
                                        <Badge variant="outline">Statistics</Badge>
                                        <Badge variant="outline">Project Management</Badge>
                                        <Badge variant="outline">Problem Solving</Badge>
                                        <Badge variant="outline">Analytical Thinking</Badge>
                                        <Badge variant="outline">Data Analysis</Badge>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
