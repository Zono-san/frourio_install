import Head from 'next/head'
import { useMemo } from 'react'
import { useState } from 'react'
import styles, {
  blackStone,
  cell,
  stoneBlack,
  whiteStone
} from '~/styles/Home.module.css'

const STONE = {
  NONE: 0,
  BLACK: 1,
  WHITE: 2
}

const Home = () => {
  const [currentColor, setCurrentColor] = useState(STONE.BLACK)
  const onClick = (x: number, y: number) => {
    const newBoard: number[][] = JSON.parse(JSON.stringify(board))
    let nextTurn = currentColor
    // ここから編集
    const opponentColor =
      currentColor === STONE.WHITE ? STONE.BLACK : STONE.WHITE
    nextTurn = currentColor === STONE.BLACK ? STONE.WHITE : STONE.BLACK
    const directions = [
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1]
    ]
    let puttableFlag = false
    for (const direction of directions) {
      if (
        newBoard[y + direction[1]] !== undefined &&
        newBoard[y + direction[1]][x + direction[0]] !== undefined &&
        newBoard[y + direction[1]][x + direction[0]] === opponentColor
      ) {
        puttableFlag = true
      }
    }

    if (puttableFlag === true) {
      newBoard[y][x] = currentColor
      nextTurn = opponentColor
    }

    // ここまで編集
    setCurrentColor(nextTurn)
    setBoard(newBoard)
  }

  // prettier-ignore
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],  
  ])

  const blackCount = useMemo((): number => {
    let count = 0
    count += board[3][5] === STONE.BLACK ? 1 : 0
    return count
  }, [board])

  const whiteCount = useMemo((): number => {
    return board.filter(() => {
      return whiteStone.includes(whiteStone)
    }).length
  }, [board])

  return (
    <>
      <div>
        <h1>オセロゲーム</h1>
        <div className={styles.stoneBlack}>
          <p className={styles.title}>×{blackCount}</p>
        </div>
        <div className={styles.stoneWhite}>
          <div className={styles.title}>×{whiteCount}</div>
        </div>
      </div>
      <div className={styles.container}>
        <Head>
          <title>frourio-todo-app</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.main}>
          <div className="wrapper">
            <div className={styles.square}>
              <div className={styles.squareIn}>
                {board.map((row, y) =>
                  row.map((color, x) => (
                    <div
                      key={`${x}-${y}`}
                      className={styles.cell}
                      onClick={() => {
                        onClick(x, y)
                      }}
                    >
                      {color !== STONE.NONE && (
                        <div
                          className={
                            color === STONE.BLACK
                              ? styles.blackStone
                              : styles.whiteStone
                          }
                        ></div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
export default Home
