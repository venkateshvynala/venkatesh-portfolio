"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme/ToggleTheme"
import {
    Download,
    ExternalLink,
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    BarChart3,
    Database,
    TrendingUp,
    Users,
    Calendar,
    Award,
    GraduationCap,
    Briefcase,
    Building2,
    Code,
    Shield,
    Zap,
    Globe,
    X,
    Eye,
    Twitter,
    Instagram,
} from "lucide-react"
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

function Portfolio() {
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
        <div className="min-h-screen bg-background">
            {/* Navigation */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="font-bold text-xl text-primary"
                        >
                            VV
                        </motion.div>
                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-6xl font-bold text-foreground mb-6"
                        >
                            Vynala Venkatesh
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl sm:text-2xl text-muted-foreground mb-4"
                        >
                            Certified Power BI Developer | Business Intelligence Expert
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
                        >
                            Transforming complex datasets into actionable insights with 3+ years of proven experience in Business
                            Intelligence, Data Modeling, and Dashboard Development
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button size="lg" className="bg-primary hover:bg-primary/90">
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </Button>
                            <Button size="lg" variant="outline">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                View Projects
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
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

            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Ready to discuss how I can help transform your data into actionable insights? Let's connect and explore
                            opportunities together.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <Card>
                            <CardContent className="pt-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Contact Information */}
                                    <motion.div variants={fadeInUp}>
                                        <h3 className="text-xl font-semibold mb-6 text-foreground">Contact Information</h3>
                                        <div className="space-y-4">
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                            >
                                                <Mail className="h-5 w-5 text-primary" />
                                                <span>venkateshvynala001@gmail.com</span>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                            >
                                                <Phone className="h-5 w-5 text-primary" />
                                                <span>+91 9642594022</span>
                                            </motion.div>
                                            <motion.div
                                                whileHover={{ x: 5 }}
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                            >
                                                <MapPin className="h-5 w-5 text-primary" />
                                                <span>Hyderabad, India</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Social Media Links */}
                                    <motion.div variants={fadeInUp}>
                                        <h3 className="text-xl font-semibold mb-6 text-foreground">Follow Me</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent" asChild>
                                                    <a
                                                        href="https://linkedin.com/in/venkatesh-vynala-43b8b81a8"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <Linkedin className="h-6 w-6" />
                                                        <span className="text-sm">LinkedIn</span>
                                                    </a>
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                    <Github className="h-6 w-6" />
                                                    <span className="text-sm">GitHub</span>
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                    <Twitter className="h-6 w-6" />
                                                    <span className="text-sm">Twitter</span>
                                                </Button>
                                            </motion.div>
                                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                                <Button variant="outline" className="w-full h-16 flex-col space-y-2 bg-transparent">
                                                    <Instagram className="h-6 w-6" />
                                                    <span className="text-sm">Instagram</span>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
            >
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-muted-foreground">© 2024 Vynala Venkatesh. All rights reserved.</p>
                </div>
            </motion.footer>

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
        </div>
    )
}
export default Portfolio