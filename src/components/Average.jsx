import { useState, useMemo, useCallback } from 'react'

const Average = () => {
  const [number, setNumber] = useState([1,5,10,4]);
  const [inputnum, setInputnum] = useState(0);

  const allsum = (list) => {
    return list.reduce((a,b)=>a+b);
  }

  const allaverage = useMemo(()=>allsum(number)/number.length, [number])

  const onChange = useCallback((e)=>{
    setInputnum(e.target.value);
  })

  const addnum = useCallback(()=>{
    setNumber([...number,parseInt(inputnum)]);
    setInputnum(0);
  },[inputnum, number]);

  return (
    <div>
      <input type="number" onChange={onChange}></input>
      <button onClick={addnum}>버튼</button>
      <h1>모든수의 평균 : {allaverage}</h1>
      <ul>
        {
          number.map((a,i)=>(
            <li key={i}>{a}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Average;