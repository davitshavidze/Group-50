import UserCard from "./UserCard";

function App() {
  const arr = [
    { name: "Jon", status: "offline", profilePic: "😎" },
    { name: "Bob", status: "online", profilePic: "🤗" },
  ];
  return (
    <>
      <UserCard name="Davit" surname="Shavidze" age={15} gender="male" friends={arr}/>
    </>
  );
}

export default App;
