import { ScoreBoard } from "../src/scoreBoard";

// The test suite for the ScoreBoard class, verifying the functionality of the class.
describe('ScoreBoard', () => {
  let scoreBoard: ScoreBoard;

  // Initialize a new ScoreBoard instance before each test.
  beforeEach(() => {
    scoreBoard = new ScoreBoard();
  });

  // The test for starting a new game match.
  test('startGameMatch', () => {
    const gameMatchId = scoreBoard.startGameMatch('Home Team', 'Away Team');
    expect(gameMatchId).toBe(1);
  });

  // The test for updating the score of an existing game match.
  test('updateGameScore', () => {
    const gameMatchId = scoreBoard.startGameMatch('Home Team', 'Away Team');
    scoreBoard.updateScore(gameMatchId, 2, 1);
    const gameMatchSummary = scoreBoard.getGameMatchSummary();
    expect(gameMatchSummary[0].homeScore).toBe(2);
    expect(gameMatchSummary[0].awayScore).toBe(1);
  });

  // The test for finishing an existing game match.
  test('finishGameMatch', () => {
    const gameMatchId = scoreBoard.startGameMatch('Home Team', 'Away Team');
    scoreBoard.finishGameMatch(gameMatchId);
    const gameMatchSummary = scoreBoard.getGameMatchSummary();
    expect(gameMatchSummary.length).toBe(0);
  });

  // The test for getting the summary of multiple game matches.
  test('Summary of multiple game matches', () => {
    const gameMatchId1 = scoreBoard.startGameMatch('Mexico', 'Canada');
    scoreBoard.updateScore(gameMatchId1, 0, 5);

    const gameMatchId2 = scoreBoard.startGameMatch('Spain', 'Brazil');
    scoreBoard.updateScore(gameMatchId2, 10, 2);

    const gameMatchId3 = scoreBoard.startGameMatch('Germany', 'France');
    scoreBoard.updateScore(gameMatchId3, 2, 2);

    const gameMatchId4 = scoreBoard.startGameMatch('Uruguay', 'Italy');
    scoreBoard.updateScore(gameMatchId4, 6, 6);

    const gameMatchId5 = scoreBoard.startGameMatch('Argentina', 'Australia');
    scoreBoard.updateScore(gameMatchId5, 3, 1);

    // Get the game match summary.
    const gameMatchSummary = scoreBoard.getGameMatchSummary();

    // Verify the order of the game matches by total game score, with ties resolved alphabetically by team names.
    expect(gameMatchSummary[0].homeTeam).toBe('Spain');
    expect(gameMatchSummary[1].homeTeam).toBe('Uruguay');
    expect(gameMatchSummary[2].homeTeam).toBe('Mexico');
    expect(gameMatchSummary[3].homeTeam).toBe('Argentina');
    expect(gameMatchSummary[4].homeTeam).toBe('Germany');
  });

  // The test for error handling when updating the score of a non-existing game match.
  test('Show error message when updating score for a non-existing game match', () => {
    expect(() => scoreBoard.updateScore(143, 0, 0)).toThrow('Game match with ID 143 not found.');
  });

  // The test for error handling when finishing a non-existing game match.
  test('Show error message when finishing a non-existing game match', () => {
    expect(() => scoreBoard.finishGameMatch(143)).toThrow('Game match with ID 143 not found.');
  });
})