import type { ActivityItem, ActivityItemSimple, TimelineItem } from "./types";

// all ActivityItem properties
export const PROJECTS_DETAILED: ActivityItem[] = [
  {
    id: "1",
    title: "Automated Teams Meeting Summaries",
    slug: "ms-meeting-api",
    type: "work",
    roleId: "1",
    focus: ["backend development", "API integrations", "workflow automation"],
    shortDescription:
      "Keeps Zoho CRM up to date with summaries and attendance from over 200 Teams meetings each month.",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "Deluge", "SQL"],
      apis: ["Microsoft Graph API", "OpenAI API", "Zoho CRM API"],
      libraries: ["Jest", "Supertest", "@azure/msal-node"],
      tools: ["Zoho CRM", "Zoho Catalyst", "Zoho Flow"],
      database: "Zoho Catalyst Data Store",
    },
    article: {
      bannerImage: "",
      fullDescription:
        "I built an integration that turns Microsoft Teams meeting transcripts and attendance data into concise summaries and record updates in Zoho CRM. The automation processes over 200 meetings per month, reducing manual follow-up work and keeping meeting records more consistent.",
      urls: null,
      content: [
        {
          type: "text",
          heading: "The Need",
          paragraphs: [
            "After Microsoft Teams meetings, staff manually wrote meeting notes and updated fields in Zoho CRM. These updates varied from person to person and were sometimes forgotten, leaving incomplete records.",
            "I was tasked with automating this work so the CRM would consistently capture what was discussed, along with meeting status and duration based on attendance data.",
          ],
          order: 1,
        },
        {
          type: "text",
          heading: "Planning the Integration",
          paragraphs: [
            "Because the organization already used Microsoft Teams and Zoho, I designed the integration around those tools. I explored Microsoft Graph for access to transcripts and attendance reports, and Zoho Catalyst for hosting a serverless Node.js API and storing subscription data.",
            "Microsoft Graph subscriptions allow an application to receive notifications when meeting data becomes available. I planned the API to receive these notifications and place the processing work in a job queue.",
            "Separating incoming requests from processing allowed the API to respond quickly while queued jobs handled the remaining work. It also made failed jobs easier to identify, debug, and retry.",
          ],
          order: 2,
        },
        {
          type: "text",
          heading: "Managing Subscriptions and Meeting Data",
          paragraphs: [
            "I built two serverless functions in Zoho Catalyst: an HTTP function to receive requests and a job processing function connected to a queue. A Deluge script in Zoho CRM calls the API to request new Microsoft Graph subscriptions.",
            "The HTTP function has endpoints for subscription requests, meeting data notifications, and subscription lifecycle events, such as requests to reauthorize access. It validates incoming requests and adds jobs to the queue.",
            "The job processing function uses @azure/msal-node to authenticate with Microsoft Graph. It creates, reauthorizes, and deletes subscriptions, and downloads transcripts and attendance reports to pass to Zoho Flow.",
          ],
          order: 3,
        },
        {
          type: "text",
          heading: "Turning Meeting Data into CRM Updates",
          paragraphs: [
            "I created two workflows in Zoho Flow, each with a webhook to receive data from the processing function. One handles attendance reports and updates the CRM meeting status and duration.",
            "The other handles transcripts, using OpenAI to generate a meeting summary and extract information such as the topics discussed. The workflow then updates the CRM with the results.",
            "Zoho Flow provided built-in CRM connections and visibility into each workflow's progress, making it easier to investigate and retry failures during the CRM update process.",
          ],
          order: 4,
        },
        {
          type: "text",
          heading: "The Outcome",
          paragraphs: [
            "The automation now processes over 200 meetings per month, generating summaries and updating meeting statuses that staff previously entered manually.",
            "We observed more consistent CRM records because meeting fields were populated through a standard process. Staff had summaries and attendance details available in the CRM, with less reliance on individual follow-up to keep records complete.",
          ],
          order: 5,
        },
      ],
    },
  },
  {
    id: "2",
    title: "Evolve Workout Tracker",
    slug: "evolve-workout-tracker",
    type: "deployed",
    longDescription: "Evolve is xyz",
    urls: [
      {
        type: "project",
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
      languages: ["JavaScript", "SQL"],
      libraries: ["Redux Toolkit", "Apple Storekit", "Jest"],
      tools: ["Expo"],
      database: "PostgreSQL",
    },
    article: {
      bannerImage: "",
      fullDescription: "Long description: TODO",
      urls: [
        {
          type: "project",
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
  {
    id: "3",
    title: "Summarizer",
    slug: "summarizer-app",
    type: "hobby",
    longDescription:
      "Summarizer is a fun project I made that uses OpenAI to provide xyz..",
    focus: ["backend development", "API integrations", "software design"],
    shortDescription:
      "Summarizer provides you with a quick summary from any URL.",
    year: "2024",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "SQL"],
      libraries: ["Next.js"],
      tools: ["Google Oauth"],
      database: "Redis",
    },
    article: {
      bannerImage: "",
      fullDescription: "Long description: TODO",
      urls: [
        {
          type: "project",
          url: "https://summarizer-next-app.vercel.app",
        },
      ],
      content: [
        {
          type: "text",
          heading: "Intro to Summarizer",
          paragraphs: [
            "I designed summarizer with Next.js...",
            "It was xyz ...",
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
