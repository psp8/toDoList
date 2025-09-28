import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskStatus = "Pending" | "In Progress" | "Completed";

export interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  status: TaskStatus;
}

const initialState: Task[] =
  JSON.parse(localStorage.getItem("tasks") || "[]") || [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, title, description, status } = action.payload;
      const existingTask = state.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title;
        existingTask.description = description;
        existingTask.status = status;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
