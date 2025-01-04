
import React from "react";

interface Ioutput {
    output: string;
}

const Output: React.FC<Ioutput> = ({output}) => {
    return (
        <div>
           
            
                <p>{output}</p>
      </div>
    )
  
  }
  export default Output ;