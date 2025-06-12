"use client";

import { useState, useMemo } from "react";

const UserContextForm = ({setShowComponent}: {setShowComponent: (show: boolean) => void}) => {
  const [formData, setFormData] = useState({
    workDescription: "",
    shortTermFocus: "",
    longTermGoals: "",
    sortingPreferences: "",
  });

  const getContextLevel = (text: string) => {
    const wordCount = text.trim().split(/\s+/).length;
    
    if (wordCount < 20) {
      return { level: "Low Context", color: "bg-red-600" };
    } else if (wordCount >= 20 && wordCount < 50) {
      return { level: "Moderate Context", color: "bg-yellow-500" };
    } else {
      return { level: "High Context", color: "bg-green-600" };
    }
  };

  const contextLevels = useMemo(() => ({
    workDescription: getContextLevel(formData.workDescription),
    shortTermFocus: getContextLevel(formData.shortTermFocus),
    longTermGoals: getContextLevel(formData.longTermGoals),
    sortingPreferences: getContextLevel(formData.sortingPreferences),
  }), [formData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isEmpty = (text: string) => text.trim().length === 0;

  return (
    <div className="p-4 bg-[#262626] rounded-lg w-full max-w-3xl">
      {/* Work Description */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-300 flex items-center">
            Work Description
            {isEmpty(formData.workDescription) && (
              <span className="ml-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
          </label>
          <span className={`${contextLevels.workDescription.color} text-white text-xs px-2 py-1 rounded-md`}>
            {contextLevels.workDescription.level}
          </span>
        </div>
        <textarea
          name="workDescription"
          className="w-full p-4 bg-[#333333] text-white border border-[#333333] rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-500"
          rows={3}
          value={formData.workDescription}
          placeholder="Describe your work and business"
          onChange={handleInputChange}
        />
      </div>

      {/* Short Term Focus */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-300 flex items-center">
            Short Term Focus
            {isEmpty(formData.shortTermFocus) && (
              <span className="ml-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
          </label>
          <span className={`${contextLevels.shortTermFocus.color} text-white text-xs px-2 py-1 rounded-md`}>
            {contextLevels.shortTermFocus.level}
          </span>
        </div>
        <textarea
          name="shortTermFocus"
          className="w-full p-4 bg-[#333333] text-white border border-[#333333] rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-500"
          rows={3}
          value={formData.shortTermFocus}
          placeholder="What are your short term focus?"
          onChange={handleInputChange}
        />
      </div>

      {/* Long Term Goals */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-300 flex items-center">
            Long Term Goals
            {isEmpty(formData.longTermGoals) && (
              <span className="ml-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
          </label>
          <span className={`${contextLevels.longTermGoals.color} text-white text-xs px-2 py-1 rounded-md`}>
            {contextLevels.longTermGoals.level}
          </span>
        </div>
        <textarea
          name="longTermGoals"
          className="w-full p-4 bg-[#333333] text-white border border-[#333333] rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-500"
          rows={3}
          value={formData.longTermGoals}
          placeholder="What are your long term goals?"
          onChange={handleInputChange}
        />
      </div>

      {/* Sorting Preferences */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-300 flex items-center">
            Sorting Preferences
            {isEmpty(formData.sortingPreferences) && (
              <span className="ml-1 h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            )}
          </label>
          <span className={`${contextLevels.sortingPreferences.color} text-white text-xs px-2 py-1 rounded-md`}>
            {contextLevels.sortingPreferences.level}
          </span>
        </div>
        <textarea
          name="sortingPreferences"
          className="w-full p-4 bg-[#333333] text-white border border-[#333333] rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-600"
          rows={3}
          placeholder="How should your tasks be sorted?"
          value={formData.sortingPreferences}
          onChange={handleInputChange}
        />
      </div>

      {/* Divider and Buttons */}
      <div className="pt-4 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 bg-[#333333] text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={() => setShowComponent(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-white font-semibold text-black rounded-md hover:scale-105 transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserContextForm;
