
import UserStatus from "./UserStatus"

function App() {
  return (
    <>
      <UserStatus username="David" isOnline={false} />
      <UserStatus username="Nia" isOnline={true} />
      <UserStatus username="Shio" isOnline={false} />
    </>
  )
}

export default App
