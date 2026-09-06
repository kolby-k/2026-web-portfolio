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

// detailed view of project
// - all properties to render article page
export interface ActivityArticle extends Activity {
  bannerImage: string;
  fullDescription: string;
  urls: ActivityURL[] | null;
  content: ArticleContent[];
}

// simple view of project
// - common properties among all types of activity
export interface Activity {
  id: string;
  title: string;
  slug: string; // internal url of project article
  type: ActivityType;
  focus: ActivityFocusType[];
  shortDescription: string; // under 20 words.
  technology?: Technologies;
}

// list of items to render on a timleline
export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string | null;
}
// specific roles worked in the past (e.g. data analyst, tech support)
export interface Role extends TimelineItem {
  company: string;
}

export interface Education extends TimelineItem {
  institution:
    | "Thompson Rivers University"
    | "Codecademy"
    | "Southern Alberta Institute of Technology";
  type: "Post Secondary" | "Professional Development";
  outcome:
    | "Bachelor of Business Administration - Economics"
    | "Certificate"
    | null;
}

// hyperlink to a projects source code, project url, etc.
export type ActivityURL = {
  url: string;
  type: "github" | "app store" | "project root";
};

export type Technologies = {
  environment?: Environment;
  languages?: Languages[];
  apis?: APIOptions[];
  libraries?: Libraries[];
  tools?: Tools[];
  database?: Database;
};

// 'projects' I want to showcase grouped by a common type
export type ActivityType =
  | "work case study"
  | "deployed project"
  | "hobby project";

export type ActivityFocusType =
  | "backend development"
  | "frontend development"
  | "workflow automations"
  | "integrations"
  | "software design"
  | "data preprocessing"
  | "data integrity";
export type APIOptions =
  | "Microsoft"
  | "OpenAI"
  | "Zoho"
  | "RingCentral"
  | "openMateo"
  | "DOM api's";
export type Languages = "Javascript" | "Typescript" | "SQL" | "Deluge";
export type Environment = "Node.js" | "Zoho Platform";
export type Tools =
  | "Microsoft Excel"
  | "Zoho CRM"
  | "Zoho Flow"
  | "Zoho Catalyst"
  | "Zoho Forms"
  | "Expo";
export type Libraries =
  | "Redux Toolkit"
  | "Apple Storekit"
  | "msal/node"
  | "Jest"
  | "Supertest"
  | "RingCentral SDK";
export type Database = "PostgreSQL" | "Redis" | "Zoho Datastore";

// // represents a real world case study / project from my work
// export interface WorkActivity extends Activity {
//   roleId: string;
// }
// // production apps deployed in the past (e.g. Evolve workout tracker)
// export interface DeployedProject extends Activity {
//   longDescription: string;
//   urls: ActivityURL[];
// }
// // not serious projects, more for fun and practice
// export interface HobbyProject extends Activity {
//   projectId: string;
// }
