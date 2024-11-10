import { Project } from "@/types/project";
import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";

const ProjectCardList = () => {
  return (
    <div className="w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8 ">
      <Title title="Projects" />
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/Notion-logo.svg",
    title: "Notion Clone",
    description: "Full-stack Notion clone with real-time note-taking, page organization, and collaboration. Built with Next.js, Tailwind CSS, Convex for real-time updates, and Clerk for authentication, it supports rich-text editing and user-specific content management.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Convex", "Next js", "HTML", "CSS"],
    link: "https://notion-clone-iota-one.vercel.app/",
    source: "https://github.com/SuyashParmar/Notion-Clone",
  },
  {
    logo: "/codepen.svg",
    title: "CodePen",
    description:
      "Created a CodePen clone that enables users to write, edit, and preview code snippets in real-time, providing an interactive environment for front-end development directly in the browser.",
    techStack: ["React JS", "HTML", "CSS", "JavaScript"],
    link: "https://code-pen-kappa.vercel.app",
    source: "https://github.com/SuyashParmar/CodePen",
  },
];
