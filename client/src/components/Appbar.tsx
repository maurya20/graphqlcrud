import { Box } from "@mui/system";
import { Fab, Typography } from "@mui/material";
import { Modal } from ".";
import "../app.scss";
export const Appbar = () => {
  return (
    <Box
      className="Appbar"
      data-testid="appbar"
      sx={{
        display: "flex",
      }}
    >
      <strong style={{ fontSize: "3em" }}>RISDB</strong>
      <Typography variant="h3" marginLeft={5}>
        Rural India Student Database
      </Typography>
      <Box
        display="flex"
        sx={{ justifyContent: "flex-end", alignItems: "flex-end", flexGrow: 1 }}
      >
        <Fab color="secondary" aria-label="add">
          <Modal />
        </Fab>
      </Box>
    </Box>
  );
};
