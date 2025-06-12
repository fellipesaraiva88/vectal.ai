import React from 'react';
import { Repeat } from 'lucide-react';

const TaskContentComponent = () => {
  const tasks = [
    { id: 1, title: 'Morning Learning Session' },
    { id: 2, title: 'Instagram Project Development' },
    { id: 3, title: 'placement' },
    { id: 4, title: 'Remember: The more tasks you have, the better Vectal gets.' },
    { id: 5, title: 'Gaming Break' }
  ];

  const handleTaskClick = (taskId: any) => {
    // Handle task click event here
    console.log(`Task ${taskId} clicked`);
  };

  return (
    <div className="bg-[#282828] p-6 text-white text-sm">
      {/* Current tasks section */}
      <div className="mb-8">
        {tasks.slice(0, 2).map((task) => (
          <div
            key={task.id}
            onClick={() => handleTaskClick(task.id)}
            className="group flex items-center py-4 ml-4 cursor-pointer hover:bg-[#2a2a2a] transition-colors border-b border-gray-700 last:border-b-0"
          >
            <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-4 group-hover:border-white"></div>
            <span className="flex-grow text-gray-200">
              {task.title}
            </span>
          </div>
        ))}
      </div>

      {/* Future tasks section with centered heading */}
      <div className="relative mb-4 ml-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#282828] px-4 text-gray-400 text-sm mr-4">future</span>
        </div>
      </div>
      
      {tasks.slice(2).map((task) => (
        <div
          key={task.id}
          onClick={() => handleTaskClick(task.id)}
          className="group flex items-center py-4 cursor-pointer hover:bg-[#2a2a2a] ml-4 transition-colors border-b border-gray-700"
        >
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full mr-4 group-hover:border-white"></div>
          <div className="flex-grow text-white flex items-center gap-1">
            {task.title}
            <Repeat className="w-4 h-4 text-gray-600 pl-1" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskContentComponent;