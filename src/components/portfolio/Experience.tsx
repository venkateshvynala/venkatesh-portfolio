"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Briefcase, Calendar } from "lucide-react"

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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-foreground mb-4">Professional Experience</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My journey in Business Intelligence and Data Analytics at Tata Consultancy Services
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
                        {/* Current Role */}
                        <motion.div variants={fadeInUp} className="relative flex items-start space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                                <Building2 className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <Card className="flex-1">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">System Engineer – Power BI Developer</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                Tata Consultancy Services (TCS)
                                            </CardDescription>
                                            <p className="text-sm text-muted-foreground mt-1">Client: Zebra Technologies | Hyderabad</p>
                                        </div>
                                        <Badge variant="secondary" className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            June 2023 – Present
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Designed interactive Power BI dashboards integrating SQL Server, JIRA, SharePoint, Excel,
                                                    and Azure DevOps
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Developed custom metrics for Agile performance tracking, improving sprint planning accuracy
                                                    by 20%
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Engineered enterprise-grade data models using Star/Snowflake schemas with DAX optimization
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-3 text-foreground">Responsibilities</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Enabled secure role-based data access via Row-Level Security (RLS)
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Administered 50+ JIRA boards with automated workflows and permission schemes
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Automated data refresh and deployment pipelines using Jenkins, reducing manual effort by 40%
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Previous Role */}
                        <motion.div variants={fadeInUp} className="relative flex items-start space-x-6">
                            <div className="flex-shrink-0 w-16 h-16 bg-muted rounded-full flex items-center justify-center relative z-10">
                                <Briefcase className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <Card className="flex-1">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <CardTitle className="text-xl">Assistant System Engineer – Power BI Developer</CardTitle>
                                            <CardDescription className="text-lg font-medium text-primary">
                                                Tata Consultancy Services (TCS)
                                            </CardDescription>
                                            <p className="text-sm text-muted-foreground mt-1">Client: Vodafone UK Digital | Hyderabad</p>
                                        </div>
                                        <Badge variant="outline" className="flex items-center">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            Feb 2022 – May 2023
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 text-foreground">Key Achievements</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Built real-time dashboards highlighting project health metrics for 10+ scrum teams
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Migrated historical data from CSV to Azure DevOps Boards with validation scripts
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-3 text-foreground">Responsibilities</h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Identified delivery risks by monitoring KPIs like burn-down charts and resource allocation
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    Developed interactive reports with slicers, drill-throughs, bookmarks, and tooltips
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
