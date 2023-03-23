import React from "react";
import "./App.css";
import PuffLoader from "react-spinners/ClipLoader";
import ExampleForm from "./components/Form";
import preLoad from "./hooks/useloading";

function App() {
  const { loading } = preLoad();
  return (
    <div className="App">
      {loading ? (
        <PuffLoader color="#7DD3FC" size={60} speedMultiplier={1} />
      ) : (
        <ExampleForm />
      )}
    </div>
  );
}

export default App;
