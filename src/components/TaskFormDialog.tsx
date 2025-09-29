import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    AppBar,
    Toolbar,
    IconButton,
    Chip,
} from "@mui/material";
import { TaskStatus } from "../features/tasks/tasksSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export interface TaskFormValues {
    title: string;
    description: string;
    status: TaskStatus;
}

interface TaskFormPageProps {
    mode: "add" | "edit";
    initialValues?: Partial<TaskFormValues>;
    onCancel: () => void;
    onSubmit: (values: TaskFormValues) => void;
}

const TaskFormPage: React.FC<TaskFormPageProps> = ({
    mode,
    initialValues,
    onCancel,
    onSubmit,
}) => {
    const [title, setTitle] = useState(initialValues?.title ?? "");
    const [description, setDescription] = useState(initialValues?.description ?? "");
    const [status, setStatus] = useState<TaskStatus>(initialValues?.status ?? ("Pending" as TaskStatus));


    const statusOptions = [
        { value: "Pending", label: "Pending", color: "#DDDDDD" },
        { value: "In Progress", label: "In Progress", color: "#ff9800" },
        { value: "Completed", label: "Completed", color: "#4caf50" },
    ] as const;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ title, description, status });
    };

    return (
        <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
            {/* App Bar */}
            <AppBar position="static" elevation={1}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onCancel}
                        sx={{ mr: 2 }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {mode === "add" ? "Add Task" : "Edit Task"}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Form Content */}
            <Container maxWidth="sm" sx={{ py: 4 }}>
                <Paper elevation={2} sx={{ p: 4 }}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ display: "grid", gap: 3 }}>
                            <TextField
                                autoFocus
                                required
                                fullWidth
                                label="Task Title"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Description"
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                variant="outlined"
                            />
                            <FormControl
                                fullWidth
                                sx={{
                                    display: mode === 'add' ? 'none' : 'block',
                                }}
                            >
                                <InputLabel id="status-select-label">Status</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="status-select-label"
                                    value={status}
                                    label="Status"
                                    onChange={(e) => setStatus(e.target.value as TaskStatus)}
                                    sx={{
                                        '& .MuiSelect-select': {
                                            display: 'flex',
                                            alignItems: 'center',
                                        }
                                    }}
                                >
                                    {statusOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Box
                                                    sx={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: '50%',
                                                        backgroundColor: option.color,
                                                        flexShrink: 0,
                                                    }}
                                                />
                                                <Typography variant="body2">
                                                    {option.label}
                                                </Typography>
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        {/* Action Buttons */}
                        <Box sx={{ display: "flex", gap: 2, mt: 4, justifyContent: "space-between" }}>
                            <Button onClick={onCancel} variant="outlined" size="large">
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" size="large">
                                {mode === "add" ? "Add Task" : "Update Task"}
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default TaskFormPage;


