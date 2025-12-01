import { useReducer, useRef } from "react";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "deposit":
        return { amount: Number(state.amount) + action.deposit };
      case "widthraw":
        if (Number(state.amount) - Number(action.widthraw) < 0) {
          return { amount: state.amount };
        } else {
          return { amount: Number(state.amount) - Number(action.widthraw) };
        }
      case "reset":
        return { amount: 0 };
    }
  }

  let poor = useRef();
  const [state, dispatch] = useReducer(reducer, { amount: 0 });
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <div>
          <h1>GOA Bank System</h1>
        </div>
        <div>
          <h2>Amount: {state.amount}</h2>
        </div>
        <form
          className="flex flex-col gap-2 items-center justify-center"
          onSubmit={(e) => {
            e.preventDefault();
            let depositAmount = Number(e.target.deposit.value);
            let widthrawAmount = Number(e.target.widthraw.value);

            if (depositAmount) {
              dispatch({ type: "deposit", deposit: depositAmount });
              e.target.deposit.value = "";
              return;
            }

            if (widthrawAmount) {
              dispatch({ type: "widthraw", widthraw: widthrawAmount });
              e.target.widthraw.value = "";
              return;
            }
          }}
        >
          <input
            type="text"
            placeholder="deposit cash"
            className="p-2 active:border-none focus:border-none focus:outline-0 rounded-4xl active:outline-0 border transition duration-300"
            name="deposit"
          />
          <input
            type="text"
            placeholder="widthraw cash"
            className="p-2 active:border-none focus:border-none focus:outline-0 rounded-4xl active:outline-0 border transition duration-300"
            name="widthraw"
          />
          <h2 style={{ display: "none" }}>Not Enough Money</h2>
          <button
            type="submit"
            className="rounded-4xl text-white bg-gray-900 hover:text-gray-900 hover:cursor-pointer hover:bg-gray-200 transition duration-300 p-2"
          >
            Submit
          </button>
          <button className="rounded-4xl text-white bg-gray-900 hover:text-gray-900 hover:cursor-pointer hover:bg-gray-200 transition duration-300 p-2">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
