import { SxProps, Theme } from "@mui/material";

// Status color mapping
export const getStatusColor = (status: string): string => {
    switch (status) {
        case "In Progress":
            return "#ff9800";
        case "Pending":
            return "#DDDDDD";
        case "Completed":
            return "#4caf50";
        default:
            return "#DDDDDD";
    }
};

// Container styles
export const statusContainerStyles: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 0.5,
};

// Status indicator styles
export const statusIndicatorStyles = (status: string) => ({
    width: 10,
    height: 10,
    backgroundColor: getStatusColor(status),
    borderRadius: '50%',
});

// Typography styles
export const statusTextStyles: SxProps<Theme> = {
    fontSize: "0.75rem",
};
