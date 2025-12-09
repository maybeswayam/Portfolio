"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Construction, Calendar, Target, Zap } from "lucide-react"

export default function ProjectConstruction() {
  const params = useParams()
  const slug = params.slug as string

  const projectData = {
    "fut-insights": {
      title: "Fut-Insights",
      subtitle: "Football Analytics Platform",
      description: "A comprehensive football analytics platform transforming match data into actionable insights",
      status: "Under Development",
      progress: 75,
      expectedLaunch: "Q2 2025",
      features: [
        "Interactive match statistics dashboard",
        "Player performance analytics",
        "Team comparison tools",
        "Real-time data visualization",
        "Mobile-responsive design",
        "Export and sharing capabilities",
      ],
      techStack: ["Python", "React", "TypeScript", "Chart.js", "Flask", "PostgreSQL"],
      challenges: [
        "Processing large datasets efficiently",
        "Creating intuitive data visualizations",
        "Implementing real-time updates",
      ],
    },
    "physics-simulation": {
      title: "Real-Time Physics Simulation",
      subtitle: "Interactive Physics Engine",
      description: "Advanced physics simulation with collision detection and particle systems",
      status: "Under Development",
      progress: 60,
      expectedLaunch: "Q3 2025",
      features: [
        "Real-time collision detection",
        "Particle system with 1000+ objects",
        "Interactive user controls",
        "Multiple simulation modes",
        "60 FPS smooth animations",
        "Customizable physics parameters",
      ],
      techStack: ["JavaScript", "HTML5 Canvas", "WebGL", "Mathematics", "Physics Algorithms"],
      challenges: [
        "Optimizing performance for complex calculations",
        "Implementing accurate physics models",
        "Creating smooth user interactions",
      ],
    },
    "typing-analyst": {
      title: "Typing Speed Analyst",
      subtitle: "Advanced Typing Analytics",
      description: "Comprehensive typing analysis with performance tracking and improvement suggestions",
      status: "Under Development",
      progress: 80,
      expectedLaunch: "Q1 2025",
      features: [
        "Real-time WPM calculation",
        "Keystroke heatmap visualization",
        "Progress tracking over time",
        "Custom text import",
        "Error analysis and suggestions",
        "Multiple themes and modes",
      ],
      techStack: ["React", "TypeScript", "Chart.js", "Local Storage", "Analytics"],
      challenges: [
        "Accurate keystroke timing analysis",
        "Creating meaningful visualizations",
        "Implementing helpful improvement suggestions",
      ],
    },
  }

  const project = projectData[slug as keyof typeof projectData]

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link href="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 dark:from-orange-950/20 dark:via-yellow-950/20 dark:to-amber-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.05),transparent_70%)]" />

        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/projects">
                <Button variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
            </div>

            {/* Construction Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <Construction className="h-12 w-12 text-white" />
              </div>
              <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 px-4 py-2">
                {project.status}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <p className="text-xl text-orange-600 dark:text-orange-400 font-medium mb-6">{project.subtitle}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              {project.description}
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Development Progress</span>
                <span className="text-sm text-muted-foreground">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Expected Launch */}
            <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              <span>Expected Launch: {project.expectedLaunch}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Planned Features</h3>
                </div>
                <div className="space-y-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tech Stack */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Technology Stack</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-800 dark:hover:bg-purple-900/30 dark:hover:text-purple-400 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Development Challenges */}
          <Card className="border-0 shadow-lg mt-12">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center mr-3">
                  <Construction className="h-5 w-5 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold">Development Challenges</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 rounded-lg border border-teal-200/20"
                  >
                    <div className="text-2xl font-bold text-teal-600 mb-2">0{index + 1}</div>
                    <p className="text-sm text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Want to be notified when this project launches? Connect with me to stay in the loop about my latest work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/#connect">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 py-4"
              >
                Get Notified
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="px-8 py-4 bg-white/50 backdrop-blur-sm">
                View Other Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
