function UserFriends({ arr }) {
  {
    arr.length === 0 ? <p>you have no friends!</p> : 'text'
  }

  return (
    <div>
      {arr.map((el, index) => {
        <p>{el}</p>
      })}
    </div>
  )
}

export default UserFriends;
