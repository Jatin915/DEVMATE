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
          className={`h-screen flex flex-col bg-dm-bg-secondary border-r border-dm-border shadow-dm-md ${isSidebarOpen ? 'w-[16rem] px-6' : 'w-26 px-5'} transition-[width] duration-500 ease-in-out justify-between py-6`}
          style={{
            // width: isSidebarOpen ? "16rem" : "6.5rem",
            // background: "var(--dm-bg-secondary)",
            // borderRight: "1px solid var(--dm-border)",
            // boxShadow: "var(--dm-shadow-md)",
            // transition: "width 0.5s ease-in-out, background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          <div>
            <h1
              className={`text-3xl font-bold mb-10 tracking-wide flex justify-center text-dm-text-primary ${isSidebarOpen ? 'translate-x-2' : 'translate-x-0'} transition-transform duration-300`}
              // style={{
              //   color: "var(--dm-text-primary)",
              //   transition: "margin 0.5s ease",
              //   marginLeft: isSidebarOpen ? "0.5rem" : "0",
              // }}
            >
              <span className={`inline-flex gap-0.5 absolute ${isSidebarOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.9]'} transition-transform duration-500 ease transition-colors duration-[0.4s] ease delay-200`}
                // style={{
                //   display: "inline-flex",
                //   gap: "2px",
                //   opacity: isSidebarOpen ? 1 : 0,
                //   transform: isSidebarOpen ? "scale(1)" : "scale(0.9)",
                //   transition: "opacity 0.4s ease 0.2s, transform 0.5s ease, background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
                //   position: isSidebarOpen ? "absolute" : "absolute",
                // }}
              >
                Dev<span className="text-dm-accent" >Mate</span>
              </span>

              <span className={`inline-flex gap-0.5 ${isSidebarOpen ? 'opacity-0 scale-90' : 'opacity-100 scale-100'} transition-transform duration-500 ease transition-opacity duration-[0.4s] ease delay-200`}
                // style={{
                //   display: "inline-flex",
                //   gap: "2px",
                //   opacity: isSidebarOpen ? 0 : 1,
                //   transform: isSidebarOpen ? "scale(0.9)" : "scale(1)",
                //   transition: "opacity 0.4s ease 0.2s, transform 0.5s ease",
                // }}
              >
                <span>D</span>
                <span style={{ color: "var(--dm-accent)" }}>M</span>
              </span>
            </h1>

            {/* Search Bar */}
              <div
                className={`mb-6 relative overflow-hidden ${isSidebarOpen ? 'max-h-12 opacity-100 translate-y-0 pointer-events-auto' : 'max-h-0 opacity-0 -translate-y-6 pointer-events-none'} transition-[max-height,opacity,transform] duration-300 cubic-bezier(0.4, 0, 0.2, 1)`}
                // style={{
                //   maxHeight: isSidebarOpen ? "48px" : "0px",
                //   opacity: isSidebarOpen ? 1 : 0,
                //   transform: isSidebarOpen ? "translateY(0)" : "translateY(-6px)",
                //   transition:
                //     "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                //   pointerEvents: isSidebarOpen ? "auto" : "none",
                // }}
              >
              <Search
                id="sidebar-search"
                size={18}
                className="absolute left-3 top-3 opacity-70 text-dm-accent-light"
                // style={{ color: "var(--dm-accent-light)" }}
              />

              <input
                id="sidebar-search"
                type="text"
                placeholder="Search..."
                className="w-full px-9 py-2 rounded-lg outline-0 border border-dm-input-border placeholder:opacity-60 text-dm-text-primary focus:ring-0 focus:ring-dm-input-ring focus:border-dm-input-ring"
                // style={{
                //   border: "1px solid var(--dm-input-border)",
                //   color: "var(--dm-text-primary)"
                // }}
                // onFocus={(e) =>
                // (e.target.style.boxShadow = '0 0 0 1px var(--dm-input-ring)')
                // }
                // onBlur={(e) => (e.target.style.boxShadow = "none")}
              />              
            </div>

            {/* NAV LINKS */}
            <nav className={`space-y-5 ${isSidebarOpen ? 'px-4' : 'px-0'} transition-padding duration-500 ease`}
                  // style={{
                  //   transition: 'padding 0.5s ease 0s'
                  // }}
            >
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 ${isSidebarOpen ? 'px-3' : 'px-4'} py-2 border   rounded-md text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-dm-accent-bg text-dm-accent-light border border-dm-accent-border"
                        : "text-dm-text-secondary hover:bg-dm-bg-hover hover:text-dm-text-primary border-transparent"
                    }`
                  }
                  
                  // style={({ isActive }) =>
                  //   isActive
                  //     ? {
                  //         background: "var(--dm-accent-bg)",
                  //         color: "var(--dm-accent-light)",
                  //         border: "1px solid var(--dm-accent-border)",
                  //       }
                  //     : {
                  //         color: "var(--dm-text-secondary)",
                  //       }
                  // }
                  // onMouseEnter={(e) => {
                  //   if (!e.currentTarget.classList.contains("active-link")) {
                  //     e.currentTarget.style.background = "var(--dm-bg-hover)";
                  //   }
                  // }}
                  // onMouseLeave={(e) => {
                  //   if (!e.currentTarget.classList.contains("active-link")) {
                  //     e.currentTarget.style.background = "transparent";
                  //   }
                  // }}
                >
                  <span className={`${isSidebarOpen ? 'scale-100' : 'scale-[1.15]'} transition-transform duration-400 ease-in-out`}
                    // style={{
                    //   transform: isSidebarOpen ? "scale(1) " : "scale(1.15)",
                    //   transition: "transform 0.4s ease-in-out",
                    // }}
                  >
                    {link.icon}
                  </span>

                  <span
                    className={`whitespace-nowrap ${isSidebarOpen ? 'opacity-100 z-10 translate-x-0 pointer-events-auto' : 'opacity-0 z-[-1] -translate-x-2 pointer-events-none'} transition-opacity duration-200 ease-in-out delay-[0.05s] transition-transform duration-200 ease delay-[0.05s]`}
                    // style={{
                    //   opacity: isSidebarOpen ? 1 : 0,
                    //   zIndex: isSidebarOpen ? 1 : -1,
                    //   transform: isSidebarOpen
                    //     ? "translateX(0)"
                    //     : "translateX(-8px)",
                    //   transition: "opacity 0.2s ease 0.05s, transform 0.2s ease 0.05s",
                    //   pointerEvents: isSidebarOpen ? "auto" : "none",
                    // }}
                  >
                    {link.name}
                  </span>
                </NavLink>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
            <div
              className={`text-center text-sm text-dm-text-muted border-t-dm-border pt-4 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease delay-200`}
              // style={{
              //   opacity: isSidebarOpen ? 1 : 0,
              //   transition: "opacity 0.2s ease 0.2s",
              //   color: "var(--dm-text-muted)",
              //   borderTop: "1px solid var(--dm-border)",
              // }}
            >
              © 2025 DevMate
            </div>
        </aside>
      )}

      {/* ================= MOBILE OVERLAY ================= */}
      {isMobile && (
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 ${isMobileSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-400 ease-in-out`}
          // style={{
          //   opacity: isMobileSidebarOpen ? 1 : 0,
          //   pointerEvents: isMobileSidebarOpen ? "auto" : "none", 
          //   transition: "opacity 0.4s ease-in-out",
          // }}
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        />
      )}

      {/* ================= MOBILE SIDEBAR (DRAWER) ================= */}
      {isMobile && (
        <aside
          className={`fixed top-0 left-0 h-screen w-64 p-6 z-50 flex flex-col justify-between ${isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full'} bg-dm-bg-secondary border-r-dm-border shadow-dm-shadow-md transition-transform duration-400 ease-in-out`}
          // style={{
          //   transform: isMobileSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          //   background: "var(--dm-bg-secondary)",
          //   borderRight: "1px solid var(--dm-border)",
          //   boxShadow: "var(--dm-shadow-md)",
          //   transition: "transform 0.4s ease-in-out",
          // }}
        >
          <div>
          {/* LOGO */}
          <h1
            className="text-3xl font-bold mb-8 tracking-wide text-dm-text-primary"
            // style={{ color: "var(--dm-text-primary)" }}
          >
            Dev<span className="text-dm-accent"
                // style={{ color: "var(--dm-accent)" }}
              >Mate</span>
          </h1>

          {/* SEARCH (MOBILE ONLY) */}
          <div className="w-full mb-6 relative">
            <Search
              size={18}
              className="absolute left-3 top-3 opacity-70 text-dm-accent-light"
              // style={{ color: "var(--dm-accent-light)" }}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-9 py-2 rounded-lg outline-none border border-dm-input-border text-dm-text-primary
              placeholder:opacity-60 focus:ring-0 focus:ring-dm-input-ring focus:border-dm-input-ring"
              // style={{
              //   border: "1px solid var(--dm-input-border)",
              //   color: "var(--dm-text-primary)",
              // }}

              // onFocus={(e) =>
              //   (e.target.style.boxShadow = '0 0 0 1px var(--dm-input-ring)')
              //   }
              //   onBlur={(e) => (e.target.style.boxShadow = "none")}
            />
          </div>

          {/* NAV LINKS */}
          <nav className="space-y-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileSidebarOpen(false)}
                className = {({ isActive }) => `flex items-center gap-3 px-4 py-2  rounded-md text-sm font-medium
                      ${isActive
                        ? "bg-dm-accent-bg text-dm-accent-light border border-dm-accent-border"
                        : "text-dm-text-secondary hover:bg-dm-bg-hover hover:text-dm-text-primary border border-transparent"
                    }`}
                // style={({ isActive }) =>
                //   isActive
                //     ? {
                //         background: "var(--dm-accent-bg)",
                //         color: "var(--dm-accent-light)",
                //         border: "1px solid var(--dm-accent-border)",
                //       }
                //     : {
                //         color: "var(--dm-text-secondary)",
                //       }
                // }
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
              className="text-center text-sm pt-4 text-dm-text-muted border-t-dm-border"
              // style={{
              //   color: "var(--dm-text-muted)",
              //   borderTop: "1px solid var(--dm-border)",
              // }}
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