import { createContext ,useState } from "react"
import CompTwo from "./CompTwo";

export const NameContext = createContext();


const UserContext = () => {
    const [name] = useState('Dhani');
  return (
    <NameContext.Provider value={name}>
        <CompTwo />
    </NameContext.Provider>
  )
}

export default UserContext