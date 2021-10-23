import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { getALL } from "../graphql/Query";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

interface Props {}

export const Home = (props: Props) => {
  const { loading, error, data } = useQuery(getALL);
  console.log("from home>>>>", data);
  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>Error</h3>;
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} mt={3}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {data.getAll.map((value: any, index: any) => (
            <Grid key={value.id} item>
              <Paper sx={{ height: 440, width: 400 }}>
                <img
                  src={`https://picsum.photos/200/30${index}`}
                  alt="student avatar"
                  width={390}
                  height={230}
                />
                <Typography variant="h4">Name:{value.name}</Typography>
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
