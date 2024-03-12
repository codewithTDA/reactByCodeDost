import { useRef, useState ,useMemo, useCallback} from "react";

function Counter(){
    const [number, setNumber] = useState(1);
let num = useRef(0);
    function handleClick(e){
        e.stopPropagation();
       
    //    setNumber(number+1);
       setNumber(number=>number+1);
    //    setNumber(number=>number+1);
    // setNumber(number+1)
    // setNumber(number+1)
    // setNumber(number+1)
        num.current++
        // console.log(number)
        // console.log(num.);
    }
    const fibFx = useCallback(
        function fib(n){
            if(n===1 || n===2){
                return 1
            }
            return fib(n-1) + fib(n-2);
        },[]
    )

   const fibMemized =  useMemo(()=>fibFx(number),[number])
    return(
        <>
        
        <h1 style={{color:'red'}}>{number} | {fibMemized}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;