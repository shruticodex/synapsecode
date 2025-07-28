import Link from 'next/link'
import { problems } from '@/data/problems'

export default function ProblemsPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 text-white">
      <h1 className="text-3xl font-bold mb-6">All Problems</h1>
      <ul className="space-y-4">
        {problems.map((prob) => (
          <li key={prob.id} className="bg-gray-800 p-4 rounded">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{prob.title}</h2>
                <p className="text-sm text-gray-400">{prob.difficulty}</p>
              </div>
              <Link
                href={`/problems/${prob.id}`}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
              >
                Solve
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
