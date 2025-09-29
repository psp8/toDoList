import React from "react";
import { Box, Typography } from "@mui/material";
import { Task } from "../features/tasks/tasksSlice";

interface Props {
    task: Task;
}

const TaskStatus: React.FC<Props> = ({ task }) => {
    const getStatusColor = (status: Task["status"]) => {
        switch (status) {
            case "In Progress":
                return "#ff9800";
            case "Pending":
                return "#DDDDDD";
            case "Completed":
                return "#4caf50";
            default:
                return "#DDDDDD";
        }
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5 }}>
            <div
                style={{ width: 10, height: 10, backgroundColor: getStatusColor(task.status) as any, borderRadius: '50%' }}
            >
            </div>
            <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                {task.status}
            </Typography>
        </Box>
    );
};

export default TaskStatus;
