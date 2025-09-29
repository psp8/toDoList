import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Task } from "../features/tasks/tasksSlice";
import TaskList from "../components/TaskList";
import FloatingActionButton from "../components/FloatingActionButton";
import {
    Container,
    TextField,
    Box,
    InputAdornment,
    AppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface TaskDashboardProps {
    searchQuery: string;
    onSearchChange: (query: string) => void;
    onEditTask: (task: Task) => void;
    onDeleteTask: (id: number) => void;
    onAddTask: () => void;
}

export default function TaskDashboard({
    searchQuery,
    onSearchChange,
    onEditTask,
    onDeleteTask,
    onAddTask,
}: TaskDashboardProps) {
    const tasks = useSelector((state: RootState) => state.tasks);

    const filteredTasks = tasks.filter(
        (t) =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const inProgressTasks = filteredTasks.filter((t) => t.status === "In Progress");
    const pendingTasks = filteredTasks.filter((t) => t.status === "Pending");
    const completedTasks = filteredTasks.filter((t) => t.status === "Completed");

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
                        onChange={(e) => onSearchChange(e.target.value)}
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
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                    <TaskList
                        title={`Pending (${pendingTasks.length})`}
                        tasks={pendingTasks}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                    <TaskList
                        title={`Completed (${completedTasks.length})`}
                        tasks={completedTasks}
                        onEdit={onEditTask}
                        onDelete={onDeleteTask}
                    />
                </Box>

                {/* Floating button */}
                <FloatingActionButton onClick={onAddTask} />
            </Container>
        </>
    );
}
