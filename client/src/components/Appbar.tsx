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
      <img
        src="https://seeklogo.com/images/R/risd-rhode-island-school-of-design-logo-C01C52225E-seeklogo.com.png"
        alt="logo"
        height={60}
        width={90}
      />
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
