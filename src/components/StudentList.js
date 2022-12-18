import React from "react";
import PropTypes from "prop-types";
import "./StudentList.css";
import Student from "./Student";


const StudentList = (props) => {
    const onDelete = () => {
        props.onDeleteAllStudents();
    };
    const studentComponents = props.students.map((student, index) => {
        return (
            <li key={index}>
                <Student
                    id={student.id}
                    name={student.nameData}
                    email={student.emailData}
                    isPresent={student.isPresentData}
                    onUpdate = {props.onUpdateStudent}
                    
                ></Student>
            </li>
        
        );
    });


  return (
      <section>
        <button onClick = {onDelete}>Delete all students!</button>
          <h2>Student List</h2>
          <ul>
              {studentComponents}
          </ul>
      </section>
  );
};

StudentList.propTypes = {
    students: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        nameData: PropTypes.string.isRequired,
        emailData: PropTypes.string.isRequired,
        isPresentData: PropTypes.bool,
        
    })),
    onUpdateStudent: PropTypes.func.isRequired,
    onDeleteAllStudents: PropTypes.func.isRequired
};

export default StudentList;
