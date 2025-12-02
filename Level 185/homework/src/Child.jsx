import React from "react";

const Child = React.memo(({ calculate }) => {
  console.log("Child Render");

  return (
    <div>
      <h3 className="text-3xl mt-2">Result: {calculate()}</h3>
    </div>
  );
});

export default Child;
