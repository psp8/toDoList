import React from "react";
import { Box, Typography } from "@mui/material";
import { Task } from "../features/tasksSlice";
import { statusContainerStyles, statusIndicatorStyles, statusTextStyles } from "../styles/TaskStatus.styles";

interface Props {
    task: Task;
}

const TaskStatus: React.FC<Props> = ({ task }) => {
    return (
        <Box sx={statusContainerStyles}>
            <div style={statusIndicatorStyles(task.status)} />
            <Typography variant="body2" sx={statusTextStyles}>
                {task.status}
            </Typography>
        </Box>
    );
};

export default TaskStatus;
