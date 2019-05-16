window.addEventListener("DOMContentLoaded", function () {

    "use strict";

    var studentsList = [
        { name: "John", grades: [9, 8, 6, 3], selected: false },
        { name: "Teo", grades: [5, 6, 7, 2], selected: false },
        { name: "Lars", grades: [9, 8, 9, 1], selected: false },
        { name: "George", grades: [4, 7, 6, 1], selected: false }
    ];
    var selectedIndex;
    var oldIndex;

    var nameInput = document.getElementById("nameInput");
    var addStudentBtn = document.getElementById("addStudentBtn");
    var gradeInput = document.getElementById("gradeInput");
    var addGradeBtn = document.getElementById("addGradeBtn");
    var studentsTableBody = document.getElementById("studentsTableBody");
    var gradesTableBody = document.getElementById("gradesTableBody");
    var hideGradesBtn = document.getElementById("hideGradesBtn");
    var gradesWrapper = document.getElementById("gradesWrapper");
    var gradesHeading = document.getElementById("gradesHeading");
    var sortGradesDown = document.getElementById("sortGradesDown");
    var sortAverageDown = document.getElementById("sortAverageDown");
    var sortGradesUp = document.getElementById("sortGradesUp");
    var sortAverageUp = document.getElementById("sortAverageUp");

    studentsTableBody.addEventListener("click", studentNameInput);
    addStudentBtn.addEventListener("click", studentNameInput);
    nameInput.addEventListener("keyup", studentNameInput);
    addGradeBtn.addEventListener("click", studentGradeInput);
    gradeInput.addEventListener("keyup", studentGradeInput);
    hideGradesBtn.addEventListener("click", studentGradeInput);
    sortGradesDown.addEventListener("click", studentGradeInput);
    sortAverageDown.addEventListener("click", studentNameInput);
    sortGradesUp.addEventListener("click", studentGradeInput);
    sortAverageUp.addEventListener("click", studentNameInput);

    drawStudentsTable();

    function studentNameInput(e) {

        if (nameInput.value && (e.target.id == "addStudentBtn" || e.key == "Enter")) {
            addStudent();
            drawStudentsTable();
            highlightRow();
        }
        else if (e.target.innerHTML == "Show grades") {
            selectStudent(e)
            showGrades();
            drawGradesTable();
            clearHighlight();
            highlightRow();
        }
        else if (e.currentTarget.className == "sortBtn") {

            if (e.currentTarget.id == "sortAverageDown") {
                var sortOrder = "descending";
            }
            else if (e.currentTarget.id == "sortAverageUp") {
                sortOrder = "ascending";
            }
            sortAverageGrade(sortOrder);
            drawStudentsTable();
            syncSelectedIndex()
            highlightRow();
        }
    }


    function studentGradeInput(e) {

        if (gradeInput.value && (e.target.id == "addGradeBtn" || e.key == "Enter")) {
            addGrade();
            drawGradesTable();
            drawStudentsTable();
            highlightRow();
        }
        else if (e.target.id == "hideGradesBtn") {
            deselectStudent()
            hideGrades();
            clearHighlight();
        }
        else if (e.currentTarget.className == "sortBtn") {
            if (e.currentTarget.id == "sortGradesDown") {
                var sortOrder = "descending";
            }
            else if (e.currentTarget.id == "sortGradesUp") {
                sortOrder = "ascending";
            }
            sortStudentGrades(sortOrder);
            drawGradesTable();
        }
    }

    function selectStudent(e) {

        oldIndex = selectedIndex;
        selectedIndex = Number(e.target.dataset.index);
        studentsList[selectedIndex].selected = true;
        if (oldIndex || oldIndex == 0) {
            studentsList[oldIndex].selected = false;
        }
    }

    function deselectStudent() {

        studentsList[selectedIndex].selected = false;
        selectedIndex = null;
        oldIndex = null;
    }

    function sortAverageGrade(sortOrder) {

        if (sortOrder == "ascending") {
            
            studentsList.sort(function (a, b) {
                return averageGrade(a.grades) - averageGrade(b.grades);
            });

        }
        else if (sortOrder == "descending") {
            
            studentsList.sort(function (a, b) {
                return averageGrade(b.grades) - averageGrade(a.grades);
            });

        }
    }

    function sortStudentGrades(sortOrder) {

        var grades = studentsList[selectedIndex].grades;
        if (sortOrder == "ascending") {
            grades.sort((a, b) => a - b);
            
        } else if(sortOrder == "descending"){
            grades.sort((a, b) => b - a);
        }
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

    function drawStudentsTable() {

        studentsTableBody.innerHTML = "";
        for (var i = 0; i < studentsList.length; i++) {
            studentsTableBody.innerHTML += `
                <tr>
                    <td class="spacer"></td>
                    <td>${studentsList[i].name}</td>
                    <td>${averageGrade(studentsList[i].grades)}</td>
                    <td><button data-index ="${i}">Show grades</button></td>
                    <td class="spacer"></td>
                </tr>
            `;
        }
    }

    function addGrade() {

        var newGrade = Number(gradeInput.value);
        newGrade = Number(newGrade.toFixed(2));
        var grades = studentsList[selectedIndex].grades;
        grades.push(newGrade);
        gradeInput.value = "";
    }

    function drawGradesTable() {

        var grades = studentsList[selectedIndex].grades;
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

        gradesWrapper.classList.remove("hide");
        gradesWrapper.classList.add("float");
        studentsWrapper.classList.add("float");
        gradesHeading.innerHTML = studentsList[selectedIndex].name;
        gradeInput.value = "";
    }

    function hideGrades() {
        gradesWrapper.classList.add("hide");
        studentsWrapper.classList.remove("float");
    }

    function syncSelectedIndex() {
        for (var i = 0; i < studentsList.length; i++) {
            if (studentsList[i].selected == true) {
                selectedIndex = i;
            }
        }
    }

    function highlightRow() {

        var rows = studentsTableBody.querySelectorAll("tr");
        for (var i = 0; i < rows.length; i++) {
            if (i == selectedIndex) {
                rows[i].classList.add("highlight");
            }
        }
    }

    function clearHighlight() {

        var rows = studentsTableBody.querySelectorAll(".highlight");
        for (var i = 0; i < rows.length; i++) {
            rows[i].classList.remove("highlight");
        }
    }

    function averageGrade(arr) {

        if (arr.length == 0) return arr;
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        var average = (sum / arr.length).toFixed(2);
        average = Number(average);
        return average;
    }

});