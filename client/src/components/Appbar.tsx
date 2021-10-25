import { Fab, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { Modal } from ".";
interface Props {}

export const Appbar = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "ButtonFace",
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
