"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Calendar,
  Code,
  Briefcase,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Zap,
  Target,
  Lightbulb,
  Heart,
} from "lucide-react"

export default function About() {
  const skills = [
    {
      name: "TensorFlow",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-6.168-3.564v14.019L12.46 24V0l10.248 5.856.014 5.311z"/>
        </svg>
      ),
      description: "ML Framework",
      color: "from-orange-500 to-orange-600",
      glowColor: "shadow-orange-500/30",
    },
    {
      name: "PyTorch",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.581-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226a1.327 1.327 0 00-1.327-1.327z"/>
        </svg>
      ),
      description: "Deep Learning",
      color: "from-red-500 to-orange-500",
      glowColor: "shadow-red-500/30",
    },
    {
      name: "Transfer Learning",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      description: "Model Adaptation",
      color: "from-purple-500 to-pink-500",
      glowColor: "shadow-purple-500/30",
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
        </svg>
      ),
      description: "React Framework",
      color: "from-black to-gray-700",
      glowColor: "shadow-gray-500/30",
    },
    {
      name: "TypeScript",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
        </svg>
      ),
      description: "Type-safe JS",
      color: "from-blue-600 to-blue-400",
      glowColor: "shadow-blue-500/30",
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ),
      description: "UI Library",
      color: "from-cyan-400 to-blue-500",
      glowColor: "shadow-cyan-500/30",
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      description: "AI & Backend",
      color: "from-yellow-400 to-green-500",
      glowColor: "shadow-yellow-500/30",
    },
    {
      name: "Tailwind",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
        </svg>
      ),
      description: "Utility CSS",
      color: "from-teal-400 to-cyan-500",
      glowColor: "shadow-teal-500/30",
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      description: "Server JS",
      color: "from-green-500 to-green-700",
      glowColor: "shadow-green-500/30",
    },
  ]

  const services = [
    {
      title: "Full Stack Development",
      description: "End-to-end web application development with modern technologies",
      icon: <Code className="h-6 w-6" />,
      color: "bg-blue-500",
    },
    {
      title: "Specialized in AI",
      description: "Machine learning models and AI-powered solutions",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-purple-500",
    },
    {
      title: "Web Design & Development",
      description: "Beautiful, responsive, and user-friendly web interfaces",
      icon: <Target className="h-6 w-6" />,
      color: "bg-teal-500",
    },
    {
      title: "Automation & Scripting",
      description: "Process automation and custom scripting solutions",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section - Who I Am */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-teal-950/20" />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="h-4 w-4" />
              <span>INTRODUCTION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Who I Am</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    SwayamAdhana
                  </span>
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Based in Agra, India</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-purple-600" />
                    <span>20 Years Old</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Code className="h-5 w-5 text-teal-600" />
                    <span>AI,ML developer</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Briefcase className="h-5 w-5 text-orange-600" />
                    <span>1+ Years of work Experience</span>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  B.Tech CS student specializing in AI/ML. Experienced in building full-stack ML applications using Python, FastAPI, modern JS workflows. Strong grasp of ML fundamentals, CNNs, optimization algorithms, and deployment-ready engineering practices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://drive.google.com/file/d/1cadUq8e4pOUyXA9W5VKBWqhNPDyf8_h9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      View Resume
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/projects">
                    <Button size="lg" variant="outline">
                      View Projects
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-3xl transform -rotate-3 scale-110 opacity-15"></div>

                {/* Main Photo Frame */}
                <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-3xl shadow-2xl">
                  <div className="bg-white dark:bg-gray-900 p-2 rounded-3xl">
                    <div className="relative w-80 h-96 rounded-2xl overflow-hidden">
                      <Image
                        src="/images/swayam-photo.png"
                        alt="Swayam Adhana"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid - Service Card Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`
                      bg-gradient-to-br ${skill.color}
                      p-3 rounded-xl text-white
                      group-hover:scale-110 transition-transform duration-300
                      shadow-lg
                    `}>
                      {skill.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">My academic journey</p>
          </div>

          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Briefcase className="mr-2 h-6 w-6 text-blue-600" />
                Academic Background
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">BTech in Computer Science</h3>
                  <p className="text-blue-600 font-medium">Specialization in AI & Machine Learning</p>
                  <p className="text-sm text-muted-foreground">GLA University • 2023 - 2027</p>
                  <p className="text-sm">
                    Currently pursuing Bachelor of Technology in Computer Science with specialized focus on Artificial
                    Intelligence and Machine Learning. Active in coding competitions, tech communities, and hands-on
                    projects.
                  </p>
                </div>
              </div>
              <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">High School</h3>
                  <p className="text-purple-600 font-medium">Science Stream</p>
                  <p className="text-sm text-muted-foreground">Birla School Pilani • 2016 - 2022</p>
                  <p className="text-sm">
                    Completed secondary education with focus on Mathematics, Physics, and Computer Science. Developed
                    foundational programming skills and passion for technology during this period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fun Facts Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center justify-center">
                <Heart className="mr-2 h-6 w-6 text-red-500" />
                Fun Facts About Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">6+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">24/7</div>
                  <div className="text-sm text-muted-foreground">Learning Mode</div>
                </div>
                <div className="text-center p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">∞</div>
                  <div className="text-sm text-muted-foreground">Curiosity Level</div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg">
                <p className="text-sm text-center">
                  "Code is poetry written in logic, and I'm here to compose symphonies of innovation."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What I can help you with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`${service.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to bring your ideas to life?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate and create something amazing together. I'm always excited to work on new challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a href="https://drive.google.com/file/d/1cadUq8e4pOUyXA9W5VKBWqhNPDyf8_h9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-2">SCROLL</p>
          <ChevronDown className="h-4 w-4 text-muted-foreground mx-auto" />
        </div>
      </div>
    </div>
  )
}
