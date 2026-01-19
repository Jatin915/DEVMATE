import { Sun, Moon, User, Search, Sidebar } from "lucide-react";
import "../customCSS/Navbar.css";
import { useState, useEffect } from "react";

const Navbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isMobileSidebarOpen,
  setIsMobileSidebarOpen,
  isMobile,
}) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className="
        flex items-center justify-between
        px-4 lg:px-8 py-4
        border-b
        bg-dm-nav-bg
        border-dm-nav-border
        shadow-dm-sm
      "
      // style={{
      //   background: "var(--dm-nav-bg)",
      //   borderColor: "var(--dm-nav-border)",
      //   boxShadow: `0 4px 10px var(--dm-nav-shadow)`,
      // }}
    >
      {/* LEFT — LOGO + SIDEBAR TOGGLE */}
      <div className="flex items-center gap-5">
        <Sidebar
          className="cursor-pointer"
          onClick={() => {
            if (isMobile) {
              setIsMobileSidebarOpen(!isMobileSidebarOpen);
            } else {
              setIsSidebarOpen(!isSidebarOpen);
            }
          }}
        />

        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-dm-text-primary">
          Hi,&nbsp;
          <span className="font-bold text-dm-accent">Jatin</span>
        </h1>
      </div>

      {/* CENTER — SEARCH */}
      <div className="flex-1 hidden lg:inline max-w-md mx-6 relative">
        <Search
          size={18}
          className="absolute left-3 top-3 opacity-70 text-dm-accent-light"
        />

        <input
          type="text"
          placeholder="Search your tasks or lessons..."
          className="
            w-full px-9 py-2 rounded-lg outline-none
            border border-dm-input-border
            text-dm-text-primary
            placeholder:opacity-60
            focus:ring-0 focus:ring-dm-input-ring
            focus:border-dm-input-ring
          "
          // style={{
          //   border: "1px solid var(--dm-input-border)",
          //   color: "var(--dm-text-primary)",
          // }}
        />
      </div>

      {/* RIGHT — THEME + PROFILE */}
      <div id="theme-profile" className="flex items-center gap-4">
        {/* THEME TOGGLE */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
            p-2 rounded-full
            border border-dm-input-border
            cursor-pointer
            hover:bg-dm-btn-hover
          "
          // style={{
          //   borderColor: "var(--dm-input-border)",
          // }}
        >
          {darkMode ? (
            <Sun size={20} className="text-dm-accent-light" />
          ) : (
            <Moon size={20} className="text-dm-accent" />
          )}
        </button>

        {/* PROFILE */}
        <div id="profile-container"
          className="
            flex items-center gap-2
            px-3 py-2 rounded-lg
            border border-dm-input-border
            cursor-pointer
            hover:bg-dm-btn-hover
          "
          // style={{
          //   borderColor: "var(--dm-input-border)",
          // }}
        >
          <User size={18} className="text-dm-accent-light" />
          <span id="profile-text" className="text-sm font-medium text-dm-accent-light">
            Profile
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;