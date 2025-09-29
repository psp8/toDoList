import React from "react";
import { Task } from "../features/tasks/tasksSlice";
import TaskFormPage, { TaskFormValues } from "../components/TaskFormDialog";

interface Props {
  task: Task;
  onUpdate: (task: Task) => void;
  onCancel: () => void;
}

const EditTaskForm: React.FC<Props> = ({ task, onUpdate, onCancel }) => {
  const handleSubmit = ({ title, description, status }: TaskFormValues) => {
    onUpdate({ ...task, title, description, status });
  };

  return (
    <TaskFormPage
      mode="edit"
      onCancel={onCancel}
      onSubmit={handleSubmit}
      initialValues={{
        title: task.title,
        description: task.description,
        status: task.status,
      }}
    />
  );
};

export default EditTaskForm;
