import React from "react";
import "../customCSS/Sidebar.css";

import { NavLink } from "react-router-dom";
import {
  Home,
  ListTodo,
  MessageSquare,
  PlaySquare,
  GraduationCap,
  Search,
} from "lucide-react";

const Sidebar = ({
  isSidebarOpen,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  isMobile,
}) => {
  const links = [
    { name: "Dashboard", path: "/", icon: (isSidebarOpen) ? <Home size={18} /> : <Home size={26} /> },
    { name: "Playlists", path: "/playlists", icon: (isSidebarOpen) ? <PlaySquare size={18} /> : <PlaySquare size={26} /> },
    { name: "Tasks", path: "/tasks", icon: (isSidebarOpen) ? <ListTodo size={18} /> : <ListTodo size={26} /> },
    { name: "Chatbot", path: "/chatbot", icon: (isSidebarOpen) ? <MessageSquare size={18} /> : <MessageSquare size={26} /> },
    { name: "Roadmap", path: "/roadmap", icon: (isSidebarOpen) ? <GraduationCap size={18} /> : <GraduationCap size={26} /> },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      {!isMobile && (
        <aside
          className={`fixed top-0 left-0 h-screen flex flex-col justify-between py-6 ${(isSidebarOpen) ? 'px-6' : 'px-5'} transition-all duration-300`}
          style={{
            width: isSidebarOpen ? "16rem" : "6.5rem",
            background: "var(--dm-bg-secondary)",
            borderRight: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
          }}
        >
          {/* LOGO */}
          <div>
            <h1
              className={`text-3xl font-bold mb-10 tracking-wide ${
                isSidebarOpen ? "ml-2" : "text-center"
              }`}
              style={{ color: "var(--dm-text-primary)" }}
            >
              {isSidebarOpen ? (
                <>
                  Dev<span style={{ color: "var(--dm-accent)" }}>Mate</span>
                </>
              ) : (<>
                <span>D</span>
                <span style={{ color: "var(--dm-accent)" }}>M</span>
                </> 
              )}
            </h1>

            {/* Search Bar */}
            {((isMobile || isSidebarOpen) && (
            <div className="w-full mb-6 relative">
              <Search
                id="sidebar-search"
                size={18}
                className="absolute left-3 top-3 opacity-70"
                style={{ color: "var(--dm-accent-light)" }}
              />

              <input
                id="sidebar-search"
                type="text"
                placeholder="Search..."
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
                (e.target.style.boxShadow = '0 0 0 1px var(--dm-input-ring)')
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />              
            </div>
            ))}

            {/* NAV LINKS */}
            <nav className="space-y-5">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `
                    flex items-center  gap-3 ${isSidebarOpen ? 'px-3' : 'justify-center'} py-2 border border-transparent rounded-md text-sm font-medium transition
                    ${isActive ? "active-link" : ""}
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

                  {/* TEXT — ONLY WHEN DESKTOP + OPEN */}
                  {isSidebarOpen && (
                    <span className="whitespace-nowrap">{link.name}</span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
          {isSidebarOpen && (
            <div
              className="text-center text-sm pt-4"
              style={{
                color: "var(--dm-text-muted)",
                borderTop: "1px solid var(--dm-border)",
              }}
            >
              © 2025 DevMate
            </div>
          )}
        </aside>
      )}

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobile && isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR (DRAWER) ================= */}
      {isMobile && isMobileSidebarOpen && (
        <aside
          className="fixed top-0 left-0 h-screen w-64 p-6 z-50 transition-transform duration-300"
          style={{
            background: "var(--dm-bg-secondary)",
            borderRight: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
          }}
        >
          {/* LOGO */}
          <h1
            className="text-3xl font-bold mb-8 tracking-wide"
            style={{ color: "var(--dm-text-primary)" }}
          >
            Dev<span style={{ color: "var(--dm-accent)" }}>Mate</span>
          </h1>

          {/* SEARCH (MOBILE ONLY) */}
          <div className="w-full mb-6 relative">
            <Search
              size={18}
              className="absolute left-3 top-3 opacity-70"
              style={{ color: "var(--dm-accent-light)" }}
            />
            <input
              type="text"
              placeholder="Search your tasks or lessons..."
              className="w-full px-9 py-2 rounded-lg outline-none"
              style={{
                border: "1px solid var(--dm-input-border)",
                color: "var(--dm-text-primary)",
              }}

              onFocus={(e) =>
                (e.target.style.boxShadow = '0 0 0 1px var(--dm-input-ring)')
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* NAV LINKS */}
          <nav className="space-y-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition`
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
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;