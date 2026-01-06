import { useContext } from "react"
import { NameContext } from "./UserContext"


const CompTwo = () => {
  const DemoName = useContext(NameContext)

  return (
    <div>
          <h1>My name is : {DemoName}</h1>

    </div>
  )
}

export default CompTwo