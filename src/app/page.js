/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJsSquare, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ zIndex: '-1' }}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Profile Picture */}
      <div className="absolute top-0 right-0 mt-8 mr-8 z-10">
        <img
          src="/profile.jpg"
          alt="Profile Picture"
          className="h-profile-pic w-profile-pic rounded-full border-4 border-white object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center top-12">
        {/* Header */}
        <header className="w-full flex justify-between items-center p-6 animate-fadeIn">
          <div className="text-2xl font-bold">My Portfolio</div>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-12 mt-6 animate-fadeIn">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">Hello, I am Lumasia</h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-200">A Frontend Engineer</h2>
        </div>

        {/* Main Content Section */}
        <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
          {/* About Me */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromLeft transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">About Me</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I am a passionate frontend developer with extensive experience in creating beautiful and functional web applications. Proficient in modern UI libraries, design kits, and frameworks, I bring a meticulous and innovative approach to every project. My fervent problem-solving skills and commitment to best practices ensure high-quality, maintainable code. With a keen eye for detail and a knack for critical thinking, I excel at tackling complex challenges and delivering seamless user experiences.
              <br /><br />
              In addition to my technical expertise, I am a proactive collaborator who thrives in dynamic environments. I continuously stay ahead of industry trends, leveraging the latest technologies to drive innovation. My portfolio showcases a diverse range of projects, from responsive designs to full-scale web applications, reflecting my ability to adapt and excel in various contexts.
              <br /><br />
              I am eager to bring my passion, skills, and drive for excellence to your team, contributing to groundbreaking projects that push the boundaries of frontend development.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromRight transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                  <li>Version Control (Git)</li>
                  <li>Build Tools (Webpack)</li>
                  <li>Testing (Selenium)</li>
                  <li>APIs (RESTful)</li>
                  <li>Performance Optimization</li>
                  <li>Accessibility</li>
                  <li>Design Tools (Figma, Sketch)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromLeft transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Non-Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 transform transition-transform duration-300 hover:scale-105">
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                  <li>Human Centered Design (HCD)</li>
                  <li>Problem-Solving</li>
                  <li>Attention to Detail</li>
                  <li>Communication</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                  <li>Collaboration</li>
                  <li>Adaptability</li>
                  <li>Time Management</li>
                  <li>Creativity</li>
                  <li>Empathy</li>
                  <li>Project Management</li>
                  <li>Passion for Learning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg mb-8 animate-slideInFromRight transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Projects</h3>
            <div className="space-y-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold mb-2">Project 1</h4>
                <p className="text-lg text-gray-300">
                  A description of Project 1. This project showcases my skills in React and Next.js.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
                <h4 className="text-2xl font-semibold mb-2">Project 2</h4>
                <p className="text-lg text-gray-300">
                  A description of Project 2. This project highlights my ability to create responsive and accessible web applications.
                </p>
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg mb-8 animate-slideInFromRight transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-8">
              <div className="tool-icon flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-120">
                <FontAwesomeIcon icon={faReact} className="text-4xl text-blue-300" />
              </div>
              <div className="tool-icon flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-120">
                <FontAwesomeIcon icon={faJsSquare} className="text-4xl text-yellow-300" />
              </div>
              <div className="tool-icon flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-120">
                <FontAwesomeIcon icon={faCss3Alt} className="text-4xl text-teal-300" />
              </div>
              <div className="tool-icon flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-120">
                <FontAwesomeIcon icon={faHtml5} className="text-4xl text-orange-300" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg animate-slideInFromBottom transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Contact</h3>
            <p className="text-lg text-gray-300">
              You can reach me at <a href="mailto:your-email@example.com" className="text-blue-400"><FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" />your-email@example.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
