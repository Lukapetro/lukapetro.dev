import { projects } from "@/data/projects";
import type { OutputLine } from "@/types/terminal";
import { copyToClipboard, formatOutput, openInNewTab } from "@/utils/terminal";

interface ProjectCommandResult {
  path?: string[];
  prompt?: string;
  output: OutputLine[];
}

export const handleProjectCommand = (
  command: string,
  currentPath: string[]
): ProjectCommandResult => {
  if (command === "back" || command === "..") {
    return {
      path: [],
      prompt: "~",
      output: [formatOutput("Back to home", "info")],
    };
  }

  if (command === "projects" || command === "ls") {
    return {
      path: ["projects"],
      prompt: "~/projects",
      output: [
        formatOutput("Projects:", "title"),
        ...projects.map((p, i) => formatOutput(`${i + 1}. ${p.title}`, "info")),
        formatOutput("", "default"),
        formatOutput(
          "Type a number to view details, 'back' to return or 'ls' to show projects again",
          "success"
        ),
      ],
    };
  }

  const [action, target] = command.split(" ");

  // Handle open/copy commands
  if (action === "open" || action === "copy") {
    if (!currentPath[1]) {
      return {
        output: [
          formatOutput(
            "Please select a project first by entering its number",
            "error"
          ),
        ],
        prompt: "~/projects",
      };
    }

    const projectIndex = currentPath[1] ? parseInt(currentPath[1]) - 1 : -1;
    const project = projects[projectIndex];

    if (!project) {
      return {
        output: [formatOutput("Invalid project selection", "error")],
        prompt: "~/projects",
      };
    }

    // Now handle the open/copy actions
    if (target === "demo" && project.link) {
      return {
        output:
          action === "open"
            ? openInNewTab(project.link)
            : copyToClipboard(project.link),
        prompt: `~/projects/${project.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      };
    }

    if (target === "code" && project.github) {
      return {
        output:
          action === "open"
            ? openInNewTab(project.github)
            : copyToClipboard(project.github),
        prompt: `~/projects/${project.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
      };
    }

    return {
      output: [
        formatOutput(
          `Invalid command or unavailable link for '${target}'`,
          "error"
        ),
      ],
      prompt: `~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`,
    };
  }

  // Handle project number selection
  if (!isNaN(Number(action))) {
    const projectIndex = Number(action) - 1;
    const project = projects[projectIndex];

    if (!project) {
      return {
        output: [formatOutput(`Project ${action} not found`, "error")],
        prompt: "~/projects",
      };
    }

    const projectSlug = project.title.toLowerCase().replace(/\s+/g, "-");

    return {
      path: ["projects", action],
      prompt: `~/projects/${projectSlug}`,
      output: [
        formatOutput(`$ view ${project.title}`, "title"),
        formatOutput(`> Role: ${project.role}`, "info"),
        formatOutput(`> Stack: ${project.stack.join(" • ")}`, "info"),
        formatOutput(`> ${project.description}`, "info"),
        formatOutput("", "default"),
        formatOutput("Commands:", "title"),
        ...(project.link
          ? [formatOutput("open demo   - Visit live demo", "info")]
          : []),
        ...(project.github
          ? [formatOutput("open code   - View source code", "info")]
          : []),
        ...(project.link
          ? [formatOutput("copy demo   - Copy demo URL", "info")]
          : []),
        ...(project.github
          ? [formatOutput("copy code   - Copy GitHub URL", "info")]
          : []),
        formatOutput("back        - Return to projects", "info"),
      ],
    };
  }

  return {
    output: [
      formatOutput('Invalid command. Type a number, "back" or "ls"', "error"),
    ],
    prompt: "~/projects",
  };
};
