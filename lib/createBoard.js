export function createBoard(cols, rows) {
  let board = []
  let counter = []

  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      counter.push(`${i}${j}`)
    }
    board.push(counter)
    counter = []
  }

  return board
}

// board = [
//   [11, 12, 13, 14, 15, 16, 17, 18],
//   [21, 22, 23, 24, 25, 26, 27, 28],
//   [31, 32, 33, 34, 35, 36, 37, 38],
//   [41, 44, 43, 44, 45, 46, 47, 48],
//   [51, 52, 53, 54, 55, 56, 57, 58],
//   [61, 62, 63, 64, 65, 66, 67, 68],
//   [71, 72, 73, 74, 75, 76, 77, 78],
//   [81, 82, 83, 84, 85, 86, 87, 88],
// ]