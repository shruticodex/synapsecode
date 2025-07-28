'use client'

import Link from 'next/link'

const POPULAR_PROBLEMS = [
  { id: 'two-sum', title: 'Two Sum', difficulty: 'Easy' },
  { id: 'reverse-string', title: 'Reverse String', difficulty: 'Easy' },
  { id: 'min-stack', title: 'Min Stack', difficulty: 'Medium' },
  { id: 'serialize-binary-tree', title: 'Serialize Binary Tree', difficulty: 'Hard' },
]

const DIFFICULTY_COLORS: Record<'Easy' | 'Medium' | 'Hard', string> = {
  Easy: 'bg-green-800 text-green-300',
  Medium: 'bg-yellow-800 text-yellow-300',
  Hard: 'bg-red-800 text-red-300',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-gray-950 via-slate-900 to-gray-800 text-white font-inter">

      {/* Top Navigation with glass effect */}
      <header className="backdrop-blur bg-black/70 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-20 shadow-md">
        <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-br from-blue-400 to-purple-500 bg-clip-text drop-shadow-sm select-none">
          <span>Synapse</span> <span className="font-black">Code</span>
        </h1>
        <nav className="space-x-6 text-base font-medium">
          <Link href="/problems" className="hover:text-blue-400 transition-colors">Problems</Link>
          <Link href="/contests" className="hover:text-purple-400 transition-colors">Contests</Link>
          <Link href="/submissions" className="hover:text-teal-400 transition-colors">Submissions</Link>
          <Link href="/leaderboard" className="hover:text-pink-400 transition-colors">Leaderboard</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 px-4 sm:px-10 py-14 flex flex-col items-center text-center bg-gradient-to-b from-slate-900 via-gray-950/70 to-gray-900 relative overflow-hid">
        {/* Faint floating patterns background */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-24 h-96 z-0 opacity-20 pointer-events-none select-none" style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(56,189,248,0.08) 0%, transparent 70%)',
        }} />

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-sm z-10">
          Welcome to{' '}
          <span className="text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-fuchsia-500 bg-clip-text animate-gradient font-black">
            Synapse Code
          </span>
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto z-10 text-lg">
          The next-gen coding platform fusing the competitive thrill of <span className="text-blue-400 font-semibold">Codeforces</span> with the clean design of <span className="text-orange-400 font-semibold">LeetCode</span>.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 z-10">
          <Link
            href="/problems"
            className="bg-gradient-to-tr from-blue-500 to-purple-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg shadow-lg font-semibold text-base transition-all scale-100 hover:scale-105 duration-200"
          >
            🚀 Start Solving
          </Link>
          <Link
            href="/contests"
            className="bg-gray-900/80 hover:bg-gray-700 border border-gray-700 text-white px-8 py-3 rounded-lg font-medium text-base transition-all scale-100 hover:scale-105"
          >
            🎯 Upcoming Contests
          </Link>
        </div>
        <div className="mt-8 flex justify-center gap-2 z-10 text-xs text-gray-500">
          <span>Build your profile</span>
          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full inline-block"></span>
          <span>Compete with the best</span>
          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full inline-block"></span>
          <span>Sharpen your coding edge</span>
        </div>
      </section>

      {/* Explore Section - Popular Problems */}
      <section className="px-4 sm:px-10 py-10 bg-gradient-to-t from-gray-900 via-slate-900/70 to-gray-900 relative">
        <h3 className="text-2xl sm:text-3xl font-bold mb-7 tracking-tight text-left">
          <span role="img" aria-label="fire">🔥</span> Popular Problems
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {POPULAR_PROBLEMS.map(p => (
            <Link
              href={`/problems/${p.id}`}
              key={p.id}
              className={`relative group bg-gradient-to-br from-gray-900/70 to-gray-800 border border-gray-800 rounded-xl p-6 hover:shadow-xl transition-shadow overflow-hidden`}
            >
              {/* Glass shine effect */}
              <span className="absolute left-0 top-0 w-full h-full opacity-5 group-hover:opacity-10 bg-white pointer-events-none" />
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-semibold group-hover:text-blue-400 transition-colors">{p.title}</h4>
                <span
                  className={
                    "text-xs font-bold px-3 py-1 rounded-full shadow " + DIFFICULTY_COLORS[p.difficulty as 'Easy' | 'Medium' | 'Hard']
                  }
                >
                  {p.difficulty}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-gray-500 text-xs">
                  {p.difficulty === 'Easy' && 'Perfect for quick wins.'}
                  {p.difficulty === 'Medium' && 'Sharpen those skills!'}
                  {p.difficulty === 'Hard' && 'Elite challenge.'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Value Proposition + CTA */}
      <section className="px-4 sm:px-10 pt-6 pb-10 text-center">
        <div className="max-w-3xl mx-auto mb-8">
          <h4 className="text-xl md:text-2xl font-semibold mb-2 text-gradient bg-gradient-to-tr from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Why build on Synapse Code?
          </h4>
          <p className="text-gray-400 text-md mb-5">
            • Stunning code editor with multi-language support{'\n'}
            • Real-time feedback and leaderboard{'\n'}
            • Personalized learning profile & achievements
          </p>
          <Link
            href="/signup"
            className="bg-gradient-to-tr from-pink-500 to-orange-400 hover:from-orange-500 hover:to-pink-500 text-white px-8 py-3 rounded-full text-base font-semibold shadow-lg transition-all duration-200 scale-100 hover:scale-105"
          >
            Get Started For Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full mt-auto text-center text-sm text-gray-500 py-5 border-t border-slate-800 bg-black/60">
        <div className="mb-1">
          <span>&copy; {new Date().getFullYear()} Synapse Code.</span>
          <span className="mx-2 text-blue-400">|</span>
          <span>
            <a href="mailto:contact@synapsecode.dev" className="hover:underline hover:text-blue-400">Contact</a>
          </span>
        </div>
        <div>
          Designed with <span className="text-red-500">♥</span> in India | <span className="font-mono text-xs">Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </div>
  )
}
