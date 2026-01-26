import React, { useState } from "react";

const skills = [
  { name: "HTML", status: "completed" },
  { name: "CSS", status: "completed" },
  { name: "JS", status: "completed" },
  { name: "React", status: "current" },
  { name: "Node.js", status: "pending" },
  { name: "Express", status: "pending" },
  { name: "MongoDB", status: "pending" },
];

const miniProjects = {
  HTML: [
    "📄 Basic Portfolio Page",
    "📰 Blog Layout",
    "🎉 Event Invitation Page",
    "🏆 Final Project: Resume Website",
  ],
  CSS: [
    "🎨 Glassmorphism Card",
    "🔲 Responsive Grid Layout",
    "🖼️ Animated Image Gallery",
    "🌌 Final Project: Modern Landing Page",
  ],
  JavaScript: [
    "➕ Counter App",
    "✅ Todo List",
    "🌦️ Weather App (API)",
    "🎮 Memory Game",
    "📊 Final Project: Expense Tracker",
  ],
  React: [
    "🔘 Counter App (useState)",
    "📝 Todo App (props + state)",
    "🌗 Dark Mode Toggle",
    "📂 Notes App (localStorage)",
    "📺 Movie Search App (API + Hooks)",
    "📦 Final Project: Full-featured Task Manager",
  ],
  "Node.js": [
    "🗂️ Simple REST API",
    "📝 Blog Backend",
    "🔐 Auth System (JWT)",
    "📦 Final Project: E-commerce Backend",
  ],
  Express: [
    "🔗 URL Shortener",
    "📤 File Upload API",
    "🧾 PDF Invoice Generator",
    "🚀 Final Project: REST API with Auth + CRUD",
  ],
  MongoDB: [
    "🗃️ Notes App with DB",
    "✅ Task Manager with Mongo",
    "📅 Event Planner",
    "💾 Final Project: Social Media Clone Backend",
  ],
};

export default function Roadmap() {
  const [currentSkill, setCurrentSkill] = useState("React");

  const progress =
    (skills.filter((s) => s.status === "completed").length /
      skills.length) *
    100;

  return (
    <div className="bg-dm-bg text-dm-text-primary flex flex-col items-center px-4 py-8 sm:px-6 lg:px-10 transition-all duration-300">
      <h1 className="text-3xl text-center font-bold mb-6 text-dm-text-accent">
        🚀 Your Full Stack Roadmap
      </h1>

      {/* Progress Bar */}
      <div className="w-3/4 h-3 bg-dm-bg-tertiary rounded-full mb-12 overflow-hidden shadow-dm-sm border border-dm-border">
        <div
          className="h-full bg-dm-accent transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid w-full max-w-6xl grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Skills Timeline */}
        <div className="relative">
          <div className="hidden lg:block absolute left-6 top-0 h-full w-[2px] bg-dm-border" />

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            {skills.map((skill, idx) => {
              const isCompleted = skill.status === "completed";
              const isCurrent = skill.status === "current";

              return (
                <div
                  key={idx}
                  onClick={() => setCurrentSkill(skill.name)}
                  className={`ml-0 lg:ml-12 p-4 rounded-xl cursor-pointer transition-all duration-300 border shadow-dm-sm
                    ${
                      isCompleted
                        ? "bg-dm-accent-bg border-dm-accent-border hover:bg-dm-hover"
                        : isCurrent
                        ? "bg-dm-card border-dm-accent hover:ring-2 ring-dm-accent"
                        : "bg-dm-card border-dm-border hover:bg-dm-hover"
                    }`}
                >
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    {skill.name}

                    {isCompleted && (
                      <span className="text-dm-text-success">✅</span>
                    )}
                    {isCurrent && (
                      <span className="text-dm-text-accent">⭐</span>
                    )}
                  </h2>

                  <p
                    className={`text-sm capitalize ${
                      isCompleted
                        ? "text-dm-text-success"
                        : isCurrent
                        ? "text-dm-text-accent"
                        : "text-dm-text-muted"
                    }`}
                  >
                    {skill.status}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Mini Projects */}
        <div className="p-6 rounded-xl bg-dm-card border border-dm-border shadow-dm-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-dm-text-accent">
            📌 Mini Projects for {currentSkill}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {miniProjects[currentSkill].map((proj, idx) => {
              const isFinal = proj.includes("Final Project");

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-xl text-center transition-all duration-300 border shadow-dm-sm
                    ${
                      isFinal
                        ? "bg-dm-accent-bg border-dm-accent-border hover:ring-2 ring-dm-accent"
                        : "bg-dm-bg-secondary border-dm-border hover:bg-dm-hover"
                    }`}
                >
                  <h3 className="text-lg font-semibold mb-3 text-dm-text-primary">
                    {proj}
                  </h3>

                  <button className="px-4 py-1.5 text-sm rounded-md bg-dm-pill-bg hover:bg-dm-pill-hover text-dm-text-accent transition font-medium border border-dm-accent-border">
                    Start
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}