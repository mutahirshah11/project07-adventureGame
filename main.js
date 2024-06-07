#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Player = /** @class */ (function () {
    function Player(name) {
        this.fuel = 100;
        this.name = name;
    }
    Player.prototype.fuelDecrease = function () {
        var Fuel = this.fuel - 25;
        this.fuel = Fuel;
    };
    Player.prototype.fuelIncrease = function () {
        this.fuel = 100;
    };
    return Player;
}());
var Opponent = /** @class */ (function () {
    function Opponent(name) {
        this.fuel = 100;
        this.name = name;
    }
    Opponent.prototype.fuelDecrease = function () {
        var Fuel = this.fuel - 25;
        this.fuel = Fuel;
    };
    return Opponent;
}());
var player = await inquirer_1.default.prompt([
    {
        name: "PlayerName",
        type: "input",
        message: "Please enter your name"
    }
]);
var opponent = await inquirer_1.default.prompt([
    {
        name: "OpponentName",
        type: "list",
        message: "Select your opponenet",
        choices: ["Skeleton", "Zombie", "Alien"]
    }
]);
var p1 = new Player(player.PlayerName);
var op1 = new Opponent(opponent.OpponentName);
do {
    if (opponent.OpponentName === "Skeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Skeletonquestion",
                type: "list",
                message: "What would you like to do with Skeleton?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Skeletonquestion === "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Skeletonquestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log("You drank health Portion now your fuel is ".concat(p1.fuel));
        }
        if (ask.Skeletonquestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
    if (opponent.OpponentName === "Zombie") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Zombiequestion",
                type: "list",
                message: "What would you like to do with Zombie?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Zombiequestion === "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Zombiequestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log("You drank health Portion now your fuel is ".concat(p1.fuel));
        }
        if (ask.Zombiequestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
    if (opponent.OpponentName === "Alien") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Alienquestion",
                type: "list",
                message: "What would you like to do with Skeleton?",
                choices: ["Attack", "Drink Portion", "Run"]
            }
        ]);
        if (ask.Alienquestion === "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (p1.fuel <= 0) {
                    console.log("You loose :( better luck next time ");
                    process.exit(); // to stop while loop
                }
            }
            if (num <= 0) {
                op1.fuelDecrease();
                console.log("".concat(p1.name, " fuel is ").concat(p1.fuel));
                console.log("".concat(op1.name, " fuel is ").concat(op1.fuel));
                if (op1.fuel <= 0) {
                    console.log("You won !! ");
                    process.exit(); // to stop while loop
                }
            }
        }
        if (ask.Alienquestion === "Drink Portion") {
            p1.fuelIncrease();
            console.log("You drank health Portion now your fuel is ".concat(p1.fuel));
        }
        if (ask.Alienquestion === "Run") {
            console.log("You loose :( better luck next time .");
            process.exit();
        }
    }
} while (true);
