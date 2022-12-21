import "./App.css";
import StudentList from "./components/StudentList";
import ClassInfo from "./components/ClassInfo";
import { useState } from "react";
import NewStudentForm from "./components/NewStudentForm";

function App() {
  
  const [studentData, setStudentData] = useState([
    {
      id: 1,
      nameData: 'Ada',
      emailData: 'ada@dev.org',
      isPresentData: false
    },
    {
      id: 2,
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org',
      isPresentData: false
    },
    {
      id: 3,
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org',
      isPresentData: true
    }
  ]);

  const updateStudentData = updatedStudent => {
    const students = studentData.map(student => {
      if (student.id === updatedStudent.id) {
        return updatedStudent;
      } else {
        return student;
      }
    });

    setStudentData(students);
  };

  const deleteAllStudents = () => {
    const students = [];
    setStudentData(students);
  };

  const classMembers = studentData.length;

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo members = {classMembers}></ClassInfo>

      <StudentList students = {studentData}
      onUpdateStudent = {updateStudentData}
      onDeleteAllStudents = {deleteAllStudents}
      ></StudentList>

      <NewStudentForm></NewStudentForm>
    </main>
  );
};

export default App;
