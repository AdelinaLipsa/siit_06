var student;
var inputItem = document.getElementById('name');
var indexTrow = 1;
var students = [];

function setStudentHeader() {
    document.getElementById("tHead").innerHTML = `
    <tr>
        <td>${students[indexTrow].name}</td>
        <td>Average Grade</td>
        <td></td>
    </tr>
    `;
}
function draw() {
    document.getElementById("thead").innerHTML = `<tr><th>Name</th><th>Phone</th><th></th><th></th></tr>`;
    if (students.length > 0) {
        for (i = 0; i < students.length; i++) {
            document.getElementById("contactList").innerHTML += ` <tr>
        <td>${students[i].name}</td>
        <td>${students[i].phone}</td>
        <td><a  onclick = 'change(${i})' id = ${i}>Edit</a></td>
        <td><a>Delete</a></td>
        </tr>`;
        }
    }
}



function addStudent() {
    document.getElementById("tBody").innerHTML += `
    <tr id = 'row1.${indexTrow}'>
        <td></td>
        <td>${students[indexTrow].averageGrade()}</td>
        <td><button>Show Grades</button></td>
    </tr>;
    `;
}

function getStudent() {



    student = {
        name: document.getElementById('name').value,
        grades: [],
        averageGrade() {
            let result;
            if (grades.length > 0) {
                let sum = 0;
                grades.forEach(function (element) {
                    sum += element;
                });
                show = sum / grades.length;
            } else result = '';
            return result;
        }
    };
    students.push(student);
    setStudentHeader();







    indexTrow++;

}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addBtn").addEventListener("click", getStudent);
    inputItem.addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            document.addBtn.click();

        }
    });
});