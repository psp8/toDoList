import React, { useState } from "react";
import { Task } from "../features/tasksSlice";
import TaskItem from "./TaskItem";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  accordionStyles,
  accordionSummaryStyles,
  titleStyles,
  accordionDetailsStyles,
  contentBoxStyles,
  emptyStateStyles,
} from "../styles/TaskList.styles";

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
      sx={accordionStyles}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={accordionSummaryStyles}
      >
        <Typography sx={titleStyles}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={accordionDetailsStyles}>
        <Box sx={contentBoxStyles}>
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
            <Typography sx={emptyStateStyles}>
              No tasks in this category.
            </Typography>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default TaskList;
