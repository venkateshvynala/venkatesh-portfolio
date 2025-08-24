import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Package, 
  Heart,
  Play,
  ExternalLink,
  ChevronRight,
  Database,
  Eye,
  MousePointer
} from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "Sales Performance Analytics",
    category: "Sales & Marketing",
    type: "interactive",
    description: "Real-time sales dashboard with KPI tracking and predictive analytics",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "DAX", "Power Query", "SQL Server"],
    metrics: { users: "500+", impact: "35% increase", performance: "Real-time" },
    icon: TrendingUp,
    gradient: "bg-gradient-primary",
    features: ["Interactive KPI cards", "Regional performance maps", "Predictive forecasting", "Mobile responsive"],
    demoUrl: "#",
    isLive: true
  },
  {
    id: 2,
    title: "Financial Dashboard Suite",
    category: "Finance",
    type: "image",
    description: "Comprehensive financial reporting with automated variance analysis",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "Excel", "SharePoint", "Power Automate"],
    metrics: { accuracy: "99.8%", time_saved: "40 hours/month", reports: "25+" },
    icon: DollarSign,
    gradient: "bg-gradient-secondary",
    features: ["Automated reporting", "Variance analysis", "Budget tracking", "Executive summaries"],
    isLive: false
  },
  {
    id: 3,
    title: "HR Analytics Platform",
    category: "Human Resources", 
    type: "interactive",
    description: "Employee performance tracking and workforce planning insights",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "Azure SQL", "Power Platform"],
    metrics: { employees: "2000+", retention: "+25%", insights: "Real-time" },
    icon: Users,
    gradient: "bg-gradient-accent",
    features: ["Performance tracking", "Attrition analysis", "Workforce planning", "Diversity metrics"],
    demoUrl: "#",
    isLive: true
  },
  {
    id: 4,
    title: "Supply Chain Optimization",
    category: "Operations",
    type: "image",
    description: "End-to-end supply chain visibility with inventory optimization",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "SAP", "Power Automate"],
    metrics: { cost_reduction: "20%", efficiency: "+30%", visibility: "100%" },
    icon: Package,
    gradient: "bg-gradient-data",
    features: ["Inventory tracking", "Supplier scorecards", "Demand forecasting", "Cost analysis"],
    isLive: false
  },
  {
    id: 5,
    title: "Customer 360 Dashboard",
    category: "Customer Experience",
    type: "interactive",
    description: "Complete customer journey analytics with lifetime value tracking",  
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "Dynamics 365", "Azure"],
    metrics: { satisfaction: "+40%", ltv: "+50%", churn: "-15%" },
    icon: Heart,
    gradient: "bg-gradient-primary",
    features: ["Customer segmentation", "Journey mapping", "Churn prediction", "Satisfaction scoring"],
    demoUrl: "#",
    isLive: true
  },
  {
    id: 6,
    title: "Healthcare Analytics Hub",
    category: "Healthcare",
    type: "image", 
    description: "Patient care analytics with operational efficiency metrics",
    image: "/api/placeholder/600/400",
    technologies: ["Power BI", "FHIR", "Azure Health Bot"],
    metrics: { patients: "10K+", efficiency: "+45%", outcomes: "Improved" },
    icon: BarChart3,
    gradient: "bg-gradient-secondary",
    features: ["Patient outcomes", "Resource optimization", "Quality metrics", "Compliance tracking"],
    isLive: false
  }
];

const categories = ["All", "Sales & Marketing", "Finance", "Human Resources", "Operations", "Customer Experience", "Healthcare"];

export function PowerBIProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-power-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-4 w-96 h-96 bg-power-purple/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-power-green/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center z-20 w-20 h-20 bg-gradient-primary rounded-2xl mb-6 shadow-glow"
          >
            <Database className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-power-blue via-power-purple to-power-green bg-clip-text text-transparent">
              Power BI Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive dashboards and analytics solutions that transform data into actionable business insights
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-interactive'
                  : 'bg-white/80 text-muted-foreground hover:bg-white hover:text-foreground shadow-sm'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {filteredProjects.map((project, index) => (
                    <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        onHoverStart={() => setHoveredProject(project.id)}
                        onHoverEnd={() => setHoveredProject(null)}
                        className="group h-full"
                      >
                        <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-dashboard hover:shadow-interactive transition-all duration-500 overflow-hidden">
                          {/* Project Preview */}
                          <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                            {/* Placeholder for dashboard preview */}  
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50" />
                            
                            {/* Interactive Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className={`w-16 h-16 ${project.gradient} rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 ${hoveredProject === project.id ? 'scale-110' : ''}`}>
                                <project.icon className="w-8 h-8 text-white" />
                              </div>
                            </div>

                            {/* Type Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="bg-white/90 text-slate-700 backdrop-blur-sm">
                                {project.type === 'interactive' ? (
                                  <><MousePointer className="w-3 h-3 mr-1" /> Interactive</>
                                ) : (
                                  <><Eye className="w-3 h-3 mr-1" /> Static</>
                                )}
                              </Badge>
                            </div>

                            {/* Live Badge */}
                            {project.isLive && (
                              <div className="absolute top-4 right-4">
                                <Badge className="bg-power-green text-white animate-pulse-glow">
                                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                                  Live
                                </Badge>
                              </div>
                            )}

                            {/* Hover Overlay */}
                            <div className={`absolute inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}>
                              <div className="absolute bottom-4 left-4 right-4">
                                <motion.div
                                  initial={{ y: 20, opacity: 0 }}
                                  animate={{ y: hoveredProject === project.id ? 0 : 20, opacity: hoveredProject === project.id ? 1 : 0 }}
                                  className="flex gap-2"
                                >
                                  {project.type === 'interactive' && (
                                    <Button size="sm" className="bg-white/90 text-slate-700 hover:bg-white">
                                      <Play className="w-3 h-3 mr-1" />
                                      Demo
                                    </Button>
                                  )}
                                  <Button size="sm" variant="outline" className="bg-white/90 text-slate-700 border-white/50 hover:bg-white">
                                    <ExternalLink className="w-3 h-3 mr-1" />  
                                    View
                                  </Button>
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          {/* Project Info */}
                          <CardContent className="p-6">
                            <div className="flex items-start justify-between mb-3">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-power-blue transition-colors">
                                {project.title}
                              </h3>
                              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-power-blue group-hover:translate-x-1 transition-all" />
                            </div>

                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs bg-power-blue/5 border-power-blue/20 text-power-blue">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge variant="outline" className="text-xs bg-slate-50 border-slate-200 text-slate-600">
                                  +{project.technologies.length - 3}
                                </Badge>
                              )}
                            </div>

                            {/* Key Metrics */}
                            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-100">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-sm font-bold text-power-blue">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key.replace('_', ' ')}</div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl" />
                <CarouselNext className="hidden md:flex -right-12 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl" />
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}