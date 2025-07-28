import rawData from './problems.json'

export interface Problem {
  id: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  description: string
  testCases: { input: string; expectedOutput: string }[]
  generator?: () => { input: string; expectedOutput: string }[]
}

// 👇 Cast the JSON as Problem[] (with type assertion)
export const problems: Problem[] = rawData as Problem[]
