// src/pages/Tasks.jsx
import React, { useState } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Setup React Project", completed: true },
    { id: 2, title: "Create Counter Component", completed: true },
    { id: 3, title: "Add Increment Button", completed: false },
    { id: 4, title: "Style with Tailwind", completed: false },
  ]);

  const [currentTask, setCurrentTask] = useState(tasks[2]);
  const [code, setCode] = useState("// Write your solution here...");
  const [aiFeedback, setAiFeedback] = useState("");

  const handleSubmit = () => {
    const success = Math.random() > 0.4;

    if (success) {
      setAiFeedback("✅ Looks good! Task marked as complete.");
      setTasks((prev) =>
        prev.map((task) =>
          task.id === currentTask.id
            ? { ...task, completed: true }
            : task
        )
      );
    } else {
      setAiFeedback("❌ Logic missing. Try handling edge cases!");
    }
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  return (
    <section className="h-full overflow-y-auto scrollbar-hide px-8 py-6 bg-dm-bg">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dm-accent">
          🧩 Learning Tasks
        </h1>
        <p className="text-dm-text-muted mt-2">
          Module: React Basics — Solve tasks, get AI feedback, and level up 🚀
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-full sm:w-2/3 lg:w-1/2 mx-auto h-2 rounded-full bg-dm-bg-tertiary overflow-hidden">
          <div
            className="h-2 bg-dm-accent"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="text-sm text-dm-text-muted mt-2">
          {completedCount}/{tasks.length} Tasks Completed
        </p>
      </div>

      {/* ================= MAIN LAYOUT ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* ================= TASK LIST ================= */}
        <div className="lg:col-span-4 bg-dm-card border border-dm-border rounded-xl p-5 shadow-dm-sm">
          <h2 className="text-xl font-semibold text-dm-text-primary mb-4">
            📋 Task List
          </h2>

          <ul className="space-y-3">
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => setCurrentTask(task)}
                className={`
                  cursor-pointer px-4 py-3 rounded-lg flex justify-between items-center
                  border
                  transition-transform duration-200
                  text-sm sm:text-base
                  ${
                    task.completed
                      ? "bg-dm-accent-bg border-dm-accent-border text-dm-accent"
                      : currentTask.id === task.id
                      ? "bg-dm-bg-hover border-dm-accent-border text-dm-text-primary"
                      : "bg-dm-bg-secondary border-dm-border hover:scale-[1.02]"
                  }
                `}
              >
                <span>{task.title}</span>
                {task.completed && <span>✅</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= EDITOR + AI PANEL ================= */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Code Editor */}
          <div className="bg-dm-card border border-dm-border rounded-xl p-5 shadow-dm-sm">
            <h2 className="text-lg font-semibold text-dm-text-primary mb-2">
              {currentTask.title}
            </h2>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              rows={10}
              className="
                w-full
                bg-dm-bg-secondary
                text-dm-text-primary
                font-mono
                p-4
                rounded-lg
                resize-none
                outline-none
                border border-dm-border
                focus:ring-1 focus:ring-dm-input-ring
              "
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSubmit}
              className="
                px-6 py-2 rounded-lg
                bg-dm-accent-bg
                text-dm-accent
                border border-dm-accent-border
                font-semibold
                transition-transform duration-200
                hover:scale-[1.04]
              "
            >
              Submit for AI Review ⚡
            </button>
          </div>

          {/* AI Feedback */}
          {aiFeedback && (
            <div
              className={`
                p-4 rounded-lg border
                ${
                  aiFeedback.includes("✅")
                    ? "bg-dm-bg-secondary border-dm-success text-dm-success"
                    : "bg-dm-bg-secondary border-dm-danger text-dm-danger"
                }
              `}
            >
              {aiFeedback}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Tasks;