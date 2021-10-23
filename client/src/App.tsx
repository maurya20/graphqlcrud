import { useMutation, useQuery } from "@apollo/client";
import { CREATE_POST, DELETE_POST } from "./graphql/Mutation";
import { getALL } from "./graphql/Query";
import { useState } from "react";
import { Home } from "./components";
function App() {
  const { loading, error, data } = useQuery(getALL);

  if (loading) return <h3>Loading</h3>;
  if (error) return <h3>Error</h3>;
  // const addPost = () => {
  //   createPost({
  //     variables: {
  //       title: title,
  //       description: description,
  //     },
  //   });
  // };
  // const removePost = (id: string) => {
  //   deletePost({
  //     variables: {
  //       id: id,
  //     },
  //   });
  // };

  return (
    <div className="App">
      <Home />
      {/* {data.getAll.map((data: any) => (
        <>
          <p key={data.title}>
            {data.title}----{data.description}
          </p>
          <button onClick={() => removePost(data.id)}> Delete it </button>
        </>
      ))}
      <br />
      Title---{" "}
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
      />
      <br />
      Description ---
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setDescription(e.target.value)
        }
      />
      <br />
      <button onClick={() => addPost()}>Add Post</button> */}
    </div>
  );
}

export default App;
