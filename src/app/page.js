import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <header className="w-full flex justify-between items-center p-6 animate-fadeIn">
        <div className="text-2xl font-bold">Lumasia's Portfolio</div>
      </header>

      <div className="text-center mb-12 mt-6 animate-fadeIn">
        <h1 className="text-6xl font-bold mb-4">Hello, I am Lumasia</h1>
        <h2 className="text-3xl font-semibold text-gray-200">A Frontend Engineer</h2>
      </div>

      <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromLeft">
          <h3 className="text-3xl font-semibold mb-4">About Me</h3>
          <p className="text-lg text-gray-300">
            I am a passionate frontend developer with experience in creating beautiful and functional web applications. I love working with React, Next.js, and Tailwind CSS.
          </p>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromRight">
          <h3 className="text-3xl font-semibold mb-4">Skills</h3>
          <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 w-1/5">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-300 mr-2" />
              <span>React</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-yellow-300 mr-2" />
              <span>JavaScript</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-teal-300 mr-2" />
              <span>CSS3</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-300 mr-2" />
              <span>HTML5</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromLeft">
          <h3 className="text-3xl font-semibold mb-4">Projects</h3>
          <div className="space-y-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-2">Project 1</h4>
              <p className="text-lg text-gray-300">
                A description of Project 1. This project showcases my skills in React and Next.js.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-2">Project 2</h4>
              <p className="text-lg text-gray-300">
                A description of Project 2. This project highlights my ability to create responsive and accessible web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromRight">
          <h3 className="text-3xl font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-300" />
              <p className="text-lg text-gray-300 mt-2">React</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-yellow-300" />
              <p className="text-lg text-gray-300 mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-teal-300" />
              <p className="text-lg text-gray-300 mt-2">CSS3</p>
            </div>
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-300" />
              <p className="text-lg text-gray-300 mt-2">HTML5</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg animate-slideInFromBottom">
          <h3 className="text-3xl font-semibold mb-4">Contact</h3>
          <p className="text-lg text-gray-300">
            You can reach me at <a href="mailto:your-email@example.com" className="text-blue-400"><FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" />your-email@example.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
