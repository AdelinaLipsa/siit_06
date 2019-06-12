let goat, car, door1, door2, door3, randomDoor, choice, gameMode, instructions, reset;

window.addEventListener("load", function () {
    init();
});

function init() {
    // at beginning of the game, randomly set the goats and the car behind the doors
    // open the doors on click
    goat = document.querySelector(".goat");
    car = document.querySelector(".car");
    door1 = document.querySelector(".door--1");
    door2 = document.querySelector(".door--2");
    door3 = document.querySelector(".door--3");
    instructions = document.querySelector(".instructions");
    reset = document.querySelector(".button");
    gameMode = 1;

    // randomDoor = choices[Math.floor(Math.random() * choices.length)];
    instructions.innerHTML = `Welcome to the Monty Hall Problem for your chance to win a car! <br> Click a door, any door, to start the game!`;
    choice = [door1, door2, door3];
    initEventListeners();

};


function random() {
    randomDoor = choice[Math.floor(Math.random() * choice.length)];
    randomDoor.classList.remove("style");
    randomDoor.classList.add("goat");
};

function initEventListeners() {

    choice.forEach((door) => {
        door.addEventListener("click", function () {
            switch (gameMode) {
                case 1:

                    // removes first choice
                    choice.splice(choice.indexOf(door), 1);

                    random();
                    // removes random door - only 1 door remaining in array;
                    choice.splice(choice.indexOf(randomDoor), 1);

                    // adds first choice back to array
                    choice.push(door);
                    // update instructions
                    instructions.innerHTML = `Well, this is the Monty Hall Problem - to switch or not to switch, that is the question`;

                    // updates game state
                    gameMode++;

                    break;
                case 2:
                    console.log(choice);
                    console.log(choice[0]);
                    // randomizes choice
                    if (door === choice[Math.floor(Math.random() * choice.length)]) {

                        door.classList.remove("style");
                        door.classList.add("car");
                        door.setAttribute("style", "border: 1vmin solid green");

                        instructions.innerHTML = `You've won yourself a brand new car!`;


                        // removes car 
                        choice.splice(choice.indexOf(door), 1);
                        console.log(choice);

                        // adds goat to remainder
                        choice[0].classList.remove("style");
                        choice[0].classList.add("goat");


                    } else {
                        // removes door1 from array
                        choice.splice(choice.indexOf(door), 1);

                        // adds goat to choice
                        door.classList.remove("style");
                        door.classList.add("goat");
                        door.setAttribute("style", "border: 1vmin solid #e10505");
                        instructions.innerHTML = `I hear goats like hay!`;

                        // adds car to remainder in array
                        choice[0].classList.remove("style");
                        choice[0].classList.add("car");
                    }
                    gameMode++
                    break;
                default:
                    break;

            }

        });
    });

    reset.addEventListener("click", function () {
        //This is a great example of how to use a loop
        gameMode = 1;
        choice = [door1, door2, door3];
        choice.forEach((door) => {
            door.classList.remove("goat");
            door.classList.remove("car");
            door.classList.add("style");
            door.setAttribute("style", "border: 1vmin solid #462f24");
          instructions.innerHTML = `Welcome to the Monty Hall Problem for your chance to win a car! <br> Click a door, any door, to start the game!`;
        });
    });
};