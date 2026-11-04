import { useState } from "react";
import Student from "./Student";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Hasna", department: "Software Engineering" },
    { id: 2, name: "Sara", department: "Computer Science" },
  ]);

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  // CREATE: Add a student
  function addStudent() {
    if (name.trim() === "" || department.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name,
      department: department,
    };

    setStudents([...students, newStudent]);

    setName("");
    setDepartment("");
  }

  // DELETE: Remove a student
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }
  //to edit
  //this remember which students you want to edit
  const [editID , setEditID] = useState(null);
function editStudent(student) {
setName(student.name);
setDepartment(student.department);
setEditID(student.id);
}
//to updated
function Update() {
  const updatedStudent= students.map((student) => {
    if(student.id === editID) {
      return {
        ...student,
        name:name,
        department:department,
      };
    }
    return student;
  });
  setStudents(updatedStudent);
  setName("");
    setDepartment("");
    setEditID(null);
}
  return (
    <div className="container">
      <h1>Student Management App</h1>

      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

<button onClick={editID === null ?addStudent :Update}>
  {editID === null ? "Add Student" : "Update Student"}
</button>
      <h2>Student List</h2>

      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <Student
            name={student.name}
            department={student.department}
          />

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
          <button onClick={() => editStudent(student)}>Edit</button>

        </div>
      ))}
    </div>
  );
}

export default App;