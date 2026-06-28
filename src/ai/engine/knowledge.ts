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
  knowledge.add(COMPANY);

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
    knowledge.add(BLACK_KNOWLEDGE);
  }

  // Services
  if (
    q.includes("service") ||
    q.includes("services") ||
    q.includes("software") ||
    q.includes("platform") ||
    q.includes("automation") ||
    q.includes("artificial intelligence") ||
    q.includes("ai")
  ) {
    knowledge.add(SERVICES);
  }

  // Portfolio
  if (
    q.includes("portfolio") ||
    q.includes("companies") ||
    q.includes("company") ||
    q.includes("ecosystem")
  ) {
    knowledge.add(PORTFOLIO);
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
    q.includes("osint")
  ) {
    knowledge.add(CAESAREA);
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
    q.includes("grid") ||
    q.includes("market")
  ) {
    knowledge.add(EEIL);
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
    q.includes("resort")
  ) {
    knowledge.add(MURABA);
  }

  // Ventures
  if (
    q.includes("venture") ||
    q.includes("ventures") ||
    q.includes("investment") ||
    q.includes("investments") ||
    q.includes("capital") ||
    q.includes("fund")
  ) {
    knowledge.add(VENTURES);
  }

  return [...knowledge].join("\n\n============================================================\n\n");
}
