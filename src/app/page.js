export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <header className="text-center my-12">
        <h1 className="text-5xl font-bold mb-4">Hello, I am Lumasia</h1>
        <h2 className="text-3xl font-semibold text-gray-400">A Frontend Engineer</h2>
      </header>
      <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-lg text-gray-300">
            I am a passionate frontend developer with experience in creating beautiful and
            functional web applications. I am proficient with React, Next.js, and Tailwind CSS.
          </p>
        </div>
      </section>
      <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <div className="space-y-8">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Project 1</h4>
            <p className="text-lg text-gray-300">
              A description of Project 1. This project showcases my skills in React and Next.js.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">Project 2</h4>
            <p className="text-lg text-gray-300">
              A description of Project 2. This project highlights my ability to create responsive
              and accessible web applications.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-lg text-gray-300">
            You can reach me at <a href="mailto:your-email@example.com" className="text-blue-400">your-email@example.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
