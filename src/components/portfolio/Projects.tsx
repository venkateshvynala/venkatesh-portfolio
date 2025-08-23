"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Eye, X, ArrowRight, Sparkles, Zap, Target, TrendingUp, Users, Globe, Shield } from "lucide-react"
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
            icon: TrendingUp,
            color: "from-blue-500 to-purple-500",
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
            icon: Target,
            color: "from-green-500 to-blue-500",
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
            icon: Users,
            color: "from-orange-500 to-red-500",
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
            icon: Globe,
            color: "from-purple-500 to-pink-500",
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
            icon: Sparkles,
            color: "from-yellow-500 to-orange-500",
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
            icon: Shield,
            color: "from-indigo-500 to-purple-500",
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
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950" />
                
                {/* Floating Elements */}
                <motion.div
                    className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl"
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 30, 0],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 blur-3xl"
                    animate={{
                        y: [0, 40, 0],
                        x: [0, -30, 0],
                    }}
                    transition={{
                        duration: 22,
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
                            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6 shadow-2xl shadow-green-500/30"
                        >
                            <Zap className="h-10 w-10 text-white" />
                        </motion.div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Featured Projects
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A showcase of my Power BI development work and data visualization expertise
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project, index) => (
                            <motion.div key={index} variants={fadeInUp}>
                                <Card className="group h-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden">
                                    {/* Project Image */}
                                    <div
                                        className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-t-lg overflow-hidden relative"
                                        onClick={() => setSelectedImage(project.image)}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-gray-300/50 dark:from-gray-700/50 dark:to-gray-800/50" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-2xl`}>
                                                <project.icon className="h-10 w-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                            <Eye className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <CardHeader className="pb-4">
                                        <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="pt-0">
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((tech) => (
                                                <Badge 
                                                    key={tech} 
                                                    variant="outline" 
                                                    className="text-xs bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900 dark:hover:to-purple-900 transition-all duration-300"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* View Details Button */}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full group/btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                            onClick={() => setSelectedProject(project)}
                                        >
                                            <span className="flex items-center gap-2">
                                                <ExternalLink className="h-4 w-4" />
                                                View Details
                                                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </Button>
                                    </CardContent>

                                    {/* Hover Effect Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg pointer-events-none`} />
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
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
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
                            className="absolute top-4 right-4 z-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                        <img
                            src={selectedImage || "/placeholder.svg"}
                            alt="Project screenshot"
                            className="w-full h-full object-contain rounded-lg shadow-2xl"
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
                    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        className="relative max-w-4xl max-h-[90vh] w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="overflow-y-auto max-h-[90vh]">
                            {/* Header with Image */}
                            <div className="relative">
                                <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                                    <div className={`w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl`}>
                                        <selectedProject.icon className="h-12 w-12 text-white" />
                                    </div>
                                </div>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                                    onClick={() => setSelectedProject(null)}
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                                    {selectedProject.fullDescription}
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                    {/* Features */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                            <Sparkles className="h-5 w-5 text-blue-500" />
                                            Key Features
                                        </h3>
                                        <ul className="space-y-3">
                                            {selectedProject.features.map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech & Impact */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                            <Zap className="h-5 w-5 text-green-500" />
                                            Technologies Used
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {selectedProject.tech.map((tech: string) => (
                                                <Badge key={tech} variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 flex items-center gap-2">
                                            <Target className="h-5 w-5 text-orange-500" />
                                            Business Impact
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {selectedProject.impact}
                                        </p>
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
