'use client'

import { useParams } from 'next/navigation'
import { problems } from '@/data/problems'
import CodeEditor from '@/components/CodeEditor'
import { useState, useEffect } from 'react'

export default function ProblemDetailPage() {
  const { id } = useParams()
  const problem = problems.find((p) => p.id === id)

  const [language, setLanguage] = useState('cpp')
  const [code, setCode] = useState('// Write your code here...')
  const [verdict, setVerdict] = useState<string>('')
  const [testCases, setTestCases] = useState(problem?.testCases || [])

  useEffect(() => {
    if (problem?.generator) {
      const generated = problem.generator()
      setTestCases(generated)
    } else if (problem?.testCases) {
      setTestCases(problem.testCases)
    }
  }, [problem])

  const handleSubmit = async () => {
    setVerdict('🟡 Submitting...')
    try {
      const results = await Promise.all(
        testCases.map(async (test, i) => {
          const res = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ language, code, stdin: test.input }),
          })
          const output = await res.json()
          const cleaned = output.stdout?.trim() ?? ''
          const expected = test.expectedOutput.trim()
          return cleaned === expected
            ? `✅ Test ${i + 1}: Passed`
            : `❌ Test ${i + 1}: Failed\nExpected: ${expected}\nGot: ${cleaned}`
        })
      )
      setVerdict(results.join('\n\n'))
    } catch (err) {
      setVerdict('❌ Error while submitting')
    }
  }

  if (!problem) return <div className="text-white">Problem not found</div>

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto py-10 px-4 text-white">
      
      {/* Left Panel – Problem */}
      <div className="md:w-1/2 bg-gray-900 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[80vh]">
        <h1 className="text-2xl font-bold mb-2">{problem.title}</h1>
        <p className="text-sm text-gray-400 mb-4">Difficulty: {problem.difficulty}</p>
        <p className="mb-6 whitespace-pre-wrap">{problem.description}</p>

        <h3 className="text-lg font-semibold mb-2">🧪 Test Cases</h3>
        <ul className="space-y-2 text-sm">
          {testCases.map((test, idx) => (
            <li key={idx} className="bg-gray-800 p-3 rounded">
              <strong>Input:</strong> <pre className="inline">{test.input}</pre>
              <br />
              <strong>Expected Output:</strong> <pre className="inline">{test.expectedOutput}</pre>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel – Code Editor */}
      <div className="md:w-1/2 flex flex-col">
        <div className="flex justify-between items-center mb-3">
          <label htmlFor="language" className="text-sm font-medium text-gray-300">
            Language:
          </label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-gray-800 text-white p-2 rounded ml-2"
          >
            <option value="cpp">C++</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <div className="flex-1">
          <CodeEditor code={code} language={language} onChange={(val) => setCode(val || '')} />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          🚀 Submit Code
        </button>

        {verdict && (
          <pre className="mt-4 bg-gray-900 p-4 rounded whitespace-pre-wrap text-sm">
            {verdict}
          </pre>
        )}
      </div>
    </div>
  )
}
