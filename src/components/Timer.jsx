import { useState, useEffect} from "react"


function Timer () {
const [counter, setCounter] = useState(100)

useEffect(()=> {
    setInterval(() =>{
        setCounter((cur) => cur - 1)
    }, 1000)
    
    
}, [])


    return <div>
    <div>pozostało {counter} sekund</div>

    </div>
}

export default Timer