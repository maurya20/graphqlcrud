import { Appbar, Home } from "./components";
function App() {
  return (
    <div className="App">
      <Appbar />
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
