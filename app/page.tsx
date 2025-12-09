"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Mail,
  Linkedin,
  Send,
  MapPin,
  Code,
  Briefcase,
  Eye,
  MessageSquare,
  ArrowRight,
  Loader2,
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"

export default function Portfolio() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Synced testimonials from guestbook
  const testimonials = [
    {
      quote: "Cool Portfolio!",
      author: "Vinay",
      role: "Developer",
      gender: "male" as const,
    },
    {
      quote: "Your portfolio inspired me to rebuild mine using Next.js! The animations are super smooth.",
      author: "DevKenny",
      role: "Developer",
      gender: "male" as const,
    },
    {
      quote: "Love the clean design and smooth animations! The tech stack section is particularly impressive.",
      author: "Sarah Drasner",
      role: "Designer",
      gender: "female" as const,
    },
  ]

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!contactForm.name.trim() || !contactForm.email.trim() || !contactForm.message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ca0fedcb-ef14-4853-bd74-369b75b67667',
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          message: contactForm.message.trim(),
          from_name: 'Portfolio Contact Form',
          subject: `New message from ${contactForm.name.trim()}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setContactForm({ name: '', email: '', message: '' })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <div className="relative">
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
            onClick={() => {
              document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Mail className="h-6 w-6" />
          </Button>

          {/* Pulse animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20"></div>
        </div>
      </div>

      <Navigation />

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Full-Stack Developer & AI Enthusiast</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Swayam's Portfolio
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
              B.Tech CS student specializing in AI/ML. Experienced in building full-stack ML applications using
              Python, FastAPI, modern JS workflows. Strong grasp of ML fundamentals, CNNs, optimization algorithms, and
              deployment-ready engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
                >
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  View Projects
                </Button>
              </Link>
              <Link href="/#connect">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                >
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto px-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">3rd</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Year Student</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-purple-600">5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-teal-600">5+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-orange-600">21</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Years Old</div>
              </div>
            </div>

            {/* Mobile-specific touch interactions */}
            <div className="mt-8 md:hidden">
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 animate-bounce">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-1">SWIPE UP</div>
                    <div className="w-6 h-6 mx-auto border-2 border-muted-foreground rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Project Hero with GIF */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group mx-4 sm:mx-0">
            <Image
              src="/images/coding-workspace.gif"
              alt="Coding workspace animation"
              width={1200}
              height={600}
              className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">My Development Environment</h3>
              <p className="text-sm sm:text-lg opacity-90 mb-2 sm:mb-4">Where ideas come to life through code</p>
              <Button variant="secondary" size="sm" className="text-xs sm:text-sm">
                <ExternalLink className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Explore My Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              <Code className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>FEATURED PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Project Spotlight</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive deep into my most impactful projects
            </p>
          </div>

          {/* Two Project Cards Grid */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* HistoAI Project Card */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 backdrop-blur-sm">
              {/* Image Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-teal-100 dark:from-green-900/20 dark:to-teal-900/20">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/histoai.png"
                    alt="HistoAI - AI-Powered Cancer Diagnosis Platform"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0 px-3 py-1 text-xs font-semibold">
                      🧬 AI/ML
                    </Badge>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                      <div className="text-sm font-bold text-green-600">95%+</div>
                    </div>
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-xs text-muted-foreground">Heatmap Gen</div>
                      <div className="text-sm font-bold text-teal-600">&lt; 1s</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                    HistoAI
                  </h3>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium mb-3">
                    AI-Driven Histopathology Analysis
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Deep-learning platform analyzing histopathology images with MobileNetV2 and Fusion Models. Generates explainable heatmaps for cancer diagnosis.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["TensorFlow", "PyTorch", "Grad-CAM", "React", "FastAPI"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <a href="https://histopathologyyyy.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white text-sm"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Live
                    </Button>
                  </a>
                  <a href="https://github.com/maybeswayam/Histopathology-FrontEnd" target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline" className="bg-transparent">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Fut-Insights Project Card */}
            <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50 backdrop-blur-sm">
              {/* Image Section */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="aspect-[16/10] relative">
                  <Image
                    src="/images/fut-insights-new.png"
                    alt="Fut-Insights Football Analytics Dashboard"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-3 py-1 text-xs font-semibold">
                      ⚽ Analytics
                    </Badge>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between">
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-xs text-muted-foreground">Records</div>
                      <div className="text-sm font-bold text-blue-600">10K+</div>
                    </div>
                    <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                      <div className="text-sm font-bold text-purple-600">99.9%</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Fut-Insights
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                    Football Analytics Platform
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Comprehensive football analytics platform transforming raw match data into actionable insights with interactive visualizations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {["Python", "React", "Pandas", "Data Viz", "Analytics"].map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Link href="/project-construction/fut-insights" className="flex-1">
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </Link>
                  <Button size="sm" variant="outline" className="bg-transparent">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-8 sm:mt-10">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800">
                View All Projects
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section
        id="connect"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Let's Connect</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              Have a project in mind or just want to chat? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <p className="text-muted-foreground text-sm sm:text-base">swayam.for.prof@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Location</p>
                      <p className="text-muted-foreground text-sm:text-base">Agra, India</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Available for</p>
                      <p className="text-muted-foreground text-sm:text-base">Internship & Full-time & Freelance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3 sm:space-x-4">
                <a href="https://github.com/maybeswayam" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 bg-transparent w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="https://in.linkedin.com/in/swayam-adhana-01b2b2293" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 bg-transparent w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
                <a href="mailto:swayam.for.prof@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-100 hover:text-blue-600 hover:border-blue-300 bg-transparent w-10 h-10 sm:w-12 sm:h-12"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Send a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  I'll get back to you as soon as possible!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-sm sm:text-base">
                      Name
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="Your name"
                      required
                      disabled={isSubmitting}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      disabled={isSubmitting}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-sm sm:text-base">
                      Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Tell me about your project or just say hi!"
                      rows={4}
                      required
                      disabled={isSubmitting}
                      className="text-sm sm:text-base"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Peek from Guestbook</h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
              What people are saying about my work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:hidden">
            {/* Mobile: Show one testimonial with navigation */}
            <div className="relative">
              <Card className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md min-h-[200px]">
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                  <blockquote className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                    "{testimonials[0].quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${testimonials[0].gender === "male" ? "text-blue-600" : "text-pink-600"}`}
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {testimonials[0].gender === "male" ? (
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <rect x="45" y="65" width="10" height="15" />
                              <rect x="42" y="62" width="16" height="4" />
                            </g>
                          ) : (
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <path d="M35 65c0-5 5-10 15-10s15 5 15 10v15H35V65z" />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonials[0].author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonials[0].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mobile navigation dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === 0 ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Swipe hint */}
              <div className="text-center mt-2">
                <span className="text-xs text-muted-foreground">Swipe for more testimonials</span>
              </div>
            </div>
          </div>

          {/* Desktop: Show all testimonials */}
          <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md"
              >
                <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                  <blockquote className="text-base sm:text-lg font-medium mb-3 sm:mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <div
                        className={`w-6 h-6 sm:w-8 sm:h-8 ${testimonial.gender === "male" ? "text-blue-600" : "text-pink-600"}`}
                      >
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {testimonial.gender === "male" ? (
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <rect x="45" y="65" width="10" height="15" />
                              <rect x="42" y="62" width="16" height="4" />
                            </g>
                          ) : (
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <path d="M35 65c0-5 5-10 15-10s15 5 15 10v15H35V65z" />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.author}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-teal-950/20" />
        <div className="max-w-7xl mx-auto relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_2fr_auto] gap-8 sm:gap-12 mb-12 sm:mb-16 items-start">
            {/* Tagline Section */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 leading-tight text-foreground">
                Where aesthetics & <span className="text-teal-600">functionality</span> meet
              </h3>
            </div>

            {/* Explore Section */}
            <div>
              <h4 className="text-orange-600 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Explore</h4>
              <div className="flex flex-wrap gap-x-8 gap-y-2 sm:gap-x-10">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  Projects
                </Link>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  Gallery
                </Link>
                <Link
                  href="/guestbook"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base"
                >
                  GuestBook
                </Link>
              </div>
            </div>

            {/* Follow Me Section */}
            <div className="lg:justify-self-end">
              <h4 className="text-teal-600 font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Follow Me</h4>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <a href="https://in.linkedin.com/in/swayam-adhana-01b2b2293" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded flex items-center justify-center">
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
                <a href="https://github.com/maybeswayam" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-800 rounded flex items-center justify-center">
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-sm sm:text-base">Github</span>
                </a>
              </div>
            </div>

            {/* Call to Action Section */}
            {/* <div className="space-y-4 sm:space-y-6">
              <Link href="/#connect" className="group">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-700/50 rounded-lg transition-colors backdrop-blur-sm border border-white/20">
                  <div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">Contact Me</div>
                    <div className="text-muted-foreground text-xs sm:text-sm">Say Hello !</div>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              <Link href="/projects" className="group">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-white/50 dark:bg-gray-800/50 hover:bg-white/70 dark:hover:bg-gray-700/50 rounded-lg transition-colors backdrop-blur-sm border border-white/20">
                  <div>
                    <div className="text-foreground font-semibold text-sm sm:text-base">My Projects</div>
                    <div className="text-muted-foreground text-xs sm:text-sm">Explore Projects</div>
                  </div>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div> */}
          </div>

          {/* Large Brand Text with Cropped Effect */}
          <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-8 sm:pt-12 relative overflow-hidden">
            <div className="relative h-20 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
              <h2 className="absolute inset-0 flex items-center justify-center text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-foreground/10 dark:text-foreground/5 tracking-tight select-none transform scale-150 origin-center">
                Portfolio
              </h2>
            </div>

            {/* Bottom Info */}
            <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8">
              {/* <div className="mb-3 md:mb-0">
                <span>swayam ©2025 - </span>
                <Link href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </div> */}
              {/* <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Agra, India</span>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
