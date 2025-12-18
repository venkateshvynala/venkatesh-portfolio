import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { projectsData, projectsContent } from '@/data/data'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
}

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenProject, setFullScreenProject] = useState<Project | null>(null)

  const itemsPerPage = 6
  const totalPages = Math.ceil(projectsData.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = projectsData.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

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
    <section id="projects" className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {projectsContent.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {projectsContent.subtitle}
          </p>
        </div>

        {/* Projects Grid Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Projects Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentProjects.map((project) => (
              <div key={project.id} className="relative group cursor-pointer">
                {/* Project Card */}
                <div className="relative overflow-hidden rounded-2xl glass border border-border/50 shadow-2xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3]  from-card to-card/80 overflow-hidden">
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
                          {/* Full Screen Button */}
                          <div className="flex justify-center">
                            <Button
                              onClick={(e) => {
                                e.stopPropagation()
                                openFullScreen(project)
                              }}
                              className="bg-primary/90 cursor-pointer hover:bg-primary text-primary-foreground rounded-full w-12 h-12 p-0 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
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
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4">
            {/* Previous Button */}
            <Button
              onClick={goToPrevPage}
              className="bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg"
              variant="ghost"
              size="icon"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Page Indicators */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentPage
                    ? 'bg-primary scale-125 shadow-lg shadow-primary/50'
                    : 'bg-muted hover:bg-muted-foreground'
                    }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              onClick={goToNextPage}
              className="bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg"
              variant="ghost"
              size="icon"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Page Counter */}
          <div className="text-center mt-4">
            <span className="text-muted-foreground text-sm">
              Page {currentPage + 1} of {totalPages} ({startIndex + 1}-{Math.min(endIndex, projectsData.length)} of {projectsData.length})
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
                className="absolute cursor-pointer top-6 right-6 z-50 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 transition-all duration-300 hover:scale-110 shadow-lg"
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
                <div className="w-full lg:w-96 bg-card/80 backdrop-blur-md p-6 lg:p-8 border-l border-border/50 overflow-y-auto max-h-screen project-details-scroll">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-bold gradient-text mb-3">
                        {fullScreenProject.title}
                      </h3>
                      <p className="tighter-justify  text-foreground text-lg leading-relaxed whitespace-pre-line">
                        {fullScreenProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {fullScreenProject.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                          >
                            {tech}
                          </Badge>
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


