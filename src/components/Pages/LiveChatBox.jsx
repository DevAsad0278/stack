// components/LiveChatBox.jsx
import React, { useState } from "react";

const LiveChatBox = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);

    try {
      const res = await fetch(
        "https://stack-backend-1-j3jf.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      setResponse(data?.reply || "Thanks for your message!");
    } catch (error) {
      setResponse("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-sm bg-white shadow-xl rounded-2xl border border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-t-2xl">
        <h3 className="text-lg font-semibold">Live Chat</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          ✕
        </button>
      </div>
      <div className="p-4 space-y-3">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows={3}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button
          onClick={sendMessage}
          disabled={loading}
          className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {response && (
          <div className="text-sm text-gray-700 bg-gray-100 p-2 rounded-lg">
            <strong>Response:</strong> {response}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChatBox;
