function UserStatus({ username, isOnline = false }) {
  return (
    <>
      <div>
        {
          isOnline == true ? `${username} is online!` : `${username} is offline!`
        }
      </div>
    </>
  );
}

export default UserStatus;
