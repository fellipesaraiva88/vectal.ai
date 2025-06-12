"use client";

import { useState } from "react";
import { MessageCircle, ListCheck, Settings2 } from "lucide-react";
import ChatUI from "@/components/global/chat-interface/page";
import TaskList from "@/components/global/task-list";
import Notes from "@/components/global/notes";
import { timelineData } from "@/data/timeline";

const MobileNavigation = () => {
  const [activeView, setActiveView] = useState<'chat' | 'tasks' | 'notes'>('chat');

  return (
    <div className="flex h-screen">
      {/* Left Side Navigation */}
      <div className="bg-[#282828] border-r border-[#3d3d3d] w-16">
        <div className="flex flex-col items-center gap-6 py-6">
          <button
            onClick={() => setActiveView('tasks')}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              activeView === 'tasks' ? 'text-white bg-[#333333]' : 'text-gray-400'
            }`}
          >
            <ListCheck className="size-6" />
          </button>
          
          <button
            onClick={() => setActiveView('chat')}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              activeView === 'chat' ? 'text-white bg-[#333333]' : 'text-gray-400'
            }`}
          >
            <MessageCircle className="size-6" />
          </button>
          
          <button
            onClick={() => setActiveView('notes')}
            className={`p-3 rounded-lg transition-colors duration-200 ${
              activeView === 'notes' ? 'text-white bg-[#333333]' : 'text-gray-400'
            }`}
          >
            <Settings2 className="size-6" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {activeView === 'chat' && <ChatUI />}
        {activeView === 'tasks' && <TaskList />}
        {activeView === 'notes' && <Notes items={timelineData} />}
      </div>
    </div>
  );
};

export default MobileNavigation;
