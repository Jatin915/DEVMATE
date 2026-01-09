import React from "react";
import ProgressCircle from "../src/components/ProgressCircle.jsx";

const Dashboard = ({ isSidebarOpen, isMobile }) => {
  return (
    <div
      className="py-[3.85rem] px-6 lg:px-8 transition"
      style={{
        background: "var(--dm-bg)",
        color: "var(--dm-text-primary)",
        marginLeft: !isMobile ? (isSidebarOpen ? "16rem" : "6.5rem") : "0",
      }}
    >
      {/* ================= WELCOME ================= */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your AI Powered WEB DEV Learning Platform –{" "}
          <span style={{ color: "var(--dm-accent)" }}>DevMate</span> ⚡️
        </h1>
        <p
          className="mt-3"
          style={{ color: "var(--dm-text-secondary)" }}
        >
          Track your learning journey at a glance.
        </p>
      </div>

      {/* ================= PROGRESS + CURRENT TASK ================= */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* PROGRESS */}
        <div
          className="flex flex-col items-center justify-center p-6 rounded-2xl transition"
          style={{
            background: "var(--dm-card-gradient)",
            border: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Overall Progress
          </h2>

          <ProgressCircle progress={65} />

          <p
            className="mt-4"
            style={{ color: "var(--dm-text-muted)" }}
          >
            You’re doing great! Keep going 🚀
          </p>
        </div>

        {/* CURRENT TASK */}
        <div
          className="p-6 rounded-2xl flex flex-col justify-between transition"
          style={{
            background: "var(--dm-card-gradient)",
            border: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
          }}
        >
          <h2 className="text-xl font-semibold mb-4">
            Your Current Task
          </h2>

          <div
            className="p-4 rounded-lg flex justify-between items-center"
            style={{
              background: "var(--dm-bg-tertiary)",
              border: "1px solid var(--dm-border)",
            }}
          >
            <div>
              <h3 className="font-semibold text-lg">
                Build a Responsive Navbar
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--dm-text-muted)" }}
              >
                Module: React Basics
              </p>
            </div>

            <button
              className="px-4 py-2 rounded-lg font-semibold transition"
              style={{
                background: "var(--dm-accent)",
                color: "#fff",
                boxShadow: "0 6px 20px rgba(59,130,246,0.3)",
              }}
            >
              Continue →
            </button>
          </div>
        </div>
      </div>

      {/* ================= QUICK STATUS ================= */}
      <div
        className="p-6 rounded-2xl transition"
        style={{
          background: "var(--dm-card-gradient)",
          border: "1px solid var(--dm-border)",
          boxShadow: "var(--dm-shadow-md)",
        }}
      >
        <h2
          className="text-xl font-semibold mb-6"
          style={{ color: "var(--dm-accent)" }}
        >
          Quick Status
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* COMPLETED */}
          <div
            className="p-6 rounded-xl text-center transition hover:scale-105"
            style={{
              background: "var(--dm-bg-tertiary)",
              border: "1px solid var(--dm-border)",
            }}
          >
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--dm-success)" }}
            >
              Completed
            </h3>
            <p className="text-3xl font-bold mt-2">12</p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--dm-text-muted)" }}
            >
              Tasks finished
            </p>
          </div>

          {/* PENDING */}
          <div
            className="p-6 rounded-xl text-center transition hover:scale-105"
            style={{
              background: "var(--dm-bg-tertiary)",
              border: "1px solid var(--dm-border)",
            }}
          >
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--dm-warning)" }}
            >
              Pending
            </h3>
            <p className="text-3xl font-bold mt-2">3</p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--dm-text-muted)" }}
            >
              Tasks left to complete
            </p>
          </div>

          {/* STREAK */}
          <div
            className="p-6 rounded-xl text-center transition hover:scale-105"
            style={{
              background: "var(--dm-bg-tertiary)",
              border: "1px solid var(--dm-border)",
            }}
          >
            <h3
              className="text-lg font-semibold"
              style={{ color: "var(--dm-warning)" }}
            >
              Streak
            </h3>
            <p className="text-3xl font-bold mt-2">🔥 5 Days</p>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--dm-text-muted)" }}
            >
              Keep the momentum!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;