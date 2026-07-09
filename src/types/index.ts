import type { ReactNode } from "react";

export type ThemeMode = "light" | "dark";
export type WorkflowType = "advanced" | "standard";

export type CampaignStepId = "audience" | "senders" | "settings" | "stats";

export type ImportMethodId = "linkedin" | "csv" | "lookalike" | "webhook";

export type AudienceView = "import" | "map-properties";

export type AccordionStatus = "complete" | "active" | "pending";

export interface NavItem {
  id: string;
  label: string;
  icon: ReactNode;
  href: string;
}

export interface StepItem {
  id: string;
  label: string;
  icon: ReactNode;
}

export interface WorkflowOption {
  id: WorkflowType;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface FieldMapping {
  id: string;
  contactField: string;
  csvColumn: string;
  count: number;
  icon: ReactNode;
}

export interface UnmappedField {
  id: string;
  label: string;
  count: number;
}

export interface LookalikeList {
  id: string;
  name: string;
  userCount: string;
}
