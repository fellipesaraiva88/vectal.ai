import { 
    AlertDialog, 
    AlertDialogTrigger, 
    AlertDialogContent, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogCancel, 
    AlertDialogAction 
  } from "@/components/ui/alert-dialog";
  import { ToolTip } from "./tooltip";
  import { CircleCheck, Circle } from "lucide-react";
  import { useState, useEffect } from "react";
  
  export const CompletedTaskComponent = () => {
    const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  
    // Example completed tasks data - replace with your actual data
    const completedTasks = [
      "complete instaautomate",
      "💎 I highly recommend you take 10 minutes to add as many Tasks as you can.",
      "Tell the AI Agent on the left what to create - or press 'Q'",
      "Start by creating some Tasks.",
      "👋 Welcome to Vectal — The Future of Productivity"
    ];
  
    const handleTaskClick = (index: number) => {
      // Add your task handling logic here
      console.log(`Clicked task at index: ${index}`);
    };
  
    return (
      <AlertDialog>
        {/* Trigger Button */}
        <AlertDialogTrigger asChild>
          <button 
            className="text-gray-400 hover:text-white" 
            onClick={() => setShowCompletedTasks(true)}
          >
            <ToolTip name="Completed Tasks">
              <CircleCheck className="text-black size-5" />
            </ToolTip>
          </button>
        </AlertDialogTrigger>
  
        {/* Alert Dialog */}
        {showCompletedTasks && (
          <AlertDialogContent className="bg-[#1a1a1a] border-gray-800">
            <AlertDialogHeader>
              <AlertDialogTitle>
                <div className="flex items-center justify-between py-2">
                  <h2 className="text-white text-xl">Completed Tasks</h2>
                  <button 
                    className="text-gray-400 hover:text-white" 
                    onClick={() => setShowCompletedTasks(false)}
                  >
                    ✕
                  </button>
                </div>
              </AlertDialogTitle>
            </AlertDialogHeader>
  
            <div className="space-y-0">
              {completedTasks.map((task, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 text-gray-400 py-4">
                    <button
                      onClick={() => handleTaskClick(index)}
                      className="hover:bg-gray-800 p-1 rounded-full transition-colors duration-200"
                    >
                      <CircleCheck className="size-4 text-gray-400 hover:text-white transition-colors duration-200" />
                    </button>
                    <span>{task}</span>
                  </div>
                  {index < completedTasks.length - 1 && (
                    <div className="border-b border-gray-800" />
                  )}
                </div>
              ))}
            </div>
          </AlertDialogContent>
        )}
      </AlertDialog>
    );
  };
  