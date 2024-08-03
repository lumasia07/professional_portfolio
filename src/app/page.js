import Image from "next/image";

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
      <div className="absolute top-5 right-0 mt-12 mr-10 z-10">
        <Image
          src="/a6w87b.jpg"
          alt="Profile Picture"
           width={150}
          height={150}
          className="h-profile-pic w-profile-pic rounded-full border-4 border-white object-contain"
        />
      </div>

      <div className="mt-5 border px-10 py-3 md:px-36 rounded-md border-gray-300">
        <ul className="flex space-x-7 md:space-x-20">
          <li>
            <a href="https://twitter.com/GOATLumasia" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter text-white"></i>
            </a>
          </li>
          <li>
            <a href="mailto:lumasiastancelaus@gmail.com">
              <i className="fa-solid fa-envelope text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/lumasia-stancelaus" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/lumasia07" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github text-white"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@lumasiastancelaus" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-medium text-white"></i>
            </a>
          </li>
        </ul>
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
                  <li>Tailwind CSS</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
                  <li>Version Control (Git)</li>
                  <li>Build Tools (Webpack)</li>
                  <li>Testing (Selenium)</li>
                  <li>APIs (RESTful)</li>
                  <li>Design Tools (Figma, Canva)</li>
                  <li>NodeJS</li>
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
                  <li>Complex Problem-Solving</li>
                  <li>Attention to Detail</li>
                  <li>Communication</li>
                  <li>Collaboration</li>
                </ul>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg transform transition-transform duration-300 hover:scale-105">
                <ul className="list-disc list-inside text-lg text-gray-300 space-y-4">
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

          {/* Contact */}
          <div className="bg-gray-800 bg-opacity-75 p-8 rounded-lg animate-slideInFromBottom transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-3xl font-semibold mb-4">Contact</h3>
            <p className="text-lg text-gray-300">
              You can reach me at <a href="mailto:lumasiastancelaus@gmail.com" className="text-blue-400 underline">lumasiastancelaus@gmail.com</a> for any inquiries or collaborations.<br />
              Tel No: <a href="tel:+254798544949" className="text-blue-400 underline">+254-798544949</a>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full text-center py-4 bg-gray-800 bg-opacity-75 mt-auto">
          <p className="text-gray-400">© 2024 Lumasia Stancelaus. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
