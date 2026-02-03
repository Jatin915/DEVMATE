import { useEffect, useState } from "react";
import { Routes, Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "../pages/Dashboard.jsx";
import Tasks from "../pages/Tasks.jsx";
import Roadmap from "../pages/RoadMap.jsx";
import Playlists from "../pages/Playlists.jsx";
import Chatbot from "../pages/Chatbot.jsx";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden theme-root">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        setIsMobileSidebarOpen={setIsMobileSidebarOpen}
        isMobile={isMobile}
      />

      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Navbar className="shrink-0"
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isMobileSidebarOpen={isMobileSidebarOpen}
          setIsMobileSidebarOpen={setIsMobileSidebarOpen}
          isMobile={isMobile}
        />

        <main className="flex-1 scrollbar-hide overflow-y-auto bg-dm-bg">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
export default App;