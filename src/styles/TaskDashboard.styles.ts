import { SxProps, Theme } from "@mui/material";

// App bar title styles
export const appBarTitleStyles: SxProps<Theme> = {
    flexGrow: 1,
};

// Container styles
export const containerStyles: SxProps<Theme> = {
    py: 4,
};

// Search box styles
export const searchBoxStyles: SxProps<Theme> = {
    mb: { xs: 3, sm: 4 },
};

// Search field styles
export const searchFieldStyles: SxProps<Theme> = {
    "& .MuiOutlinedInput-root": {
        backgroundColor: "background.paper",
        boxShadow: 1,
    },
};

// Lists container styles
export const listsContainerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: 2,
};
