import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
  id: number;
  name: string;
  email: string;
  gpa: number;
}

interface TableProps {
  students: User[];
  setStudents: React.Dispatch<React.SetStateAction<User[]>>;
}

function Table({ students, setStudents }: TableProps) {
  const [search, setSearch] = useState('');

  const handleDelete = (id: number) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Search Section */}
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <h2 className="text-center">Student List</h2>
        <input
          type="text"
          className="form-control w-50"
          id="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name..."
        />
      </div>

      {/* Table Section */}
      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gpa}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
