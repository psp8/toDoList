import React from "react";
import { IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../features/tasks/tasksSlice";

interface Props {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskActionButtons: React.FC<Props> = ({ task, onEdit, onDelete }) => {
    return (
        <Box
            className="action-buttons"
            sx={{
                display: "flex",
                gap: 0.5,
                opacity: 0,
                transition: "opacity 0.2s ease-in-out",
            }}
        >
            <IconButton
                size="small"
                onClick={() => onEdit(task)}
                sx={{ color: "text.secondary" }}
            >
                <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
                size="small"
                onClick={() => onDelete(task.id)}
                sx={{ color: "error.main" }}
            >
                <DeleteIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};

export default TaskActionButtons;
