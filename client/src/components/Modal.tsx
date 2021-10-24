import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/core/ModalUnstyled";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { CREATE_STUDENT } from "../graphql/Mutation";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: cyan;
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  p: 2,
  px: 4,
  pb: 3,
};

export const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState<string>("");
  const [rollNumber, setRollnumber] = React.useState<number>(0);
  const [subjects, setSubjects] = React.useState<string>("");
  const [status, setStatus] = React.useState<boolean | string>(true);
  const [createStudent] = useMutation(CREATE_STUDENT);
  const subjArray = subjects.split(",");

  const addStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createStudent({
      variables: {
        name: name,
        rollNumber: rollNumber,
        subjects: subjArray,
        status: status,
      },
    });
    alert("New student added.");
  };
  return (
    <div>
      <span role="button" onClick={handleOpen} title="Edit this student.">
        <AddIcon />
      </span>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h5 id="unstyled-modal-title">Add Student</h5>

          <form onSubmit={(e) => addStudent(e)}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              label="Roll Number"
              variant="outlined"
              fullWidth
              type="number"
              margin="normal"
              onChange={(e) => setRollnumber(parseInt(e.target.value))}
            />
            <TextField
              label="Subjects"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setSubjects(e.target.value)}
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={true}
                label="Status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem>Active</MenuItem>
                <MenuItem>Inactive</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ float: "right" }} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </StyledModal>
    </div>
  );
};
