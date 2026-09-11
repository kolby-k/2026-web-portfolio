// simple view of project
// - common properties among all types of activity
type ActivityBase = {
  id: string;
  title: string;
  slug: string; // internal url of project article
  focus: ActivityFocusType[];
  shortDescription: string; // under 20 words.
  year: string;
  technology?: Technologies;
  article: {
    bannerImage: string;
    fullDescription: string;
    urls: ActivityURL[] | null;
    content: ArticleContent[];
  };
};

// Activities are 'projects' I want to showcase grouped by a type
export type ActivityWork = ActivityBase & {
  type: "work";
  roleId: string;
};
export type ActivityDeployed = ActivityBase & {
  type: "deployed";
  longDescription: string;
  urls: ActivityURL[];
};
export type ActivityHobby = ActivityBase & {
  type: "hobby";
  longDescription: string;
};
export type ActivityItem = ActivityWork | ActivityDeployed | ActivityHobby;
// remove 'article' to keep lightweight list of items for timeline rendering
type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

export type ActivityItemSimple = DistributiveOmit<ActivityItem, "article">;

export type ActivityType = ActivityItemSimple["type"];

// each activity article ultimatlet renders text/images
// by sorting and then looping through content array
export type ArticleContent =
  | {
      type: "text";
      heading: string; // e.g. 'Motivation for X'
      paragraphs: string[]; // e.g. ["i wanted to do x because y", "the final outcome ..."]
      order: number; // article sorts before rendering based on this order
    }
  | {
      type: "image";
      image: string;
      order: number; // article sorts before rendering based on this order
      imageTitle?: string;
      imageDescription?: string;
    };

type TimelineItemBase = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
};
export type TimelineItemWork = TimelineItemBase & {
  type: "work";
  company: string;
};
export type TimelineItemEducation = TimelineItemBase & {
  type: "education";
  institution:
    | "Thompson Rivers University"
    | "Codecademy"
    | "Southern Alberta Institute of Technology";
  about: "Post Secondary" | "Professional Development";
  outcome:
    | "Bachelor of Business Administration - Economics"
    | "Certificate"
    | null;
};

// list of items to render on a timleline
export type TimelineItem = TimelineItemWork | TimelineItemEducation;

// hyperlink to a projects source code, project url, etc.
export type ActivityURL = {
  url: string;
  type: "github" | "app store" | "project";
};

export type Technologies = {
  environment?: Environment;
  languages?: Languages[];
  apis?: API[];
  libraries?: Libraries[];
  tools?: Tools[];
  database?: Database;
};
export type ActivityFocusType =
  | "backend development"
  | "frontend development"
  | "workflow automation"
  | "API integrations"
  | "software design"
  | "data processing"
  | "data integrity";

export type API =
  | "Microsoft Graph API"
  | "OpenAI API"
  | "Zoho CRM API"
  | "RingCentral API"
  | "Open-Meteo API"
  | "DOM API";
export type Languages = "JavaScript" | "TypeScript" | "SQL" | "Deluge";
export type Environment = "Node.js" | "Zoho Platform";
export type Tools =
  | "Microsoft Excel"
  | "Zoho CRM"
  | "Zoho Flow"
  | "Zoho Catalyst"
  | "Zoho Forms"
  | "Expo"
  | "Google Oauth";
export type Libraries =
  | "Redux Toolkit"
  | "Apple Storekit"
  | "@azure/msal-node"
  | "Jest"
  | "Supertest"
  | "RingCentral SDK"
  | "Next.js"
  | "React"
  | "React Native";
export type Database = "PostgreSQL" | "Redis" | "Zoho Catalyst Data Store";
