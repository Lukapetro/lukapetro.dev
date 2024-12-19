import { projects } from "@/data/projects";
import { formatOutput } from "@/utils/terminal";

export const handleProjectCommand = (command: string) => {
  if (command === "projects") {
    return {
      path: ["projects"],
      prompt: "~/projects",
      output: [
        formatOutput("Projects:", "title"),
        ...projects.map((p, i) => formatOutput(`${i + 1}. ${p.title}`, "info")),
        formatOutput("", "default"),
        formatOutput(
          "Type a number to view details or 'back' to return",
          "success"
        ),
      ],
    };
  }

  if (command === "back" || command === "..") {
    return {
      path: [],
      prompt: "~",
      output: [formatOutput("Back to home", "info")],
    };
  }

  if (!isNaN(Number(command))) {
    const projectIndex = Number(command) - 1;
    const project = projects[projectIndex];

    if (!project) {
      return {
        output: [formatOutput(`Project ${command} not found`, "error")],
      };
    }

    return {
      output: [
        formatOutput(`$ view ${project.title}`, "title"),
        formatOutput(`> Role: ${project.role}`, "info"),
        formatOutput(`> Stack: ${project.stack.join(" • ")}`, "info"),
        formatOutput(`> ${project.description}`, "info"),
        ...(project.link
          ? [formatOutput(`Demo: ${project.link}`, "success")]
          : []),
        ...(project.github
          ? [formatOutput(`Code: ${project.github}`, "success")]
          : []),
      ],
    };
  }

  return {
    path: ["projects"],
    prompt: "~/projects",
    output: [
      formatOutput("Projects:", "title"),
      ...projects.map((p, i) => formatOutput(`${i + 1}. ${p.title}`, "info")),
      formatOutput("", "default"),
      formatOutput(
        "Type a number to view details or 'back' to return",
        "success"
      ),
    ],
  };
};
