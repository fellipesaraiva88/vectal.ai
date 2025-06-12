"use client";

import { createContext, useContext } from "react";

interface LayoutState {
  showTaskList: boolean;
  showNotes: boolean;
  onTaskListClick: () => void;
  onNotesClick: () => void;
}

const LayoutContext = createContext<LayoutState | undefined>(undefined);

export const useLayoutState = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayoutState must be used within a LayoutWrapper");
  }
  return context;
};

// Export the context for the provider to use
export { LayoutContext };