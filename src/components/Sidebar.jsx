import { NavLink } from "react-router-dom";
import {
  Home,
  ListTodo,
  MessageSquare,
  PlaySquare,
  GraduationCap,
  Search
} from "lucide-react";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", path: "/", icon: <Home size={18} /> },
    { name: "Playlists", path: "/playlists", icon: <PlaySquare size={18} /> },
    { name: "Tasks", path: "/tasks", icon: <ListTodo size={18} /> },
    { name: "Chatbot", path: "/chatbot", icon: <MessageSquare size={18} /> },
    { name: "Roadmap", path: "/roadmap", icon: <GraduationCap size={18} /> },
  ];

  return (
    <div
    className="h-screen w-64 flex-col justify-between p-6 hidden md:flex
    "
      style={{
        background: "var(--dm-bg-secondary)",
        borderRight: "0.5px solid var(--dm-border)",
        boxShadow: "var(--dm-shadow-md)",
      }}
    >
      {/* LOGO */}
      <div>
        <h1
          className="text-3xl font-bold mb-10 ml-4 tracking-wide"
          style={{ color: "var(--dm-text-primary)" }}
        >
          Dev<span style={{ color: "var(--dm-accent)" }}>Mate</span>
        </h1>

            {/* Search Bar */}
         <div className=" lg:hidden w-full mb-6 relative" >
            <Search
            size={18}
            className="absolute left-3 top-3 opacity-70"
            style={{ color: "var(--dm-accent-light)" }}
            />

            <input
            type="text"
            placeholder="Search your tasks or lessons..."
            className="
                w-full px-9 py-2 rounded-lg outline-none 
                placeholder:opacity-60
            "
            style={{
                // background: "var(--dm-input-bg)",
                border: "1px solid var(--dm-input-border)",
                color: "var(--dm-text-primary)"
            }}
            onFocus={(e) =>
                (e.target.style.boxShadow = `0 0 0 1px var(--dm-input-ring)`)
            }
            onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
        </div>

        {/* NAV LINKS */}
        <div className="space-y-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `
                  flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
                  ${
                    isActive
                      ? "active-link"
                      : "inactive-link"
                  }
                `
              }
              style={({ isActive }) =>
                isActive
                  ? {
                      background: "var(--dm-accent-bg)",
                      color: "var(--dm-accent-light)",
                      border: "1px solid var(--dm-accent-border)",
                    }
                  : {
                      color: "var(--dm-text-secondary)",
                    }
              }
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("active-link")) {
                  e.currentTarget.style.background = "var(--dm-bg-hover)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("active-link")) {
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="text-center text-sm pt-4"
        style={{
          color: "var(--dm-text-muted)",
          borderTop: "1px solid var(--dm-border)",
        }}
      >
        © 2025 DevMate
      </div>
    </div>
  );
};

export default Sidebar;