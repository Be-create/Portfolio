import Main from "./components/main"

import { useEffect, useState } from "react"
const App =()=>{
  const [count,setcount] = useState(5)
  
  
  console.log(count)
   return count < 5 ? <h1>{count}</h1> : 
  
  (
    
<Main/>
  )
}

export {App}