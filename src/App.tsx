// import React from "react"
import './App.css'
import { useState } from "react";
import Table from "./components/studentsTable/index";
import AddStudents from './components/addStudents/index';
function App() {

  interface User {
    id: number;
    name: string;
    email: string;
    gpa:number;
  }

  const [students, setStudents] = useState<User[]>([]);

  return (
   <div>
    <AddStudents students={students} setStudents={setStudents}/>
    <Table students={students} setStudents={setStudents}/>
   </div>
  )
}

export default App
