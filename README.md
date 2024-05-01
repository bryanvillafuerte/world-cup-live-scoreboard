# World Cup Live ScoreBoard Library

This project is a TypeScript library that provides a simple way to manage football matches. It allows you to start new matches, update their scores, finish matches, and get a summary of ongoing matches. The summary is sorted by total score, with ties resolved alphabetically by team names.

## Features

- **Start a Match**: Begin a new football match with two teams and an initial score of 0-0.
- **Update Scores**: Change the score of an ongoing match.
- **Finish a Match**: End a match, removing it from the scoreboard.
- **Get Summary**: Retrieve a summary of all ongoing matches, sorted by total score, with ties resolved alphabetically by team names.

## Getting Started

To get started with this library, you need Node.js and npm installed. Follow these steps to set up and use the library:

1. **Clone the Repository**
  - Clone the repository to your local machine.

```bash
git clone <repository-url>
cd <repository-folder>
```

2. **Install Dependencies**
  - Install the project dependencies using npm.

```bash
npm install
```

3. **Using the Library**
  - Import the `ScoreBoard` class and use its methods to manage football matches.

```typescript
import { ScoreBoard } from './src/scoreboard';

const scoreboard = new ScoreBoard();

// Start a new match
const matchId = scoreboard.startMatch('Team A', 'Team B');

// Update the score of the match
scoreboard.updateScore(matchId, 3, 2);

// Get the summary of ongoing matches
const summary = scoreboard.getGameMatchSummary();
console.log(summary);

// Finish a match
scoreboard.finishMatch(matchId);
```

4. **Testing the Library**
  - Run the Jest test suite to ensure that the library is working as expected.

```bash
npm test
```

## Testing and Quality Assurance

This project uses Jest for unit testing. The test suite covers various functionalities of the `ScoreBoard` class, including:

- Starting a match.
- Updating scores of an existing match.
- Finishing a match.
- Getting the summary of ongoing matches.
- Handling errors when operations are performed on non-existent matches.

Before committing changes, make sure to run the test suite to ensure that all tests pass successfully. Run the following command to execute the test suite:

```bash
npm test
```

## Project Structure

The project structure is as follows:

```plaintext
world-cup-live-scoreboard/
├── src/
│   ├── gameMatch.ts
│   ├── scoreBoard.ts
├── tests/
│   ├── scoreBoard.test.ts
├── .gitignore
├── jest.config.js
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```