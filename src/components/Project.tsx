export const Project = () => {
  const projects = [
    {
      href: "https://portfolio-rho-five-85.vercel.app/",
      label: "Portfolio-Site",
      emoji: "🌐",
      description:
        "A personal portfolio website showcasing my projects and skills.",
      date: "June 2023",
      techStack: ["React", "Tailwind CSS", "Vercel"],
    },
    {
      href: "https://worker-morning-cloud-e73a-todoapp.nalindalal2004.workers.dev/",
      label: "ToDo App",
      emoji: "📝",
      description: "A simple and intuitive to-do list application.",
      date: "May 2023",
      techStack: ["React", "Cloudflare Workers"],
    },
    {
      href: "https://qr-code-generator-theta-azure.vercel.app/",
      label: "QR Code App",
      emoji: "📱",
      description: "An application to generate and scan QR codes.",
      date: "April 2023",
      techStack: ["React", "Vercel"],
    },
    {
      href: "https://medium-clone-six-mauve.vercel.app/Blogs",
      label: "Blogging Website",
      emoji: "📰",
      description: "A Medium-like blogging platform with user authentication.",
      date: "February 2023",
      techStack: ["React", "TypeScript", "Vercel", "cloudflare"],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        >
          <a href={project.href} className="flex items-center space-x-2">
            <span className="text-2xl">{project.emoji}</span>
            <p className="text-lg leading-tight font-medium text-indigo-600 hover:underline">
              {project.label}
            </p>
          </a>
          <p className="mt-2 text-sm text-gray-600">{project.description}</p>
          <p className="mt-2 text-sm text-gray-500">
            Completed: {project.date}
          </p>
          <div className="mt-2 flex flex-wrap space-x-2">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-gray-200 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
