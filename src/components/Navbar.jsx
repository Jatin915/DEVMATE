import { Sun, Moon, User, Search, Sidebar } from "lucide-react";
import "../customCSS/Navbar.css";
import { useState , useEffect } from "react";

const Navbar = () => {
    
    const [darkMode, setDarkMode] = useState(() => {
        // 1. Check localStorage preference first
        const saved = localStorage.getItem("theme");
        if (saved === "dark") return true;
        if (saved === "light") return false;
    
        // 2. Otherwise check system preference
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
        "
        style={{
            background: "var(--dm-nav-bg)",
            borderColor: "var(--dm-nav-border)",
            boxShadow: `0 4px 10px var(--dm-nav-shadow)`
        }}
        >

        {/* LOGO + Sidebar Toggle Button */}
        <div className="flex items-center gap-5">
                <Sidebar color="var(--dm-text-primary)" className="cursor-pointer"/>  
            <h1
            className="text-2xl sm:text-3xl font-semibold tracking-wide"
            style={{ color: "var(--dm-text-primary)" }}
            >
                Dev
            <span
                className="font-bold"
                style={{ color: "var(--dm-accent)" }}
            >
                Mate
            </span>
            </h1>
        </div>

        {/* MIDDLE — SEARCH */}
        <div id="nav-search" className="flex-1 hidden lg:inline max-w-md mx-6 relative" >
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

        {/* RIGHT — THEME BUTTON + PROFILE */}
        <div id="theme-profile" className="flex items-center gap-4">

            {/* THEME TOGGLE */}
            <button
            onClick={() => setDarkMode(!darkMode)}
            className="
                p-2 rounded-full transition-all duration-300 border cursor-pointer
            "
            style={{
                borderColor: "var(--dm-input-border)"
            }}

            onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--dm-btn-hover)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--dm-primary)";
            }}
            >
            {darkMode ? (
                <Sun size={20} style={{ color: "var(--dm-accent-light)" }} />
            ) : (
                <Moon size={20} style={{ color: "var(--dm-accent)" }} />
            )}
            </button>

            {/* PROFILE BUTTON */}
            <div id="profile-container"
            className="
                flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer
                group 
            "
            style={{
                borderColor: "var(--dm-input-border)"
            }}

            onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--dm-btn-hover)";
                
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--dm-primary)";
            }}
            >
            <User
                size={18}
                style={{ color: "var(--dm-accent-light)" }}
            />
            <span id="profile-text"
                className="text-sm font-medium "
                style={{ color: "var(--dm-accent-light)" }}
            >
                Profile
            </span>
            </div>
        </div>
        </nav>
  );
};

export default Navbar;