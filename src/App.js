import React, { useState, useRef, useEffect } from "react";
import ChatArea from "./components/ChatArea";
import Sidebar from "./components/Sidebar";
import HintsComponent from "./components/HintsComponent";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  const [currentConversation, setCurrentConversation] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [isNewConversation, setIsNewConversation] = useState(true);
  const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const mobileSidebarRef = useRef(null);

  const handleMobileSidebarToggle = () => {
    setMobileSidebarVisible(!mobileSidebarVisible);
  };

  const handleClickOutside = (event) => {
    if (
      mobileSidebarVisible &&
      mobileSidebarRef.current &&
      !mobileSidebarRef.current.contains(event.target)
    ) {
      setMobileSidebarVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileSidebarVisible]);

  const handleMenuItemClick = (id) => {
    const selectedMenuItem = menuItems.find((item) => item.id === id);
    setCurrentConversation(selectedMenuItem.messages);
    setMenuItems(
      menuItems.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
  };

  const handleSendMessage = async (userMessage) => {
    const newMessageId =
      currentConversation.length > 0
        ? Math.max(...currentConversation.map((m) => m.id)) + 1
        : 1;
    const newMessage = { id: newMessageId, text: userMessage, isBot: false };
    const updatedConversation = [...currentConversation, newMessage];

    // Request the server for a response
    try {
      const response = await fetch("http://localhost:5001/process-input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput: userMessage }),
      });

      const data = await response.json();
      const botMessage = {
        id: newMessageId + 1,
        text: data.response,
        isBot: true,
      };
      updatedConversation.push(botMessage);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    if (isNewConversation) {
      const newItemTitle = `New Conversation ${menuItems.length + 1}`;
      const newItem = {
        id: menuItems.length + 1,
        title: newItemTitle,
        active: true,
        messages: updatedConversation,
      };

      setMenuItems(
        menuItems.map((item) => ({ ...item, active: false })).concat(newItem)
      );
      setIsNewConversation(false);
    } else {
      const activeItemIndex = menuItems.findIndex((item) => item.active);
      if (activeItemIndex !== -1) {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[activeItemIndex] = {
          ...updatedMenuItems[activeItemIndex],
          messages: updatedConversation,
        };
        setMenuItems(updatedMenuItems);
      }
    }

    setCurrentConversation(updatedConversation);
  };

  const handleNewConversation = () => {
    const newItemTitle = `New Conversation ${menuItems.length + 1}`;
    const newItem = {
      id: menuItems.length + 1,
      title: newItemTitle,
      active: true,
      messages: [],
    };

    setCurrentConversation([]);
    setMenuItems(
      menuItems.map((item) => ({ ...item, active: false })).concat(newItem)
    );
    setIsNewConversation(false);
  };

  const handleClearConversations = () => {
    setMenuItems([]);
    setCurrentConversation([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="md:hidden fixed inset-x-0 top-0 z-10 flex justify-center items-center p-4 bg-white w-full shadow-md">
          <button
            onClick={handleMobileSidebarToggle}
            className="absolute left-4"
          >
            <MenuIcon fontSize="large" />
          </button>
          <h1 className="text-2xl font-semibold">DumbGPT</h1>
        </div>

        {mobileSidebarVisible && (
          <div
            ref={mobileSidebarRef}
            className="fixed z-20 top-0 left-0 w-64  bg-white md:hidden shadow-md"
          >
            <Sidebar
              menuItems={menuItems}
              onMenuItemClick={handleMenuItemClick}
              onCreateNewConversation={handleNewConversation}
              onClearConversations={handleClearConversations}
            />
          </div>
        )}

        <h1 className="hidden md:block text-4xl font-semibold mt-8 mb-8">
          DumbGPT
        </h1>
        <div className="flex">
          <div className="hidden md:block">
            <Sidebar
              menuItems={menuItems}
              onMenuItemClick={handleMenuItemClick}
              onCreateNewConversation={handleNewConversation}
              onClearConversations={handleClearConversations}
            />
          </div>
          <div className="ml-4 w-full mt-14 md:mt-0">
            <HintsComponent />
            <ChatArea
              messages={currentConversation}
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
