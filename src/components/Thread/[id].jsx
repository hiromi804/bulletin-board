import { useState, useEffect } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import axios from "axios"

const ThreadInList = () => {
  const [inList, setInList] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const params = useParams()
  const searchParams = useSearchParams()
  let threadId = params.id

  const url = `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${threadId}/posts`

  // スレッド内の一覧の取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { method: "GET" })
        const data = await res.json()
        setInList(data.posts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  })

  // スレッド内の投稿
  const regist = async (data) => {
    try {
      await axios.post(url, data)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>{searchParams[0].get("title")}</h2>
      <div className="wrap-box">
        <div className="threadList">
          {inList.map((val) => {
            return (
              <ul className="in-ul" key={val.id}>
                <li className="in-list">{val.post}</li>
              </ul>
            )
          })}
        </div>
        <form onSubmit={handleSubmit(regist)}>
          <div className="post-wrap">
            <input
              id="post"
              className="post-input"
              placeholder="投稿しよう！"
              {...register("post", { required: true })}
            />
            {errors.post && <div>入力必須項目です</div>}

            <button type="submit" className="post-btn">
              投稿
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ThreadInList
