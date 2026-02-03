import React, { useState } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! 👋 I'm your DevMate AI. How’s it going?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMsg = {
      id: Date.now(),
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: "Got it! I'll help you with that 🚀",
          sender: "bot",
        },
      ]);
    }, 800);
  };

  return (
    <section className="h-full overflow-y-auto scrollbar-hide bg-dm-bg flex flex-col">
      {/* ================= HEADER ================= */}
        <div className="px-6 py-4 text-center text-xl font-bold text-dm-accent border-b border-dm-border bg-dm-bg-secondary">
            💬 DevMate Chatbot
        </div>

      {/* ================= MESSAGES ================= */}
      <div className="flex-1 overflow-y-auto scrollbar-hide p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`
              max-w-[80%] sm:max-w-[65%]
              px-4 py-2 rounded-2xl text-sm
              border shadow-dm-sm
              transition-transform duration-200
              ${
                msg.sender === "user"
                  ? "ml-auto bg-dm-accent-bg text-dm-accent border-dm-accent-border rounded-br-none"
                  : "mr-auto bg-dm-bg-secondary text-dm-text-secondary border-dm-border rounded-bl-none"
              }
            `}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* ================= INPUT ================= */}
      <div className="p-4 border-t border-dm-border bg-dm-bg-secondary flex gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="
            flex-1
            bg-dm-bg
            text-dm-text-primary
            rounded-lg
            px-4 py-2
            outline-none
            border border-dm-input-border
            focus:ring-1 focus:ring-dm-input-ring
          "
        />

        <button
          onClick={handleSend}
          className="
            px-5 py-2
            rounded-lg
            font-semibold
            bg-dm-accent-bg
            text-dm-accent
            border border-dm-accent-border
            transition-transform duration-200
            hover:scale-[1.05]
          "
        >
          Send
        </button>
      </div>
    </section>
  );
}

export default Chatbot;