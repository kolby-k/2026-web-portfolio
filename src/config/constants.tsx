import type { Activity, ActivityArticle } from "./types";

export const PROJECTS_DETAILED: ActivityArticle[] = [
  {
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
    id: "1",
    title: "Meeting Automation API",
    slug: "ms-meeting-api",
    type: "work case study",
    focus: ["backend development", "integrations", "workflow automations"],
    shortDescription: "Automated meeting summaries and status updates",
    technology: {
      environment: "Node.js",
      languages: ["Javascript", "Deluge", "SQL"],
      apis: ["Microsoft", "OpenAI", "Zoho"],
      libraries: ["Jest", "Supertest", "msal/node"],
      tools: ["Zoho CRM", "Zoho Catalyst", "Zoho Flow"],
      database: "Zoho Datastore",
    },
  },
];

export const PROJECTS_SIMPLE = PROJECTS_DETAILED.map((project) => {
  return {
    ...project,
    bannerImage: undefined,
    fullDescription: undefined,
    urls: undefined,
    content: undefined,
  } as Activity;
});
