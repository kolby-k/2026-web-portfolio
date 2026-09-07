import type { ActivityItem, ActivityItemSimple, TimelineItem } from "./types";

// all ActivityItem properties
export const PROJECTS_DETAILED: ActivityItem[] = [
  {
    id: "1",
    title: "Meeting Automation API",
    slug: "ms-meeting-api",
    type: "work case study",
    roleId: "1",
    focus: ["backend development", "integrations", "workflow automations"],
    shortDescription: "Automated meeting summaries and status updates",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["Javascript", "Deluge", "SQL"],
      apis: ["Microsoft", "OpenAI", "Zoho"],
      libraries: ["Jest", "Supertest", "msal/node"],
      tools: ["Zoho CRM", "Zoho Catalyst", "Zoho Flow"],
      database: "Zoho Datastore",
    },
    article: {
      bannerImage: "",
      fullDescription: "Long description: TODO",
      urls: null,
      content: [
        {
          type: "text",
          heading: "Intro to project",
          paragraphs: [
            "this project solved xyz",
            "It was a good way to practive y",
          ],
          order: 1,
        },
      ],
    },
  },
  {
    id: "2",
    title: "Evolve Workout Tracker",
    slug: "evolve-workout-tracker",
    type: "deployed project",
    longDescription: "Evolve is xyz",
    urls: [
      {
        type: "project root",
        url: "https://evolve-app.ca/",
      },
      {
        type: "app store",
        url: "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
      },
    ],
    focus: ["backend development", "frontend development", "software design"],
    shortDescription: "Workout tracking mobile app for iOS.",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["Javascript", "SQL"],
      libraries: ["Redux Toolkit", "Apple Storekit", "Jest"],
      tools: ["Expo"],
      database: "PostgreSQL",
    },
    article: {
      bannerImage: "",
      fullDescription: "Long description: TODO",
      urls: [
        {
          type: "project root",
          url: "https://evolve-app.ca/",
        },
        {
          type: "app store",
          url: "https://apps.apple.com/us/app/evolve-workout-tracker/id6738889804",
        },
      ],
      content: [
        {
          type: "text",
          heading: "Intro to Evolve Workout Tracker",
          paragraphs: [
            "I designed evolve to be a simple workout tracker app...",
            "I built it with Expo, ...",
          ],
          order: 1,
        },
      ],
    },
  },
];

// ActivityItem properites with the `article` object removed
export const PROJECTS_SIMPLE: ActivityItemSimple[] = PROJECTS_DETAILED.map(
  ({ article, ...project }) => project,
);

// All TimelineItems
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "1",
    title: "Data Analyst",
    description: "Manage databases, pipelines, and backend processes.",
    startDate: "2022-10-01",
    endDate: null,
    type: "work",
    company: "Business Link Alberta",
  },
  {
    id: "2",
    title: "Business Support Officer",
    description: "First point of contact for client inquiries.",
    startDate: "2021-05-13",
    endDate: "2022-10-01",
    type: "work",
    company: "Business Link Alberta",
  },
];
