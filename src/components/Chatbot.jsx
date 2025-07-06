import React, { useState } from "react";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = async () => {
    if (!userMessage.trim()) return;

    const newChat = [...chat, { role: "user", content: userMessage }];
    setChat(newChat);
    setUserMessage("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://stack-backend-1-j3jf.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      const data = await res.json();
      setChat([...newChat, { role: "assistant", content: data.reply }]);
    } catch (error) {
      setChat([
        ...newChat,
        { role: "assistant", content: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] w-[90%] max-w-[380px] mx-auto sm:mx-2"
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-lg flex flex-col w-full pointer-events-auto">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h2 className="text-sm font-semibold">Stack Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-bold"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 border-b max-h-[60vh]">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded max-w-[80%] text-sm break-words ${
                    msg.role === "user"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <p className="text-center text-gray-500 text-sm">Typing...</p>
            )}
          </div>

          <div className="flex p-2">
            <input
              type="text"
              className="flex-1 min-w-0 border p-1 rounded mr-2 text-sm"
              placeholder="Type..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              className="bg-blue-600 text-white px-3 rounded text-sm flex-shrink-0"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg pointer-events-auto"
        >
          💬 Live Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;
