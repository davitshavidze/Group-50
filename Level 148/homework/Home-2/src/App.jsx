import UserFriends from "./UserFriends";

function App() {
  const arr = [
    { name: "Jon", status: "offline", profilePic: "😎" },
    { name: "Bob", status: "online", profilePic: "🤗" },
  ];

  return (
    <>
      <UserFriends arr={arr}/>
    </>
  );
}

export default App;
