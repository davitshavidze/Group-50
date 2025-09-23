import FriendItem from "./FriendItem";
function UserCard({ name, surname, age, gender, friends }) {
  return (
    <div>
      <p>
        Hello my fullname is: {name} {surname}
      </p>
      <p>My age is: {age}</p>
      <p>My gender is: {gender}</p>
      <p>Friends List:</p>
      <ul>
        {friends.map((friend, index) => (
          <FriendItem key={index} friend={friend} />
        ))}
      </ul>
    </div>
  );
}

export default UserCard;
