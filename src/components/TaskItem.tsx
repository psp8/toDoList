import React from "react";
import { Task } from "../features/tasksSlice";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Grid,
} from "@mui/material";
import TaskActionButtons from "./TaskActionButtons";
import TaskStatus from "./TaskStatus";
import {
  taskCardStyles,
  taskCardInlineStyle,
  gridContainerStyles,
  avatarStyles,
  titleStyles,
  descriptionStyles,
  dateStyles,
  avatarGridSize,
  contentGridSize,
  fullGridSize,
} from "../styles/TaskItem.styles";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<Props> = ({ task, onEdit, onDelete }) => {
  const isCompleted = task.status === "Completed";

  return (
    <Card
      style={taskCardInlineStyle}
      sx={taskCardStyles}
    >
      <CardContent>
        <Grid container spacing={2} columns={12} sx={gridContainerStyles}>
          <Grid size={avatarGridSize}>
            <Avatar sx={avatarStyles}>
              {task.title.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>
          <Grid size={contentGridSize} container>
            <Grid size={fullGridSize} direction={'row'} container justifyContent={'space-between'} alignItems={'flex-start'}>
              <Typography variant="h6" sx={titleStyles(isCompleted)}>
                {task.title.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Typography>
              <TaskStatus task={task} />
            </Grid>
            <Grid size={fullGridSize} direction={'row'} container justifyContent={'space-between'}>
              <Typography variant="body2" sx={descriptionStyles}>
                {task.description}
              </Typography>
            </Grid>
            <Grid size={fullGridSize} direction={'row'} container justifyContent={'space-between'} alignItems={'center'}>
              <Typography variant="body2" sx={dateStyles}>{task.date}</Typography>
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
