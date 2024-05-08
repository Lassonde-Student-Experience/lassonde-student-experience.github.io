import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const universityItems = [
    { id: 1, title: "Courses", link: "#" },
    { id: 2, title: "Professors", link: "#" },
    { id: 3, title: "Clubs", link: "#" },
  ];

  const internshipItems = [
    { id: 1, title: "Resume", link: "#" },
    { id: 2, title: "Application Process", link: "#" },
    { id: 3, title: "Co-op Portal", link: "#" },
  ];

  return (
    <div
      className={`flex ${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gray-800 text-white transition-width duration-300`}
    >
      <div className="flex flex-col p-5 relative">
        <button onClick={toggleSidebar} className="mb-5 text-white">
          {isOpen ? "<" : ">"} {/* Arrow changes direction based on state */}
        </button>
        <div className="overflow-y-auto">
          {isOpen && (
            <>
              <div className="text-lg font-semibold pb-4">University</div>
              <ul>
                {universityItems.map((item) => (
                  <li key={item.id} className="text-gray-300 hover:text-white">
                    <a
                      href={item.link}
                      className="block py-2 px-4 hover:bg-gray-700 rounded"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="text-lg font-semibold pb-4 mt-8">Internships</div>
              <ul>
                {internshipItems.map((item) => (
                  <li key={item.id} className="text-gray-300 hover:text-white">
                    <a
                      href={item.link}
                      className="block py-2 px-4 hover:bg-gray-700 rounded"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
