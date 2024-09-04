"use client"
import { FormEvent, useState,} from "react"
import { useRouter } from "next/navigation"



export default function App() {

const [inputVal, setInputVal] = useState("");

const {push} = useRouter();

const handleSubmit = (event:FormEvent) => {
  event.preventDefault()
  push(`/page/${inputVal}`)
};


return(
<>

<div className="text-3xl mt-0  bg-green-200 ">
      <h1 className=" "> Cat Randomizer</h1>
</div>

<div className="flex h-screen max-h-screen flex-col justify-center items-center ">
  <div className="flex flex-col bg-red-700 h-1/2 w-1/3 justify-evenly items-center">
    <div>
      <h1 className="text-xl">Sign In</h1>
    </div>
    
    <form onSubmit={handleSubmit} >
     <input type= 'text' 
     placeholder= "Enter Name Here.."
     className= "text-gray-800 outline-none"
     value= {inputVal}
     onChange= {(e) => setInputVal(e.target.value)}
     />
     <div className="flex justify-center">
     <button> Sign In </button>
     </div>
    </form>
  </div>
  </div>
</>
);
}
