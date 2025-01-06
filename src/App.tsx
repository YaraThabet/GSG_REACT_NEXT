import { useState } from 'react'
import './App.css'
import Output from './components/Output.components'

function App() {
  const [input , setInput] = useState("");// للمدخلات 
  const [output, setOutput] = useState("");//للمخرجات 

  const OnClick = (value: string) => {
   setInput(input + value);
  };
  
  const handleEvaluate = () => {
    try {
      setOutput(eval(input)); 
    } catch (e) {
      setOutput("خطأ"); 
    }
  };
 
   const Num= [1,2,3,4,5,6,7,8,9,0];
 
  return (
    <>
     <div>
             <div className='body' >

                <div className='Calculator'>
                <div className='output' >
                  <p>
                  <div >{input}</div> 
                  {output !== "" && <div >= {output}</div>}
                  </p>
                
                </div>
                

               <div className='button' >
                  {
                    Num.map(Num => (
                      <button key={Num} onClick={()=> OnClick(Num.toString())}> {Num}</button>
                    ))
                  }
                 <button onClick={()=> OnClick("-")}> -</button>
                 <button onClick={()=> OnClick("+")}> +</button>
              </div>
                 <div className='yo'>
                  <button onClick={() => handleEvaluate()} >=</button>  
                 </div>
              </div>
           </div>       
     </div>
   </>
  )
}

export default App ;
