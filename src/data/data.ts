import { Linkedin, Mail, Phone, BarChart3, Users, Database, Brain, Target, Zap, Lightbulb, Shield, PieChart, Building2, Briefcase, Award, Globe, RefreshCw, Layers, MapPin, Github } from "lucide-react"
import { IT_PROJECTS_COUNT, OPEN_INCIDENTS_COUNT, EXPERIENCE_YEARS, JIRA_BOARDS_MANAGED, SCRUM_TEAMS_SUPPORTED, REPORTS_GENERATED, SPRINT_PLANNING_IMPROVEMENT, AUTOMATION_REDUCTION } from "@/constants/constants"

// Hero Section Data
export const heroData = {
    name: "Venkatesh Vynala",
    title: "Power BI Developer",
    greeting: "👋 Hello, I'm",
    description: `Certified Power BI Deveoper with ${EXPERIENCE_YEARS} years of experience in Business Intelligence, Data Modeling, and Dashboard Development. Skilled in Power BI, SQL, Azure DevOps, JIRA administration, and CI/CD automation.`,
    resumeButton: "Check My Resume",
    projectsButton: "Visit Dashboards",
    scrollText: "Scroll to explore",
    socialLinks: [
        { icon: Linkedin, href: "https://www.linkedin.com/in/venkatesh-vynala-43b8b81a8/", color: "hover:text-blue-600" },
        { icon: Mail, href: "mailto:venkateshvynala001@gmail.com", color: "hover:text-red-600" },
        { icon: Phone, href: "tel:+919642594022", color: "hover:text-purple-600" },
    ]
}

// About Section Data
export const aboutSkills = [
    { name: "Power BI", color: "from-blue-500 to-purple-500", icon: BarChart3 },
    { name: "DAX", color: "from-green-500 to-blue-500", icon: Brain },
    { name: "Power Query", color: "from-orange-500 to-red-500", icon: Zap },
    { name: "SQL Server", color: "from-purple-500 to-pink-500", icon: Database },
    { name: "Azure DevOps", color: "from-blue-600 to-cyan-500", icon: Target },
    { name: "JIRA", color: "from-yellow-500 to-orange-500", icon: Lightbulb },
    { name: "Data Modeling", color: "from-indigo-500 to-purple-500", icon: BarChart3 },
    { name: "RLS", color: "from-emerald-500 to-teal-500", icon: Shield },
]

export const aboutStats = [
    {
        icon: BarChart3,
        number: JIRA_BOARDS_MANAGED,
        label: "JIRA Boards Managed",
        color: "from-blue-500 to-purple-500",
        delay: 0.1
    },
    {
        icon: Users,
        number: SCRUM_TEAMS_SUPPORTED,
        label: "Scrum Teams Supported",
        color: "from-green-500 to-blue-500",
        delay: 0.2
    },
    {
        icon: PieChart,
        number: REPORTS_GENERATED,
        label: "Reports generated",
        color: "from-orange-500 to-red-500",
        delay: 0.3
    },
    {
        icon: Database,
        number: EXPERIENCE_YEARS,
        label: "Years Experience",
        color: "from-pink-500 to-purple-500",
        delay: 0.4
    },
]

export const aboutContent = {
    title: "About Me",
    subtitle: "A passionate Power BI Developer with a creative approach to data visualization and business intelligence",
    description1: `Certified Power BI Developer with over ${EXPERIENCE_YEARS} years of proven experience in Business Intelligence, Data Modeling, and Dashboard Development. Skilled at transforming complex datasets into actionable insights that enhance decision-making and operational efficiency.`,
    description2: "Specialized in end-to-end BI solution development using Power BI, SQL, Azure DevOps, and JIRA. Expert in designing optimized data models with Star/Snowflake schema and implementing Row-Level Security (RLS) with performance tuning using DAX and Power Query.",
    skillsTitle: "Core Skills & Technologies"
}

