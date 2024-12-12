# votee_assessment

This is a simple Node.js script that interacts with the Votee API to perform various tasks.

## Prerequisites

- Node.js (v18.17.1)
- npm (v9.1.3)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install the dependencies

## Usage

To run the script, use the following command:

`node index.js`

This will execute the script and perform the tasks specified in the `main` function.

## API Endpoints

- `/segment` - Segment words from a given text
- `/daily` - Guess the daily word
- `/random` - Guess a random word
- `/word/{word}` - Guess a specific word

## Notes

- The API endpoints are designed to be used with the `axios` library.
- The `index.js` file contains the main function that performs the tasks.
- The `main` function is the entry point for the script.
- The `segmentWords` function is used to segment words from a given text.
- The `guessDaily` function is used to guess the daily word.
- The `guessRandom` function is used to guess a random word.
- The `guessWord` function is used to guess a specific word.



