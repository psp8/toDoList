import { SxProps, Theme } from "@mui/material";

// Main container styles
export const mainContainerStyles: SxProps<Theme> = {
    minHeight: "100vh",
    backgroundColor: "background.default",
};

// Back button styles
export const backButtonStyles: SxProps<Theme> = {
    mr: 2,
};

// Title typography styles
export const titleStyles: SxProps<Theme> = {
    flexGrow: 1,
};

// Form container styles
export const formContainerStyles: SxProps<Theme> = {
    py: 4,
};

// Paper styles
export const paperStyles: SxProps<Theme> = {
    p: 4,
};

// Form grid styles
export const formGridStyles: SxProps<Theme> = {
    display: "grid",
    gap: 3,
};

// Status form control styles
export const statusFormControlStyles = (mode: string): SxProps<Theme> => ({
    display: mode === 'add' ? 'none' : 'block',
});

// Select styles
export const selectStyles: SxProps<Theme> = {
    '& .MuiSelect-select': {
        display: 'flex',
        alignItems: 'center',
    },
};

// Status option container styles
export const statusOptionContainerStyles: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
};

// Status indicator styles
export const statusIndicatorStyles: SxProps<Theme> = {
    width: 12,
    height: 12,
    borderRadius: '50%',
    flexShrink: 0,
};

// Action buttons container styles
export const actionButtonsContainerStyles: SxProps<Theme> = {
    display: "flex",
    gap: 2,
    mt: 4,
    justifyContent: "space-between",
};

// Status options data
export const statusOptions = [
    { value: "Pending", label: "Pending", color: "#DDDDDD" },
    { value: "In Progress", label: "In Progress", color: "#ff9800" },
    { value: "Completed", label: "Completed", color: "#4caf50" },
] as const;
