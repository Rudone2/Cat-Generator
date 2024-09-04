import { useEffect, useState } from "react"


interface Params{
    params: {name: string};
}
        

      export default function page ({params}:Params){
return(
    <>
    <div>
        <div>
    <h1>Welcome {params.name} </h1>
        </div>

            <div id="image-container" className="">
               <img id="cats" src='https://cataas.com/cat' alt="defaultCat.jpeg" className=""></img>
            </div> 
            
            <h1 className="text-3xl font-bold md:underline">
      Hello world!</h1>
             <div>
                <h1></h1>
             </div>
        </div>
    </>
);

}   