import ProjectShowcase from "../home/components/ProjectShowcase";

function Vault() {
  return (
    <div className="page">
      <div className="text-block">
        <h1 className="page-heading">Project Vault</h1>
        <p className="secondary-text">
          A collection of past projects I've created
        </p>
      </div>
      <ProjectShowcase />
    </div>
  );
}

export default Vault;
