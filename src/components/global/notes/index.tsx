import React, { useState } from 'react';
import { PlusCircle, Pencil, X } from 'lucide-react';
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import AddItemsComponent from '@/components/global/add-item';

interface TimelineItem {
  date: string;
  items: {
    text: string;
    description?: string;
    isImportant?: boolean;
  }[];
}

interface TimelineProps {
  items: TimelineItem[];
}

const timelineData = [
    {
      date: "February 13, 2025",
      items: [
        {
          text: "ggii",
          description: "This is a description for ggii"
        },
        {
          text: "vectal",
          description: "This is a description for vectal"
        }
      ],
    },
    {
      date: "February 11, 2025",
      items: [
        {
          text: "openai founded",
          description: "OpenAI was founded as an AI research laboratory"
        },
        {
          text: "Welcome to Notes! 🔵",
          description: "This is your personal notes application"
        },
        {
          text: "Every time you create a new Item, our AI Agent carefully analyses the item and decides whether it should be a Note, or a Task.",
          description: "More details about the AI classification system"
        },
        {
          text: "Tasks = actionable items. Notes = everything else - such as Ideas, Thoughts, Reminders, Quotes, etc. Anything you want to write down.",
          description: "Explanation of different item types"
        },
        {
          text: "If a Note is really important, it will be marked with this blue dot --> 🔵",
          description: "Information about importance markers"
        }
      ],
    },
    {
      date: "January 3, 2009",
      items: [{
        text: "Satoshi creates Bitcoin. 🔵",
        description: ""
      }],
    },
    {
      date: "October 1, 1950",
      items: [{
        text: "Alan Turing invents the Turing Test 🔵",
        description: ""
      }],
    },
  ];

const Notes: React.FC<TimelineProps> = ({ items }) => {
    const [data, setData] = useState(timelineData);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

    const handleItemClick = (entryIndex: number, itemIndex: number) => {
        const itemKey = `${entryIndex}-${itemIndex}`;
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    const handleAddItem = ({ name, context }: { name: string; context: string }) => {
        setData((prevData) =>
            prevData.map((entry) =>
                entry.date === selectedDate
                    ? {
                        ...entry,
                        items: [...entry.items, {
                            text: name,
                            description: context
                        }]
                      }
                    : entry
            )
        );
        setIsDialogOpen(false);
    };

    const handleDeleteItem = (entryIndex: number, itemIndex: number) => {
        setData((prevData) =>
            prevData.map((entry, eIndex) =>
                eIndex === entryIndex
                    ? {
                        ...entry,
                        items: entry.items.filter((_, iIndex) => iIndex !== itemIndex)
                      }
                    : entry
            )
        );
    };

    return (
      <div className="max-w-2xl mx-auto py-1 px-4 relative text-sm sm:px-2 sm:py-4 xl:mr-[550px]">
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          {/* Timeline Line */}
          <div className="absolute left-1 -top-10 w-[2px] h-full bg-gray-500 lg:left-[calc(30%-213px) md:left-3 sm:left-3"></div>
  
          {data.map((entry, entryIndex) => (
              <div key={entryIndex} className="relative pb-8 sm:pb-6 sm:ml-0">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 -ml-4 w-3 h-3 bg-white border-2 border-white rounded-full z-10 sm:left-0 sm:ml-0 sm:mr-[-16px]"></div>
  
                  {/* Date & Add Button */}
                  <div className="flex items-center gap-2 text-white font-semibold text-lg mb-3 sm:text-sm sm:gap-1 sm:ml-6">
                      {entry.date}
                      {entryIndex === 0 && (
                          <AlertDialogTrigger asChild>
                              <button onClick={() => setSelectedDate(entry.date)}>
                                  <PlusCircle className="w-7 h-7 text-black fill-white hover:scale-110 transform transition-all duration-200 ease-in-out sm:w-6 sm:h-6" />
                              </button>
                          </AlertDialogTrigger>
                      )}
                  </div>
  
                  {/* Notes/Tasks List */}
                  <div className="space-y-2 pl-6 sm:pl-10">
                      {entry.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                              <div
                                  className="bg-[#282828] text-white p-3 rounded-lg shadow-md cursor-pointer transition-colors relative group sm:p-2"
                              >
                                  <div className="flex justify-between items-start">
                                      {/* Task Text */}
                                      <div className="flex-1" onClick={() => handleItemClick(entryIndex, itemIndex)}>
                                          {typeof item === 'string' ? item : (
                                              <span className="flex items-center gap-1">
                                                  {item.text.replace('🔵', '')}
                                                  {item.text.includes('🔵') && (
                                                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                                                  )}
                                              </span>
                                          )}
                                          {/* Expandable Description */}
                                          <div 
                                              className={`p-1 bg-[#282828] rounded-lg text-gray-300 text-xs italic mt-2 overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
                                                  expandedItems[`${entryIndex}-${itemIndex}`] && item.description 
                                                  ? 'opacity-100 max-h-40 scale-100' 
                                                  : 'opacity-0 max-h-0 scale-95'
                                              }`}
                                          >
                                              {item.description}
                                          </div>
                                      </div>
                                      
                                      {/* Edit & Delete Buttons */}
                                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity sm:opacity-100">
                                          <button className="p-1 hover:text-blue-400 transition-colors">
                                              <Pencil className="w-4 h-4" />
                                          </button>
                                          <button 
                                              onClick={(e) => {
                                                  e.stopPropagation();
                                                  handleDeleteItem(entryIndex, itemIndex);
                                              }}
                                              className="p-1 hover:bg-red-600 hover:rounded-sm transition-colors"
                                          >
                                              <X className="w-4 h-4" />
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
          ))}
          <AddItemsComponent 
              onClose={() => setIsDialogOpen(false)}
              onSubmit={handleAddItem}
          />
      </AlertDialog>
  </div>
  
    );
};

export default Notes;