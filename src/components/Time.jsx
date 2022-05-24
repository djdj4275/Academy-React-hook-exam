import { useState, useEffect } from "react"

const Time = () => {
  const [date, setDate] = useState(new Date());

  const time = () => {
    setDate(new Date());
  }

  useEffect(() => {
    setInterval(()=>time(), 1000);
  },[])

  return  (
    <div>
      <h1>{date.toLocaleTimeString()}</h1>
    </div>
  )
}

export default Time;