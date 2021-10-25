import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMutation } from "@apollo/client";
import { UPDATE_STUDENT } from "../graphql/Mutation";
import React from "react";
import { Message } from ".";
//interface Props {}

export const Edit = (props: any) => {
  const student = props.location.state;
  const [name, setName] = React.useState<string>("");
  const [rollNumber, setRollnumber] = React.useState<number>(0);
  const [subjects, setSubjects] = React.useState<string>("");
  const [status, setStatus] = React.useState<boolean | string>(true);
  const [updateStudent] = useMutation(UPDATE_STUDENT);
  const subjArray = subjects.split(",");
  const [msg, setMsg] = React.useState("");
  const editStudent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateStudent({
      variables: {
        id: student.id,
        name: name || student.name,
        rollNumber: rollNumber || student.rollNumber,
        subjects: subjArray || student.subjects,
        status: status || student.status,
      },
    });
    setMsg("Updated successfully");
    setTimeout(() => {
      setMsg("");
    }, 3000);
  };

  return (
    <Box sx={{ margin: "3rem" }}>
      {msg && <Message msg={msg} />}
      <h5 id="unstyled-modal-title">Edit {student.name}</h5>

      <form onSubmit={(e) => editStudent(e)}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={student.name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Roll Number"
          variant="outlined"
          fullWidth
          type="number"
          margin="normal"
          defaultValue={student.rollNumber}
          onChange={(e) => setRollnumber(parseInt(e.target.value))}
        />
        <TextField
          label="Subjects"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue={student.subjects.join(",")}
          onChange={(e) => setSubjects(e.target.value)}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={true}
            label="Status"
            defaultChecked={student.status}
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
  );
};
