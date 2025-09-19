import {React, useState, useEffect} from 'react'

const facts = () => {
    const [Index, setIndex] = useState(0)
    const facts = ["fact1", "fact2", "fact3", "fact4"]
    useEffect(() => {
        var idx = 0
        setInterval(() => {
            
            if(idx <= 3){
                idx++
                setIndex(idx)
            }
            else{
                idx = 0
                setIndex(idx)
            }
        }, 2000)
    
    },[])
    
    
  return (
    <div>
      {facts[Index]}
    </div>
  )
}

export default facts
