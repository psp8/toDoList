import React from "react";
import { Task } from "../features/tasks/tasksSlice";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  IconButton,
  Box,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onEdit, onDelete }) => {
  const isCompleted = task.status === "Completed";

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
    <Card
      style={{ width: '100%' }}
      sx={{
        mb: 2,
        "&:hover": {
          backgroundColor: "grey.50",
          "& .action-buttons": {
            opacity: 1,
          },
        },
      }}
    >
      <CardContent>
        <Grid container direction="row" size={12} spacing={1} alignItems="center">
          <Grid size={{ xs: 2, md: 1, lg: 1 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 32,
                height: 32,
                fontSize: "0.875rem",
              }}
            >
              {task.title.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>

          <Grid size={{ xs: 5, md: 8, lg: 9 }}>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 600,
                textDecoration: isCompleted ? "line-through" : "none",
                color: isCompleted ? "text.secondary" : "text.primary",
                mb: 1,
              }}
            >
              {task.title}
            </Typography>
          </Grid>

          <Grid size={{ xs: 5, md: 4, lg: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 0.5 }}>

              <div
                style={{ width: 10, height: 10, backgroundColor: getStatusColor(task.status) as any, borderRadius: '50%' }}
              >
              </div>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                {task.status}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 12 }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                lineHeight: 1.4,
              }}
            >
              {task.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 12, lg: 12 }} container direction="row" spacing={1} justifyContent="space-between" alignItems="center" >
            <Grid>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>{task.date}</Typography>
            </Grid>
            <Grid>
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
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};

export default TaskItem;
