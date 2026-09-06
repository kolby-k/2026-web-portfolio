import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProjectLayout from "./pages/projects/ProjectLayout";
import NotFound from "./pages/NotFound";
import Project from "./pages/projects/Project";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} index />
        <Route element={<ProjectLayout />}>
          <Route element={<Project />} path="/projects/:projectSlug" />
        </Route>
        <Route element={<NotFound />} path="*" />
      </Routes>
    </>
  );
}

export default App;