// Experience Section Data
export const experienceData = [
    {
        id: 1,
        title: "System Engineer – Power BI Developer",
        company: "Tata Consultancy Services (TCS)",
        client: "Client: Zebra Technologies | Hyderabad",
        period: "June 2023 – Present",
        icon: Building2,
        isCurrent: true,
        achievements: [
            "Designed interactive Power BI dashboards integrating SQL Server, JIRA, SharePoint, Excel, and Azure DevOps",
            `Developed custom metrics for Agile performance tracking, improving sprint planning accuracy by ${SPRINT_PLANNING_IMPROVEMENT}`,
            "Engineered enterprise-grade data models using Star/Snowflake schemas with DAX optimization"
        ],
        responsibilities: [
            "Enabled secure role-based data access via Row-Level Security (RLS)",
            `Administered ${JIRA_BOARDS_MANAGED} JIRA boards with automated workflows and permission schemes`,
            `Automated data refresh and deployment pipelines using Jenkins, reducing manual effort by ${AUTOMATION_REDUCTION}`
        ]
    },
    {
        id: 2,
        title: "Assistant System Engineer – Power BI Developer",
        company: "Tata Consultancy Services (TCS)",
        client: "Client: Vodafone UK Digital | Hyderabad",
        period: "Feb 2022 – May 2023",
        icon: Briefcase,
        isCurrent: false,
        achievements: [
            `Built real-time dashboards highlighting project health metrics for ${SCRUM_TEAMS_SUPPORTED} scrum teams`,
            "Migrated historical data from CSV to Azure DevOps Boards with validation scripts"
        ],
        responsibilities: [
            "Identified delivery risks by monitoring KPIs like burn-down charts and resource allocation",
            "Developed interactive reports with slicers, drill-throughs, bookmarks, and tooltips"
        ]
    }
]

export const experienceContent = {
    title: "Professional Experience",
    subtitle: "My journey in Business Intelligence and Data Analytics at Tata Consultancy Services"
}

// Projects Section Data
export const projectsData = [
    {
        id: 1,
        title: "IT Agile Metrics Report",
        description: `Developed a comprehensive IT Agile Metrics dashboard in Power BI, consolidating key metrics for ${IT_PROJECTS_COUNT} IT projects. This one-stop solution tracks project status, resolution times, benefits realization, and ticket categorization—empowering IT product teams with actionable insights for improved delivery, prioritization, and value measurement across the portfolio.`,
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035600/powerbi-dashboards/IMG-20250824-WA0008_wvev71.jpg",
        technologies: ["PowerBI", "DAX", "JIRA", "Data Modeling"]
    },
    {
        id: 2,
        title: "Defect Detection Efficiency",
        description: "Developed a Power BI dashboard to track and visualize defect detection efficiency across multiple projects and environments. This report enables teams to monitor defect trends, analyze detection rates at key testing stages, and assess resolution progress—driving continuous quality improvement and faster defect closure.",
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0009_loa2qb.jpg",
        technologies: ["PowerBI", "Excel", "JIRA", "Financial Modeling", "KPI Tracking"]
    },
    {
        id: 3,
        title: "ServiceNow Incident Management",
        description: `Designed an interactive Power BI dashboard for ServiceNow Incident Management, visualizing incident age, status progress, and assignment details. This report enables rapid assessment and prioritization of ${OPEN_INCIDENTS_COUNT} open incidents, empowering stakeholders with real-time insights for quicker resolutions and improved service delivery.`,
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0005_lzkdep.jpg",
        technologies: ["PowerBI", "Machine Learning", "Dataflow", "Customer Analytics", "Predictive Modeling"]
    },
    {
        id: 4,
        title: "Contingent Workers Compliance and GRC metrics",
        description: "Created a Power BI dashboard to monitor contingent worker compliance and GRC (Governance, Risk, and Compliance) metrics, providing real-time visibility into worker status, contact details, and certification adherence. This tool streamlines compliance tracking and supports proactive risk management for workforce governance.",
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0007_ohmzfd.jpg",
        technologies: ["PowerBI", "Process Mining", "SQL", "Operational Analytics", "Performance Metrics"]
    },
    {
        id: 5,
        title: "PI Planning Management",
        description: `Developed a comprehensive PMO Power BI dashboard integrating real-time Jira data to deliver strategic, high-level insights into ${IT_PROJECTS_COUNT} IT projects. Designed for PMO stakeholders, the report consolidates project scopes, progress, and alignment statuses into an actionable, visually-driven overview—empowering transparent, data-led decision-making and streamlined project governance across multiple teams.`,
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035598/powerbi-dashboards/IMG-20250824-WA0006_ykawha.jpg",
        technologies: ["PowerBI", "Supply Chain Analytics", "Demand Forecasting", "Inventory Management"]
    },
    {
        id: 6,
        title: "Key IT Programs & Releases",
        description: "Designed a Power BI Gantt chart dashboard to visualize key IT programs and release schedules, detailing all testing events and timelines across multiple projects. This streamlined view enhances cross-team coordination, supports proactive planning, and provides clear visibility into release milestones and QA activities.",
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756036986/powerbi-dashboards/WhatsApp_Image_2025-08-24_at_17.31.23_b1e64f9a_oe7cdt.jpg",
        technologies: ["PowerBI", "JIRA", "SQL", "Power Apps", "ROI Tracking", "Multi-channel Attribution"]
    },
    {
        id: 7,
        title: "Ecommerce Sales Dashboard",
        description: "Designed a dynamic Power BI Ecommerce Sales Dashboard that delivers real-time visibility into sales, profits, and product performance across consumer, corporate, and home office segments. The report features category-wise breakdowns, top and bottom product analytics, regional and shipping insights, and interactive state-level mapping—equipping business leaders with actionable intelligence to optimize sales strategies and drive profitability",
        image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035598/powerbi-dashboards/IMG-20250824-WA0004_rwi2u3.jpg",
        technologies: ["PowerBI", "Marketing Analytics", "ROI Tracking", "Multi-channel Attribution"]
    }
]

