import { useState, useEffect } from 'react'
import styles from 'styles/Minesweeper.module.css'

import { createBoard } from 'lib/createBoard'

const Game = () => {
  const [board, setBoard] = useState([])

  useEffect(() => {
    setBoard(createBoard(8, 8))
  }, [])

  return (
    <div className={styles.minesweeper}>
      {board.map((col) => (
        <div className={styles.col} key={`col-${col[0]}`}>
          {col.map((row) => (
            <div className={styles.square} key={`row-${row}`}>
              {row}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Game
