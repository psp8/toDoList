import React, { useState } from "react";
import { Task } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<Props> = ({ title, tasks, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Accordion
      expanded={isOpen}
      onChange={() => setIsOpen(!isOpen)}
      sx={{
        mb: 2,
        "&:before": {
          display: "none",
        },
        boxShadow: 1,
        borderRadius: 1,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: "grey.100",
          "&:hover": {
            backgroundColor: "grey.200",
          },
          "&.Mui-expanded": {
            backgroundColor: "grey.100",
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <Box sx={{ p: 2 }}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign="center"
              sx={{ py: 2 }}
            >
              No tasks in this category.
            </Typography>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default TaskList;