export const projectsContent = {
    title: "My Projects",
    subtitle: "Explore my PowerBI dashboards and data analytics projects that transform raw data into actionable insights"
}

// Skills Section Data
export const skillCategories = [
    {
        title: "Power BI & Visualization",
        icon: BarChart3,
        color: "from-blue-500 to-purple-500",
        skills: [
            "Power BI Desktop",
            "Power BI Service",
            "Power BI Mobile",
            "Power BI Report Server",
            "Custom Visuals",
            "Bookmarks & Drill-throughs",
            "Dashboard Design",
            "Report Layouts"
        ]
    },
    {
        title: "Data Modeling & DAX",
        icon: Database,
        color: "from-green-500 to-blue-500",
        skills: [
            "DAX Formulas",
            "Measures & Calculated Columns",
            "Data Modeling",
            "Star Schema",
            "Snowflake Schema",
            "Time Intelligence",
            "Performance Optimization"
        ]
    },
    {
        title: "Data Transformation & ETL",
        icon: RefreshCw,
        color: "from-orange-500 to-red-500",
        skills: [
            "Power Query (M Language)",
            "Data Cleaning",
            "ETL Processes",
            "Data Validation",
            "Automated Data Refresh",
            "Data Migration (CSV to Azure DevOps)"
        ]
    },
    {
        title: "Data Sources & Integration",
        icon: Layers,
        color: "from-cyan-500 to-blue-500",
        skills: [
            "SQL Server",
            "Excel & SharePoint",
            "Azure DevOps",
            "JIRA Integration",
            "REST APIs",
            "OData",
            "Git/Jenkins CI/CD"
        ]
    },
    {
        title: "DevOps & Jira  Administration",
        icon: Shield,
        color: "from-purple-500 to-pink-500",
        skills: [
            "Azure DevOps Boards",
            "JIRA (Admin & Automation Rules)",
            "Agile/Scrum/SAFe",
            "CI/CD Pipelines (Jenkins)",
            "Role-Based Access Control",
            "Row-Level Security (RLS)"
        ]
    },
    {
        title: "Programming & Automation",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        skills: [
            "Power Platform",
            "Python (Basic)",
            "Automation Scripting",
            "Performance Tuning",
            "Statistical Functions",
            "Forecasting",
            "What-If Analysis"
        ]
    }
]

