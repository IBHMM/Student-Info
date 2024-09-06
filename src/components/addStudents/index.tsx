import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
  id: number;
  name: string;
  email: string;
  gpa: number;
}

interface AddStudentsProps {
  students: User[];
  setStudents: React.Dispatch<React.SetStateAction<User[]>>;
}

function AddStudents({ students, setStudents }: AddStudentsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gpa, setGpa] = useState<number | ''>('');

  const addUser = () => {
    if (name === '' || email === '' || gpa === '') {
      alert('You must add all data');
      return;
    }
    const newUser: User = {
      id: students.length + 1,
      name: name,
      email: email,
      gpa: Number(gpa),
    };

    setStudents([...students, newUser]);
    setName('');
    setEmail('');
    setGpa('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Student</h2>
      <form className="p-4 border rounded shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gpa" className="form-label">GPA:</label>
          <input
            type="number"
            id="gpa"
            className="form-control"
            value={gpa}
            onChange={(e) => setGpa(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudents;
