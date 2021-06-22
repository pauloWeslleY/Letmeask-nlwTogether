import { useState } from "react";

export function Button() {
   const [counter, setCounter] = useState(0)

   function incremeant() {
      setCounter(counter + 1)
   }

   return (
      <button onClick={incremeant}>
         {counter}
      </button>
   )
}