export const certifications = [
    {
        name: "PL-300: Microsoft Certified Power BI Data Analyst Associate",
        icon: Award,
        color: "from-blue-500 to-purple-500",
        badge: "Microsoft"
    },
    {
        name: "AZ-900: Microsoft Certified Azure Fundamentals",
        icon: Shield,
        color: "from-blue-600 to-cyan-500",
        badge: "Microsoft"
    },
    {
        name: "Google Cloud: Associate Cloud Engineer",
        icon: Globe,
        color: "from-green-500 to-blue-500",
        badge: "Google"
    },
    {
        name: "Udemy: Power BI Desktop for Business Intelligence",
        icon: Zap,
        color: "from-yellow-500 to-orange-500",
        badge: "Udemy"
    },
    {
        name: "Udemy: Complete SQL Bootcamp – From Zero to Hero",
        icon: Database,
        color: "from-purple-500 to-pink-500",
        badge: "Udemy"
    },
]

export const skillsContent = {
    title: "Power BI & BI Skills",
    subtitle: "Comprehensive expertise in Microsoft Power BI ecosystem, data modeling, and business intelligence solutions",
    certificationsTitle: "Certifications & Achievements"
}

// Contact Section Data
export const contactInfo = [
    {
        icon: Mail,
        value: "venkateshvynala001@gmail.com",
        label: "Email",
        color: "from-blue-500 to-purple-500",
        href: "mailto:venkateshvynala001@gmail.com"
    },
    {
        icon: Phone,
        value: "+91 9642594022",
        label: "Phone",
        color: "from-green-500 to-blue-500",
        href: "tel:+919642594022"
    },
    {
        icon: MapPin,
        value: "Hyderabad, India",
        label: "Location",
        color: "from-orange-500 to-red-500",
        href: "#"
    },
]

export const contactSocialLinks = [
    {
        name: "LinkedIn",
        icon: Linkedin,
        color: "from-blue-600 to-blue-700",
        href: "https://linkedin.com/in/venkatesh-vynala-43b8b81a8",
        description: "Professional Network"
    },
    {
        name: "GitHub",
        icon: Github,
        color: "from-gray-700 to-gray-900",
        href: "#",
        description: "Code Repository"
    },
]

export const contactContent = {
    title: "Let's Connect",
    subtitle: "Ready to discuss how I can help transform your data into actionable insights? Let's connect and explore opportunities together.",
    getInTouchTitle: "Get In Touch",
    getInTouchDescription: "I'm always excited to discuss new opportunities, collaborations, or just chat about data analytics and business intelligence. Feel free to reach out through any of these channels!",
    followTitle: "Follow & Connect",
    followDescription: "Stay updated with my latest work, insights, and professional journey. Let's build meaningful connections in the data community!",
    ctaTitle: "Ready to Start a Project?",
    ctaDescription: "Let's discuss how I can help bring your data vision to life with powerful business intelligence solutions and stunning visualizations.",
    ctaButton: "Start a Conversation"
}

// Education Section Data
export const educationList = [
    {
        degree: "Bachelor of Engineering - Civil Engineering",
        institution: "Jayamukhi Institute of Technological Sciences, Warangal",
        year: "July 2021",
        percentage: "78%",
        color: "from-blue-500 to-purple-600",
    },
    {
        degree: "Diploma - Civil Engineering",
        institution: "VMR Polytechnic College, Warangal",
        year: "July 2018",
        percentage: "80%",
        color: "from-green-500 to-emerald-600",
    },
]

export const educationContent = {
    title: "Education"
}

// Navigation Data
export const navigationItems = ["home", "about", "experience", "projects", "skills", "education", "contact"]
export const navigationName = "Venkatesh Vynala"

// Footer Data
export const footerLinks = [
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Skills", href: "#skills" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" },
    { title: "Resume", href: "#resume" },
    { title: "Blog", href: "#blog" },
]

export const footerContent = {
    name: "Vynala Venkatesh",
    tagline: "Transforming data into insights, one dashboard at a time. Passionate about business intelligence and data visualization.",
    copyright: "© 2024 Vynala Venkatesh. Made with",
    techStack: "Built with React, TypeScript, Tailwind CSS, and Framer Motion",
    hosting: "Hosted on Vercel • Designed with ❤️ in Hyderabad, India"
}

