import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { getOne } from "../graphql/Query";
import { Box } from "@mui/system";
import { Message } from ".";
export const Detail = (props: any) => {
  const id = props.match.params.id;
  const { loading, error, data } = useQuery(getOne, {
    variables: { id: id },
  });

  const student = data && data.getOne;
  if (loading) {
    return <h3>Loading</h3>;
  }
  return (
    <Box>
      {error && <Message msg="Error ocurred" error={true} />}
      <Card sx={{ margin: "20px" }}>
        <CardMedia
          component="img"
          height="400"
          image="https://picsum.photos/200/300"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {student.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {student.subjects.join(",")}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography>Roll Number: {student.rollNumber}</Typography>
          <Typography>
            Status: {student.status ? "Active" : "Inactive"}
          </Typography>
        </CardActions>
      </Card>
    </Box>
  );
};
