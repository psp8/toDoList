import { SxProps, Theme } from "@mui/material";

// Accordion styles
export const accordionStyles: SxProps<Theme> = {
    mb: 2,
    "&:before": {
        display: "none",
    },
    boxShadow: 1,
    borderRadius: 1,
};

// AccordionSummary styles
export const accordionSummaryStyles: SxProps<Theme> = {
    backgroundColor: "grey.100",
    "&:hover": {
        backgroundColor: "grey.200",
    },
    "&.Mui-expanded": {
        backgroundColor: "grey.100",
    },
};

// Title typography styles
export const titleStyles: SxProps<Theme> = {
    variant: "h6",
    fontWeight: "bold",
    color: "text.primary",
};

// AccordionDetails styles
export const accordionDetailsStyles: SxProps<Theme> = {
    p: 0,
};

// Content box styles
export const contentBoxStyles: SxProps<Theme> = {
    p: 2,
};

// Empty state typography styles
export const emptyStateStyles: SxProps<Theme> = {
    variant: "body2",
    color: "text.secondary",
    textAlign: "center",
    py: 2,
};
