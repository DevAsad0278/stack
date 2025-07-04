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
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

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
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        <div className="w-80 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-500 text-white p-3 flex justify-between items-center rounded-t-lg">
            <h2 className="text-sm font-semibold">AI Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              ✖
            </button>
          </div>
          <div className="h-64 overflow-y-auto border p-2 mb-2">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-blue-200 text-blue-900"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && <p className="text-center text-gray-500">Typing...</p>}
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              className="flex-1 border p-1 rounded mr-2 text-sm"
              placeholder="Type..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSend();
              }}
            />
            <button
              className="bg-blue-500 text-white px-3 rounded text-sm"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default Chatbot;
