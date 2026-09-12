//Variables
let score = 0;
let streak = 0;
let userGuess;
let itemType;
let trashBin
let recycleBin;
let compostBin;
let buttonClicked;
let itemList=[];
let ifCorrect;
class UniqueCycleGenerator {
    constructor(low, high) {
        this.low = low;
        this.high = high;
        this.pool = [];
        this.index = 0;
        
        // 1. Initialize the pool of whole numbers
        this.resetPool();
    }

    resetPool() {
        this.pool = [];
        for (let i = this.low; i <= this.high; i++) {
            this.pool.push(i);
        }
        this.shuffle();
    }

    shuffle() {
        // 2. Fisher-Yates Shuffle Algorithm
        for (let i = this.pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pool[i], this.pool[j]] = [this.pool[j], this.pool[i]];
        }
        this.index = 0;
    }

    nextNumber() {
        // 3. If we reached the end of the cycle, reshuffle
        if (this.index >= this.pool.length) {
            this.shuffle();
        }
        
        const num = this.pool[this.index];
        this.index++;
        return num;
    }
}

// === Usage Example (Numbers 1 to 5) ===
const gen = new UniqueCycleGenerator(1, 5);

// Pulling 7 times to show it completes a cycle and resets without repeating early
for (let i = 0; i < 7; i++) {
    console.log(gen.nextNumber());
}

function interface() {
    function sort(){

    }
    function guessItem(){
        if (buttonClicked == )
    }
    function updateScore() {

    }
    function animation() {
    
    }
}