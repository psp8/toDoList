import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#034EA2",
        },
        background: {
            default: "#f1f5f9",
        },
    },
    typography: {
        fontFamily: ['Inter', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'].join(', '),
    },
    shape: {
        borderRadius: 8,
    },
});

export default theme;


