import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("#141C30");
  const [inp, setInp] = useState("");
  const [user, setUser] = useState(null);
  const [color, setColor] = useState("#fff");
  const [bg2, setBg2] = useState("#1F2A48"); 
  const [bg3, setBg3] = useState("#141C30");
  const [mode, setMode] = useState("Light");
  // https://api.github.com/users/{username}

  function handleChange(e) {
    setInp(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    apiData(inp.trim());
    setInp("")
  }

  async function apiData(user) {
    try {
      let response = await fetch(`https://api.github.com/users/${user}`);
      let data = await response.json();
      console.log(data)

      if (response.ok) {
        setUser(data);
      } else {
        setUser(null);
      }

    } catch (error) {

      console.log(error);
      setUser(null);
    }
  }

  function handleTheme() {
    if (theme === "#141C30") {
      setTheme("#fff");
      setColor("#141C30");
      setBg2("#D3D3D3");
      setBg3("#fff");
      setMode("Dark");
    } else {
      setTheme("#141C30");
      setColor("#fff");
      setBg2("#1F2A48");
      setBg3("#141C30");
      setMode("Light");
    }
  }

  return (
    <>
      <div
        style={{
          backgroundColor: theme,
          transition: "0.3s ease",
        }}
        className="h-screen flex justify-center items-center w-[1920px] max-w-full "
      >
        <div style={{color: color,}}>
          <div className="flex justify-around w-[600px]">
            <h1 className="text-1xl">devfinder</h1>
            <span
              className="ml-[200px] relative left-[70px] text-1xl"
              draggable="false"
            >
              {mode}
            </span>
            <span
              className="material-symbols-outlined cursor-pointer"
              onClick={handleTheme}
            >
              sunny
            </span>
          </div>

          <div className="w-[520px] bg-[#1F2A48] h-[50px] relative left-[40px] rounded-2xl mt-[30px]" style={{backgroundColor: bg2,}}>
            <form
              onSubmit={handleSubmit}
              className="flex justify-between items-center h-[50px]"
            >
              <span className="material-symbols-outlined text-blue-500 relative left-[20px]">
                search
              </span>
              <input
                type="text"
                placeholder="Search GitHub username..."
                className="w-[250px] p-1 focus:border-none active:border-none relative right-[60px] ml-[20px] focus:outline-0 focus:transition-all duration-200"
                value={inp}
                onChange={handleChange}
              />

              <button
                className="bg-[#007bfe] p-1.5 rounded-[7px] hover:cursor-pointer transition-all duration-400 mr-[10px] hover:bg-[#007bfe44]"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {user && (
            <div className="w-[520px] bg-[#1F2A48] h-[275px] relative left-[40px] rounded-2xl mt-[20px] transition-all duration-500" style={{backgroundColor: bg2}}>
              <img
                src={user.avatar_url}
                alt="avatar"
                className="rounded-[50%] w-[100px] h-[100px] relative top-[20px] left-[20px]"
              />
              <div className="w-[200px] h-[150px] relative bottom-[50px] left-[150px]">
                <h1 className="text-2xl relative right-[10px]">{user.name ? user.name : "No Name"}</h1>
                <p className="text-blue-700 mt-0.5 relative right-[10px]">{user.login}</p>
                <p className="relative bottom-[53px] left-[175px]">
                  Joined {new Date(user.created_at).toDateString()}
                </p>
                <p className="mb-3 relative right-[10px]">{user.bio || "This profile has no bio"}</p>
                <div className="bg-[#141C30] w-[330px] h-[70px] mt-1.5 rounded-2xl flex justify-around relative right-[10px]" style={{backgroundColor: bg3}}>
                  <span className="mt-2">Repos</span>
                  <span className="mt-2">Followers</span>
                  <span className="mt-2">Following</span>
                </div>
                <span className="relative bottom-[35px] left-[40px]">
                  {user.public_repos}
                </span>
                <span className="relative bottom-[35px] left-[133px]">
                  {user.followers}
                </span>
                <span className="relative bottom-[35px] left-[245px]">
                  {user.following}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
