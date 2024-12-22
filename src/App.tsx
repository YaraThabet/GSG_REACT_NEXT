import { useState } from 'react'
import './App.css'
import Output from './components/Output.components'

function App() {
  const [input , setInput] = useState("");// للمدخلات 
  const [output, setOutput] = useState("");//للمخرجات 

  const OnClick = (value: string) => {//وظيفة للتعامل مع ضغط الأزرار وإضافة القيم للمدخلات
   setInput(input + value);// إضافة القيمة إلى المدخلات
  };
  
  const handleEvaluate = () => {
    try {
      setOutput(eval(input)); // حساب النتيجة باستخدام eval()
    } catch (e) {
      setOutput("خطأ"); // في حال حدوث خطأ، عرض "خطأ"
    }
  };

 
  return (
    <>
     <div>
              <div className='body' >
                <div className='Calculator'>
                <div className='output' >
                  <p>
                  <div >{input}</div> {/* المدخلات */}
                  {output !== "" && <div className="equal-sign">= {output}</div>}
                  </p>
                
                </div>

               <div className='button' >
                 <button onClick={()=> OnClick("1")}> 1</button>
                 <button onClick={()=> OnClick("2")}> 2</button>
                 <button onClick={()=> OnClick("3")}> 3</button>
                 <button onClick={()=> OnClick("4")}> 4</button>
                 <button onClick={()=> OnClick("5")}> 5</button>
                 <button onClick={()=> OnClick("6")}> 6</button>
                 <button onClick={()=> OnClick("7")}> 7</button>
                 <button onClick={()=> OnClick("8")}> 8</button>
                 <button onClick={()=> OnClick("9")}> 9</button>                
                 <button onClick={()=> OnClick("0")}> 0</button>
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

export default App
