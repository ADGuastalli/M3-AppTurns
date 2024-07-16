import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer"; // Corregido el nombre del archivo

const store = configureStore({
  reducer: reducers,
});

export default store;
