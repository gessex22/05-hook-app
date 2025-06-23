import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () =>{


    const { counter, increment, decrease, reset } = useCounter()



return(

    <>
        <h1>
        Counter with Hook: { counter}  
        </h1>
        <hr></hr>
        <button onClick={ ()=> increment(2)} className="btn btn-primary"> +1 </button>
         <button onClick={reset} className="btn btn-primary "> reset </button>
          <button onClick={decrease} className="btn btn-primary "> -1 </button>
    </>
)



}