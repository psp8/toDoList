import React from "react";
import TaskFormPage, { TaskFormValues } from "./TaskFormDialog";

interface Props {
  onAdd: (title: string, description: string, status: string) => void;
  onCancel: () => void;
}

const AddTaskForm: React.FC<Props> = ({ onAdd, onCancel }) => {
  const handleSubmit = ({ title, description, status }: TaskFormValues) => {
    onAdd(title, description, status);
  };

  return (
    <TaskFormPage
      mode="add"
      onCancel={onCancel}
      onSubmit={handleSubmit}
      initialValues={{ title: "", description: "", status: "Pending" }}
    />
  );
};

export default AddTaskForm;
