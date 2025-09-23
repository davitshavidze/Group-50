import React from "react";

function FriendItem({ friend }) {
  return (
    <li>
      {friend.profilePic} {friend.name} is {friend.status}
    </li>
  );
}

export default FriendItem;
