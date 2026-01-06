import React ,{useState} from "react";

const Controlled = () => {   //React control i/p value & update state every change
  const [value, setValue] = useState("");

  const handleChange =(e)=>{  //console see
    setValue(e.target.value)
    console.log(e.target.value);
  }
  return (
    <input
      type="text"
      value={value}
    //   onChange={(e)=>setValue(e.target.value)}
      onChange={handleChange}
    />
  );
};

export default Controlled;
