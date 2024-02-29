import viteLogo from "/vite.svg";
import "./App.css";
import CardComponent from "./CardComponent";

function App() {
  return (
    <>
      <div className="card-container">
        <CardComponent
          icon={viteLogo}
          title="title"
          description="description"
        />
      </div>
    </>
  );
}

export default App;
