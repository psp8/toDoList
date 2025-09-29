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
import { TaskStatus } from "../features/tasksSlice";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    mainContainerStyles,
    backButtonStyles,
    titleStyles,
    formContainerStyles,
    paperStyles,
    formGridStyles,
    statusFormControlStyles,
    selectStyles,
    statusOptionContainerStyles,
    statusIndicatorStyles,
    actionButtonsContainerStyles,
    statusOptions,
} from "../styles/TaskFormDialog.styles";

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;
        onSubmit({ title, description, status });
    };

    return (
        <Box sx={mainContainerStyles}>
            {/* App Bar */}
            <AppBar position="static" elevation={1}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={onCancel}
                        sx={backButtonStyles}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={titleStyles}>
                        {mode === "add" ? "Add Task" : "Edit Task"}
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Form Content */}
            <Container maxWidth="sm" sx={formContainerStyles}>
                <Paper elevation={2} sx={paperStyles}>
                    <form onSubmit={handleSubmit}>
                        <Box sx={formGridStyles}>
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
                                sx={statusFormControlStyles(mode)}
                            >
                                <InputLabel id="status-select-label">Status</InputLabel>
                                <Select
                                    fullWidth
                                    labelId="status-select-label"
                                    value={status}
                                    label="Status"
                                    onChange={(e) => setStatus(e.target.value as TaskStatus)}
                                    sx={selectStyles}
                                >
                                    {statusOptions.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            <Box sx={statusOptionContainerStyles}>
                                                <Box
                                                    sx={{
                                                        ...statusIndicatorStyles,
                                                        backgroundColor: option.color,
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
                        <Box sx={actionButtonsContainerStyles}>
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


