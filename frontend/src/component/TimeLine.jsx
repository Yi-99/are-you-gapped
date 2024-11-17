import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "Algorithm",
      description: "Gain expertise in designing and analyzing algorithms, including dynamic programming, graph algorithms, and data structures, to solve complex computational problems efficiently.",
    },
    {
      title: "Design Pattern",
      description: "Master the application of key design patterns such as Singleton, Factory, Observer, and Strategy to improve the scalability, readability, and maintainability of software projects.",
    },
    {
      title: "System Dsign",
      description: "Develop skills to design and architect scalable, fault-tolerant, and highly available systems, including database schema design, load balancing, and API design, from conception to production for real-world applications."
    },
    {
      title: "Cloud Computing Proficiency",
      description: "Acquire expertise in leveraging cloud platforms like AWS, Azure, or Google Cloud to design, deploy, and manage scalable and cost-effective cloud-native applications.",
    },
  ];

  return (
    <div className="relative flex justify-between items-center w-full px-6 py-10">
      {/* Horizontal timeline line */}
      <div className="absolute top-[36%] transform -translate-y-1/2 left-0 right-0 h-1 bg-green-900 z-0 mx-6"></div>
      {/* Horizontal timeline line with arrows */}
      <div className="absolute top-[36%] transform -translate-y-1/2 left-0 right-0 h-1 bg-green-900 z-0 mx-6 
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
          <div className="w-6 h-6 m-4 pb-6 bg-green-200 rounded-full relative z-20 opacity-60"></div>
  
          {/* Description */}
          <div className="mt-6 bg-neutral-100 text-green-900 text-center p-4 m-2 rounded-md shadow-sm">
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );  
};

export default Timeline;
