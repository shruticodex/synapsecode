'use client'

import Link from 'next/link'
import { useState } from 'react'
import CodeEditor from '@/components/CodeEditor'


export default function ExampleProblemPage() {
  const [language, setLanguage] = useState('cpp')
  const [code, setCode] = useState('// write your code here')
  const [verdict, setVerdict] = useState<string | null>(null)

const handleSubmit = async () => {
  setVerdict('Submitting...')

  try {
    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ language, code }),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
    setVerdict(data.status.description || 'Submitted')
  } catch (err) {
    setVerdict('❌ Error while submitting')
  }
}


  return (
    <div className="max-w-5xl mx-auto py-10 px-4 text-white">
      <h1 className="text-3xl font-bold mb-2">Two Sum</h1>
      <p className="mb-4 text-gray-300">
        Given an array of integers, return indices of the two numbers such that they add up to a specific target.
      </p>

      <div className="flex items-center gap-4 mb-4">
        <label htmlFor="lang" className="text-sm">Language:</label>
        <select
          id="lang"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-800 text-white p-1 rounded"
        >
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="python">Python</option>
        </select>
      </div>

      <CodeEditor language={language} code={code} onChange={(val) => setCode(val || '')} />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Code
      </button>

      {verdict && <p className="mt-3">{verdict}</p>}
    </div>
  )
}

