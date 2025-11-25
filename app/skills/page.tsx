export default function SkillsPage() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-white px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          My Skills
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Frontend */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Front-End Development
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✔ HTML5</li>
              <li>✔ CSS3 / SCSS</li>
              <li>✔ JavaScript (ES6+)</li>
              <li>✔ React.js</li>
              <li>✔ Next.js</li>
              <li>✔ Tailwind CSS</li>
              <li>✔ Material UI</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Back-End Basics
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✔ Node.js Basics</li>
              <li>✔ REST API Concepts</li>
              <li>✔ XUnit (Unit Testing in C#)</li>
              <li>✔ Git & GitHub</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Tools & Technologies
            </h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✔ VS Code</li>
              <li>✔ Postman</li>
              <li>✔ Figma</li>
              <li>✔ Jira</li>
              <li>✔ Agile / Scrum</li>
              <li>✔ Responsive UI Design</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
