import ReactMarkdown from "react-markdown";
import "./App.css";
import ContactForm from "./components/ContactForm";
import GitHubCalendar from "./components/GitHubCalendar";
import { Project } from "./components/Project";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center p-4">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="https://avatars.githubusercontent.com/u/116961144?v=4"
              alt="Nalin Dalal"
            />
          </div>
          <div className="p-8">
            <h2 className="text-gray-900 dark:text-white text-xl font-semibold">
              Nalin Dalal
            </h2>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Software Engineer
            </div>
            <a
              href="https://www.linkedin.com/in/nalin-dalal-815617271/"
              className="block mt-1 text-lg leading-tight font-medium text-indigo-600 hover:underline"
              target="_blank"
            >
              My LinkedIn
            </a>

            <br />
            <h3 className="text-gray-900 dark:text-white text-lg font-medium">
              Introduction
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Hi there, this is my portfolio site. You can find everything about
              me here be it professional or personal.
            </p>

            {/* Skills */}
            <div className="mt-4">
              <h3 className="text-gray-900 dark:text-white text-lg font-medium">
                Skills
              </h3>
              <p className="list-disc list-inside text-gray-500 dark:text-gray-400">
                <p>
                  C++, bash, shell scripting, HTML, CSS, JavaScript, Node.js,
                  Git, GitHub, NoSql, Mongo DB, DOM, React.js, TypeScript,
                  Prisma, Postgres, AWS, Docker, Next.js, JWT, NextAuth,
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* My Story and other shit */}
      <br />
      <br />
      <div className="text-gray-900 dark:text-white w-full text-center mb-6 px-10">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          About Me
        </h2>
        <p>
          Hi there, I am a software student who aspires to just code really
          well.
          <br />I am currently looking for remote internships, at reputated
          remote companies, or full time work at remote startups. I am currently
          a Sophomore Year student at Oriental institute of Science &
          Technology, Bhopal. I have always been curious about tech and it’s
          working hence the role of software developer has always been a dream.
          <br />
          <br />I am open to work as an software intern and actively looking for
          such internships providing value and growth.
        </p>
      </div>
      <br />
      <br />
      <div className="w-full text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          My Services
        </h2>
        <p className="dark:text-white">
          Competitive Coder - I can help you become a competitive coder and
          problem solver. <br />
          Web Developer - I can help you build a beautiful and scalable
          websites.
        </p>
      </div>
      <br />
      <br />
      {/* Professional Stats*/}
      <div className="w-full text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Professional Stats: Demo for Social Stats
        </h2>
        <div className="flex justify-center">
          {/* Discord */}
          <a href="https://discord.gg/6Sj9vX9" target="_blank" rel="noreferrer">
            <svg
              className="h-7 w-7 mr-4"
              fill="currentColor"
              style={{ color: "#7289da" }}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
            </svg>
          </a>

          {/* Github */}
          <a
            href="https://github.com/nalindalal"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-4"
              fill="currentColor"
              style={{ color: "#333" }}
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nalin-dalal-815617271/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mr-4"
              fill="currentColor"
              style={{ color: "#0077b5" }}
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/nalin82929"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#1da1f2" }}
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          {/* Email */}
          <a
            href="mailto:nalindalal2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="currentColor"
              style={{ color: "#f44336" }}
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>
      <br />
      {/* My Projects section*/}
      <div className="w-full text-center mb-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          My Projects:
        </p>
        <Project />
      </div>
      <div className="w-full text-center mb-6">
        <a href="https://orange-ginnifer-5.tiiny.site" target="_blank">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-indigo-600 hover:underline">
            My Resume
          </h2>
        </a>
        <br />
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="w-full text-center mb-6 text-white"
        >
          <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2 text-center">
            <b>GitHub Stats</b>
          </p>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api?username=nalindalal&show_icons=true&theme=dark"
              alt="GitHub Stats"
              className="w-full mb-4"
              style={{ height: 500, width: 500 }}
            />
          </div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=nalindalal&layout=compact&theme=dark"
              alt="Top Languages"
              className="w-full"
              style={{ height: 500, width: 500 }}
            />
          </div>
        </div>
      </div>

      <GitHubCalendar />
      <div>
        <div>
          <ReactMarkdown>
            ![trophy](https://github-profile-trophy.vercel.app/?username=nalindalal)
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-full text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          My LeetCode Stats:
        </h2>
        <div className="w-full text-center mb-6">
          <ReactMarkdown>
            ![LeetCodeStats](https://leetcard.jacoblin.cool/Nalindalal2004?theme=dark&font=Noto%20Sans%20Kannada&ext=heatmap)
          </ReactMarkdown>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Contact Me
        </h1>
        <ContactForm />
      </div>

      <footer>
        <p className="text-gray-400">Copyright © 2024 My Website</p>
      </footer>
    </div>
  );
}

export default App;
