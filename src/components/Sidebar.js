import React from "react";

const Sidebar = ({
  menuItems,
  onMenuItemClick,
  onCreateNewConversation,
  onClearConversations,
}) => {
  return (
    <div className="bg-white rounded-lg md:shadow p-4 w-64 flex flex-col h-[500px]">
      <h2 className="text-2xl font-semibold mb-4">Chat history</h2>
      <button
        onClick={onCreateNewConversation}
        className="bg-blue-600 text-white py-1 px-4 rounded mb-4"
      >
        New chat
      </button>
      <div className="overflow-y-auto flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`mb-2 p-2 rounded cursor-pointer ${
                item.active ? "bg-blue-100" : ""
              }`}
              onClick={() => onMenuItemClick(item.id)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onClearConversations}
        className="bg-red-600 text-white py-1 px-4 rounded mt-4 mb-2"
      >
        Clear history
      </button>
    </div>
  );
};

export default Sidebar;
