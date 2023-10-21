import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const ThreadList = () => {
  const [threadList, setThreadList] = useState([])
  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"

  // スレッド一覧の取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { method: "GET" })
        const data = await res.json()
        setThreadList(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <h2>新着スレッド</h2>
      <ul>
        {threadList.map((list) => {
          return (
            <Link to={{ pathname: `/thread/${list.id}`, search: `?title=${list.title}` }}>
              <li key={list.id}>{list.title}</li>
            </Link>
          )
        })}
      </ul>
    </>
  )
}

export default ThreadList
