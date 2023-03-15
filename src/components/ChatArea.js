import React, { useState, useEffect, useRef } from "react";

const ChatArea = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (input.trim() === "") return;

    onSendMessage(input);
    setInput("");
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex-grow ml-0 sm:ml-4 w-full sm:w-auto">
      <div className="overflow-y-auto h-[40vh] sm:h-[50vh] max-h-[300px] sm:max-h-[400px] mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`my-2 p-2 rounded ${
              message.isBot ? "bg-blue-100" : "bg-green-100"
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow border-2 border-gray-300 rounded px-2 py-1 mr-2 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-1 w-full sm:w-auto"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatArea;
