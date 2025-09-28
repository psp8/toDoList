import React from "react";
import { Task } from "../features/tasks/tasksSlice";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import TaskActionButtons from "./TaskActionButtons";
import TaskStatus from "./TaskStatus";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onEdit, onDelete }) => {
  const isCompleted = task.status === "Completed";

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
        <Grid container spacing={2} columns={12}  alignItems={'flex-start'}>
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
          <Grid size={{ xs: 10, md: 11, lg: 11 }} container>
            <Grid size={12} direction={'row'} container justifyContent={'space-between'} alignItems={'flex-start'}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  textDecoration: isCompleted ? "line-through" : "none",
                  color: isCompleted ? "text.secondary" : "text.primary",
                  mb: 1,
                  fontSize: { xs: '0.875rem', sm: '1.25rem' },
                }}
              >
                {task.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Typography>
              <TaskStatus task={task} />
            </Grid>
            <Grid size={12} direction={'row'} container justifyContent={'space-between'}>
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
            <Grid size={12} direction={'row'} container justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>{task.date}</Typography>
              <TaskActionButtons
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
};

export default TaskItem;
