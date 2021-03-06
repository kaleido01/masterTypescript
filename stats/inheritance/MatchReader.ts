import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../src/utils";
import { MatchResult } from "../src/MatchResult";
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
	mapRow(row: string[]): MatchData {
		console.log(row);
		return [
			dateStringToDate(row[0]),
			row[1],
			row[2],
			parseInt(row[3]),
			parseInt(row[4]),
			row[5] as MatchResult, //"H","A","D",
			row[6]
		];
	}
}
