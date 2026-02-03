import React, { useState } from "react";

const Playlists = () => {
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [videos, setVideos] = useState([]);

  const handleFetchPlaylist = () => {
    if (!playlistUrl.includes("youtube.com")) {
      alert("Please enter a valid YouTube playlist link!");
      return;
    }

    const dummyVideos = [
      {
        id: 1,
        title: "Intro to HTML",
        thumbnail: "https://img.youtube.com/vi/dD2EISBDjWM/mqdefault.jpg",
        status: "unlocked",
      },
      {
        id: 2,
        title: "CSS Basics",
        thumbnail: "https://img.youtube.com/vi/yfoY53QXEnI/mqdefault.jpg",
        status: "locked",
      },
      {
        id: 3,
        title: "JavaScript Fundamentals",
        thumbnail: "https://img.youtube.com/vi/W6NZfCO5SIk/mqdefault.jpg",
        status: "locked",
      },
    ];

    setVideos(dummyVideos);
  };

  const handleComplete = (id) => {
    setVideos((prev) =>
      prev.map((video) => {
        if (video.id === id) return { ...video, status: "completed" };
        if (video.id === id + 1 && video.status === "locked")
          return { ...video, status: "unlocked" };
        return video;
      })
    );
  };

  return (
    <section className="h-full overflow-y-auto scrollbar-hide px-6 sm:px-8 py-6 bg-dm-bg">
      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dm-accent">
          🎥 Your YouTube Playlists
        </h1>
        <p className="text-dm-text-muted mt-2">
          Add your playlist link and learn step-by-step 🚀
        </p>
      </div>

      {/* ================= INPUT ================= */}
      <div className="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
        <input
          type="text"
          placeholder="Paste YouTube playlist link..."
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
          className="
            w-full sm:w-[60%]
            px-4 py-3 rounded-lg
            bg-dm-bg-secondary
            text-dm-text-primary
            border border-dm-border
            outline-none
            focus:ring-1 focus:ring-dm-input-ring
          "
        />

        <button
          onClick={handleFetchPlaylist}
          className="
            px-6 py-3 rounded-lg
            bg-dm-accent-bg
            text-dm-accent
            border border-dm-accent-border
            font-semibold
            transition-transform duration-200
            hover:scale-[1.05]
          "
        >
          Fetch
        </button>
      </div>

      {/* ================= PLAYLIST GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className={`
              p-4 rounded-xl
              border
              bg-dm-card
              shadow-dm-sm
              transition-transform duration-200
              ${
                video.status === "locked"
                  ? "opacity-40 border-dm-border"
                  : video.status === "completed"
                  ? "border-dm-success"
                  : "border-dm-accent-border hover:scale-[1.03]"
              }
            `}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="rounded-md mb-3 w-full"
            />

            <h2 className="text-sm font-semibold truncate text-dm-text-primary">
              {video.title}
            </h2>

            <div className="flex flex-col gap-2 mt-4">
              <button
                disabled={video.status === "locked"}
                onClick={() =>
                  window.open("https://youtube.com/watch?v=xxxx", "_blank")
                }
                className={`
                  px-3 py-1 rounded-md text-sm font-medium
                  ${
                    video.status === "locked"
                      ? "bg-dm-bg-tertiary text-dm-text-muted cursor-not-allowed"
                      : "bg-dm-accent-bg text-dm-accent border border-dm-accent-border"
                  }
                `}
              >
                Watch
              </button>

              <button
                disabled={video.status === "locked"}
                onClick={() => alert("Show tasks for this video")}
                className={`
                  px-3 py-1 rounded-md text-sm font-medium
                  ${
                    video.status === "locked"
                      ? "bg-dm-bg-tertiary text-dm-text-muted cursor-not-allowed"
                      : "bg-dm-bg-hover text-dm-text-primary"
                  }
                `}
              >
                Tasks
              </button>

              {video.status === "completed" ? (
                <span className="text-dm-success font-semibold text-center mt-2">
                  ✔ Completed
                </span>
              ) : (
                video.status !== "locked" && (
                  <button
                    onClick={() => handleComplete(video.id)}
                    className="
                      px-3 py-1 rounded-md
                      bg-dm-success
                      text-white
                      text-sm font-medium
                    "
                  >
                    Mark Complete
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ================= EMPTY STATE ================= */}
      {videos.length === 0 && (
        <p className="text-center text-dm-text-muted mt-12 text-sm">
          Paste a YouTube playlist link to start 🚀
        </p>
      )}
    </section>
  );
};

export default Playlists;