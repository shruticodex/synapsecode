import { NextResponse } from 'next/server'

const JUDGE0_BASE = 'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true'


const RAPID_API_KEY = process.env.RAPID_API_KEY || ''

export async function POST(req: Request) {
  const { language, code, stdin } = await req.json()

  const languageIds: Record<string, number> = {
    cpp: 54,
    python: 71,
    java: 62,
  }

  const response = await fetch(JUDGE0_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    },
    body: JSON.stringify({
      source_code: code,
      language_id: languageIds[language],
      stdin: stdin ?? '',
    }),
  })

  const data = await response.json()
  return NextResponse.json(data)
}
