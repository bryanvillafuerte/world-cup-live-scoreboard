// The class represents a single football game match between two teams and corresponding scores.
export class GameMatch {

  // The constructor initializes the game match with the home team, away team, and scores.
  constructor(
    public homeTeam: string,
    public awayTeam: string,
    public homeScore: number = 0,
    public awayScore: number = 0,
  ) {}

  // This getter calculates the total score of the game match.
  get totalGameScore(): number {
    return this.homeScore + this.awayScore;
  }

  // This method returns a string representation of the game match.
  toString(): string {
    return `${this.homeTeam} - ${this.homeScore} vs ${this.awayTeam} - ${this.awayScore}`;
  }
}