export function generateTwoSumCases(n = 10, max = 100) {
  const cases = []

  for (let i = 0; i < 5; i++) {
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * max))
    const idx1 = Math.floor(Math.random() * n)
    let idx2 = Math.floor(Math.random() * n)
    while (idx2 === idx1) idx2 = Math.floor(Math.random() * n)

    const target = arr[idx1] + arr[idx2]
    const input = `${n}\n${arr.join(' ')}\n${target}`

    const expectedOutput = `${Math.min(idx1, idx2)} ${Math.max(idx1, idx2)}`

    cases.push({ input, expectedOutput })
  }

  return cases
}
