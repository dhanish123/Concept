import React, { useRef } from "react"; 
                                
const Uncontrolled = () => { //store value but not rerendered
  const inputRef = useRef(); //read i/p value without React state whenever needed.

  const handleClick = () => {
    alert(inputRef.current.value); // read value on demand
    console.log(inputRef.current.value);
    
  };
  

  return (
    <div>
      <input type="text" ref={inputRef} />  {/* Creates reference directly access i/p element without using React state. */}
      <button onClick={handleClick}>Show Value</button>
    </div>
  );
};

export default Uncontrolled;
