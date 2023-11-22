import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  const {
    projectName,
    projectDetails,
    projectLiveLink,
    projectGitLink,
    projectPic,
  } = project;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={projectPic} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>{projectDetails}</p>
          <div className="card-actions justify-end">
            <Link
              to={projectLiveLink}
              target="_blank"
              className="btn btn-sm btn-outline btn-primary"
            >
              Live Link
            </Link>
            <Link
              to={projectGitLink}
              target="_blank"
              className="btn btn-sm btn-outline btn-primary"
            >
              Git Link
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
