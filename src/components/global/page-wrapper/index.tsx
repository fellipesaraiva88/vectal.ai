"use client";

import { useState } from "react";
import TaskList from "@/components/global/task-list";
import { LayoutContext } from "@/hooks/use-layout-state";
import Notes from "@/components/global/notes";

const timelineData = [
    {
      date: "February 13, 2025",
      items: [
        { text: "ggii" },
        { text: "vectal" }
      ]
    },
    {
      date: "February 11, 2025",
      items: [
        { text: "openai founded" },
        { text: "Welcome to Notes!", isImportant: true },
        { text: "Every time you create a new Item, our AI Agent carefully analyses the item and decides whether it should be a Note, or a Task." },
        { text: "Tasks = actionable items. Notes = everything else - such as Ideas, Thoughts, Reminders, Quotes, etc. Anything you want to write down." },
        { text: "If a Note is really important, it will be marked with this blue dot -->", isImportant: true }
      ]
    },
  ];

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const [showTaskList, setShowTaskList] = useState(true);
  const [showNotes, setShowNotes] = useState(false);

  const value = {
    showTaskList,
    showNotes,
    onTaskListClick: () => {
      setShowTaskList(true);
      setShowNotes(false);
    },
    onNotesClick: () => {
      setShowNotes(true);
      setShowTaskList(false);
    }
  };

  return (
    <LayoutContext.Provider value={value}>
      <div className="flex flex-col w-full relative overflow-hidden">
        <div className="ml-80 w-auto mt-7 rounded-lg h-full xl:w-[80%] xl:mr-96 sm:w-full md:ml-10 md:w-[80%] md:mr-96 lg:w-[80%] lg:mr-96 lg:ml-10 xl:ml-80">
          {showTaskList && <TaskList />}
          {showNotes && <Notes items={timelineData} />}
        </div>
        {showTaskList && (
          <div className="w-full flex justify-center mt-2">
            <p className="text-gray-400 text-xs mb-4 mt-2 text-center">
              Help us make Vectal better → feedback@vectal.ai
            </p>
          </div>
        )}
        <div className="w-full ml-40">
          {children}
        </div>
      </div>
    </LayoutContext.Provider>
  );
};