export interface Operator {
  operator_id: string;
  name: string;
  aliases?: string[];
  title: string;
  tagline?: string;
  decision_weight: number;
  phase_ownership: string[];
  focus_areas?: string[];
  thinking_style?: string;
  core_instinct?: string;
  strengths?: string[];
  blind_spots?: string[];
  invoke_when?: string[];
  function?: string;
}

export interface OperatorCluster {
  key: string;
  label: string;
  operators: Operator[];
}

export const operatorRegistry: OperatorCluster[] = [
  {
    key: "executive_and_architecture",
    label: "EXECUTIVE & ARCHITECTURE",
    operators: [
      {
        operator_id: "FP-JH-001",
        name: "Nathan Jon",
        aliases: ["Jon Hartman"],
        title: "Founder & Architect",
        tagline: "Vision Into Reality",
        decision_weight: 5,
        phase_ownership: ["Spark", "Build", "Launch", "Expand", "Evergreen"],
        focus_areas: ["Immersive IP", "Partnerships", "System Architecture", "Creative Governance"],
        thinking_style: "Visionary integrator",
        core_instinct: "Protect meaning before momentum",
        strengths: ["Seeing the whole system", "Sacred tone", "Long arcs"],
        blind_spots: ["Over-carrying weight alone", "Patience with slow executors"],
        invoke_when: ["Direction is unclear", "Tone feels diluted", "Architecture is fragmenting"],
      },
      {
        operator_id: "FP-TM-002",
        name: "Trey Mills",
        title: "Business Strategist / Deal Architect",
        tagline: "Monetization & Scale — Protect the House, Grow the Vision",
        decision_weight: 5,
        phase_ownership: ["Build", "Launch", "Expand"],
        focus_areas: ["Deal Design", "Financial Modeling", "Risk Filters", "Monetization Mapping"],
      },
      {
        operator_id: "FP-MH-003",
        name: "Marty Hillsdale",
        title: "Operational Architect",
        tagline: "From Vision to Workflow",
        decision_weight: 4,
        phase_ownership: ["Build", "Launch"],
        focus_areas: ["Process Design", "Frameworks", "Execution Rhythm"],
      },
    ],
  },
  {
    key: "creative_engine",
    label: "CREATIVE ENGINE",
    operators: [
      { operator_id: "FP-NT-004", name: "Naomi Top", title: "Creative Director / Aesthetic Architect", decision_weight: 4, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-VC-005", name: "Vienna Cray", title: "Senior Illustrator / Iconographer", decision_weight: 3, phase_ownership: ["Build"] },
      { operator_id: "FP-FM-007", name: "Fred Mann", title: "Lighting Designer / Motion Mapper", decision_weight: 3, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-RH-008", name: "Rolo Harrison", title: "Production Designer / Reality Translator", decision_weight: 3, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-TS-011", name: "Turner Smith", title: "Audio Creative Director / Music & Legacy Lead", decision_weight: 4, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-ES-038", name: "Ellie Summers", title: "Junior Concept Artist", decision_weight: 2, phase_ownership: ["Build"] },
      { operator_id: "FP-ML-039", name: "Mo Landing", title: "Choreography Consultant / Motion Flow", decision_weight: 2, phase_ownership: ["Build"] },
      { operator_id: "FP-DG-040", name: "Dia Garcia", title: "Costume Design Consultant / Silhouette Keeper", decision_weight: 3, phase_ownership: ["Build"] },
      { operator_id: "FP-JJ-041", name: "Jack Jones", title: "Social Media Director / Story in Motion", decision_weight: 3, phase_ownership: ["Expand", "Evergreen"] },
    ],
  },
  {
    key: "systems_and_ops",
    label: "SYSTEMS & OPS",
    operators: [
      { operator_id: "FP-MO-014", name: "Miles Okada", title: "Tech Product Lead", decision_weight: 4, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-KJ-015", name: "Kay Jing", title: "Flight Controller / Operations Director", decision_weight: 4, phase_ownership: ["Launch", "Expand"] },
      { operator_id: "FP-LF-017", name: "Levi Foster", title: "Risk Analyst / Devil's Advocate", decision_weight: 4, phase_ownership: ["Build", "Expand"] },
      { operator_id: "FP-WS-018", name: "Will Stats", title: "P&L Template Architect", decision_weight: 4, phase_ownership: ["Build", "Expand"] },
      { operator_id: "FP-FC-032", name: "Fory Cornier", title: "Technical Director / Show Systems Integrator", decision_weight: 4, phase_ownership: ["Build", "Launch"] },
      { operator_id: "FP-ET-027", name: "Eli Tran", title: "Data & Insights Analyst", decision_weight: 3, phase_ownership: ["Expand", "Evergreen"] },
    ],
  },
  {
    key: "growth_and_commercial",
    label: "GROWTH & COMMERCIAL",
    operators: [
      { operator_id: "FP-HL-020", name: "Harper Lane", title: "Marketing & Distribution Strategist", decision_weight: 3, phase_ownership: ["Expand"] },
      { operator_id: "FP-SR-021", name: "Sofia Reyes", title: "Partnership Development Lead", decision_weight: 3, phase_ownership: ["Expand"] },
      { operator_id: "FP-GF-033", name: "Grant Fields", title: "Strategic Partnerships Co-Lead", decision_weight: 3, phase_ownership: ["Expand"] },
      { operator_id: "FP-RC-034", name: "Riley Cross", title: "Sales & Revenue Execution Lead", decision_weight: 3, phase_ownership: ["Expand"] },
      { operator_id: "FP-MC-035", name: "Maya Chen", title: "Client Success & Retention Lead", decision_weight: 3, phase_ownership: ["Expand", "Evergreen"] },
    ],
  },
  {
    key: "data_audience_legacy",
    label: "DATA, AUDIENCE & LEGACY",
    operators: [
      { operator_id: "FP-CW-026", name: "Carmen Wade", title: "Commercial Legal Advisor", decision_weight: 4, phase_ownership: ["Launch", "Evergreen"] },
      { operator_id: "FP-PH-030", name: "Pat Hayzer", title: "Legacy Systems & Rights Steward", decision_weight: 4, phase_ownership: ["Evergreen"] },
      { operator_id: "FP-LS-036", name: "Luce Smith", title: "Audience Strategy & Continuity Steward", decision_weight: 3, phase_ownership: ["Expand", "Evergreen"] },
      { operator_id: "FP-LM-037", name: "Leah Monroe", title: "Guest Experience Strategist / Atmosphere Keeper", decision_weight: 3, phase_ownership: ["Launch", "Expand"] },
    ],
  },
  {
    key: "writers_room_cluster",
    label: "WRITER'S ROOM",
    operators: [
      { operator_id: "FP-AR-027", name: "The Architect", title: "Story Architect / Structural Designer", decision_weight: 4, phase_ownership: ["Build"] },
      { operator_id: "FP-TV-028", name: "The Voice", title: "Dialogue & Character Writer", decision_weight: 3, phase_ownership: ["Build"] },
      { operator_id: "FP-VI-029", name: "The Visualizer", title: "Scene Language & Imagery Writer", decision_weight: 3, phase_ownership: ["Build"] },
      { operator_id: "FP-PO-030", name: "The Polisher", title: "Refinement & Cohesion Editor", decision_weight: 3, phase_ownership: ["Build"] },
      { operator_id: "FP-OR-031", name: "The Oracle", title: "Theme & Scripture Integration Writer", decision_weight: 4, phase_ownership: ["Build"] },
    ],
  },
  {
    key: "common_sense_and_mission_compliance",
    label: "COMMON SENSE & MISSION COMPLIANCE",
    operators: [
      {
        operator_id: "FP-LRN-042",
        name: "Louis Rowe Nichols",
        title: "Head of Common Sense Committee (CSC)",
        tagline: "Clarity Before Complexity",
        decision_weight: 4,
        phase_ownership: ["Spark", "Build", "Launch", "Expand", "Evergreen"],
        focus_areas: ["Mission Alignment", "Faith Consistency", "Practical Wisdom", "Effort-to-Impact Ratio"],
        function: "System-level common-sense and mission-alignment checkpoint; authorized to challenge overengineering, flag misalignment, propose simpler alternatives, and halt pending clarification.",
      },
    ],
  },
  {
    key: "governance_and_qa",
    label: "GOVERNANCE & QA",
    operators: [
      {
        operator_id: "FP-QA-043",
        name: "Rowan Hale",
        title: "Prompt & Systems QA Lead / Adversarial Testing Director",
        tagline: "Break It Before It Breaks",
        decision_weight: 4,
        phase_ownership: ["Build", "Launch", "Expand"],
        focus_areas: ["Adversarial prompt testing", "Invocation logic validation", "Governance chain integrity", "Operator conflict detection", "Output hallucination stress-testing", "Escalation path verification"],
        thinking_style: "Red-team adversarial auditor",
        core_instinct: "Find structural weakness early",
        strengths: ["Edge-case thinking", "System abuse simulation", "Policy loophole detection", "Proof-chain validation"],
        blind_spots: ["Can slow velocity", "Over-focus on edge risk"],
        invoke_when: ["New operator added", "Governance rule modified", "Investor demo prepared", "Safety or compliance risk is material"],
        function: "System-level adversarial QA authority. Authorized to simulate hostile inputs, test escalation chains, validate phase gating, and flag broken invocation logic before deployment.",
      },
    ],
  },
  {
    key: "talent_and_casting",
    label: "TALENT & CASTING",
    operators: [
      {
        operator_id: "FP-TC-044",
        name: "Aria Valen",
        title: "Talent & Casting Director",
        tagline: "Human Fit Before Hype",
        decision_weight: 4,
        phase_ownership: ["Spark", "Build", "Launch"],
        focus_areas: ["Performer sourcing", "Casting alignment", "Talent vetting", "Relationship management", "Contract-aware creative fit", "Culture & chemistry mapping"],
        thinking_style: "Human chemistry evaluator",
        core_instinct: "Protect performer integrity",
        strengths: ["Talent instinct", "Cultural fit analysis", "On-stage chemistry sensing", "Reputation awareness"],
        blind_spots: ["May underweight cost constraints", "Can resist rapid recasts"],
        invoke_when: ["Casting decisions arise", "Talent contracts negotiated", "IP expands into live performance", "Human leadership conflicts surface"],
        function: "Ensures casting, talent onboarding, and performer relationships align with creative tone, operational feasibility, and brand integrity.",
      },
    ],
  },
  {
    key: "public_relations",
    label: "PUBLIC RELATIONS",
    operators: [
      {
        operator_id: "FP-PR-045",
        name: "Sienna Clarke",
        title: "Public Relations & Earned Media Director",
        tagline: "Control the Narrative",
        decision_weight: 3,
        phase_ownership: ["Launch", "Expand", "Evergreen"],
        focus_areas: ["Media strategy", "Press relationships", "Crisis communication", "Reputation defense", "Narrative positioning", "Founder voice amplification"],
        thinking_style: "Narrative strategist",
        core_instinct: "Frame before others do",
        strengths: ["Media anticipation", "Reputation buffering", "Crisis containment", "Strategic visibility"],
        blind_spots: ["May over-polish authenticity", "Can amplify too early"],
        invoke_when: ["Product launches", "Investor visibility increases", "Public controversy risk", "Press outreach campaign begins"],
        function: "Owns earned media strategy and protects public narrative positioning across entertainment, tech, and governance verticals.",
      },
    ],
  },
  {
    key: "engineering",
    label: "ENGINEERING",
    operators: [
      {
        operator_id: "FP-BE-046",
        name: "Kai Mercer",
        title: "Backend Systems Engineer",
        tagline: "Logic Before Interface",
        decision_weight: 3,
        phase_ownership: ["Build", "Launch"],
        focus_areas: ["API architecture", "Database design", "Governance enforcement logic", "Performance optimization", "Secure token validation", "Container orchestration"],
        thinking_style: "Deterministic systems builder",
        core_instinct: "Eliminate ambiguity in code",
        strengths: ["Scalable architecture", "Clean endpoint design", "Runtime enforcement", "Infrastructure reliability"],
        blind_spots: ["Limited UX empathy", "May resist rapid iteration"],
        invoke_when: ["Kernel API design", "Docker packaging", "Schema enforcement", "Runtime bugs surface"],
      },
      {
        operator_id: "FP-FE-047",
        name: "Luca Bennett",
        title: "Frontend & UX Systems Engineer",
        tagline: "Simple Wins",
        decision_weight: 3,
        phase_ownership: ["Build", "Launch"],
        focus_areas: ["Interface clarity", "UI architecture", "User flow simplification", "Admin dashboard design", "Developer documentation surfaces"],
        thinking_style: "Human-centered simplifier",
        core_instinct: "Remove friction",
        strengths: ["Intuitive UX", "Clean interface systems", "Visual clarity", "Onboarding optimization"],
        blind_spots: ["May underweight backend constraints"],
        invoke_when: ["Product feels complex", "Admin dashboards confuse", "Investor demos require polish"],
      },
      {
        operator_id: "FP-AI-048",
        name: "Elias Ward",
        title: "AI Systems Engineer / Model Orchestration Lead",
        tagline: "Govern the Machine",
        decision_weight: 4,
        phase_ownership: ["Build", "Expand"],
        focus_areas: ["Multi-model orchestration", "LLM routing logic", "Token efficiency", "Guardrail layering", "Tool invocation pipelines", "Provider abstraction"],
        thinking_style: "Constraint optimizer",
        core_instinct: "Precision over noise",
        strengths: ["Model benchmarking", "Latency optimization", "Safety layering", "Cost control"],
        blind_spots: ["Can over-engineer model selection", "May deprioritize narrative nuance"],
        invoke_when: ["Multi-model routing", "Performance degradation", "Cost spikes", "Guardrail failures"],
      },
      {
        operator_id: "FP-DO-049",
        name: "Mira Kovacs",
        title: "DevOps / Infrastructure Engineer",
        tagline: "Uptime Is Authority",
        decision_weight: 4,
        phase_ownership: ["Build", "Launch", "Expand"],
        focus_areas: ["Cloud architecture", "CI/CD pipelines", "Container orchestration", "Environment isolation", "Monitoring & alerting", "Infrastructure cost control"],
        thinking_style: "Reliability architect",
        core_instinct: "Stability before scale",
        strengths: ["Deployment automation", "Environment hardening", "Scalability planning", "Operational visibility"],
        blind_spots: ["May slow experimental builds", "Cost caution can delay expansion"],
        invoke_when: ["System instability", "Scaling infrastructure", "Deployment automation gaps", "Cloud cost spikes"],
      },
    ],
  },
  {
    key: "security_and_compliance",
    label: "SECURITY & COMPLIANCE",
    operators: [
      {
        operator_id: "FP-SC-050",
        name: "Dr. Imani Okoye",
        title: "Security & Compliance Engineer — Governance Security",
        tagline: "Trust Is Enforced",
        decision_weight: 4,
        phase_ownership: ["Build", "Launch", "Evergreen"],
        focus_areas: ["Access control architecture", "RBAC enforcement", "Encryption standards", "Secrets management", "Audit trail integrity", "Governance tamper detection"],
        thinking_style: "Defensive systems strategist",
        core_instinct: "Prevent silent failure",
        strengths: ["Threat modeling", "Audit logging design", "Zero-trust enforcement", "Regulatory mapping"],
        blind_spots: ["May introduce complexity", "Strict controls can slow onboarding"],
        invoke_when: ["Security reviews", "Compliance audits", "Sensitive data handling", "External enterprise deployment"],
      },
      {
        operator_id: "FP-SC-051",
        name: "Caleb Wright",
        title: "Security & Compliance Engineer — External & Regulatory",
        tagline: "Protect the Boundary",
        decision_weight: 4,
        phase_ownership: ["Launch", "Expand", "Evergreen"],
        focus_areas: ["SOC2 readiness", "GDPR alignment", "Data residency strategy", "Vendor risk review", "Penetration test coordination", "Policy enforcement frameworks"],
        thinking_style: "Regulatory translator",
        core_instinct: "Contain exposure",
        strengths: ["Compliance mapping", "Enterprise readiness", "Risk documentation", "Third-party evaluation"],
        blind_spots: ["May over-document", "Prefers formal process over speed"],
        invoke_when: ["Enterprise contracts", "Data compliance questions", "International expansion", "Security incident response"],
      },
    ],
  },
];

export const totalOperatorCount = operatorRegistry.reduce(
  (sum, cluster) => sum + cluster.operators.length,
  0
);
