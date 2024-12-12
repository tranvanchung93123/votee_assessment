const axios = require('axios');

const BASE_URL = 'https://wordle.votee.dev:8000';
async function segmentWords(text) {
    try {
        const response = await axios.post(`${BASE_URL}/wordseg`, `text=${encodeURIComponent(text)}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        console.log('Segmented words:', response.data);
    } catch (error) {
        console.error('WordSeg Error:', error.response? error.response.data: error.message);
    }
}

async function guessDaily(guesss, size){
    try {
        const response = await axios.get(`${BASE_URL}/daily`, 
            {params: {guess: guesss, size: size}});
        console.log('Daily Guesss Response:', response.data);
    } catch (error) {
        console.error('Daily Guess Error:', error.response? error.response.data: error.message);
    }
}

async function guessRandom(guesss, size){
    try {
        const response = await axios.get(`${BASE_URL}/random`, {params: {guess: guesss, size: size}});
        console.log('Random Guess Response:', response.data);
    } catch (error) {
        console.error('Random Guess Error:', error.response? error.response.data: error.message);
    }
}

async function guessWord(word, guess){
    try {
        const response = await axios.get(`${BASE_URL}/word/${word}`, 
            {params: {guess: guess}
        });
        console.log('Guess Word Response:', response.data);
    } catch (error) {
        console.error('Guess Word Error:', error.response? error.response.data: error.message);
    }
}

async function main(){
    const text = 'exampletext';
    const guess ="epple"
    const word = "targe";

    await segmentWords(text);
    await guessDaily(guess, 5);
    await guessRandom(guess, 5);
    await guessWord(word, guess);
}

main();
