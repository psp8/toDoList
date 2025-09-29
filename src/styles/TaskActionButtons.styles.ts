import { SxProps, Theme } from "@mui/material";

// Action buttons container styles
export const actionButtonsContainerStyles: SxProps<Theme> = {
    display: "flex",
    gap: 0.5,
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
};

// Edit button styles
export const editButtonStyles: SxProps<Theme> = {
    color: "text.secondary",
};

// Delete button styles
export const deleteButtonStyles: SxProps<Theme> = {
    color: "error.main",
};
