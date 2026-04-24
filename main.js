const prompt = require('prompt-sync')();

class Field {
    constructor(field = [[]]) {
        this.field = field;
        this.playerLocation = { x: 0, y: 0 };
        this.isPlaying = (true);
        this.startLocation();
    }



    printMap() {
        for (let i of this.field) {
            console.log(i.join(''));
        }
    }

    moveInput() {
        const move = prompt('U for move Up,D for move Down,R for move Right,L for move Left,').toUpperCase();
        if (move === 'U') {
            this.playerLocation.y -= 1;
        } else if (move === 'D') {
            this.playerLocation.y += 1;
        } else if (move === 'L') {
            this.playerLocation.x -= 1;
        } else if (move === 'R') {
            this.playerLocation.x += 1;
        } else {
            console.log('Wrong Command Key');
        }

        this.legalCheck();
    }

    legalCheck() {
        const { x, y } = this.playerLocation;
        if (y >= this.field.length || y < 0 || x >= this.field[0].length || x < 0) {
            console.log("Game Over")
            console.log("Out of map")
            this.isPlaying = (false);
        } else if (this.field[y][x] === "[H]") {
            console.log("Gz you found hat");
            this.isPlaying = (false);
        } else if (this.field[y][x] === "[O]") {
            console.log("Game Over")
            console.log("You fall to the hole");
            this.isPlaying = (false);
        } else {
            this.field[y][x] = '*';
        }
    }

    static genField(h, w, p) {
        const field = new Array(h).fill(0).map(() => new Array(w).fill('[]'))

        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (Math.random() < p) {
                    field[y][x] = '[O]'
                }
            }
        }
        const pLocationX = Math.floor(Math.random() * w)
        const pLocationY = Math.floor(Math.random() * h)
        field[pLocationY][pLocationX] = '*'
        // field[0][0] = '*'

        let hatX, hatY;
        do {
            hatX = Math.floor(Math.random() * w);
            hatY = Math.floor(Math.random() * h);
        } while (hatX === pLocationX && hatY === pLocationY);

        field[hatY][hatX] = '[H]';

        return field;

    };
        startLocation() {
        for (let y = 0; y < this.field.length; y++) {
            const x = this.field[y].indexOf('*');
            if (x !== -1) {
                this.playerLocation = { x: x, y: y };
                break;
            }
        }
    }


}

const map = Field.genField(3, 3, 0.2);
const myMap = new Field(map);

while (myMap.isPlaying) {
    myMap.printMap();
    myMap.moveInput();
}


