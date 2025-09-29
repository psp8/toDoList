import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { fabStyles } from "../styles/FloatingActionButton.styles";

interface Props {
  onClick: () => void;
}

const FloatingActionButton: React.FC<Props> = ({ onClick }) => (
  <Fab
    color="primary"
    onClick={onClick}
    sx={fabStyles}
    aria-label="add"
  >
    <AddIcon />
  </Fab>
);

export default FloatingActionButton;
