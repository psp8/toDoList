import React from "react";
import { IconButton, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Task } from "../features/tasksSlice";
import {
    actionButtonsContainerStyles,
    editButtonStyles,
    deleteButtonStyles,
} from "../styles/TaskActionButtons.styles";

interface Props {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskActionButtons: React.FC<Props> = ({ task, onEdit, onDelete }) => {
    return (
        <Box
            className="action-buttons"
            sx={actionButtonsContainerStyles}
        >
            <IconButton
                size="small"
                onClick={() => onEdit(task)}
                sx={editButtonStyles}
            >
                <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
                size="small"
                onClick={() => onDelete(task.id)}
                sx={deleteButtonStyles}
            >
                <DeleteIcon fontSize="small" />
            </IconButton>
        </Box>
    );
};

export default TaskActionButtons;
