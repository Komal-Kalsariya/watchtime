import React, { useEffect ,useState} from 'react'

const Time = () => {
let [input,setInput]=useState(0)
  let [minit,setMinit]=useState(0)
  let [hours,setHours]=useState(0)
  let [second,setSecond]=useState(0)
  let [start,setStart]=useState(false)

  useEffect(()=>{
   
        if(start){
          setHours(Math.floor(input/60))
          setMinit((input-Math.floor(input/60)*60)-1)
          setSecond(59)
          }
  },[start])
  return (
    <div>
          <input type="number" value={input} onChange={(e)=>setInput(e.target.value)} />

          <h1>hours:{hours} minit:{minit} second:{second}</h1>
          <button onClick={()=>setStart(true)}>start</button>
          <button onClick={()=>setStart(false)}>stop</button>
    </div>
  )
}

export default Time