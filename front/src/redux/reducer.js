import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    login: false,
    user: { id: false },
  },
  turns: [],
};

// Definición de userSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerUser } = userSlice.actions;

// Definición de turnSlice
export const turnSlice = createSlice({
  name: "turn",
  initialState,
  reducers: {
    addTurn: (state, action) => {
      state.turns.push(action.payload); // Agrega el nuevo turno al estado
    },
    cancelTurn: (state, action) => {
      state.turns = state.turns.map((turno) => {
        if (turno.id === action.payload) {
          return { ...turno, status: "cancelled" };
        }
        return turno;
      });
    },
  },
});

export const { addTurn, cancelTurn } = turnSlice.actions;

export default {
  user: userSlice.reducer,
  turn: turnSlice.reducer,
};
