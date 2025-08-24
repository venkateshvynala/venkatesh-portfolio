import React, { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    description: "Comprehensive sales analytics dashboard showing revenue trends, customer segmentation, and regional performance metrics with interactive visualizations.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035600/powerbi-dashboards/IMG-20250824-WA0008_wvev71.jpg",
    technologies: ["PowerBI", "DAX", "SQL", "Data Modeling"]
  },
  {
    id: 2,
    title: "Financial Analytics Overview",
    description: "Real-time financial dashboard displaying key performance indicators, budget vs actual analysis, and cash flow projections with drill-down capabilities.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0009_loa2qb.jpg",
    technologies: ["PowerBI", "Excel", "Financial Modeling", "KPI Tracking"]
  },
  {
    id: 3,
    title: "Customer Insights Dashboard",
    description: "Customer behavior analysis dashboard featuring customer lifetime value, churn prediction, and satisfaction metrics with predictive analytics.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0005_lzkdep.jpg",
    technologies: ["PowerBI", "Machine Learning", "Customer Analytics", "Predictive Modeling"]
  },
  {
    id: 4,
    title: "Operations Efficiency Monitor",
    description: "Operational metrics dashboard tracking productivity, resource utilization, and process optimization with real-time monitoring capabilities.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035599/powerbi-dashboards/IMG-20250824-WA0007_ohmzfd.jpg",
    technologies: ["PowerBI", "Process Mining", "Operational Analytics", "Performance Metrics"]
  },
  {
    id: 5,
    title: "Supply Chain Analytics",
    description: "End-to-end supply chain visibility dashboard with inventory optimization, demand forecasting, and logistics performance tracking.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035598/powerbi-dashboards/IMG-20250824-WA0006_ykawha.jpg",
    technologies: ["PowerBI", "Supply Chain Analytics", "Demand Forecasting", "Inventory Management"]
  },
  {
    id: 6,
    title: "Marketing Campaign Tracker",
    description: "Marketing performance dashboard measuring campaign effectiveness, ROI analysis, and customer acquisition costs across multiple channels.",
    image: "https://res.cloudinary.com/dsnq9xdwt/image/upload/v1756035598/powerbi-dashboards/IMG-20250824-WA0004_rwi2u3.jpg",
    technologies: ["PowerBI", "Marketing Analytics", "ROI Tracking", "Multi-channel Attribution"]
  }
]

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps'
  })
  const [selectedSlides, setSelectedSlides] = useState<number[]>([])
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenProject, setFullScreenProject] = useState<Project | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedSlides([emblaApi.selectedScrollSnap()])
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const openFullScreen = (project: Project) => {
    setFullScreenProject(project)
    setIsFullScreen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeFullScreen = () => {
    setIsFullScreen(false)
    setFullScreenProject(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-background-light to-background-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my PowerBI dashboards and data analytics projects that transform raw data into actionable insights
          </p>
        </div>

        {/* Modern Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4"
                >
                  <div className="relative group cursor-pointer">
                    {/* Project Card */}
                    <div className="relative overflow-hidden rounded-2xl glass border border-border/50 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-card to-card/80 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Overlay with Project Info */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="space-y-4">
                              <h3 className="text-2xl font-bold text-white leading-tight">
                                {project.title}
                              </h3>
                              <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                              </p>
                              
                              {/* Technology Tags */}
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 bg-primary/30 text-primary-foreground rounded-full text-xs font-medium border border-primary/40 backdrop-blur-sm"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 3 && (
                                  <span className="px-2 py-1 bg-white/20 text-white rounded-full text-xs font-medium border border-white/30 backdrop-blur-sm">
                                    +{project.technologies.length - 3}
                                  </span>
                                )}
                              </div>

                              {/* Full Screen Button */}
                              <div className="flex justify-center">
                                <Button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    openFullScreen(project)
                                  }}
                                  className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                                  variant="ghost"
                                  size="icon"
                                >
                                  <Maximize2 className="w-5 h-5" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg z-10"
            variant="ghost"
            size="icon"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedSlides.includes(index)
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4">
            <span className="text-muted-foreground text-sm">
              {selectedSlides[0] + 1} of {projects.length}
            </span>
          </div>
        </div>

        {/* Full Screen View */}
        {isFullScreen && fullScreenProject && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
            <div className="relative w-full h-full flex flex-col">
              {/* Close Button */}
              <Button
                onClick={closeFullScreen}
                className="absolute top-6 right-6 z-50 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg"
                variant="ghost"
                size="icon"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Full Screen Content */}
              <div className="flex-1 flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
                  <div className="relative w-full h-full max-w-6xl">
                    <img
                      src={fullScreenProject.image}
                      alt={fullScreenProject.title}
                      className="w-full h-full object-contain rounded-lg shadow-2xl"
                    />
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="w-full lg:w-96 bg-card/80 backdrop-blur-md p-6 lg:p-8 border-l border-border/50">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-3">
                        {fullScreenProject.title}
                      </h3>
                      <p className="text-foreground text-lg leading-relaxed">
                        {fullScreenProject.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {fullScreenProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-primary/20 text-primary-foreground rounded-lg text-sm font-medium border border-primary/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        onClick={closeFullScreen}
                        variant="outline"
                        className="w-full border-border text-foreground hover:bg-muted py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}


