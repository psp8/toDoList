import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask, deleteTask, Task } from "./features/tasksSlice";
import TaskDashboard from "./views/TaskDashboard";
import AddTaskForm from "./views/AddTaskForm";
import EditTaskForm from "./views/EditTaskForm";
import { Box } from "@mui/material";
import moment from "moment";

export default function App() {
  const dispatch = useDispatch();
  const [view, setView] = useState<"list" | "add" | "edit">("list");
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      date: moment(new Date()).format("DD-MM-YYYY HH:mm"),
      status: "Pending",
    };
    dispatch(addTask(newTask));
    setView("list");
  };

  const handleUpdateTask = (task: Task) => {
    dispatch(updateTask(task));
    setView("list");
    setSelectedTask(null);
  };

  const handleDeleteTask = (id: number) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setView("edit");
  };

  const handleAddTaskClick = () => {
    setView("add");
  };

  const renderView = () => {
    switch (view) {
      case "add":
        return <AddTaskForm onCancel={() => setView("list")} onAdd={handleAddTask} />;
      case "edit":
        return selectedTask ? (
          <EditTaskForm
            task={selectedTask}
            onCancel={() => {
              setView("list");
              setSelectedTask(null);
            }}
            onUpdate={handleUpdateTask}
          />
        ) : null;
      default:
        return (
          <TaskDashboard
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
            onAddTask={handleAddTaskClick}
          />
        );
    }
  };

  return <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>{renderView()}</Box>;
}