export interface SapModule {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  benefits: string[];
  application: string;
}

export interface Disruption {
  id: string;
  level: string;
  title: string;
  color: string;
  borderColor: string;
  textColor: string;
  icon: string;
  description: string;
  solution: string;
  sapTools: string[];
  impact: string;
}

export interface ValueChainStep {
  id: string;
  name: string;
  icon: string;
  description: string;
  components?: string[];
  sap?: string[];
  details?: string[];
}

export interface Supplier {
  name: string;
  supplier: string;
  spec: string;
}

export interface Strategy {
  title: string;
  description: string;
  type: 'initial' | 'future';
}

export interface SevenDItem {
  title: string;
  description: string;
}

export type TabId = 'overview' | 'sap' | 'valuechain' | 'disruptions';