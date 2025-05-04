"use client";

import { projects } from "@/features/projects/data/project-data";
import ProjectImage from "@/features/projects/project-image";
import ProjectContent from "@/features/projects/project-info";
import ProjectResponsibilities from "@/features/projects/project-responsibilities";
import ProjectTech from "@/features/projects/project-tech";
import ProjectViewButton from "@/features/projects/project-view-button";

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
      <div className="space-y-28 sm:space-y-36">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-10 items-start"
          >
            {/* Image Section */}
            <ProjectImage
              index={index}
              image={project.image}
              title={project.title}
            />
            {/* Content Section */}
            <div
              className={`w-full md:w-6/12 flex flex-col space-y-5 text-black ${
                index % 2 !== 0 ? "md:order-1" : ""
              }`}
            >
              <ProjectContent title={project.title} summary={project.summary} />
              <ProjectResponsibilities
                responsibilities={project.responsibilities}
              />
              <ProjectTech tech={project.techStack} />
              <ProjectViewButton link={project.link} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
