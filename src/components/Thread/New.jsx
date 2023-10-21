import axios from "axios"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const url = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads"
  const onSubmit = async (data) => {
    try {
      await axios.post(url, data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h2>スレッド新規作成</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrap">
          <input
            id="title"
            className="title"
            placeholder="スレッドタイトル"
            {...register("title", { required: true })}
          />
          {errors.title && <div>入力必須項目です</div>}
        </div>
        <div className="wrap">
          <div>
            <a href="/" className="top-back">
              TOPに戻る
            </a>
            <button type="submit" className="create-btn">
              作成
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default New
