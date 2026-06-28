import { BLACK_KNOWLEDGE } from "../knowledge/black";
import { COMPANY } from "../knowledge/company";
import { SERVICES } from "../knowledge/services";

import { PORTFOLIO } from "../knowledge/portfolio";
import { CAESAREA } from "../knowledge/caesarea";
import { EEIL } from "../knowledge/eeil";
import { MURABA } from "../knowledge/muraba";
import { VENTURES } from "../knowledge/ventures";

export function buildKnowledge(question: string): string {
  const q = question.toLowerCase();

  const knowledge = new Set<string>();

  // Always include company identity
  knowledge.add(
    typeof COMPANY === "string"
      ? COMPANY
      : JSON.stringify(COMPANY, null, 2)
  );

  // BLACK&
  if (
    q.includes("black") ||
    q.includes("black&") ||
    q.includes("black and") ||
    q.includes("blackandi") ||
    q.includes("company") ||
    q.includes("group") ||
    q.includes("enterprise") ||
    q.includes("intelligence")
  ) {
    knowledge.add(
      typeof BLACK_KNOWLEDGE === "string"
        ? BLACK_KNOWLEDGE
        : JSON.stringify(BLACK_KNOWLEDGE, null, 2)
    );
  }

  // Services
  if (
    q.includes("service") ||
    q.includes("services") ||
    q.includes("software") ||
    q.includes("platform") ||
    q.includes("automation") ||
    q.includes("artificial intelligence") ||
    q.includes("artificial intelligence") ||
    q.includes("machine learning") ||
    q.includes("llm") ||
    q.includes("agent") ||
    q.includes("ai")
  ) {
    knowledge.add(
      typeof SERVICES === "string"
        ? SERVICES
        : JSON.stringify(SERVICES, null, 2)
    );
  }

  // Portfolio
  if (
    q.includes("portfolio") ||
    q.includes("companies") ||
    q.includes("company") ||
    q.includes("ecosystem") ||
    q.includes("subsidiary")
  ) {
    knowledge.add(
      typeof PORTFOLIO === "string"
        ? PORTFOLIO
        : JSON.stringify(PORTFOLIO, null, 2)
    );
  }

  // CAESAREA
  if (
    q.includes("caesarea") ||
    q.includes("government") ||
    q.includes("governments") ||
    q.includes("defence") ||
    q.includes("defense") ||
    q.includes("military") ||
    q.includes("army") ||
    q.includes("security") ||
    q.includes("critical infrastructure") ||
    q.includes("critical") ||
    q.includes("osint") ||
    q.includes("police") ||
    q.includes("intelligence agency") ||
    q.includes("national security")
  ) {
    knowledge.add(
      typeof CAESAREA === "string"
        ? CAESAREA
        : JSON.stringify(CAESAREA, null, 2)
    );
  }

  // EEIL
  if (
    q.includes("eeil") ||
    q.includes("energy") ||
    q.includes("electricity") ||
    q.includes("power") ||
    q.includes("gas") ||
    q.includes("renewable") ||
    q.includes("solar") ||
    q.includes("wind") ||
    q.includes("hydrogen") ||
    q.includes("battery") ||
    q.includes("grid") ||
    q.includes("market") ||
    q.includes("utility") ||
    q.includes("entso-e")
  ) {
    knowledge.add(
      typeof EEIL === "string"
        ? EEIL
        : JSON.stringify(EEIL, null, 2)
    );
  }

  // MURABA
  if (
    q.includes("muraba") ||
    q.includes("real estate") ||
    q.includes("property") ||
    q.includes("residential") ||
    q.includes("development") ||
    q.includes("villa") ||
    q.includes("villas") ||
    q.includes("luxury") ||
    q.includes("hospitality") ||
    q.includes("hotel") ||
    q.includes("resort") ||
    q.includes("wellness") ||
    q.includes("spa")
  ) {
    knowledge.add(
      typeof MURABA === "string"
        ? MURABA
        : JSON.stringify(MURABA, null, 2)
    );
  }

  // Ventures
  if (
    q.includes("venture") ||
    q.includes("ventures") ||
    q.includes("investment") ||
    q.includes("investments") ||
    q.includes("capital") ||
    q.includes("fund") ||
    q.includes("fundraising") ||
    q.includes("private equity") ||
    q.includes("venture capital") ||
    q.includes("startup")
  ) {
    knowledge.add(
      typeof VENTURES === "string"
        ? VENTURES
        : JSON.stringify(VENTURES, null, 2)
    );
  }

  return [...knowledge].join(
    "\n\n===============================================================================\n\n"
  );
}
