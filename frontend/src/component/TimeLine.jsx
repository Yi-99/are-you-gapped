import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "Javascript",
      description: "Users need a clear way to create a profile.",
    },
    {
      title: "Tour screen",
      description: "Users need a way of knowing direction limitation in virtual tour.",
    },
    {
      title: "Checkout",
      description: "Users need a way to check cart before taking any further info.",
    },
    {
      title: "Add to cart",
      description: "Users need a way to make sure that the item was added to cart.",
    },
  ];

  return (
    <div className="relative flex justify-between items-center w-full px-6 py-10">
      {/* Horizontal timeline line */}
      <div className="absolute top-[45%] transform -translate-y-1/2 left-0 right-0 h-1 bg-green-900 z-0 mx-6"></div>
      {/* Horizontal timeline line with arrows */}
      <div className="absolute top-[45%] transform -translate-y-1/2 left-0 right-0 h-1 bg-green-900 z-0 mx-6 
        before:content-[''] before:absolute before:-left-2 before:top-1/2 before:transform before:-translate-y-1/2 before:border-[6px] before:border-transparent before:border-r-green-900 
        after:content-[''] after:absolute after:-right-2 after:top-1/2 after:transform after:-translate-y-1/2 after:border-[6px] after:border-transparent after:border-l-green-900">
      </div>
  
      {timelineData.map((item, index) => (
        <div key={index} className="relative flex flex-col items-center z-10">
          {/* Title */}
          <div className="bg-green-900 text-white px-4 py-2 m-4 text-center rounded-md">
            {item.title}
          </div>
  
          {/* Circle */}
          <div className="w-6 h-6 m-4 bg-green-200 rounded-full relative z-20 opacity-60"></div>
  
          {/* Description */}
          <div className="mt-4 bg-neutral-100 text-green-900 text-center p-4 m-2 rounded-md shadow-sm">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );  
};

export default Timeline;
