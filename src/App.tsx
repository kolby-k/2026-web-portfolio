import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectLayout from "./pages/projects/ProjectLayout";
import NotFound from "./pages/NotFound";
import Project from "./pages/projects/Project";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />

        <Route element={<ProjectLayout />}>
          <Route path="projects/:projectSlug" element={<Project />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
