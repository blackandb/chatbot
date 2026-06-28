import { routeQuestion, type KnowledgeRoute } from "./router";

import { BLACK_KNOWLEDGE } from "../knowledge/black";
import { COMPANY } from "../knowledge/company";
import { SERVICES } from "../knowledge/services";

import { PORTFOLIO } from "../knowledge/portfolio";
import { CAESAREA } from "../knowledge/caesarea";
import { EEIL } from "../knowledge/eeil";
import { MURABA } from "../knowledge/muraba";
import { VENTURES } from "../knowledge/ventures";

const KNOWLEDGE: Record<KnowledgeRoute, string> = {
  company:
    typeof COMPANY === "string"
      ? COMPANY
      : JSON.stringify(COMPANY, null, 2),

  black:
    typeof BLACK_KNOWLEDGE === "string"
      ? BLACK_KNOWLEDGE
      : JSON.stringify(BLACK_KNOWLEDGE, null, 2),

  services:
    typeof SERVICES === "string"
      ? SERVICES
      : JSON.stringify(SERVICES, null, 2),

  portfolio:
    typeof PORTFOLIO === "string"
      ? PORTFOLIO
      : JSON.stringify(PORTFOLIO, null, 2),

  caesarea:
    typeof CAESAREA === "string"
      ? CAESAREA
      : JSON.stringify(CAESAREA, null, 2),

  eeil:
    typeof EEIL === "string"
      ? EEIL
      : JSON.stringify(EEIL, null, 2),

  muraba:
    typeof MURABA === "string"
      ? MURABA
      : JSON.stringify(MURABA, null, 2),

  ventures:
    typeof VENTURES === "string"
      ? VENTURES
      : JSON.stringify(VENTURES, null, 2),
};

export function buildKnowledge(question: string): string {
  const routes = routeQuestion(question);

  const knowledge = new Set<string>();

  for (const route of routes) {
    const document = KNOWLEDGE[route];

    if (document) {
      knowledge.add(document);
    }
  }

  return [...knowledge].join(
    "\n\n===============================================================================\n\n"
  );
}
