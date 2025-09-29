import { SxProps, Theme } from "@mui/material";

// Card styles
export const taskCardStyles: SxProps<Theme> = {
    mb: 2,
    "&:hover": {
        backgroundColor: "grey.50",
        "& .action-buttons": {
            opacity: 1,
        },
    },
};

// Card inline style
export const taskCardInlineStyle = {
    width: '100%',
};

// Grid container styles
export const gridContainerStyles: SxProps<Theme> = {
    alignItems: 'flex-start',
};

// Avatar styles
export const avatarStyles: SxProps<Theme> = {
    bgcolor: "primary.main",
    width: 32,
    height: 32,
    fontSize: "0.875rem",
};

// Title typography styles
export const titleStyles = (isCompleted: boolean): SxProps<Theme> => ({
    fontWeight: 600,
    textDecoration: isCompleted ? "line-through" : "none",
    color: isCompleted ? "text.secondary" : "text.primary",
    mb: 1,
    fontSize: { xs: '0.875rem', sm: '1.25rem' },
});

// Description typography styles
export const descriptionStyles: SxProps<Theme> = {
    color: "text.secondary",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    lineHeight: 1.4,
};

// Date typography styles
export const dateStyles: SxProps<Theme> = {
    fontSize: "0.75rem",
};

// Grid size configurations
export const avatarGridSize = { xs: 2, md: 1, lg: 1 };
export const contentGridSize = { xs: 10, md: 11, lg: 11 };
export const fullGridSize = 12;
