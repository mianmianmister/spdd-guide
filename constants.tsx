import { SapModule, Disruption, ValueChainStep, Supplier, Strategy, SevenDItem } from './types';
import { 
  Package, Settings, Shield, Users, CheckCircle, TrendingUp, 
  Truck, Factory, Megaphone, Wrench, AlertTriangle, Zap, Flame,
  Target, Globe, Database, Briefcase, Cpu, ShoppingCart
} from 'lucide-react';
import React from 'react';

// --- Strategies ---
export const STRATEGIES: Strategy[] = [
  {
    title: "Initial Strategy: Differentiation Focus",
    description: "Targeting a specific niche (smart city initiatives) with a unique product.",
    type: 'initial'
  },
  {
    title: "Future Strategy: Broad Differentiation",
    description: "After establishing a base, the focus will shift to better customer service, product robustness, and enhanced features to compete in a broader market.",
    type: 'future'
  }
];

// --- SAP Modules ---
export const SAP_MODULES: SapModule[] = [
  {
    id: 'im',
    name: 'Inventory Management',
    icon: '📦',
    color: 'bg-blue-500',
    description: 'Manages warehouse and inventory operations',
    benefits: ['Real-time tracking', '15-20% cost reduction', 'Quality control', 'Auto reordering'],
    application: 'Tracks solar panels, sensors, steel, batteries and maintains optimal stock levels'
  },
  {
    id: 'pp',
    name: 'Production Planning',
    icon: '⚙️',
    color: 'bg-green-500',
    description: 'Plans and controls manufacturing processes',
    benefits: ['Optimizes capacity', '25-30% faster production', 'On-time delivery', 'Minimal WIP'],
    application: 'Plans SPDD manufacturing schedules and coordinates assembly operations'
  },
  {
    id: 'pm',
    name: 'Plant Maintenance',
    icon: '🛡️',
    color: 'bg-purple-500',
    description: 'Manages maintenance of installed SPDDs',
    benefits: ['30-40% longer lifespan', 'Reduced downtime', 'Better satisfaction', 'Optimized costs'],
    application: 'Creates logbooks, schedules maintenance, tracks installed bin performance'
  },
  {
    id: 'crm',
    name: 'CRM',
    icon: '👥',
    color: 'bg-pink-500',
    description: 'Manages customer relationships',
    benefits: ['27% better retention', 'Faster response', '360° view', 'Cross-selling'],
    application: 'Manages municipality relationships, service requests, and customer feedback'
  },
  {
    id: 'qm',
    name: 'Quality Management',
    icon: '✓',
    color: 'bg-yellow-500',
    description: 'Ensures product quality standards',
    benefits: ['40-50% fewer defects', 'Compliance', 'Less rework', 'Brand protection'],
    application: 'Implements quality control at raw material, assembly, and installation stages'
  },
  {
    id: 'scm',
    name: 'Supply Chain',
    icon: '📈',
    color: 'bg-indigo-500',
    description: 'Optimizes entire supply chain',
    benefits: ['15-20% cost reduction', '98%+ accuracy', 'Lower inventory', 'Full visibility'],
    application: 'Optimizes delivery routes, forecasts demand, coordinates with suppliers'
  }
];

// --- Disruptions ---
export const DISRUPTIVE_EVENTS: Disruption[] = [
  {
    id: 'low',
    level: 'Low Intensity',
    title: 'Supplier/Vendor Concern',
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    icon: '⚠️',
    description: 'Supplier turndown or raw material procurement issues',
    solution: 'Multiple suppliers, advance stocking, McKinsey 7-S Framework evaluation',
    sapTools: ['SAP SRM', 'SAP Inventory Management'],
    impact: 'Minimal - backup systems in place'
  },
  {
    id: 'medium',
    level: 'Medium Intensity',
    title: 'Staffing Issues',
    color: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-800',
    icon: '⚡',
    description: 'Worker shortage or improper hiring affecting production',
    solution: 'Background checks, training programs, employee satisfaction monitoring',
    sapTools: ['SAP HR/HCM', 'SAP Solution Manager'],
    impact: 'Moderate - requires HR intervention'
  },
  {
    id: 'high',
    level: 'High Intensity',
    title: 'Quality Problems',
    color: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    icon: '🔥',
    description: 'SPDD malfunction or quality defects after installation',
    solution: 'Multi-stage testing, quality control flow, predictive analytics with SPSS',
    sapTools: ['SAP QM', 'SAP PM', 'SAP CRM', 'Machine Learning'],
    impact: 'Critical - threatens brand reputation and business survival'
  }
];

