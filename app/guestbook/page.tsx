"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { User, UserCheck, Calendar, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { toast } from "sonner"

interface GuestbookEntry {
  id: string
  name: string
  gender: "male" | "female"
  message: string
  date: string
  createdAt?: number
}

export default function Guestbook() {
  const [name, setName] = useState("")
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null)
  const [message, setMessage] = useState("")
  const [entries, setEntries] = useState<GuestbookEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fetch entries on component mount
  useEffect(() => {
    fetchEntries()
  }, [])

  const fetchEntries = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/guestbook')
      if (!response.ok) {
        throw new Error('Failed to fetch entries')
      }
      const data = await response.json()
      setEntries(data)
    } catch (error) {
      console.error('Error fetching entries:', error)
      toast.error('Failed to load guestbook entries')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim() || !selectedGender || !message.trim()) {
      toast.error('Please fill in all fields')
      return
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          gender: selectedGender,
          message: message.trim(),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to post message')
      }

      const newEntry = await response.json()
      setEntries((prev) => [newEntry, ...prev])
      setName("")
      setSelectedGender(null)
      setMessage("")
      toast.success('Message posted successfully!')
    } catch (error) {
      console.error('Error posting message:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to post message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getGenderIcon = (gender: "male" | "female") => {
    return gender === "male" ? <User className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Guestbook Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Message Form */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Leave a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    disabled={isSubmitting}
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label>Gender</Label>
                  <div className="flex space-x-4 mt-2">
                    <Button
                      type="button"
                      variant={selectedGender === "male" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGender("male")}
                      className="flex items-center space-x-2"
                      disabled={isSubmitting}
                    >
                      <User className="h-4 w-4" />
                      <span>Male</span>
                    </Button>
                    <Button
                      type="button"
                      variant={selectedGender === "female" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedGender("female")}
                      className="flex items-center space-x-2"
                      disabled={isSubmitting}
                    >
                      <UserCheck className="h-4 w-4" />
                      <span>Female</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts about the portfolio..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                  maxLength={1000}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {message.length}/1000 characters
                </p>
              </div>
              <Button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                disabled={isSubmitting || !name.trim() || !selectedGender || !message.trim()}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Posting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Post Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Messages */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Messages ({entries.length})</h2>
          
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Loading messages...</span>
            </div>
          ) : entries.length > 0 ? (
            entries.map((entry) => (
              <Card
                key={entry.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      <div className={`w-10 h-10 ${entry.gender === "male" ? "text-blue-600" : "text-pink-600"}`}>
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          {entry.gender === "male" ? (
                            // Male icon
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <rect x="45" y="65" width="10" height="15" />
                              <rect x="42" y="62" width="16" height="4" />
                            </g>
                          ) : (
                            // Female icon
                            <g fill="currentColor">
                              <circle cx="50" cy="30" r="15" />
                              <path d="M50 50c-15 0-25 10-25 20v20h50V70c0-10-10-20-25-20z" />
                              <path d="M35 65c0-5 5-10 15-10s15 5 15 10v15H35V65z" />
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{entry.name}</h3>
                          <Badge variant="secondary" className="flex items-center space-x-1">
                            {getGenderIcon(entry.gender)}
                            <span className="capitalize">{entry.gender}</span>
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{entry.date}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{entry.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">Be the first to leave a message!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
