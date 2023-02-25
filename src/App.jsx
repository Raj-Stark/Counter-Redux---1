import { Box } from "@mui/material";
import { useState } from "react";
import Counter from "./features/counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
      }}
    >
      <Counter></Counter>
    </Box>
  );
}

export default App;
