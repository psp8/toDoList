import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addTask, updateTask, deleteTask, Task } from "./features/tasks/tasksSlice";
import TaskList from "./views/TaskList";
import AddTaskForm from "./views/AddTaskForm";
import EditTaskForm from "./views/EditTaskForm";
import FloatingActionButton from "./components/FloatingActionButton";
import {
  Container,
  Typography,
  TextField,
  Box,
  InputAdornment,
  AppBar,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";

export default function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);
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

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const inProgressTasks = filteredTasks.filter((t) => t.status === "In Progress");
  const pendingTasks = filteredTasks.filter((t) => t.status === "Pending");
  const completedTasks = filteredTasks.filter((t) => t.status === "Completed");

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
          <>
            <AppBar position="static" elevation={1}>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  TO-DO APP
                </Typography>
              </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ py: 4 }}>
              {/* Search */}
              <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                <TextField
                  fullWidth
                  placeholder="Search To-Do"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="action" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "background.paper",
                      boxShadow: 1,
                    },
                  }}
                />
              </Box>

              {/* Lists */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TaskList
                  title={`In Progress (${inProgressTasks.length})`}
                  tasks={inProgressTasks}
                  onEdit={(task) => {
                    setSelectedTask(task);
                    setView("edit");
                  }}
                  onDelete={handleDeleteTask}
                />
                <TaskList
                  title={`Pending (${pendingTasks.length})`}
                  tasks={pendingTasks}
                  onEdit={(task) => {
                    setSelectedTask(task);
                    setView("edit");
                  }}
                  onDelete={handleDeleteTask}
                />
                <TaskList
                  title={`Completed (${completedTasks.length})`}
                  tasks={completedTasks}
                  onEdit={(task) => {
                    setSelectedTask(task);
                    setView("edit");
                  }}
                  onDelete={handleDeleteTask}
                />
              </Box>

              {/* Floating button */}
              <FloatingActionButton onClick={() => setView("add")} />
            </Container>
          </>
        );
    }
  };

  return <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>{renderView()}</Box>;
}
