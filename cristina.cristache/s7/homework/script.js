var gradesWrapper = document.getElementById("student_grade_wrapper");
var studentsWrapper = document.getElementById("student_list_wrapper");
var studentGrade = document.getElementById("grade").value
var studentThead = document.getElementById("sthead");
var displayGradesBtn = document.getElementById("displayGradesBtn");
var addStudentBtn = document.getElementById("addStudentBtn");
var addGradeBtn = document.getElementById("addGradeBtn");
var studentsList = document.getElementById("studentsList");
var studentIdentifier;
var student;
var students = [];
var averageGrades = [];

document.getElementById("name").focus();
addStudentBtn.addEventListener("click", addStudent);
addGradeBtn.addEventListener("click", addGrades);
document.getElementById("name").addEventListener("keypress", onEnter);
document.getElementById("grade").addEventListener("keypress", function (event) {
    if (event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
    if (event.keyCode == 13) {
        event.preventDefault();
        addGradeBtn.click();
    }
});


class Student {
    constructor(name, grade, average) {
        this.name = name;
        this.grades = grade;
        this.average = average;
    }
}

Student.prototype.averageGrade = function () {
    let sum = 0;
    this.grades.forEach(element => {
        sum += element;
    });
    return (sum / this.grades.length).toFixed(2);
};

function onEnter(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        if (event.target.id === "name") addStudentBtn.click();
        if (event.target.id === "grade") addGradeBtn.click();

    }
}

function getStudent() {
    let studentName = document.getElementById("name").value;

    if (studentName !== "") {
        student = new Student(studentName, []);
        students.push(student);

    }
}

function draw() {
    document.getElementById("studentsList").innerHTML = '';
    if (students.length > 0) document.querySelector("#sthead").classList.remove("toggle");
    for (i = 0; i < students.length; i++) {
        let average = students[i].average === undefined ? '' : students[i].average;
        document.getElementById("studentsList").innerHTML += `
                <tr >
                    <td>${students[i].name}</td>
                    <td id = "${i}">${average}</td>
                    <td><button onclick = "displayGrades(${i})" class ="cool-btn">Display grades</button></td>
                </tr>
                `;
    }
}

function addStudent(event) {
    getStudent();
    draw();
    document.getElementById("name").value = '';
}

function displayGrades(index) {
    document.getElementById("grade").focus();
    studentIdentifier = index;
    studentsWrapper.classList.add("resize");
    gradesWrapper.classList.remove("toggle");
    document.getElementById("grade").value = '';
    document.getElementById("gtbody").innerHTML = '';
    document.getElementById("gradesH").innerHTML = `Student Grade: ${students[index].name}`;
    if (students[index].grades.length > 0) {
        drawGrades();
    };
}

function drawGrades() {
    document.getElementById("gthead").innerHTML = '';
    document.getElementById("gtbody").innerHTML = '';
    for (i = 0; i < students[studentIdentifier].grades.length; i++) {
        document.getElementById("gthead").innerHTML = ` <tr><th></th><th>Grade</th><th></th></tr>`;
        document.getElementById("gtbody").innerHTML += ` <tr>
                                                        <td></td>
                                                        <td>${students[studentIdentifier].grades[i]}</td>
                                                        <td></td>
                                                    </tr>`;
    }
}

function addGrades(event) {
    let studentGrade = document.getElementById("grade").value;
    let intGrade = parseInt(studentGrade)
    students[studentIdentifier]['grades'].push(intGrade);
    drawGrades();
    students[studentIdentifier].average = students[studentIdentifier].averageGrade();
    draw();
    document.getElementById("grade").value = '';

}

function hide(event) {
    event.preventDefault();
    gradesWrapper.classList.add("toggle");
    studentsWrapper.classList.remove("resize");
}


function sortUp(arr) {

    var pivot = arr.pop([arr.length - 1 / 2]);
    var left = [];
    var right = [];
    var newArray = [];


    if (arr.length <= 1) {
        return arr;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].average <= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }
    window.students = newArray.concat(quickSort(left), pivot, quickSort(right));
    draw();
}

function sortDown(arr) {
    var pivot = arr.pop([arr.length - 1 / 2]);
    var left = [];
    var right = [];
    var newArray = [];


    if (arr.length <= 1) {
        return arr;
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].average >= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
            
        }
    }
    window.students = newArray.concat(quickSort(left), pivot, quickSort(right));
    draw();
}


