export default function Works() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A responsive e-commerce platform built with React and Tailwind.",
      link: "#",
    },
    {
      title: "Project Beta",
      description: "A social media dashboard featuring real-time data visualization.",
      link: "#",
    },
    {
      title: "Project Gamma",
      description: "An interactive task management app with drag-and-drop functionality.",
      link: "#",
    },
    {
      title: "Project Delta",
      description: "A portfolio showcase website with a dynamic content management system.",
      link: "#",
    },
    {
      title: "Project Epsilon",
      description: "A weather application with real-time API integration and animations.",
      link: "#",
    },
    {
      title: "Project Zeta",
      description: "A recipe finder app with robust filtering and search capabilities.",
      link: "#",
    },
    {
      title: "Project Eta",
      description: "An online code editor with syntax highlighting and live preview.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-center text-4xl font-bold mb-12">
        My <span className="text-yellow-500 dark:text-yellow-400">Projects</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="group block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl dark:hover:shadow-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] relative z-10 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-yellow-300 dark:to-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-20">
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}