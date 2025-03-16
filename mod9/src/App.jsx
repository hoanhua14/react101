import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSideBar from "./components/ProjectSideBar";
function App() {
  const [projectSelected, setProjectSelected] = useState(false);
  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectSideBar />
      <NewProject />
    </main>
  );
}

export default App;
