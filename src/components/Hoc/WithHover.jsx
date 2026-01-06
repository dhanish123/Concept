//Handle common logic
//pass comp not props and starting "With"  and retrun fn comp
//has 2 return
import { useState } from "react";
export const WithHover = (WrappedComponent) => {
  return () => {
    //write common loguc inside return  = only Hoc
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
      setIsHover(true);
    };

    const handleMouseLeave = () => {
      setIsHover(false);
    };
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHover ? { backgroundColor: "green" } : {}}
      >
        <WrappedComponent />
      </div>
    );
  };
};

export default WithHover;
