"use client";

import { ListCheck, Settings2 } from "lucide-react";
import { ToolTip } from "@/components/global/task-list/tooltip";
import { useLayoutState } from "@/hooks/use-layout-state";

const AudioControl = () => {
  const { onTaskListClick, onNotesClick, showTaskList, showNotes } = useLayoutState();

  return (
    <div className="fixed right-5 top-5">
      <div className="flex flex-col gap-3">
        <button 
          className={`bg-[#282828] p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200
            ${showTaskList ? 'border-[1px] border-white' : 'border-2 border-transparent'}`}
          onClick={onTaskListClick}
        >
          <ToolTip name="Task List">
            <ListCheck className={`${showTaskList ? 'text-white' : 'text-gray-400'} hover:text-white size-4`} />
          </ToolTip>
        </button>
        <button 
          className={`bg-[#282828] p-3 rounded-lg hover:bg-[#333333] transition-colors duration-200
            ${showNotes ? 'border-[1px] border-white' : 'border-2 border-transparent'}`}
          onClick={onNotesClick}
        >
          <ToolTip name="Notes">
            <Settings2 className={`${showNotes ? ' text-white' : 'text-gray-400'} hover:text-white size-4`} />
          </ToolTip>
        </button>
      </div>
    </div>
  );
};

export default AudioControl;