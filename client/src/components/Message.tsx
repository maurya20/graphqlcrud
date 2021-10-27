import * as React from "react";
import { Box } from "@mui/system";
import Snackbar from "@mui/material/Snackbar";
import { IMessage } from "./interface";

interface IProps {
  msg: string;
  error?: boolean;
}
export const Message = (props: IProps) => {
  const [state, setState] = React.useState<IMessage>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ color: "#fff", backgroundColor: "#3ec782" }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={true}
        onClose={handleClose}
        message={props.msg}
        key={vertical + horizontal}
      />
    </Box>
  );
};
