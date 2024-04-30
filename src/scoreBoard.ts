import { GameMatch} from "./gameMatch";

// This class manages the game matches and provides methods to start, update, and finish game matches.
export class ScoreBoard {

  // The private field stores the game matches with the game match ID.
  private gameMatches: Map<number, GameMatch> = new Map();

  // The private field stores the next game match ID.
  private nextGameMatchId: number = 1;

  // This method starts a new game match with the home team and away team.
  startGameMatch(homeTeam: string, awayTeam: string): number {

    // Create a new game match object.
    const gameMatch = new GameMatch(homeTeam, awayTeam);

    // Store the game match in the game matches map.
    this.gameMatches.set(this.nextGameMatchId, gameMatch);

    // Return the game match ID and increment the next game match ID.
    return this.nextGameMatchId++;
  }

  // This method updates the score of the game match with the game match ID.
  updateScore(gameMatchId: number, homeScore: number, awayScore: number): void {

    // Get the game match with the game match ID.
    const gameMatch = this.gameMatches.get(gameMatchId);

    // If the game match is not found, throw an error.
    if (!gameMatch) {
      throw new Error(`Game match with ID ${gameMatchId} not found.`);
    }

    // Update the home score and away score of the game match.
    gameMatch.homeScore = homeScore;
    gameMatch.awayScore = awayScore;
  }

  // This method finishes the game match with the game match ID.
  finishGameMatch(gameMatchId: number): void {

    // If the game match is not found, throw an error.
    if (!this.gameMatches.has(gameMatchId)) {
      throw new Error(`Game match with ID ${gameMatchId} not found.`);
    }

    // Delete the game match from the game matches map.
    this.gameMatches.delete(gameMatchId);
  }

  // This method returns the summary of all game matches sorted by total game score.
  // if scores are the same, sort by home team name, if home team names are the same, sort by away team name.
  getGameMatchSummary(): GameMatch[] {
    return Array.from(this.gameMatches.values())
      .sort((a, b) => {

        // Sort by total game score in descending order.
        const gameScoreDifference = b.totalGameScore - a.totalGameScore;

        if (gameScoreDifference === 0) {
          // If the total game score is the same, sort by home team name.
          const homeTeamDifference = a.homeTeam.localeCompare(b.homeTeam);

          // If the home team name is the same, sort by away team name.
          if (homeTeamDifference === 0) {
            return a.awayTeam.localeCompare(b.awayTeam);
          }

          return homeTeamDifference;
        }
        return gameScoreDifference;
      })
  }
}