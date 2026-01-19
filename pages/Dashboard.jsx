import React from "react";
import ProgressCircle from "../src/components/ProgressCircle.jsx";

const Dashboard = ({ isSidebarOpen, isMobile }) => {
  return (
    <div
      className={`
        min-h-full
        px-6 lg:px-8 py-6
        bg-dm-bg
        text-dm-text-primary
      `}
    >
      {/* ================= WELCOME SECTION ================= */}
      <div className="my-10 text-center">
        <h1 className="text-3xl mb-5 sm:text-4xl font-bold">
          Your AI Powered WEB DEV Learning Platform –{" "}
          <span className="text-dm-accent">DevMate</span> ⚡️
        </h1>
        <p className="text-dm-text-muted mt-2">
          Track your learning journey at a glance.
        </p>
      </div>

      {/* ================= PROGRESS + CURRENT TASK ================= */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* PROGRESS CARD */}
        <div
          className="
            flex flex-col items-center justify-center
            p-6 rounded-2xl
            bg-dm-card
            border border-dm-border
            shadow-dm-md
          "
          // style={{
          //   background: "var(--dm-card)",
          //   border: "1px solid var(--dm-border)",
          //   boxShadow: "var(--dm-shadow-md)",
          // }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Overall Progress
          </h2>

          <ProgressCircle progress={65} />

          <p className="text-dm-text-muted mt-4">
            You’re doing great! Keep going 🚀
          </p>
        </div>

        {/* CURRENT TASK CARD */}
        <div
          className="
            p-6 rounded-2xl
            bg-dm-card
            border border-dm-border
            shadow-dm-md
            flex flex-col justify-between
          "
          // style={{
          //   background: "var(--dm-card)",
          //   border: "1px solid var(--dm-border)",
          //   boxShadow: "var(--dm-shadow-md)",
          // }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Your Current Task
          </h2>

          <div
            className="
              p-4 rounded-lg
              bg-dm-bg-secondary
              border border-dm-border
              flex justify-between items-center
            "
            // style={{
            //   background: "var(--dm-bg-secondary)",
            //   border: "1px solid var(--dm-border)",
            // }}
          >
            <div>
              <h3 className="font-bold text-lg">
                Build a Responsive Navbar
              </h3>
              <p className="text-dm-text-muted text-sm">
                Module: React Basics
              </p>
            </div>

            <button
              className="
                px-4 py-2 rounded-lg
                bg-dm-accent
                text-white font-semibold
                shadow-dm-sm
                hover:opacity-90
              "
            >
              Continue →
            </button>
          </div>
        </div>
      </div>

      {/* ================= QUICK STATUS ================= */}
      <div
        className="
          p-6 rounded-2xl
          bg-dm-card
          border border-dm-border
          shadow-dm-md
        "
        // style={{
        //   background: "var(--dm-card)",
        //   border: "1px solid var(--dm-border)",
        //   boxShadow: "var(--dm-shadow-md)",
        // }}
      >
        <h2 className="text-xl font-semibold mb-6 text-dm-accent">
          Quick Status
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* COMPLETED */}
          <div
            className="
              p-6 rounded-xl
              bg-dm-bg-secondary
              border border-dm-border
              text-center
              hover:scale-[1.03]
              transition-transform duration-300 ease
            "
          >
            <h3 className="text-lg font-semibold text-dm-success">
              Completed
            </h3>
            <p className="text-3xl font-bold mt-2">12</p>
            <p className="text-sm text-dm-text-muted mt-1">
              Tasks finished
            </p>
          </div>

          {/* PENDING */}
          <div
            className="
              p-6 rounded-xl
              bg-dm-bg-secondary
              border border-dm-border
              text-center
              hover:scale-[1.03]
              transition-transform duration-300 ease
            "
          >
            <h3 className="text-lg font-semibold text-dm-warning">
              Pending
            </h3>
            <p className="text-3xl font-bold mt-2">3</p>
            <p className="text-sm text-dm-text-muted mt-1">
              Tasks left to complete
            </p>
          </div>

          {/* STREAK */}
          <div
            className="
              p-6 rounded-xl
              bg-dm-bg-secondary
              border border-dm-border
              text-center
              hover:scale-[1.03]
              transition-transform duration-300 ease
            "
          >
            <h3 className="text-lg font-semibold text-dm-danger">
              Streak
            </h3>
            <p className="text-3xl font-bold mt-2">🔥 5 Days</p>
            <p className="text-sm text-dm-text-muted mt-1">
              Keep the momentum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;