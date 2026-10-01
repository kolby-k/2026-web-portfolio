import type { ActivityItem, ActivityItemSimple, TimelineItem } from "./types";
import EvolveBannerImage from "../assets/evolve-home.png";
import SummarizeBannerImage from "../assets/summarizer-home.png";
import PlaceholderBannerImage from "../assets/placeholder.png";
import EvolveThumbnail from "../assets/evolve-card-thumbnail.png";
import SummarizerBannerImage from "../assets/summarizer-card-thumbnail.png";
import DeveloperToolkitBannerImage from "../assets/developer-toolkit.png";
import DeveloperToolkitThumbnail from "../assets/dev-toolkit-card-thumbnail.png";
// all ActivityItem properties
export const PROJECTS_DETAILED: ActivityItem[] = [
  {
    id: "1",
    title: "Automated Meeting Summaries",
    slug: "ms-meeting-api",
    type: "work",
    timelineId: "1",
    focus: ["backend development", "API integrations", "workflow automation"],
    shortDescription:
      "Keeps Zoho CRM up to date with summaries and attendance from over 200 Teams meetings each month.",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "Deluge", "SQL"],
      apis: ["Microsoft Graph API", "OpenAI API", "Zoho CRM API"],
      libraries: ["Express", "Jest", "Supertest", "@azure/msal-node"],
      integrations: ["Zoho CRM", "Zoho Catalyst", "Zoho Flow"],
      database: "Zoho Catalyst Data Store",
    },
    thumbnail: PlaceholderBannerImage,
    urls: null,
    article: {
      bannerImage: PlaceholderBannerImage,
      fullDescription:
        "I built an integration that turns Microsoft Teams meeting transcripts and attendance data into concise summaries and record updates in Zoho CRM. The automation processes over 200 meetings per month, reducing manual follow-up work and keeping meeting records more consistent.",
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
            "Because the organization already used Microsoft Teams and Zoho, I designed the integration around those integrations. I explored Microsoft Graph for access to transcripts and attendance reports, and Zoho Catalyst for hosting a serverless Node.js API and storing subscription data.",
            "Microsoft Graph subscriptions allow an application to receive notifications when meeting data becomes available. I planned the API to receive these notifications and place the processing work in a job queue.",
            "Separating incoming requests from processing allowed the API to respond quickly while queued jobs handled the remaining work. It also made failed jobs easier to identify, debug, and retry.",
          ],
          order: 2,
        },
        {
          type: "text",
          heading: "Managing Subscriptions & Meeting Data",
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
    title: "iOS Workout Tracker App",
    slug: "evolve-workout-tracker",
    type: "deployed",
    timelineId: "9",
    focus: ["backend development", "software design", "application deployment"],
    shortDescription: "Workout tracking mobile app for iOS.",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "SQL"],
      libraries: ["Express", "Redux Toolkit", "Apple Storekit", "Jest"],
      integrations: ["Expo"],
      database: "PostgreSQL",
    },
    thumbnail: EvolveThumbnail,
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
    article: {
      bannerImage: EvolveBannerImage,
      fullDescription: "Long description: TODO",
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
    title: "Summarizer Web App",
    slug: "summarizer-app",
    type: "hobby",
    focus: ["backend development", "API integrations", "software design"],
    shortDescription:
      "Summarizer provides you with a quick summary from any URL.",
    year: "2024",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "SQL"],
      libraries: ["Next.js"],
      integrations: ["Google Oauth"],
      database: "Redis",
    },
    thumbnail: SummarizeBannerImage,
    urls: [
      {
        type: "project",
        url: "https://summarizer-next-app.vercel.app",
      },
    ],
    article: {
      bannerImage: SummarizerBannerImage,
      fullDescription: "Long description: TODO",
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
  {
    id: "4",
    title: "Developer Toolkit Web App",
    slug: "dev-toolkit-app",
    type: "hobby",
    focus: ["software design", "frontend development"],
    shortDescription:
      "A collection of practical integrations and utilities for full-stack development.",
    year: "2025",
    technology: {
      environment: "Node.js",
      languages: ["TypeScript"],
      libraries: ["React"],
      integrations: [],
    },
    thumbnail: DeveloperToolkitThumbnail,
    urls: [
      {
        type: "project",
        url: "https://developer-tk.netlify.app/",
      },
      {
        type: "github",
        url: "https://github.com/kolby-k/dev-toolkit-v2",
      },
    ],
    article: {
      bannerImage: DeveloperToolkitBannerImage,
      fullDescription: "Long description: TODO",
      content: [
        {
          type: "text",
          heading: "Intro to Dev Toolkit",
          paragraphs: [
            "I designed dev toolkit with React.js...",
            "It was xyz ...",
          ],
          order: 1,
        },
      ],
    },
  },
  {
    id: "5",
    title: "Workload-Balancing Assignment Engine",
    slug: "round-robin-api",
    type: "work",
    timelineId: "1",
    focus: ["backend development", "API integrations", "workflow automation"],
    shortDescription:
      "Built a backend assignment engine that balances team workloads, routes inquiries by expertise, maintains continuity with existing contacts, and automates follow-up tasks and notifications.",
    year: "2024",
    technology: {
      environment: "Node.js",
      languages: ["JavaScript", "Deluge", "SQL"],
      apis: ["Zoho CRM API", "OpenAI API"],
      libraries: ["Express"],
      integrations: ["Zoho CRM", "Zoho Catalyst"],
    },
    thumbnail: PlaceholderBannerImage,
    urls: null,
    article: {
      bannerImage: PlaceholderBannerImage,
      fullDescription:
        "Developed a serverless assignment API using Node.js and Zoho Catalyst to route inquiries from contact forms, voicemails, and AI agent handoffs. The engine combines configurable assignment rules, staff availability, existing contact ownership, and expertise-weighted workload scoring to select an appropriate team member. Integration with Zoho CRM automates task creation and notifications, reducing manual coordination and supporting timely follow-up.",
      content: [
        {
          type: "text",
          heading: "The Challenge",
          paragraphs: [
            "The CRM's built-in assignment rules could not accommodate the business's routing requirements. Different inquiry types required different groups of eligible staff, with decisions accounting for availability, existing customer relationships, and subject expertise.",
            "The business needed a centralized assignment service that could support multiple workflows while keeping routing decisions consistent and configurable.",
          ],
          order: 1,
        },
        {
          type: "text",
          heading: "Designing the Backend",
          paragraphs: [
            "Zoho CRM served as the source for contact records, assignment rules, team membership, and assignment history. The backend needed to coordinate these inputs before selecting an owner.",
            "The workflow required multiple asynchronous API calls that were difficult to handle reliably within CRM scripts because of execution time limits. I built a Node.js API with Express, hosted on Zoho Catalyst, to process assignment requests and return the selected team member.",
          ],
          order: 2,
        },
        {
          type: "text",
          heading: "Configurable Assignment Logic",
          paragraphs: [
            "Each request identifies an assignment rule, which determines the eligible team members. The engine filters out staff marked as unavailable, including those on vacation or sick leave.",
            "When a request includes an email address, the engine checks for an existing CRM contact. If that contact already has an owner who is eligible under the current rule, it preserves the assignment to maintain continuity.",
            "When a new owner is needed, the engine evaluates recent assignment volume and relevant expertise to balance workload with the needs of the inquiry.",
          ],
          order: 3,
        },
        {
          type: "text",
          heading: "AI-Assisted Classification and Scoring",
          paragraphs: [
            "Each eligible team member receives a base score calculated from their assignments under the triggered rule over a configurable lookback period, set to seven days for this implementation.",
            "The OpenAI API classifies the inquiry against a predefined list of topics. The engine compares that topic with each member's recorded expertise and adjusts matching members' scores to give them preference.",
            "The member with the lowest adjusted score receives the assignment. This approach weighs both recent assignment volume and relevant expertise, rather than relying on a fixed rotation.",
          ],
          order: 4,
        },
        {
          type: "text",
          heading: "The Outcome",
          paragraphs: [
            "The service centralizes assignment decisions across client intake forms, toll-free voicemail inquiries, and AI agent handoffs. Once an owner is selected, it creates a CRM task and notifies the assigned team member.",
            "Automating these steps reduces manual routing, accounts for staff availability, and helps distribute inquiries while preserving existing customer relationships.",
          ],
          order: 5,
        },
      ],
    },
  },
  {
    id: "6",
    title: "AI Customer Service Agent",
    slug: "ai-customer-service-agent",
    type: "work",
    timelineId: "1",
    focus: ["API integrations", "workflow automation", "software design"],
    shortDescription:
      "Built an AI agent that triages incoming inquiries, gathers context through sending emails, and routes requests requiring human attention to staff, reducing response times from 1-2 business days to 20 minutes.",
    year: "2024",
    technology: {
      environment: "Zoho Platform",
      languages: ["Deluge"],
      apis: ["Zoho CRM API", "OpenAI API"],
      libraries: [],
      integrations: ["Zoho CRM", "Zoho Flow", "Zoho Forms"],
    },
    thumbnail: PlaceholderBannerImage,
    urls: null,
    article: {
      bannerImage: PlaceholderBannerImage,
      fullDescription:
        "Developed an AI customer service agent to handle initial inquiries and reduce time spent manually responding to unqualified leads. The agent classifies each inquiry, requests additional information when appropriate, and routes requests requiring human attention to staff. With more than 200 inquiries handled by AI each month on average, the system frees staff to focus on direct customer support while reducing average response times from 1-2 business days to 20 minutes.",
      content: [
        {
          type: "text",
          heading: "The Challenge",
          paragraphs: [
            "Staff regularly spent hours responding to new inquiries, including prospective customers who stopped replying after receiving detailed assistance. This made it difficult to focus time on customers who needed and were ready for support.",
            "The business needed a way to assess incoming inquiries, gather useful context, and provide timely responses before committing substantial staff time.",
          ],
          order: 1,
        },
        {
          type: "text",
          heading: "Designing the Triage Workflow",
          paragraphs: [
            "The agent classifies each incoming inquiry into one of three categories: reassign, respond, or reject. Each category triggers a specific next step, creating a consistent process for handling new requests.",
            "Inquiries requiring human judgment are routed to staff. Those needing more context receive an AI-generated email reply, while inquiries identified as spam are filtered out without a response.",
          ],
          order: 2,
        },
        {
          type: "text",
          heading: "Gathering Context Automatically",
          paragraphs: [
            "For inquiries categorized as respond, an AI agent drafts an email asking for the additional information needed to understand the customer's request.",
            "This initial exchange helps establish whether the customer is willing to continue the conversation. If they reply, staff have more context to work with; if they do not, the business has provided an initial response without investing hours of manual effort.",
          ],
          order: 3,
        },
        {
          type: "text",
          heading: "Keeping Human Support Accessible",
          paragraphs: [
            "The reassign category directs inquiries that require personal assistance to staff, allowing the team to focus on requests where their involvement adds the most value.",
            "Automated replies use a configured 20-minute sending delay. This brought average response times down from 1-2 business days to 20 minutes, giving prospective customers a faster start to the conversation.",
          ],
          order: 4,
        },
        {
          type: "text",
          heading: "The Outcome",
          paragraphs: [
            "The agent now handles more than 200 inquiries per month on average, reducing the volume of initial responses staff need to write manually.",
            "By automating triage, filtering spam, and gathering context before staff become involved, the system frees up time for more meaningful conversations and direct customer support.",
          ],
          order: 5,
        },
      ],
    },
  },
  {
    id: "7",
    title: "Client Services Insights Dashboard",
    slug: "client-services-insights-dashboard",
    type: "work",
    timelineId: "1",
    focus: ["data integration", "data visualization"],
    shortDescription:
      "Built a centralized KPI dashboard that transforms third-party data into reporting views, giving the organization a consolidated picture of client services performance.",
    year: "2023",
    technology: {
      environment: "Zoho Platform",
      languages: ["SQL"],
      apis: [],
      libraries: [],
      integrations: ["Zoho Analytics"],
    },
    thumbnail: PlaceholderBannerImage,
    urls: null,
    article: {
      bannerImage: PlaceholderBannerImage,
      fullDescription:
        "Designed a comprehensive dashboard in Zoho Analytics to track organizational KPIs and support client services reporting. Built data pipelines to bring third-party data into the platform, cleaned and prepared it for analysis, and developed SQL queries to combine related tables into reporting datasets tailored to the organization’s needs.",
      content: [
        {
          type: "text",
          heading: "The Reporting Need",
          paragraphs: [
            "The organization needed a consolidated view of its key performance indicators. Building that view required bringing third-party data together and shaping it around specific reporting requirements.",
            "The dashboard needed to connect related records across multiple tables so that reports could provide meaningful context beyond individual data sources.",
          ],
          order: 1,
        },
        {
          type: "text",
          heading: "Building the Data Pipelines",
          paragraphs: [
            "Created data pipelines to bring third-party data into Zoho Analytics, establishing a central foundation for dashboard reporting.",
            "Cleaned and processed the imported data to prepare it for analysis and integration with related datasets.",
          ],
          order: 2,
        },
        {
          type: "text",
          heading: "Developing Custom SQL Reports",
          paragraphs: [
            "Used SQL to join related tables and build datasets around the organization’s custom reporting requirements.",
            "These queries connected information across sources, providing the structure needed to calculate and present KPIs within the dashboard.",
          ],
          order: 3,
        },
        {
          type: "text",
          heading: "Designing the Dashboard",
          paragraphs: [
            "Organized the reporting datasets into a comprehensive dashboard in Zoho Analytics, bringing organizational KPIs into a single view.",
            "The dashboard translated the underlying data into visual reports that made client services performance easier to review and interpret.",
          ],
          order: 4,
        },
        {
          type: "text",
          heading: "The Outcome",
          paragraphs: [
            "Delivered a centralized reporting dashboard supported by third-party data pipelines, data preparation, and custom SQL queries.",
            "The result gave the organization a consolidated view of its KPIs and a foundation for reporting tailored to its operational needs.",
          ],
          order: 5,
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
    description:
      "Integrate and managing data pipelines, reporting, and backend processes including workflow automations.",
    startDate: "2022-10-02",
    endDate: null,
    type: "work",
    company: "Business Link Alberta",
  },
  {
    id: "2",
    title: "Business Support Officer",
    description:
      "Served as the first point of contact for client inquiries, assisting with CRM systems, data management, and business processes.",
    startDate: "2021-05-12",
    endDate: "2022-10-02",
    type: "work",
    company: "Business Link Alberta",
  },
  {
    id: "3",
    title: "Full-Stack Engineer Career Path",
    description:
      "Built full-stack web applications using front-end technologies, back-end services, and client-server integration.",
    startDate: "2023-09-14",
    endDate: "2024-06-17",
    type: "education",
    institution: "Codecademy",
    about: "Professional Development",
    outcome: "Certificate",
  },
  {
    id: "4",
    title: "Data Scientist - Analytics Specialist",
    description:
      "Applied data analytics, statistics, probability, and visualization to support informed decision-making.",
    startDate: "2022-12-22",
    endDate: "2023-04-23",
    type: "education",
    institution: "Codecademy",
    about: "Professional Development",
    outcome: "Certificate",
  },
  /*https://www.sait.ca/continuing-education/courses-and-certificates/courses/project-management-essentials */
  {
    id: "5",
    title: "Project Management Essentials",
    description:
      "Learned to initiate, plan, execute, and close projects through effective leadership and communication.",
    startDate: "2022-10-20",
    endDate: "2023-01-08",
    type: "education",
    institution: "Southern Alberta Institute of Technology",
    about: "Professional Development",
    outcome: "Micro-Credential",
  },
  {
    id: "6",
    title: "Pure Fibre Technical Support",
    description:
      "Diagnosed and troubleshot a variety of internet-related issues virtually and in real time.",
    startDate: "2019-03-02",
    endDate: "2021-05-11",
    type: "work",
    company: "Telus",
  },
  {
    id: "7",
    title: "Bachelor of Business Administration - Economics",
    description:
      "Earned a Bachelor of Business Administration with a major in Economics from Thompson Rivers University.",
    startDate: "2013-09-03",
    endDate: "2018-04-28",
    type: "education",
    institution: "Thompson Rivers University",
    about: "Post Secondary",
    outcome: "Bachelor of Business Administration - Economics",
  },
  {
    id: "9",
    title: "Evolve Workout Tracker",
    description:
      "Developed an iOS app for tracking workouts and monitoring fitness progress.",
    startDate: "2023-11-02",
    endDate: "2025-03-20",
    type: "project",
    projectId: "2",
    platform: "iOS Mobile App",
  },
];

/* 
export const TIMELINE: TimelineItemProperties[] = [
  
  
  {
    date: "2016-03-12",
    title: "Undergraduate Research Conference - Presenter",
    description:
      "Represented TRU's School of Business by presenting economic research on Russia's macroeconomic history, for an audience of students and professors.",
    details: {
      type: "Education",
      endDate: null,
    },
  },
];

*/
