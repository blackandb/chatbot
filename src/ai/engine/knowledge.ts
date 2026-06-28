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

    const knowledge: any[] = [];

    // Always include company identity
    knowledge.push(COMPANY);

    // BLACK&
    if (
        q.includes("black") ||
        q.includes("company") ||
        q.includes("enterprise") ||
        q.includes("intelligence")
    ) {
        knowledge.push(BLACK_KNOWLEDGE);
    }

    // Services
    if (
        q.includes("service") ||
        q.includes("software") ||
        q.includes("platform") ||
        q.includes("automation") ||
        q.includes("artificial intelligence") ||
        q.includes("ai")
    ) {
        knowledge.push(SERVICES);
    }

    // Portfolio
    if (
        q.includes("portfolio") ||
        q.includes("companies") ||
        q.includes("ecosystem")
    ) {
        knowledge.push(PORTFOLIO);
    }

    // CAESAREA
    if (
        q.includes("caesarea") ||
        q.includes("government") ||
        q.includes("defence") ||
        q.includes("defense") ||
        q.includes("critical infrastructure") ||
        q.includes("osint")
    ) {
        knowledge.push(CAESAREA);
    }

    // EEIL
    if (
        q.includes("eeil") ||
        q.includes("energy") ||
        q.includes("electricity") ||
        q.includes("gas") ||
        q.includes("power")
    ) {
        knowledge.push(EEIL);
    }

    // MURABA
    if (
        q.includes("muraba") ||
        q.includes("real estate") ||
        q.includes("villa") ||
        q.includes("hospitality") ||
        q.includes("resort")
    ) {
        knowledge.push(MURABA);
    }

    // Ventures
    if (
        q.includes("venture") ||
        q.includes("investment") ||
        q.includes("capital") ||
        q.includes("fund")
    ) {
        knowledge.push(VENTURES);
    }

    return JSON.stringify(knowledge, null, 2);

}