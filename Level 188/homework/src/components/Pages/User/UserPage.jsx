import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("Found"))
  );

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[360px] bg-white rounded-3xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Profile INFO
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
            alt="avatar"
            className="w-28 h-28 rounded-full border"
          />
        </div>

        <div className="text-center space-y-2">
          <div className="flex justify-center items-center gap-2">
            {editing ? (
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border px-2 rounded text-center font-semibold"
              />
            ) : (
              <h2 className="text-2xl font-semibold">{user?.name}</h2>
            )}

            <i
              className="fa-solid fa-pen cursor-pointer"
              onClick={() => {
                if (editing) {
                  const updated = { ...user, name };
                  setUser(updated);
                  localStorage.setItem("Found", JSON.stringify(updated));
                }
                
                setEditing(!editing);
              }}
            />
          </div>

          <p className="text-gray-600">Email: {user?.email}</p>
          <p className="text-gray-600">Money: ${user?.money}</p>
          <p className="text-gray-600 capitalize">
            Status: {user?.status}
          </p>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("Found");
            navigate("/");
          }}
          className="w-full mt-8 py-2 rounded-xl font-semibold border hover:bg-black hover:text-white cursor-pointer transition-all duration-300 "
        >
          Log out
        </button>
      </div>
    </section>
  );
}

export default UserPage;
