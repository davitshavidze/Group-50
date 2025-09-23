function User({name, bio = "No Biography", age = 18}) {
  return (
    <div className="user">
      <h1>Hello, my name is {name}</h1>
      <h2>My short bio: {bio}</h2>
      <h2 className="age">My Age: {age}</h2>
    </div>
  )
}

export default User