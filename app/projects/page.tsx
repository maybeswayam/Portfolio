"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, ArrowRight, Eye } from "lucide-react"

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      title: "HistoAI",
      subtitle: "AI-Driven Histopathology Analysis Platform",
      description: "Advanced deep-learning platform for analyzing histopathology images with explainable AI visualizations",
      longDescription:
        "HistoAI is an advanced deep-learning platform designed to analyze histopathology images with high precision. Built using MobileNetV2 and a custom Fusion Model, the system processes biopsy scans and generates explainable heatmaps that highlight cancer-suspect regions. With an intuitive UI and explainable AI visualizations, HistoAI empowers clinicians and researchers to make more informed diagnostic decisions.",
      image: "/images/histoai.png",
      tags: ["Python", "TensorFlow", "PyTorch", "MobileNetV2", "Explainable AI (Grad-CAM)", "Fusion Models", "React", "FastAPI"],
      liveUrl: "https://histopathologyyyy.vercel.app/",
      githubUrl: "https://github.com/maybeswayam/Histopathology-FrontEnd",
      status: "Completed",
      // duration: "4 months",
      team: "Solo Project",
      highlights: [
        "Achieved high-accuracy classification using MobileNetV2 backbone with fusion-layer enhancements",
        "Generates heatmaps that highlight important regions for transparency and interpretability",
        "Preprocessing pipeline optimized for histopathology slides (normalization, patch extraction, augmentation)",
        "Real-time inference with fast heatmap rendering",
        "Clean, modern frontend visualizing predictions and Grad-CAM outputs",
        "Empowers clinicians with explainable AI for diagnostic decisions",
      ],
      metrics: {
        accuracy: "95%+",
        heatmapTime: "< 1s",
        imagesProcessed: "10K+",
        output: "Explainable",
      },
    },
    {
      id: 2,
      title: "Fut-Insights",
      subtitle: "Football Analytics Platform",
      description: "Season-based football stats and insights from the 2022-23 campaign with interactive visualizations",
      longDescription:
        "A comprehensive football analytics platform that transforms raw match data into meaningful insights. Built with Python for data processing and React for the frontend, featuring interactive charts, player comparisons, and team performance metrics that help coaches and analysts make data-driven decisions.",
      image: "/images/fut-insights-new.png",
      tags: ["Python", "React", "Data Visualization", "Football Analytics", "Pandas", "Matplotlib"],
      liveUrl: "/project-construction/fut-insights",
      githubUrl: "#",
      // status: "Completed",
      // duration: "3 months",
      team: "Solo Project",
      highlights: [
        "Processed 10,000+ match records with 99.9% accuracy",
        "Interactive dashboard with 15+ dynamic visualizations",
        "Real-time data updates and live match tracking",
        "Mobile-responsive design with offline capabilities",
        "Advanced player performance analytics",
        "Team comparison and prediction algorithms",
      ],
      metrics: {
        accuracy: "99.9%",
        visualizations: "15+",
        records: "10K+",
        performance: "< 2s",
      },
    },
    {
      id: 3,
      title: "Real-Time Physics Simulation",
      subtitle: "Interactive Physics Engine",
      description: "Advanced physics engine with collision detection, particle systems, and realistic object behavior",
      longDescription:
        "A sophisticated physics simulation built from scratch using JavaScript and HTML5 Canvas. Features include gravity simulation, collision detection, particle systems, and real-time interaction capabilities. The engine supports multiple object types, realistic physics calculations, and smooth 60 FPS animations.",
      image: "/images/physics-simulation.png",
      tags: ["JavaScript", "HTML5 Canvas", "Physics Engine", "Animation", "WebGL", "Mathematics"],
      liveUrl: "/project-construction/physics-simulation",
      githubUrl: "#",
      status: "Completed",
      duration: "4 months",
      team: "Solo Project",
      highlights: [
        "60 FPS smooth animations with optimized rendering",
        "Advanced collision detection using spatial partitioning",
        "Particle system supporting 1000+ simultaneous objects",
        "Real-time physics calculations with accurate momentum",
        "Interactive user controls with mouse and keyboard",
        "Multiple simulation modes and customizable parameters",
      ],
      metrics: {
        fps: "60 FPS",
        objects: "1000+",
        accuracy: "Physics-accurate",
        interactions: "Real-time",
      },
    },
    {
      id: 4,
      title: "Typing Speed Analyst",
      subtitle: "Advanced Typing Analytics",
      description: "Comprehensive typing analysis tool with detailed performance tracking and improvement suggestions",
      longDescription:
        "A comprehensive typing analysis tool that goes beyond simple WPM calculation. Features include accuracy tracking, keystroke heatmaps, progress analytics, and personalized improvement suggestions. The application provides detailed insights into typing patterns and helps users improve their typing skills systematically.",
      image: "/images/typing-speed-chart-updated.png",
      tags: ["React", "TypeScript", "Analytics", "Charts.js", "Local Storage", "Performance"],
      liveUrl: "/project-construction/typing-analyst",
      githubUrl: "#",
      status: "Completed",
      duration: "2 months",
      team: "Solo Project",
      highlights: [
        "Real-time WPM and accuracy calculation",
        "Keystroke heatmap visualization with color coding",
        "Progress tracking with historical data analysis",
        "Custom text import and practice modes",
        "Detailed error analysis and improvement suggestions",
        "Responsive design with dark/light theme support",
      ],
      metrics: {
        tracking: "Real-time",
        features: "15+",
        accuracy: "Character-level",
        themes: "Multiple",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-teal-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm border border-blue-200/20">
              <Star className="h-4 w-4" />
              <span>FEATURED WORK</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              A curated selection of my most impactful work, showcasing innovation in web development, data analysis,
              and interactive experiences.
            </p>

            {/* Project Showcase Preview */}
            {/* <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-3">⚛️</div>
                  <h3 className="font-semibold mb-2">Frontend Excellence</h3>
                  <p className="text-sm text-muted-foreground">React, TypeScript, and modern UI frameworks</p>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="font-semibold mb-2">AI & Analytics</h3>
                  <p className="text-sm text-muted-foreground">Machine learning and data visualization</p>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">Optimized for speed and user experience</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Project Card */}
              <Card className="group hover:shadow-2xl transition-all duration-700 border-0 shadow-xl overflow-hidden bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 backdrop-blur-sm">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating Action Buttons */}
                      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {project.liveUrl.startsWith('http') ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </a>
                        ) : (
                          <Link href={project.liveUrl}>
                            <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                          </Link>
                        )}
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Project Number */}
                      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="text-6xl font-bold text-white/20">0{index + 1}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                            <Star className="mr-1 h-3 w-3" />
                            Featured
                          </Badge>
                          <div className="text-sm text-muted-foreground font-medium">
                            {project.duration} • {project.team}
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">{project.subtitle}</p>
                        <p className="text-muted-foreground leading-relaxed text-lg">{project.longDescription}</p>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="hover:bg-blue-100 hover:text-blue-800 dark:hover:bg-blue-900/30 dark:hover:text-blue-400 transition-colors cursor-default"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Highlights */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                          Key Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center">
                            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {project.liveUrl.startsWith('http') ? (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                            <Button
                              size="lg"
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Project
                            </Button>
                          </a>
                        ) : (
                          <Link href={project.liveUrl} className="flex-1 sm:flex-none">
                            <Button
                              size="lg"
                              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Project
                            </Button>
                          </Link>
                        )}
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                            <Github className="mr-2 h-4 w-4" />
                            View Source
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-xl -z-10" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to work on innovative projects that push the boundaries of technology. Let's discuss how
            we can bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#connect">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg"
              >
                Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://github.com/maybeswayam" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg bg-white/50 backdrop-blur-sm">
                <Github className="mr-2 h-5 w-5" />
                View All on GitHub
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
