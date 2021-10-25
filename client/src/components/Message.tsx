import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  msg: string;
  error?: boolean;
}

export const Message = (props: Props) => {
  return (
    <Box
      sx={{
        color: "#ffff",
        backgroundColor: props.error ? "red" : "green",
        width: "30%",
        boxShadow: "10px 10px 5px grey",
        position: "absolute",
        borderRadius: "15px",
        height: "40px",
        textAlign: "center",
        zIndex: 1000,
      }}
    >
      <Typography>{props.msg}</Typography>
    </Box>
  );
};
