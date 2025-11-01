import { configureStore } from "@reduxjs/toolkit";
import { tasksManagementSlice } from "./reducers/tasks-reducer";

export const store = configureStore({
    reducer: {
      [tasksManagementSlice.name]: tasksManagementSlice.reducer,
      
    },
    
  });