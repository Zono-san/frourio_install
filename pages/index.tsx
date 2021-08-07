import Head from 'next/head'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.css'
import { apiClient } from '~/utils/apiClient'
import UserBanner from '~/components/UserBanner'
import type { Task } from '$prisma/client'
import type { FormEvent, ChangeEvent } from 'react'
import { getAllJSDocTagsOfKind } from 'typescript'

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

  const onClick = () => {
    alert(`クリックされました`)
  }

  const clickWhiteStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目の白い石がクリックされました`)
  }

  const clickBlackStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目の黒い石がクリックされました`)
  }

  const noStone = (x: number, y: number) => {
    alert(`上から${x}行目、左から${y}行目に石はありません`)
  }

  if (error) return <div>failed to load</div>
  if (!tasks) return <div>loading...</div>
  
  return (
    <div className={styles.container}>
      <Head>
        <title>frourio-todo-app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <div className="wrapper" onClick={onClick}>
          <div className={styles.square}>
            <div className={styles.squareIn}>
                <div className={styles.box1} onClick={() => {noStone(1, 1)}}></div>
                <div className={styles.box2} onClick={() => {noStone(1, 2)}}></div>
                <div className={styles.box3} onClick={() => {noStone(1, 3)}}></div>
                <div className={styles.box4} onClick={() => {noStone(1, 4)}}></div>
                <div className={styles.box5} onClick={() => {noStone(1, 5)}}></div>
                <div className={styles.box6} onClick={() => {noStone(1, 6)}}></div>
                <div className={styles.box7} onClick={() => {noStone(1, 7)}}></div>
                <div className={styles.box8} onClick={() => {noStone(1, 8)}}></div>
                <div className={styles.box9} onClick={() => {noStone(2, 1)}}></div>
                <div className={styles.box10} onClick={() => {noStone(2, 2)}}></div>
                <div className={styles.box11} onClick={() => {noStone(2, 3)}}></div>
                <div className={styles.box12} onClick={() => {noStone(2, 4)}}></div>
                <div className={styles.box13} onClick={() => {noStone(2, 5)}}></div>
                <div className={styles.box14} onClick={() => {noStone(2, 6)}}></div>
                <div className={styles.box15} onClick={() => {noStone(2, 7)}}></div>
                <div className={styles.box16} onClick={() => {noStone(2, 8)}}></div>
                <div className={styles.box17} onClick={() => {noStone(3, 1)}}></div>
                <div className={styles.box18} onClick={() => {noStone(3, 2)}}></div>
                <div className={styles.box19} onClick={() => {noStone(3, 3)}}></div>
                <div className={styles.box20} onClick={() => {noStone(3, 4)}}></div>
                <div className={styles.box21} onClick={() => {noStone(3, 5)}}></div>
                <div className={styles.box22} onClick={() => {noStone(3, 6)}}></div>
                <div className={styles.box23} onClick={() => {noStone(3, 7)}}></div>
                <div className={styles.box24} onClick={() => {noStone(3, 8)}}></div>
                <div className={styles.box25} onClick={() => {noStone(4, 1)}}></div>
                <div className={styles.box26} onClick={() => {noStone(4, 2)}}></div>
                <div className={styles.box27} onClick={() => {noStone(4, 3)}}></div>
                <div className={styles.box28}>
                  <div className={styles.stone1} onClick={() => {clickBlackStone(4, 4)}}></div>
                </div>
                <div className={styles.box29}>
                  <div className={styles.stone2} onClick={() => {clickWhiteStone(4, 5)}}></div>
                </div>
                <div className={styles.box30} onClick={() => {noStone(4, 6)}}></div>
                <div className={styles.box31} onClick={() => {noStone(4, 7)}}></div>
                <div className={styles.box32} onClick={() => {noStone(4, 8)}}></div>
                <div className={styles.box33} onClick={() => {noStone(5, 1)}}></div>
                <div className={styles.box34} onClick={() => {noStone(5, 2)}}></div>
                <div className={styles.box35} onClick={() => {noStone(5, 3)}}></div>
                <div className={styles.box36}>
                  <div className={styles.stone4} onClick={() => {clickWhiteStone(5, 4)}}></div>
                </div>
                <div className={styles.box37}>
                  <div className={styles.stone3} onClick={() => {clickBlackStone(5, 5)}}></div>
                </div>
                <div className={styles.box38} onClick={() => {noStone(5, 6)}}></div>
                <div className={styles.box39} onClick={() => {noStone(5, 7)}}></div>
                <div className={styles.box40} onClick={() => {noStone(5, 8)}}></div>
                <div className={styles.box41} onClick={() => {noStone(6, 1)}}></div>
                <div className={styles.box42} onClick={() => {noStone(6, 2)}}></div>
                <div className={styles.box43} onClick={() => {noStone(6, 3)}}></div>
                <div className={styles.box44} onClick={() => {noStone(6, 4)}}></div>
                <div className={styles.box45} onClick={() => {noStone(6, 5)}}></div>
                <div className={styles.box46} onClick={() => {noStone(6, 6)}}></div>
                <div className={styles.box47} onClick={() => {noStone(6, 7)}}></div>
                <div className={styles.box48} onClick={() => {noStone(6, 8)}}></div>
                <div className={styles.box49} onClick={() => {noStone(7, 1)}}></div>
                <div className={styles.box50} onClick={() => {noStone(7, 2)}}></div>
                <div className={styles.box51} onClick={() => {noStone(7, 3)}}></div>
                <div className={styles.box52} onClick={() => {noStone(7, 4)}}></div>
                <div className={styles.box53} onClick={() => {noStone(7, 5)}}></div>
                <div className={styles.box54} onClick={() => {noStone(7, 6)}}></div>
                <div className={styles.box55} onClick={() => {noStone(7, 7)}}></div>
                <div className={styles.box56} onClick={() => {noStone(7, 8)}}></div>
                <div className={styles.box57} onClick={() => {noStone(8, 1)}}></div>
                <div className={styles.box58} onClick={() => {noStone(8, 2)}}></div>
                <div className={styles.box59} onClick={() => {noStone(8, 3)}}></div>
                <div className={styles.box60} onClick={() => {noStone(8, 4)}}></div>
                <div className={styles.box61} onClick={() => {noStone(8, 5)}}></div>
                <div className={styles.box62} onClick={() => {noStone(8, 6)}}></div>
                <div className={styles.box63} onClick={() => {noStone(8, 7)}}></div>
                <div className={styles.box64} onClick={() => {noStone(8, 8)}}></div>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
