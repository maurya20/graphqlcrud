import { SnackbarOrigin } from "@mui/material/Snackbar";

export interface IMessage extends SnackbarOrigin {
  open: boolean;
}

export interface IRouteProps {
  id: string;
}

export interface IStudent {
  id: string;
  name: string;
  rollNumber: number;
  subjects: string[];
  status: boolean;
}
