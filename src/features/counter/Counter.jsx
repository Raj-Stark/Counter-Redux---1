import {
  Box,
  Button,
  Card,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const Click = styled(Button)(({ theme }) => ({
    background: "red",
    color: "white",
    fontSize: "14px",
  }));

  const handleReset = () => {
    setValue(0);
    dispatch(reset());
  };

  const newValue = Number(value) || 0;

  return (
    <Paper
      sx={{
        height: "400px",
        width: "500px",
        padding: "20px",
      }}
    >
      <Typography variant="h1" textAlign="center">
        {count}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Click
          variant="contained"
          disableRipple
          onClick={() => dispatch(increment())}
        >
          +
        </Click>
        <Click variant="contained" onClick={handleReset}>
          Reset
        </Click>
        <Click variant="contained" onClick={() => dispatch(decrement())}>
          -
        </Click>
      </Box>

      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <TextField
          label="Enter Amount"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></TextField>
        <Click
          disableRipple
          variant="contained"
          onClick={() => dispatch(incrementByAmount(newValue))}
        >
          Add Amount
        </Click>
      </Box>
    </Paper>
  );
};

export default Counter;
