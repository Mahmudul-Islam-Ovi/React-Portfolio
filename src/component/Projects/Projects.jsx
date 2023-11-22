import { useState } from "react";
import Layout from "../../Latout/Layout";
import { useEffect } from "react";
import { client } from "./../../lib/sanity";
import ProjectsCard from "./ProjectsCard";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState();
  console.log(projects);

  const getProjects = async () => {
    setLoading(true);
    const query = `*[_type == "project" ]{_id,projectName,projectDetails,projectLiveLink,projectGitLink,"projectPic":projectImage.asset->url}`;
    const allProjects = await client.fetch(query);
    setProjects(allProjects);
    setLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  return (
    <Layout title="Projects">
      <div className="flex flex-wrap gap-5 justify-center container mx-auto mt-5">{
        projects.map((project) => (<ProjectsCard key={project._id} project={project} />))
      }</div>
    </Layout>
  );
};

export default Projects;
