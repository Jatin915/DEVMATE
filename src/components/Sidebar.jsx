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
    { name: "Dashboard", path: "/", icon: <Home size={20} /> },
    { name: "Playlists", path: "/playlists", icon: <PlaySquare size={20} /> },
    { name: "Tasks", path: "/tasks", icon: <ListTodo size={20} /> },
    { name: "Chatbot", path: "/chatbot", icon: <MessageSquare size={20} /> },
    { name: "Roadmap", path: "/roadmap", icon: <GraduationCap size={20} /> },
  ];

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      {!isMobile && (
        <aside
          className={`fixed top-0 left-0 h-screen flex flex-col transition justify-between py-6 ${(isSidebarOpen) ? 'px-6' : 'px-5'}`}
          style={{
            width: isSidebarOpen ? "16rem" : "6.5rem",
            background: "var(--dm-bg-secondary)",
            borderRight: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
            transition: "width 0.5s ease-in-out, background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {/* LOGO */}
          <div>
            <h1
              className="text-3xl font-bold mb-10 tracking-wide flex justify-center"
              style={{
                color: "var(--dm-text-primary)",
                transition: "margin 0.5s ease",
                marginLeft: isSidebarOpen ? "0.5rem" : "0",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  gap: "2px",
                  opacity: isSidebarOpen ? 1 : 0,
                  transform: isSidebarOpen ? "scale(1)" : "scale(0.9)",
                  transition: "opacity 0.4s ease 0.2s, transform 0.5s ease, background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                  position: isSidebarOpen ? "absolute" : "absolute",
                }}
              >
                Dev<span style={{ color: "var(--dm-accent)" }}>Mate</span>
              </span>

              <span
                style={{
                  display: "inline-flex",
                  gap: "2px",
                  opacity: isSidebarOpen ? 0 : 1,
                  transform: isSidebarOpen ? "scale(0.9)" : "scale(1)",
                  transition: "opacity 0.4s ease 0.2s, transform 0.5s ease",
                }}
              >
                <span>D</span>
                <span style={{ color: "var(--dm-accent)" }}>M</span>
              </span>
            </h1>

            {/* Search Bar */}
              <div
                className="mb-6 relative overflow-hidden"
                style={{
                  maxHeight: isSidebarOpen ? "48px" : "0px",
                  opacity: isSidebarOpen ? 1 : 0,
                  transform: isSidebarOpen ? "translateY(0)" : "translateY(-6px)",
                  transition:
                    "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: isSidebarOpen ? "auto" : "none",
                }}
              >
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
                  border: "1px solid var(--dm-input-border)",
                  color: "var(--dm-text-primary)"
                }}

                onFocus={(e) =>
                (e.target.style.boxShadow = '0 0 0 1px var(--dm-input-ring)')
                }
                onBlur={(e) => (e.target.style.boxShadow = "none")}
              />              
            </div>

            {/* NAV LINKS */}
            <nav className={`space-y-5 ${isSidebarOpen ? 'px-4' : 'px-0'}`}
                  style={{
                    transition: 'padding 0.5s ease 0s'
                  }}
            >
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 ${isSidebarOpen ? 'px-3' : 'px-4'} py-2 border border-transparent rounded-md text-sm font-medium transition
                    ${isActive ? "active-link" : ""}`
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
                  <span
                    style={{
                      transform: isSidebarOpen ? "scale(1) " : "scale(1.15)",
                      transition: "transform 0.4s ease-in-out",
                    }}
                  >
                    {link.icon}
                  </span>

                  <span
                    className="whitespace-nowrap"
                    style={{
                      opacity: isSidebarOpen ? 1 : 0,
                      zIndex: isSidebarOpen ? 1 : -1,
                      transform: isSidebarOpen
                        ? "translateX(0)"
                        : "translateX(-8px)",
                      transition: "opacity 0.2s ease 0.05s, transform 0.2s ease 0.05s",
                      pointerEvents: isSidebarOpen ? "auto" : "none",
                    }}
                  >
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
            <div
              className="text-center text-sm pt-4"
              style={{
                opacity: isSidebarOpen ? 1 : 0,
                transition: "opacity 0.2s ease 0.2s",
                color: "var(--dm-text-muted)",
                borderTop: "1px solid var(--dm-border)",
              }}
            >
              © 2025 DevMate
            </div>
        </aside>
      )}

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobile && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          style={{
            opacity: isMobileSidebarOpen ? 1 : 0,
            pointerEvents: isMobileSidebarOpen ? "auto" : "none", 
            transition: "opacity 0.4s ease-in-out",
          }}
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR (DRAWER) ================= */}
      {isMobile && (
        <aside
          className="fixed top-0 left-0 h-screen w-64 p-6 z-50 flex flex-col justify-between transition"
          style={{
            transform: isMobileSidebarOpen ? "translateX(0)" : "translateX(-100%)",
            background: "var(--dm-bg-secondary)",
            borderRight: "1px solid var(--dm-border)",
            boxShadow: "var(--dm-shadow-md)",
            transition: "transform 0.4s ease-in-out",
          }}
        >
          <div>
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
                className = "flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition"
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
    </>
  );
};

export default Sidebar;