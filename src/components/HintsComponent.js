import React from "react";

const HintsComponent = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-md mb-4 w-full">
      <p className="text-sm mb-2">Try asking:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-2 rounded-md shadow-md">
          <p className="text-base">"Can you tell me a story?"</p>
        </div>

        <div className="bg-white p-2 rounded-md shadow-md">
          <p className="text-base">"What's the best recipe?"</p>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md">
          <p className="text-base">"What happens in dreams?"</p>
        </div>
        <div className="bg-white p-2 rounded-md shadow-md">
          <p className="text-base">"Tell me about lizards"</p>
        </div>
      </div>
    </div>
  );
};

export default HintsComponent;
