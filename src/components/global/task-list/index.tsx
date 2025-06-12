"use client"

import React, { useState, useEffect } from 'react';
import { Plus, CircleCheck, Cone, Circle, ListCheck } from 'lucide-react';
import { ToolTip } from '@/components/global/task-list/tooltip';
import { UserContextComponent } from '@/components/global/task-list/user-context';
import { 
  AlertDialog, 
  AlertDialogTrigger, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogCancel, 
  AlertDialogAction } from "@/components/ui/alert-dialog"
import { CompletedTaskComponent } from '@/components/global/task-list/completed-task';
import { CreateTaskComponent } from '@/components/global/task-list/create-task';
import TaskContentComponent from '@/components/global/task-list/task-content';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const tasks: Task[] = [
  { id: 1, text: 'complete instaautomate', completed: false },
  { id: 2, text: 'placement', completed: false },
  { id: 3, text: 'Remember: The more tasks you have, the better Vectal gets.', completed: false },
];

const TaskList = () => {
  return (
    <div className="h-full w-full bg-[#282828] border-l border-gray-700 rounded-lg md:w-full md:mr-96 lg:mr-96 xl:w-[80%] xl:mr-96 sm:h-full sm:-mb-14">
      <div className="p-4 bg-white rounded-t-lg">
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-black font-bold text-xl pl-5">vectal.ai</h2>
          <div className="flex space-x-2">
            <CreateTaskComponent />

            <CompletedTaskComponent />

            <UserContextComponent />
          </div>
        </div>        
      </div>
      <TaskContentComponent />
    </div>
  );
};

export default TaskList;