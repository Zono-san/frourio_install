import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import { getAllJSDocTagsOfKind, isNoSubstitutionTemplateLiteral, isNumericLiteral } from 'typescript'
import { isNumber } from 'class-validator'
import { type } from 'os'
import { CANCELLED } from 'dns'
import { clearLine } from 'readline'

const STONE={
  NONE:0,
  BLACK:1,
  WHITE:2
}as const

type Cell = {
  x:number,
  y:number,
  stone:(typeof STONE)[
    keyof typeof STONE
  ]
}

const Home = () => {
  const { data: tasks, error, revalidate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      revalidate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    revalidate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    revalidate()
  }, [])

  const onClick = (clickedCell:Cell) => {
    console.log(`左から${clickedCell.x}列目、上から${clickedCell.y}行目に${clickedCell.stone !==0 ? (clickedCell.stone ===1 ? "黒い石があります" : "白い石があります") : "石はありません"}`)
    const newBoard = board.map((cell) =>
      cell.x===clickedCell.x && cell.y===clickedCell.y ? {...cell,stone:(clickedCell.stone ===STONE.BLACK ? STONE.WHITE : STONE.BLACK )} : cell
      )
      setBoard(newBoard)
  }

  const [board, setBoard] = useState<Cell[]>([
    {x:0, y:0, stone:STONE.NONE},
    {x:1, y:0, stone:STONE.NONE},
    {x:2, y:0, stone:STONE.NONE},
    {x:3, y:0, stone:STONE.NONE},
    {x:4, y:0, stone:STONE.NONE},
    {x:5, y:0, stone:STONE.NONE},
    {x:6, y:0, stone:STONE.NONE},
    {x:7, y:0, stone:STONE.NONE},
    {x:0, y:1, stone:STONE.NONE},
    {x:1, y:1, stone:STONE.NONE},
    {x:2, y:1, stone:STONE.NONE},
    {x:3, y:1, stone:STONE.NONE},
    {x:4, y:1, stone:STONE.NONE},
    {x:5, y:1, stone:STONE.NONE},
    {x:6, y:1, stone:STONE.NONE},
    {x:7, y:1, stone:STONE.NONE},
    {x:0, y:2, stone:STONE.NONE},
    {x:1, y:2, stone:STONE.NONE},
    {x:2, y:2, stone:STONE.NONE},
    {x:3, y:2, stone:STONE.NONE},
    {x:4, y:2, stone:STONE.NONE},
    {x:5, y:2, stone:STONE.NONE},
    {x:6, y:2, stone:STONE.NONE},
    {x:7, y:2, stone:STONE.NONE},
    {x:0, y:3, stone:STONE.NONE},
    {x:1, y:3, stone:STONE.NONE},
    {x:2, y:3, stone:STONE.NONE},
    {x:3, y:3, stone:STONE.BLACK},
    {x:4, y:3, stone:STONE.WHITE},
    {x:5, y:3, stone:STONE.NONE},
    {x:6, y:3, stone:STONE.NONE},
    {x:7, y:3, stone:STONE.NONE},
    {x:0, y:4, stone:STONE.NONE},
    {x:1, y:4, stone:STONE.NONE},
    {x:2, y:4, stone:STONE.NONE},
    {x:3, y:4, stone:STONE.WHITE},
    {x:4, y:4, stone:STONE.BLACK},
    {x:5, y:4, stone:STONE.NONE},
    {x:6, y:4, stone:STONE.NONE},
    {x:7, y:4, stone:STONE.NONE},
    {x:0, y:5, stone:STONE.NONE},
    {x:1, y:5, stone:STONE.NONE},
    {x:2, y:5, stone:STONE.NONE},
    {x:3, y:5, stone:STONE.NONE},
    {x:4, y:5, stone:STONE.NONE},
    {x:5, y:5, stone:STONE.NONE},
    {x:6, y:5, stone:STONE.NONE},
    {x:7, y:5, stone:STONE.NONE},
    {x:0, y:6, stone:STONE.NONE},
    {x:1, y:6, stone:STONE.NONE},
    {x:2, y:6, stone:STONE.NONE},
    {x:3, y:6, stone:STONE.NONE},
    {x:4, y:6, stone:STONE.NONE},
    {x:5, y:6, stone:STONE.NONE},
    {x:6, y:6, stone:STONE.NONE},
    {x:7, y:6, stone:STONE.NONE},
    {x:0, y:7, stone:STONE.NONE},
    {x:1, y:7, stone:STONE.NONE},
    {x:2, y:7, stone:STONE.NONE},
    {x:3, y:7, stone:STONE.NONE},
    {x:4, y:7, stone:STONE.NONE},
    {x:5, y:7, stone:STONE.NONE},
    {x:6, y:7, stone:STONE.NONE},
    {x:7, y:7, stone:STONE.NONE},
  ])

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>
  
  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className="wrapper">
          <div className={styles.square}>
            <div className={styles.squareIn}>
                {board.map((cell, i) => (
                  <div key={i} className={styles.cell} onClick={() => {onClick(cell)}}>
                    {cell.stone !== 0 && <div
                      className={cell.stone===1 ?styles.blackStone :styles.whiteStone}  
                    ></div>}
                  </div>))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )}
export default Home

function setStone() {
  throw new Error('Function not implemented.')
}

