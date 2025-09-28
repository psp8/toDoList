import { Task } from "../types";

const KEY = "task_manager_tasks_v1";

export const saveTasks = (tasks: Task[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch (e) {
    console.warn("Failed to save tasks", e);
  }
};

export const loadTasks = (): Task[] => {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as Task[];
  } catch (e) {
    console.warn("Failed to load tasks", e);
    return [];
  }
};