// --- Value Chain ---
export const SUPPORTING_ACTIVITIES: ValueChainStep[] = [
  {
    id: 'infra',
    name: 'Firm Infrastructure',
    icon: '🏢',
    description: 'Establishing clear goals, strategy, and mission.',
  },
  {
    id: 'hrm',
    name: 'Human Resource Mgmt',
    icon: '👥',
    description: 'Hiring the right people with the right skills.',
  },
  {
    id: 'tech',
    name: 'Technology Development',
    icon: '💻',
    description: 'Handling R&D, design, and technological updates.',
  },
  {
    id: 'procurement',
    name: 'Procurement',
    icon: '🛒',
    description: 'Phased purchasing of raw materials to avoid warehousing costs.',
  }
];

export const PRIMARY_ACTIVITIES: ValueChainStep[] = [
  {
    id: 'inbound',
    name: 'Inbound Logistics',
    icon: '📦',
    description: 'Raw material procurement and quality testing',
    components: ['Solar panels/batteries (Tata Power)', 'Sensors (Keyence)', 'Steel & Compaction (Jindal)', 'Wheelie Bins'],
    sap: ['SAP IM', 'SAP QM']
  },
  {
    id: 'operations',
    name: 'Operations',
    icon: '⚙️',
    description: 'Manufacturing and testing of SPDD',
    components: ['Assembly of SPDD', 'Testing Final Products'],
    sap: ['SAP PP', 'SAP QM']
  },
  {
    id: 'outbound',
    name: 'Outbound Logistics',
    icon: '🚚',
    description: 'Direct delivery and installation',
    components: ['Company Drivers', 'Direct Delivery', 'Proper Installation', 'No Third Parties'],
    sap: ['SAP SCM', 'SAP SD']
  },
  {
    id: 'marketing',
    name: 'Marketing & Sales',
    icon: '📢',
    description: 'Product promotion and sales',
    components: ['Advertising Sustainability'],
    sap: ['SAP CRM', 'SAP SD']
  },
  {
    id: 'service',
    name: 'Service',
    icon: '🛠️',
    description: 'Customer support and maintenance',
    components: ['Customer Care Team', 'Quick Response', 'Warranty', 'Product Replacement'],
    sap: ['SAP PM', 'SAP CRM']
  }
];

// --- 7 Ds ---
export const SEVEN_DS: SevenDItem[] = [
  { title: "Digitized", description: "SPDD sensors convert analog data to digital for processing." },
  { title: "Deceptive", description: "Small initial changes will have a massive future impact (e.g., using 3D printing for manufacturing)." },
  { title: "Disruption", description: "Using disruptive tech like 3D printing and Machine Learning to lead the market." },
  { title: "Dematerialize", description: "Reducing physical waste and moving towards digital efficiency." },
  { title: "Demonetize", description: "Technology will drive down costs over time." },
  { title: "Democratize", description: "Making the technology available to all customer types, not just government." }
];

// --- Suppliers ---
export const SUPPLIERS: Supplier[] = [
  { name: 'Solar Panel & Battery', supplier: 'Tata Power/Solar Systems Ltd.', spec: '50W - Better rate if bought together' },
  { name: 'Sensors', supplier: 'Keyence/Omega', spec: 'Load level monitoring' },
  { name: 'Steel & Compaction Unit', supplier: 'Jindal Stainless', spec: 'Superior durability - Leading Manufacturer' },
  { name: 'Wheelie Bins', supplier: 'Green-revolution', spec: 'Partner company' },
  { name: 'LED, Rasberry, GSM', supplier: 'Arihantledlights', spec: 'Wireless communication' }
];

export const TEAM_MEMBERS = "Submitted by Fatima Nadeem (02), Mian Muhammad Hassnain (153), Amna Nadeem (20), Fatina Fayyaz (52), Hiba Yasir (10)";
