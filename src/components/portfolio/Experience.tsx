"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { experienceData, experienceContent } from "@/data/data"

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

export function Experience() {
    return (
        <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">{experienceContent.title}</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        {experienceContent.subtitle}
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {experienceData.map((experience) => (
                            <motion.div key={experience.id} variants={fadeInUp} className="relative flex items-start space-x-6">
                                <div className={`flex-shrink-0 w-16 h-16 ${experience.isCurrent ? 'bg-primary' : 'bg-muted'} rounded-full flex items-center justify-center relative z-10`}>
                                    <experience.icon className={`h-8 w-8 ${experience.isCurrent ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                </div>
                                <Card className="flex-1">
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <CardTitle className="text-xl">{experience.title}</CardTitle>
                                                <CardDescription className="text-lg font-medium text-primary">
                                                    {experience.company}
                                                </CardDescription>
                                                <p className="text-sm text-muted-foreground mt-1">{experience.client}</p>
                                            </div>
                                            <Badge variant={experience.isCurrent ? "secondary" : "outline"} className="flex items-center">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {experience.period}
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {experience.achievements.map((achievement, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-3 text-foreground">Responsibilities</h4>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    {experience.responsibilities.map((responsibility, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
