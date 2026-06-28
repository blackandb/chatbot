export type KnowledgeRoute =
  | "company"
  | "black"
  | "services"
  | "portfolio"
  | "caesarea"
  | "eeil"
  | "muraba"
  | "ventures";

const ROUTES: Record<KnowledgeRoute, string[]> = {
  company: [
    "company",
    "black",
    "black&",
    "black and",
    "blackandi",
    "who are you",
    "about",
    "mission",
    "vision",
    "values",
  ],

  black: [
    "black",
    "black&",
    "black and",
    "intelligence",
    "enterprise",
    "ecosystem",
    "holding",
    "group",
  ],

  services: [
    "service",
    "services",
    "software",
    "platform",
    "application",
    "automation",
    "workflow",
    "dashboard",
    "ai",
    "artificial intelligence",
    "machine learning",
    "llm",
    "agent",
    "assistant",
    "development",
    "consulting",
  ],

  portfolio: [
    "portfolio",
    "companies",
    "company",
    "subsidiaries",
    "businesses",
    "ecosystem",
  ],

  caesarea: [
    "caesarea",
    "government",
    "governments",
    "ministry",
    "agency",
    "defence",
    "defense",
    "military",
    "army",
    "security",
    "police",
    "critical infrastructure",
    "critical",
    "command",
    "osint",
    "threat",
    "border",
    "public safety",
    "national security",
  ],

  eeil: [
    "eeil",
    "energy",
    "electricity",
    "power",
    "gas",
    "renewable",
    "renewables",
    "solar",
    "wind",
    "hydrogen",
    "battery",
    "grid",
    "market",
    "markets",
    "utility",
    "utilities",
    "entso-e",
    "price",
    "prices",
    "trading",
  ],

  muraba: [
    "muraba",
    "real estate",
    "property",
    "properties",
    "villa",
    "villas",
    "residential",
    "luxury",
    "hospitality",
    "hotel",
    "wellness",
    "spa",
    "architecture",
    "masterplan",
    "construction",
    "resort",
  ],

  ventures: [
    "venture",
    "ventures",
    "investment",
    "investments",
    "investor",
    "capital",
    "fund",
    "fundraising",
    "private equity",
    "venture capital",
    "startup",
    "acquisition",
    "merger",
    "joint venture",
  ],
};

export function routeQuestion(question: string): KnowledgeRoute[] {
  const q = question.toLowerCase();

  const scores = new Map<KnowledgeRoute, number>();

  for (const route of Object.keys(ROUTES) as KnowledgeRoute[]) {
    let score = 0;

    for (const keyword of ROUTES[route]) {
      if (q.includes(keyword)) {
        score++;
      }
    }

    if (score > 0) {
      scores.set(route, score);
    }
  }

  const ordered = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([route]) => route);

  if (ordered.length === 0) {
    return ["company"];
  }

  if (!ordered.includes("company")) {
    ordered.unshift("company");
  }

  return ordered;
}