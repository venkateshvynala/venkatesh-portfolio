"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Eye, X } from "lucide-react"
import { useState } from "react"

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

export function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [selectedProject, setSelectedProject] = useState<any>(null)

    const projects = [
        {
            title: "Sales Performance Dashboard",
            description: "Comprehensive sales analytics with KPI tracking, trend analysis, and regional performance metrics",
            tech: ["Power BI", "DAX", "SQL Server"],
            image: "/sales-dashboard.png",
            fullDescription:
                "A comprehensive sales performance dashboard that provides real-time insights into sales metrics, regional performance, and trend analysis. Features include interactive KPI cards, drill-down capabilities, and automated alerts for performance thresholds.",
            features: [
                "Real-time KPI tracking",
                "Regional performance analysis",
                "Trend forecasting",
                "Interactive drill-downs",
                "Automated alerts",
            ],
            impact: "Improved sales visibility by 40% and reduced reporting time by 60%",
        },
        {
            title: "Financial Reporting Suite",
            description: "Automated financial reports with drill-down capabilities and variance analysis",
            tech: ["Power BI", "Power Query", "Excel"],
            image: "/financial-dashboard.png",
            fullDescription:
                "An automated financial reporting suite that streamlines monthly and quarterly financial reporting processes. Includes variance analysis, budget vs actual comparisons, and executive summary dashboards.",
            features: [
                "Automated report generation",
                "Variance analysis",
                "Budget tracking",
                "Executive summaries",
                "Multi-currency support",
            ],
            impact: "Reduced financial reporting time by 70% and improved accuracy by 95%",
        },
        {
            title: "HR Analytics Platform",
            description: "Employee performance tracking, attrition analysis, and workforce planning insights",
            tech: ["Power BI", "Azure SQL", "DAX"],
            image: "/hr-analytics-dashboard.png",
            fullDescription:
                "A comprehensive HR analytics platform that provides insights into employee performance, attrition patterns, and workforce planning. Includes predictive analytics for talent retention and recruitment optimization.",
            features: [
                "Performance tracking",
                "Attrition prediction",
                "Workforce planning",
                "Talent analytics",
                "Diversity metrics",
            ],
            impact: "Reduced employee turnover by 25% through predictive analytics",
        },
        {
            title: "Supply Chain Optimization",
            description: "Real-time inventory tracking and supply chain performance monitoring",
            tech: ["Power BI", "Power Automate", "SharePoint"],
            image: "/supply-chain-dashboard.png",
            fullDescription:
                "A real-time supply chain optimization dashboard that monitors inventory levels, supplier performance, and logistics efficiency. Includes automated alerts and predictive analytics for demand forecasting.",
            features: [
                "Real-time inventory tracking",
                "Supplier performance monitoring",
                "Demand forecasting",
                "Logistics optimization",
                "Cost analysis",
            ],
            impact: "Optimized inventory levels reducing costs by 30% and improving delivery times by 20%",
        },
        {
            title: "Customer Insights Dashboard",
            description: "Customer behavior analysis with segmentation and lifetime value calculations",
            tech: ["Power BI", "Azure", "Power Query"],
            image: "/customer-analytics-dashboard.png",
            fullDescription:
                "A customer insights dashboard that analyzes customer behavior, segments customers based on various criteria, and calculates customer lifetime value. Includes churn prediction and personalization recommendations.",
            features: [
                "Customer segmentation",
                "Lifetime value calculation",
                "Churn prediction",
                "Behavior analysis",
                "Personalization insights",
            ],
            impact: "Increased customer retention by 35% and improved marketing ROI by 50%",
        },
        {
            title: "Paginated Reports System",
            description: "Automated generation of formatted reports for regulatory compliance",
            tech: ["Power BI Report Builder", "SQL", "SSRS"],
            image: "/paginated-report-template.png",
            fullDescription:
                "An automated paginated reports system designed for regulatory compliance and formal business reporting. Features pixel-perfect formatting, automated distribution, and compliance tracking.",
            features: [
                "Pixel-perfect formatting",
                "Automated distribution",
                "Compliance tracking",
                "Multi-format export",
                "Scheduled delivery",
            ],
            impact: "Achieved 100% compliance reporting accuracy and reduced manual effort by 80%",
        },
    ]

    return (
        <>
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A showcase of my Power BI development work and data visualization expertise
                        </p>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    <div
                                        className="aspect-video bg-muted rounded-t-lg overflow-hidden relative"
                                        onClick={() => setSelectedImage(project.image)}
                                    >
                                        <img
                                            src={project.image || "/placeholder.svg"}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full bg-transparent"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <ExternalLink className="h-4 w-4 mr-2" />
                                            View Details
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="relative max-w-4xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Project screenshot"
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Project Details Modal */}
            {selectedProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="relative max-w-4xl max-h-[90vh] w-full bg-background rounded-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="overflow-y-auto max-h-[90vh]">
                            <div className="relative">
                                <img
                                    src={selectedProject.image || "/placeholder.svg"}
                                    alt={selectedProject.title}
                                    className="w-full h-64 object-cover"
                                />
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                                <p className="text-muted-foreground mb-6">{selectedProject.fullDescription}</p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="font-semibold mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {selectedProject.tech.map((tech: string) => (
                                                <Badge key={tech} variant="outline">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <h3 className="font-semibold mb-2">Business Impact</h3>
                                        <p className="text-sm text-muted-foreground">{selectedProject.impact}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    )
}
