window.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    "use strict";
    // student list
    var studentsList = [{
            name: "Peter",
            grades: [10, 10, 10, 10, 10],
            selected: false
        },
        {
            name: "Stark",
            grades: [10, 10, 10, 9, 7],
            selected: false
        },
        {
            name: "Thanos",
            grades: [3, 5, 9, 7, 10],
            selected: false
        },
        {
            name: "Hulk",
            grades: [2, 2, 2, 2, 10],
            selected: false
        },
        {
            name: "Thor",
            grades: [10, 5, 9, 4, 10],
            selected: false
        }
    ];

    // prevent enter from submitting/refreshing
    $("#namesInput").keypress(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $("#addStudentBtn").click();
        }
    });

    //variables
    var nameInput = document.getElementById("namesInput");
    var addStudentBtn = document.getElementById("addStudentBtn");
    var newIndex;
    var gradesInput = document.getElementById("gradesInput");
    var gradesTableBody = document.getElementById("gradesTableBody");
    var addGradesBtn = document.getElementById("addGradesBtn");
    var gradesHeader = document.getElementById("gradesHeader");
    var oldIndex;
    var studentsTableBody = document.getElementById("studentsTableBody");
    var gradesWrapper = document.getElementById("gradesWrapper");
    var hideGradesBtn = document.getElementById("hideGradesBtn");
    var sortGradesDown = document.getElementById("sortGradesDown");
    var sortGradesUp = document.getElementById("sortGradesUp");
    var sortAverageUp = document.getElementById("sortAverageUp");
    var sortAverageDown = document.getElementById("sortAverageDown");
    var sortingNaming;

    //events
    addStudentBtn.addEventListener("click", studentNameInput);
    addGradesBtn.addEventListener("click", studentGradesInput);
    studentsTableBody.addEventListener("click", studentNameInput);
    hideGradesBtn.addEventListener("click", hideGrades);
    sortGradesDown.addEventListener("click", studentGradesInput);
    sortAverageDown.addEventListener("click", studentNameInput);
    sortGradesUp.addEventListener("click", studentGradesInput);
    sortAverageUp.addEventListener("click", studentNameInput);



    //functions
    function drawStudentTable() {
        var tableBody = document.getElementById("studentsTableBody");
        var tableData = "";
        for (var i = 0; i < studentsList.length; i++) {
            tableData += `
        <tr>
        <td></td>
        <td>${studentsList[i].name}</td>
        <td>${averageGrade(studentsList[i].grades)}</td>
        <td><button data-index ="${i}" data-id ="showGrades"><b>Show grades</b></button></td>
        <td></td>
        </tr>
        `;
        }
        tableBody.innerHTML = tableData;
    }
    drawStudentTable(studentsList);


    function averageGrade(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += parseInt(array[i], 10);
        }
        var average = (sum / array.length).toFixed(2);
        average = Number(average);
        return average;
    }


    function addStudent() {
        var newStudent = {
            name: nameInput.value,
            grades: [],
            selected: false,
        }
        studentsList.push(newStudent);
        nameInput.value = "";
    }

    function selectStudent(event) {
        oldIndex = newIndex;
        newIndex = Number(event.target.dataset.index);
        studentsList[newIndex].selected = true;
        if (oldIndex || oldIndex == 0) {
            studentsList[oldIndex].selected = false;
        }
    }

    function studentNameInput(event) {
        if (nameInput.value && event.target.id == "addStudentBtn") {
            addStudent();
            drawStudentTable();
        } else if (event.target.dataset.id == "showGrades") {
            selectStudent(event)
            showGrades();
            drawGradesTable();
        } else if (event.currentTarget.dataset.id == "sortBtn") {
            drawStudentTable();
            sortingOrder(event);
            sortingAverageGrades();
        }
    }

    function addGrade() {
        if (gradesInput.value <= 10) {
            var newGrade = Number(gradesInput.value);
            newGrade = Number(newGrade.toFixed(2));
            var grades = studentsList[newIndex].grades;
            grades.push(newGrade);
            gradesInput.value = "";
        } else
            alert("Grade is not correctly inserted!");
    }

    function drawGradesTable() {
        var grades = studentsList[newIndex].grades;
        gradesTableBody.innerHTML = "";
        for (var i = 0; i < grades.length; i++) {
            gradesTableBody.innerHTML += `
            <tr>
            <td>${grades[i]}</td>
            </tr>
            `;
        }
    }

    function showGrades() {
        gradesHeader.innerHTML = studentsList[newIndex].name;
        gradesInput.value = "";
        gradesWrapper.classList.remove("hidden");
        gradesWrapper.classList.add("float");
        studentsWrapper.classList.add("float");
    }

    function hideGrades() {
        gradesWrapper.classList.add("hidden");
        studentsWrapper.classList.remove("float");
        gradesInput.value = "";

    }

    function studentGradesInput(event) {
        if (gradesInput.value && event.target.id == "addGradesBtn") {
            addGrade();
            drawStudentTable();
            drawGradesTable();
        } else if (event.target.dataset.id == "showGrades") {
            selectStudent(event)
            drawGradesTable();
            showGrades();
        } else if (event.target.id == "hideGradesBtn") {
            hideGrades();
        } else if (event.currentTarget.dataset.id == "sortBtn") {
            drawGradesTable();
            sortingOrder(event);
            sortingGrades();
        }
    }

    function sortingOrder(event) {
        if (event.currentTarget.id == "sortGradesDown" || event.currentTarget.id == "sortAverageDown") {
            sortingNaming = "descending";
        } else if (event.currentTarget.id == "sortGradesUp" || event.currentTarget.id == "sortAverageUp") {
            sortingNaming = "ascending";
        }
    }

    function sortingAverageGrades() {
        var grades = studentsList[newIndex].grades;
        if (sortingNaming == "ascending") {
            grades.sort((a, b) => a - b);
        } else if (sortingNaming == "descending") {
            grades.sort((a, b) => b - a);
        }
    }


    function sortingGrades() {
        if (sortingNaming == "ascending") {
            studentsList.sort(function (a, b) {
                return averageGrade(a.grades) - averageGrade(b.grades);
            });
        } else if (sortingNaming == "descending") {
            studentsList.sort(function (a, b) {
                return averageGrade(b.grades) - averageGrade(a.grades);
            });
        }
    }
});