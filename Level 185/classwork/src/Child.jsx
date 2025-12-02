import React, { useCallback, useState, useEffect } from "react"

const Child = React.memo(( { increase } ) => {
  console.log('Child Render');

  return (
    <button onClick={increase}>Increment</button>
  )
});

export default Child