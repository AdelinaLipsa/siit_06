"use strict";

window.addEventListener("DOMContentLoaded", function () {
    var startbtn = document.getElementById("startBtn");
    startbtn.addEventListener("click", startGame);
    var helper = document.getElementById("helper");
    var doorA = document.getElementById("A");
    doorA.addEventListener("click", selectDoor);
    var doorB = document.getElementById("B");
    doorB.addEventListener("click", selectDoor);
    var doorC = document.getElementById("C");
    doorC.addEventListener("click", selectDoor);

    var doors = ["A", "B", "C"];
    var winningDoor;
    var selectedDoor;
    var openedDoor;
    var gameStage;
    console.log(gameStage);


    function startGame() {

       

            gameStage = 1;
            winningDoor = randomWinningDoor();
            helper.innerHTML = "Select a door.";
            startbtn.innerHTML = "Reset"
            var msg = document.querySelectorAll(".msg");
            for (var i = 0; i < msg.length; i++) {
                msg[i].innerHTML = "";
            }

            console.log(winningDoor);
            console.log(gameStage);

        

    }

    function randomWinningDoor() {
        const randomNr = Math.floor(Math.random() * 3);
        return doors[randomNr];
    }

    function selectDoor() {

        if (gameStage == 1) {
            selectedDoor = this.id;
            this.querySelector(".msg").innerHTML = "?";
            helper.innerHTML = "Keep selection or try the other door.";
            openGoatDoor();
            gameStage = 2;
            console.log(gameStage);

        } else if (gameStage == 2) {

            if (this.id == winningDoor) {
                this.querySelector(".msg").innerHTML = "CAR!!!";
                helper.innerHTML = "You won!!!";
                gameStage = null;
                startbtn.innerHTML = "Play again"
                console.log(gameStage);
            } else if (this.id != openedDoor) {
                this.querySelector(".msg").innerHTML = "GOAT";
                helper.innerHTML = "You lost!!!";
                gameStage = null;
                startbtn.innerHTML = "Play again"
                console.log(gameStage);
            }
        }
    }

    function openGoatDoor() {
        var goatDoors = [];

        for (var i = 0; i < doors.length; i++) {
            if (doors[i] != selectedDoor && doors[i] != winningDoor) {
                goatDoors.push(doors[i]);
            }
        }
        if (goatDoors.length > 1) {
            const randomNr = Math.floor(Math.random() * 2);
            var door = document.getElementById(goatDoors[randomNr]);
            door.querySelector(".msg").innerHTML = "GOAT"
            openedDoor = door.id;

        } else {

            var door = document.getElementById(goatDoors[0]);
            door.querySelector(".msg").innerHTML = "GOAT"
            openedDoor = door.id;
        }
    }

});