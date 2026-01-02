import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminPage() {
  const user = JSON.parse(localStorage.getItem("Found"));
  const navigate = useNavigate();

  const [tables, setTables] = useState([
    { id: 1, status: "Free" },
    { id: 2, status: "Busy" },
    { id: 3, status: "Free" },
    { id: 4, status: "Busy" },
  ]);

  const [orders, setOrders] = useState([
    // soon 
  ])

  const changeStatus = (tableNumber) => {
    const updatedTables = tables.map((tab) =>
      tab.id === tableNumber
        ? {
            ...tab,
            status: tab.status === "Free" ? "Busy" : "Free",
          }
        : tab
    );

    setTables(updatedTables);
  };

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center bg-gray-100 gap-5">
        <div className="w-[360px] bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Profile INFO</h1>

          <div className="flex justify-center mb-6">
            <img
              src="https://www.svgrepo.com/show/384670/account-avatar-profile-user.svg"
              alt="avatar"
              className="w-28 h-28 rounded-full border"
            />
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p className="text-gray-600">Money: ${user?.money}</p>
            <p className="text-gray-600 capitalize">Status: {user?.status}</p>
          </div>

          <button
            onClick={() => {
              localStorage.removeItem("Found");
              navigate("/");
            }}
            className="w-full mt-8 py-2 rounded-xl font-semibold border transition-all duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            Log out
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 w-[50%]">
          <h1 className="text-2xl font-semibold">
            Restaraunt Controll Dashboard
          </h1>

          <h3 className="mt-4">Incoming Orders:</h3>

          <h3 className="mt-6">Tables status:</h3>

          {tables.map((table) => (
            <div
              key={table.id}
              className="flex items-center justify-between border p-3 rounded-2xl mt-2"
            >
              <span>
                Table {table.id}{" | "}
                <b className={table.status === "Free" ? "text-green-400" : "text-red-600"}>{table.status}</b>
              </span>

              <button
                onClick={() => changeStatus(table.id)}
                className="border px-3 py-1 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
              >
                Change
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AdminPage;
