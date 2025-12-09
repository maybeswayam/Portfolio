import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface GuestbookEntry {
  id: string
  name: string
  gender: "male" | "female"
  message: string
  date: string
  createdAt: number
}

const DATA_FILE = path.join(process.cwd(), 'data', 'guestbook.json')

// Ensure the data directory and file exist
async function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data')
  
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
  
  try {
    await fs.access(DATA_FILE)
  } catch {
    // Initialize with empty array
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2))
  }
}

async function getEntries(): Promise<GuestbookEntry[]> {
  await ensureDataFile()
  const data = await fs.readFile(DATA_FILE, 'utf-8')
  return JSON.parse(data)
}

async function saveEntries(entries: GuestbookEntry[]): Promise<void> {
  await ensureDataFile()
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2))
}

// GET - Fetch all guestbook entries
export async function GET() {
  try {
    const entries = await getEntries()
    // Sort by createdAt descending (newest first)
    entries.sort((a, b) => b.createdAt - a.createdAt)
    return NextResponse.json(entries)
  } catch (error) {
    console.error('Error fetching guestbook entries:', error)
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    )
  }
}

// POST - Add a new guestbook entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, gender, message } = body

    // Validate input
    if (!name || !gender || !message) {
      return NextResponse.json(
        { error: 'Name, gender, and message are required' },
        { status: 400 }
      )
    }

    if (typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name must be a non-empty string' },
        { status: 400 }
      )
    }

    if (gender !== 'male' && gender !== 'female') {
      return NextResponse.json(
        { error: 'Gender must be either "male" or "female"' },
        { status: 400 }
      )
    }

    if (typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Message must be a non-empty string' },
        { status: 400 }
      )
    }

    // Sanitize input (basic XSS prevention)
    const sanitizedName = name.trim().slice(0, 100)
    const sanitizedMessage = message.trim().slice(0, 1000)

    const newEntry: GuestbookEntry = {
      id: Date.now().toString(),
      name: sanitizedName,
      gender: gender as "male" | "female",
      message: sanitizedMessage,
      date: new Date().toLocaleDateString("en-US", { 
        month: "numeric", 
        day: "numeric", 
        year: "numeric" 
      }),
      createdAt: Date.now(),
    }

    const entries = await getEntries()
    entries.unshift(newEntry) // Add to beginning
    await saveEntries(entries)

    return NextResponse.json(newEntry, { status: 201 })
  } catch (error) {
    console.error('Error creating guestbook entry:', error)
    return NextResponse.json(
      { error: 'Failed to create entry' },
      { status: 500 }
    )
  }
}
