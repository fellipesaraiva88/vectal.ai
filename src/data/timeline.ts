export type TimelineItem = {
  date: string;
  items: {
    text: string;
    description?: string;
    isImportant?: boolean;
  }[];
};

export const timelineData: TimelineItem[] = [
  {
    date: "Today",
    items: [
      {
        text: "Project Planning",
        description: "Initial planning for the Instagram automation project"
      },
      {
        text: "Learning Session",
        description: "Full stack development fundamentals"
      }
    ]
  },
  {
    date: "Yesterday",
    items: [
      {
        text: "Code Review",
        description: "Reviewed pull requests and made necessary changes"
      }
    ]
  }
];

export type TimelineEntry = {
  title: string;
  description: string;
}; 