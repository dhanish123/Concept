import GrandChild from "../Props drilling/GrandChild"
const Child = ({user}) => {
  return (
    <div>
        <h1>Child</h1>
      <GrandChild user={user} />
    </div>
  )
}

export default Child