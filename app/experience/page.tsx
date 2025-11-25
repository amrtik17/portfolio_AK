export default function ExperiencePage() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-white px-6 py-16 flex justify-center items-center"
    >
      <div className="max-w-5xl w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Experience
        </h2>

        <div className="space-y-10">

          {/* Job 1 */}
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Front-End Developer – Agiliad Technology Pvt. Ltd.
            </h3>
            <p className="text-gray-700 mt-1 text-lg">
              <strong>Duration:</strong> July 2022 – May 2025
            </p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed">
              <li>
                Developed responsive and user-friendly web applications using
                React.js, Next.js, HTML, CSS, and JavaScript.
              </li>
              <li>
                Collaborated with designers and backend teams to deliver smooth
                and interactive UI/UX.
              </li>
              <li>
                Worked with REST APIs and integrated dynamic data into pages.
              </li>
              <li>
                Improved website performance using optimizations and best
                coding practices.
              </li>
              <li>
                Fixed bugs, enhanced features, and maintained clean, reusable
                code.
              </li>
              <li>
                Used Git, GitHub, and Agile methodology for task tracking and
                project updates.
              </li>
            </ul>
          </div>

          {/* Job 2 Example — Optional */}
          {/* If you want to add more experience later */}
          {/* 
          <div className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-900">
              Role / Company Name
            </h3>
            <p className="text-gray-700 mt-1 text-lg">
              <strong>Duration:</strong> 2020 – 2022
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700 leading-relaxed">
              <li>Responsibility 1…</li>
              <li>Responsibility 2…</li>
              <li>Responsibility 3…</li>
            </ul>
          </div>
          */}

        </div>
      </div>
    </section>
  );
}
