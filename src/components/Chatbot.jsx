import React, { useState } from "react";
import axios from "axios";
import { Send, Bot, User, Loader } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hello! How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { role: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const chatHistory = messages.map((msg) => ({
        role: msg.role === "bot" ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      // API URL ko update kiya gaya hai
      const response = await axios.post("http://localhost:5000/api/chat", {
        history: chatHistory,
        message: input,
      });

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "bot", text: response.data.text },
      ]);
    } catch (error) {
      console.error("Failed to fetch from chatbot API:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-full max-w-lg mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-300">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "bot" ? (
              <div className="p-2 rounded-full bg-blue-500 text-white">
                <Bot size={20} />
              </div>
            ) : (
              <div className="p-2 rounded-full bg-gray-500 text-white">
                <User size={20} />
              </div>
            )}
            <div
              className={`p-3 rounded-xl max-w-[75%] ${
                msg.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-start gap-3 justify-start">
            <div className="p-2 rounded-full bg-blue-500 text-white">
              <Bot size={20} />
            </div>
            <div className="p-3 rounded-xl max-w-[75%] bg-white text-gray-800 flex items-center gap-2">
              <Loader size={20} className="animate-spin" /> Thinking...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-300 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={handleSendMessage}
          disabled={loading}
          className="ml-2 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
