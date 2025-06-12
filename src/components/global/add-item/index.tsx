import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

const AddItemsComponent = ({ onClose, onSubmit }: { onClose: () => void, onSubmit: (data: { name: string, context: string }) => void }) => {
  const [name, setName] = useState('');
  const [context, setContext] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, context });
    setName('');
    setContext('');
  };

  return (
    <AlertDialogContent className='bg-[#262626]'>
      <AlertDialogHeader>
        <AlertDialogTitle>Create New Task</AlertDialogTitle>
        <AlertDialogDescription>
          Add a new task with name and optional context.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            required
            className='bg-[#333333] h-12 border-gray-600 focus:border-gray-600 focus-visible:ring-gray-600 focus-visible:ring-1 focus:ring-offset-0'
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="context" className="text-sm font-medium">
            Context
          </label>
          <Textarea
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Add extra context (optional)"
            rows={4}
            className='bg-[#333333] border-gray-600 focus:border-gray-600 focus-visible:ring-gray-600 focus-visible:ring-1 focus:ring-offset-0'
          />
        </div>

        <AlertDialogFooter>
          <div className='flex gap-2 justify-between w-full'>
            <Button
                type="button"
                onClick={onClose}
                className="hover:bg-red-600 hover:text-white transition-colors"
            >
                Cancel
            </Button>
            <Button
                type="submit"
                className="transform transition-transform hover:scale-105 bg-white text-black hover:bg-gray-100"
            >
                Add Item
            </Button>
          </div>
        </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  );
};

export default AddItemsComponent;