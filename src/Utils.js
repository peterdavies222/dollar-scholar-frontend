export const arraysEqual = (a, b) => {
    if (a.length !== b.length) return false
    // Make copies and sort to avoid mutating original arrays
    const sortedA = [...a].sort()
    const sortedB = [...b].sort()
    return sortedA.every((val, i) => val === sortedB[i])
}
