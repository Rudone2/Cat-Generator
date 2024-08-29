"use client"
import { FormEvent, useState,} from "react"
import { useRouter } from "next/navigation"


export default function App() {

const [inputVal, setInputVal] = useState("");

const {push} = useRouter();

const handleSubmit = (event:FormEvent) => {
  event.preventDefault()
  push(`/animal/${inputVal}`)
};


return(
<>
<div className="">
  <div className="">
      <h1> Animal Randomizer</h1>
  </div>
</div>
<div>
  <div>
    <div className="">
      <h1>Sign In</h1>
    </div>
    <form onSubmit={handleSubmit}>
     <input type= 'text' 
     placeholder= "Enter Name Here.."
     className= ""
     value= {inputVal}
     onChange= {(e) => setInputVal(e.target.value)}
     />
     <button> Sign In </button>
    </form>
  </div>
</div>
</>
);
}
