import { useQuery } from "@apollo/client";
import { getALL } from "../graphql/Query";
import { Grid, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMutation } from "@apollo/client";
import { DELETE_STUDENT } from "../graphql/Mutation";
import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
interface Props {}

export const Home = (props: Props) => {
  const { loading, error, data } = useQuery(getALL);
  const [deleteStudent] = useMutation(DELETE_STUDENT);

  const [ignore, update] = React.useState(true);
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>Error</h3>;
  const removeStudent = (id: string) => {
    deleteStudent({
      variables: {
        id: id,
      },
    });
    update(() => {
      return !ignore;
    });
  };

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {data.getAll.map((value: any, index: any) => (
            <Grid key={value.id} item>
              <Paper sx={{ height: 440, width: 400, position: "relative" }}>
                <img
                  src={`https://picsum.photos/200/30${index}`}
                  alt="student avatar"
                  width={399}
                  height={230}
                />
                <span
                  onClick={() => removeStudent(value.id)}
                  title="Delete this student"
                  role="button"
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 5,
                    backgroundColor: "#ffff",
                  }}
                >
                  <DeleteIcon color="error" />
                </span>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h4">Name:{value.name}</Typography>
                  <Link
                    to={{
                      pathname: `/edit`,
                      state: value,
                    }}
                    title="Edit this student"
                  >
                    <EditIcon />
                  </Link>
                </Box>
                <Typography variant="h6">
                  Roll Number:{value.rollNumber}
                </Typography>
                <Typography variant="h6">
                  Subjects:
                  {value.subjects.map((s: string, i: any) => (
                    <span key={i}>{s}, </span>
                  ))}
                </Typography>
                <Typography variant="h6">
                  Status:{value.status ? "Active" : "Inactive"}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
