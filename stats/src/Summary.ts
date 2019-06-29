import { MatchData } from "./MatchData";

export interface Analyzer {
	run(matched: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class Summary {
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
