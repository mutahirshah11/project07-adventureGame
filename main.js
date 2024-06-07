import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25;
        this.fuel = Fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let Fuel = this.fuel - 25;
        this.fuel = Fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "PlayerName",
        type: "input",
        message: "Please enter your name"
    }
]);
let opponent = await inquirer.prompt([
    {
        name: "OpponentName",
        type: "list",
        message: "Select your opponenet",
        choices: ["Skeleton", "Zombie", "Alien"]
    }
]);
let p1 = new Player(player.PlayerName);
let op1 = new Opponent(opponent.OpponentName);
do {
    if (opponent.OpponentName === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "Skeletonquestion",
                type: "list",
                message: "What would you like to do with Skeleton?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Skeletonquestion === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Skeletonquestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drank health Portion now your fuel is ${p1.fuel}`);
        }
        if (ask.Skeletonquestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
    if (opponent.OpponentName === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "Zombiequestion",
                type: "list",
                message: "What would you like to do with Zombie?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Zombiequestion === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Zombiequestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drank health Portion now your fuel is ${p1.fuel}`);
        }
        if (ask.Zombiequestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
    if (opponent.OpponentName === "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "Alienquestion",
                type: "list",
                message: "What would you like to do with Skeleton?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Alienquestion === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${op1.name} fuel is ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Alienquestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You drank health Portion now your fuel is ${p1.fuel}`);
        }
        if (ask.Alienquestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
} while (true);
